import { useEffect, useState } from "react";
import { getPanchangam } from "../services/astrologyService";

interface PanchangamData {
  weekday: string;
  tithi: string;
  nakshatra: string;
  yoga: string;
  karana: string;
  sunrise: string;
  sunset: string;
  rahu_kalam?: string;
  yamagandam?: string;
  gulika_kalam?: string;
}

export default function PanchangamWidget() {
  const [data, setData] = useState<PanchangamData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const today = new Date().toISOString().split("T")[0];

        const response = await getPanchangam({
          date: today,
          latitude: "17.3850",
          longitude: "78.4867",
        });

        setData(response);
      } catch (err) {
        console.error(err);
        setError("Unable to load Panchangam");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 mt-10 border border-gray-100">
      <h2 className="text-2xl font-semibold text-red-700 mb-4">
        Today’s Panchangam
      </h2>

      {loading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {data && (
        <div className="grid grid-cols-2 gap-4 text-gray-700">
          <div><strong>Weekday:</strong> {data.weekday}</div>
          <div><strong>Tithi:</strong> {data.tithi}</div>
          <div><strong>Nakshatra:</strong> {data.nakshatra}</div>
          <div><strong>Yoga:</strong> {data.yoga}</div>
          <div><strong>Karana:</strong> {data.karana}</div>
          <div><strong>Sunrise:</strong> {data.sunrise}</div>
          <div><strong>Sunset:</strong> {data.sunset}</div>
          <div><strong>Rahu Kalam:</strong> {data.rahu_kalam || "-"}</div>
          <div><strong>Yamagandam:</strong> {data.yamagandam || "-"}</div>
          <div><strong>Gulika Kalam:</strong> {data.gulika_kalam || "-"}</div>
        </div>
      )}
    </div>
  );
}
