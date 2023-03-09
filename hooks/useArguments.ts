"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function useArguments() {
  return useQuery(["argumentsData"], () => axios.get("/api/arguments/get"));
}
