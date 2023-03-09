import { useMutation, useQueryClient } from "@tanstack/react-query";

import axios from "axios";

export default function useCreateArgument() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (values) => axios.post("/api/arguments/create", values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["argumentsData"] });
    },
  });
}
