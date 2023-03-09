"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function useIncidents() {
  return useQuery(["incidentsData"], () => axios.get("/api/incidents/get"), {
    cacheTime: 5000,
  });
}
