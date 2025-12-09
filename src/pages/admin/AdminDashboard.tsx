import React from "react";
import BackHome from "../../components/BackHome";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <>
      <BackHome />

      <div className="max-w-5xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-[#1E3A8A]">Admin Portal</h1>
        <p className="text-gray-700 mt-2">
          Welcome to the ATF Admin Panel. Manage events, members, and settings.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">

          <Link
            to="/admin/events"
            className="p-6 rounded-xl shadow bg-white hover:bg-gray-100"
          >
            <h2 className="text-xl font-semibold text-[#B91C1C]">
              Manage Events
            </h2>
            <p className="text-gray-700 text-sm mt-2">
              Create, edit, and publish ATF events.
            </p>
          </Link>

          <Link
            to="/admin/members"
            className="p-6 rounded-xl shadow bg-white hover:bg-gray-100"
          >
            <h2 className="text-xl font-semibold text-[#1E3A8A]">
              Members Directory
            </h2>
            <p className="text-gray-700 text-sm mt-2">
              View and manage registered members.
            </p>
          </Link>

          <Link
            to="/admin/settings"
            className="p-6 rounded-xl shadow bg-white hover:bg-gray-100"
          >
            <h2 className="text-xl font-semibold text-[#9B1C6C]">
              Settings
            </h2>
            <p className="text-gray-700 text-sm mt-2">
              Update organizational settings.
            </p>
          </Link>

        </div>
      </div>
    </>
  );
}
