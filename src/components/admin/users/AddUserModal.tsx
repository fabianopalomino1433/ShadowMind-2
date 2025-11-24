import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { useCreateUser } from "@/api/users/queries";
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

interface AddUserModalProps {
  show: boolean;
  onClose: () => void;
  onSave: () => void;
}

export const AddUserModal = ({ show, onClose, onSave }: AddUserModalProps) => {
  const { t } = useTranslation("translation");
  const createUserMutation = useCreateUser({
    onSuccess: () => {
      toast.success("User created successfully");
      onSave();
    },
    onError: (error) => {
      toast.error(`Failed to create user: ${error.message}`);
    },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    createUserMutation.mutate({ name, email });
  };

  return (
    <Dialog open={show} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t("Add User")}</DialogTitle>
          <DialogDescription>{t("Enter the details of the new user.")}</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                {t("Name")}
              </Label>
              <Input id="name" name="name" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                {t("Email")}
              </Label>
              <Input id="email" name="email" type="email" className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" disabled={createUserMutation.isPending}>
              {t("Save")}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
