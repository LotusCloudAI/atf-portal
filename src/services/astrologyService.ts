// ===============================================
// Environment Setup
// ===============================================

const ENV = import.meta.env.VITE_APP_ENV;

const BASE_URL =
  ENV === "development"
    ? import.meta.env.VITE_ASTRO_ENGINE_LOCAL
    : import.meta.env.VITE_ASTRO_ENGINE_PROD;


// ===============================================
// Generic API Helper
// ===============================================

async function apiRequest(endpoint: string, params: Record<string, any>) {
  const query = new URLSearchParams(params).toString();

  const response = await fetch(`${BASE_URL}/api/v1/${endpoint}?${query}`);

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `API Error (${response.status}): ${errorText || "Unknown error"}`
    );
  }

  return response.json();
}


// ===============================================
// PLANETS
// ===============================================

export function getPlanetData(params: {
  date: string;
  time: string;
  latitude: string;
  longitude: string;
  ayanamsa?: string;
}) {
  return apiRequest("planets", params);
}


// ===============================================
// DASHA
// ===============================================

export function getDasaData(params: {
  date: string;
  time: string;
  latitude: string;
  longitude: string;
  ayanamsa?: string;
}) {
  return apiRequest("dasa", params);
}


// ===============================================
// DIVISIONAL CHARTS
// ===============================================

export function getDivisionalChart(params: {
  date: string;
  time: string;
  latitude: string;
  longitude: string;
  ayanamsa?: string;
  division?: number;
}) {
  return apiRequest("divisional", params);
}


// ===============================================
// TRANSITS
// ===============================================

export function getTransitData(params: {
  birth_date: string;
  birth_time: string;
  latitude: string;
  longitude: string;
  transit_date: string;
  transit_time?: string;
  ayanamsa?: string;
}) {
  return apiRequest("transits", params);
}


// ===============================================
// COMBINED PREDICTION
// ===============================================

export function getPrediction(params: {
  birth_date: string;
  birth_time: string;
  latitude: string;
  longitude: string;
  transit_date: string;
  ayanamsa?: string;
}) {
  return apiRequest("predict", params);
}


// ===============================================
// EXPERT PREDICTION (Dr. Dasari Layer)
// ===============================================

export function getExpertPrediction(params: {
  birth_date: string;
  birth_time: string;
  latitude: string;
  longitude: string;
  transit_date: string;
  ayanamsa?: string;
}) {
  return apiRequest("ai-predict", params);
}