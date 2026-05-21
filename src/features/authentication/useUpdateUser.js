import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCurrentUser } from "../../services/apiAuth";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: (result) => {
      toast.success('User account successfully updated');
      const updatedUser = result?.user ?? result;
      queryClient.setQueryData(['user'], updatedUser);
    },
    onError: err => {
      toast.error(err.message);
    },
  });

  return { isUpdating, updateUser };
}
