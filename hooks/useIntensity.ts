"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function useIntensity() {
  return useQuery(["intensityData"], () => axios.get("/api/intensity/get"), {
    cacheTime: 5000,
  });
}
