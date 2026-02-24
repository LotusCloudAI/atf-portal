const BASE_URL = import.meta.env.VITE_ASTRO_ENGINE_URL;

export async function fetchFromEngine(endpoint, options = {}) {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`Engine Error: ${response.status}`);
  }

  return response.json();
}