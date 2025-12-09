import React from "react";
import BackHome from "../../components/BackHome";

export default function MemberDonations() {
  return (
    <>
      <BackHome />

      <div className="max-w-3xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-bold text-[#9B1C6C]">My Donations</h1>

        <div className="mt-6 bg-gray-100 p-6 rounded-xl">
          <p className="text-gray-700">Donation history will be displayed here.</p>
        </div>
      </div>
    </>
  );
}
