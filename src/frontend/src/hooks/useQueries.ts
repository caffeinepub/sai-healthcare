import { useMutation } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useSubmitInquiry() {
  const { actor } = useActor();

  return useMutation({
    mutationFn: async (data: {
      name: string;
      phoneNumber: string;
      email: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      await actor.submitInquiry(
        data.name,
        data.phoneNumber,
        data.email,
        data.message,
      );
    },
  });
}
