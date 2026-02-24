import React from "react";
import usePanchangam from "../../hooks/usePanchangam";

export default function PanchangamPage() {
  const today = new Date().toISOString().split("T")[0];
  const { data, loading, error } = usePanchangam(today);

  if (loading) return <div className="p-8">Loading Panchangam...</div>;
  if (error) return <div className="p-8 text-red-600">{error}</div>;

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-[#B91C1C] mb-6">
        Today Panchangam
      </h1>

      <div className="grid grid-cols-2 gap-6 bg-white dark:bg-slate-800 shadow-lg rounded-xl p-6">
        <div>
          <p className="text-gray-500">Tithi</p>
          <p className="text-lg font-semibold">{data.tithi}</p>
        </div>

        <div>
          <p className="text-gray-500">Nakshatra</p>
          <p className="text-lg font-semibold">{data.nakshatra}</p>
        </div>

        <div>
          <p className="text-gray-500">Yoga</p>
          <p className="text-lg font-semibold">{data.yoga}</p>
        </div>

        <div>
          <p className="text-gray-500">Karana</p>
          <p className="text-lg font-semibold">{data.karana}</p>
        </div>

        <div>
          <p className="text-gray-500">Day Lord</p>
          <p className="text-lg font-semibold">{data.day_lord}</p>
        </div>

        <div>
          <p className="text-gray-500">Sunrise</p>
          <p className="text-lg font-semibold">{data.sunrise}</p>
        </div>

        <div>
          <p className="text-gray-500">Sunset</p>
          <p className="text-lg font-semibold">{data.sunset}</p>
        </div>
      </div>
    </div>
  );
}