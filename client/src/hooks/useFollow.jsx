import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

const useFollow = () => {
  const queryClient = useQueryClient();

  const { mutate: follow, isPending } = useMutation({
    mutationFn: async (userId) => {
      try {
        const res = await fetch(`/api/v1/users/follow/${userId}`, {
          method: "POST",
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || "Something Went wrong!");
        }

        return data;
      } catch (error) {
        throw new Error(error.message);
      }
    },

    onSuccess: () => {
      Promise.all([
        queryClient.invalidateQueries({ queryKey: ["suggestedUsers"] }),
        toast.success("User Followed Success!"),
        queryClient.invalidateQueries({ queryKey: ["authUser"] }),
      ]);

      // Promise all used so that they both can run parallely
    },
    onError: (e) => {
      toast.error(e.message);
    },
  });

  return { follow, isPending };
};

export default useFollow;
