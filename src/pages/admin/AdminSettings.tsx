import React from "react";
import BackHome from "../../components/BackHome";

export default function AdminSettings() {
  return (
    <>
      <BackHome />

      <div className="max-w-4xl mx-auto px-6 py-10">

        <h1 className="text-2xl font-bold text-[#9B1C6C]">Admin Settings</h1>
        <p className="text-gray-700 mt-2">
          Update organizational preferences and configuration.
        </p>

        <div className="mt-6 p-4 bg-gray-100 rounded-xl">
          <p className="text-gray-700">Admin settings UI will appear here.</p>
        </div>

      </div>
    </>
  );
}
