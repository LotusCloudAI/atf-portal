import React from "react";
import BackHome from "../../components/BackHome";

export default function MemberProfile() {
  return (
    <>
      <BackHome />

      <div className="max-w-3xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-bold text-[#1E3A8A]">My Profile</h1>

        <div className="mt-6 bg-gray-100 p-6 rounded-xl">
          <p className="text-gray-700">Profile fields UI will go here.</p>
        </div>
      </div>
    </>
  );
}
