import React from "react";
import BackHome from "../components/BackHome";
import { Link } from "react-router-dom";

export default function Membership() {
  return (
    <>
      <BackHome />

      <div className="max-w-3xl mx-auto px-6 py-10">
        
        <h1 className="text-3xl font-bold text-[#1E3A8A] mb-6">
          ATF Membership
        </h1>

        <p className="text-gray-700 mb-4">
          Become a valued member of the American Telugu Federation. Membership
          provides access to cultural programs, youth initiatives, community
          support, and leadership opportunities.
        </p>

        <h2 className="text-xl font-semibold text-[#B91C1C] mt-6 mb-2">
          Benefits of Membership
        </h2>

        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Access to member-only cultural events</li>
          <li>Community support and assistance programs</li>
          <li>Participation in ATF youth & cultural initiatives</li>
          <li>Volunteer and leadership opportunities</li>
        </ul>

        <div className="mt-8">
          <Link
            to="/membership/plans"
            className="px-6 py-3 bg-[#1E3A8A] text-white rounded-xl shadow hover:bg-[#0b215c]"
          >
            View Membership Plans
          </Link>
        </div>

      </div>
    </>
  );
}
