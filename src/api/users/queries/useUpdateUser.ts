import { type UseMutationOptions, useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "@/api/query-keys";
import type { User } from "@/types";
import { usersClient } from "../client";

interface UpdateUserParams {
  id: string;
  name: string;
  email: string;
}

type UseUpdateUserOptions = Omit<UseMutationOptions<User, Error, UpdateUserParams>, "mutationFn">;

export const useUpdateUser = (options?: UseUpdateUserOptions) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, name, email }: UpdateUserParams) => usersClient.updateUser(id, name, email),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.users.all });
    },
    ...options,
  });
};
