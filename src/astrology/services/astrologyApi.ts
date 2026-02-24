import { BirthDetails } from "../types";

const API_BASE = "http://127.0.0.1:8000";

export const calculateChart = async (details: BirthDetails) => {
  const response = await fetch(`${API_BASE}/calculate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(details),
  });

  if (!response.ok) {
    throw new Error("Failed to calculate chart");
  }

  return response.json();
};