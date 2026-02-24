import { useEffect, useState } from "react";
import { fetchFromEngine } from "../api/astroClient";

export default function usePanchangam(date) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        const result = await fetchFromEngine(`/panchangam?date=${date}`);
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [date]);

  return { data, loading, error };
}