import { useMutation } from "@tanstack/react-query";
import type { CorporateRequest } from "../backend.d";
import { useActor } from "./useActor";

export function useSubmitRequest() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (request: CorporateRequest) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitRequest(request);
    },
  });
}
