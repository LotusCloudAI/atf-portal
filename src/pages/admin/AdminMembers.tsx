import React from "react";
import BackHome from "../../components/BackHome";

export default function AdminMembers() {
  return (
    <>
      <BackHome />

      <div className="max-w-4xl mx-auto px-6 py-10">

        <h1 className="text-2xl font-bold text-[#1E3A8A]">Members Directory</h1>
        <p className="text-gray-700 mt-2">
          View and manage registered ATF members.
        </p>

        <div className="mt-6 bg-white shadow p-4 rounded-xl">
          <p className="text-gray-700">Member search + list UI coming soon.</p>
        </div>

      </div>
    </>
  );
}
