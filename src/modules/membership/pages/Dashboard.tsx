import React from "react";
import BackHome from "../../../components/BackHome";
import { Link } from "react-router-dom";

export default function MemberDashboard() {
  return (
    <>
      <BackHome />

      <div className="max-w-5xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-[#1E3A8A]">Member Dashboard</h1>
        <p className="text-gray-700 mt-2">
          Welcome to your ATF Member Portal. Access upcoming events, donations, and profile.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">

          <Link
            to="/member/events"
            className="p-6 rounded-xl shadow bg-white hover:bg-gray-100"
          >
            <h2 className="text-xl font-semibold text-[#B91C1C]">My Events</h2>
            <p className="text-gray-700 text-sm mt-2">
              View registered events.
            </p>
          </Link>

          <Link
            to="/member/profile"
            className="p-6 rounded-xl shadow bg-white hover:bg-gray-100"
          >
            <h2 className="text-xl font-semibold text-[#1E3A8A]">My Profile</h2>
            <p className="text-gray-700 text-sm mt-2">
              Update member details.
            </p>
          </Link>

          <Link
            to="/member/donations"
            className="p-6 rounded-xl shadow bg-white hover:bg-gray-100"
          >
            <h2 className="text-xl font-semibold text-[#9B1C6C]">My Donations</h2>
            <p className="text-gray-700 text-sm mt-2">
              View your contribution history.
            </p>
          </Link>

        </div>
      </div>
    </>
  );
}
