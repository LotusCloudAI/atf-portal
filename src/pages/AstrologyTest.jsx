import React from "react";
import usePanchangam from "../hooks/usePanchangam";

export default function AstrologyTest() {
  const today = new Date().toISOString().split("T")[0];
  const { data, loading, error } = usePanchangam(today);

  if (loading) return <div className="p-6">Loading Panchangam...</div>;
  if (error) return <div className="p-6 text-red-600">{error}</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-red-700 mb-4">
        Today Panchangam
      </h1>
      <pre className="bg-gray-100 p-4 rounded overflow-auto">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}