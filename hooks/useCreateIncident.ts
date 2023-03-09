import { useMutation, useQueryClient } from "@tanstack/react-query";

import axios from "axios";

export default function useCreateIncident() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (values) => axios.post("/api/incidents/create", values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["incidentsData"] });
    },
  });
}
