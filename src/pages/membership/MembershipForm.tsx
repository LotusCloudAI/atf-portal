// src/pages/membership/MembershipForm.tsx

import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BackHome from "../../components/BackHome";
import { MEMBERSHIP_PLANS } from "./membershipData";

export default function MembershipForm() {
  const { planId } = useParams();
  const navigate = useNavigate();

  const selectedPlan = MEMBERSHIP_PLANS.find((p) => p.id === planId);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    chapter: "",
    familyMembers: "",
  });

  if (!selectedPlan) {
    return (
      <div className="p-6">
        <BackHome />
        <p className="text-red-600 font-semibold">
          Invalid membership plan. Please return to membership page.
        </p>
      </div>
    );
  }

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    navigate(`/membership/checkout/${planId}`, { state: form });
  };

  return (
    <>
      <BackHome />

      <div className="max-w-3xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-[#1E3A8A] mb-2">
          Membership Application
        </h1>
        <p className="text-gray-700 mb-6">
          You selected: <b>{selectedPlan.title}</b> (${selectedPlan.price})
        </p>

        <div className="space-y-4">
          <input
            name="fullName"
            placeholder="Full Name"
            className="w-full border px-4 py-2 rounded"
            value={form.fullName}
            onChange={handleChange}
          />

          <input
            name="email"
            placeholder="Email"
            className="w-full border px-4 py-2 rounded"
            value={form.email}
            onChange={handleChange}
          />

          <input
            name="phone"
            placeholder="Phone Number"
            className="w-full border px-4 py-2 rounded"
            value={form.phone}
            onChange={handleChange}
          />

          <input
            name="address"
            placeholder="Address"
            className="w-full border px-4 py-2 rounded"
            value={form.address}
            onChange={handleChange}
          />

          <input
            name="chapter"
            placeholder="ATF Chapter (if known)"
            className="w-full border px-4 py-2 rounded"
            value={form.chapter}
            onChange={handleChange}
          />

          {(selectedPlan.type === "family" ||
            selectedPlan.type === "lifetime-family") && (
            <textarea
              name="familyMembers"
              placeholder="List family members (Name, Age, Relation)"
              className="w-full border px-4 py-2 rounded"
              rows={4}
              value={form.familyMembers}
              onChange={handleChange}
            ></textarea>
          )}

          <button
            onClick={handleNext}
            className="w-full bg-[#1E3A8A] text-white py-3 rounded-xl font-semibold hover:bg-[#0b215c]"
          >
            Continue to Payment
          </button>
        </div>
      </div>
    </>
  );
}
