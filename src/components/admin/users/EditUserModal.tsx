import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { useUpdateUser } from "@/api/users/queries";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { User } from "@/types";

interface EditUserModalProps {
  show: boolean;
  selectedUser: User | null;
  onClose: () => void;
  onSave: () => void;
}

export const EditUserModal = ({ show, selectedUser, onClose, onSave }: EditUserModalProps) => {
  const { t } = useTranslation("translation");
  const updateUserMutation = useUpdateUser({
    onSuccess: () => {
      toast.success("User updated successfully");
      onSave();
    },
    onError: (error) => {
      toast.error(`Failed to update user: ${error.message}`);
    },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedUser) return;

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    updateUserMutation.mutate({ id: selectedUser.id, name, email });
  };

  return (
    <Dialog open={show} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t("Edit User")}</DialogTitle>
          <DialogDescription>{t("editUserDescription", "Edit the details of the user.")}</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                {t("Name")}
              </Label>
              <Input id="name" name="name" defaultValue={selectedUser?.name} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                {t("Email")}
              </Label>
              <Input id="email" name="email" type="email" defaultValue={selectedUser?.email} className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" disabled={updateUserMutation.isPending}>
              {t("Save")}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
