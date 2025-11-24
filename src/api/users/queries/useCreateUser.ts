import { type UseMutationOptions, useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "@/api/query-keys";
import type { User } from "@/types";
import { usersClient } from "../client";

interface CreateUserParams {
  name: string;
  email: string;
}

type UseCreateUserOptions = Omit<UseMutationOptions<User, Error, CreateUserParams>, "mutationFn">;

export const useCreateUser = (options?: UseCreateUserOptions) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ name, email }: CreateUserParams) => usersClient.createUser(name, email),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.users.all });
    },
    ...options,
  });
};
