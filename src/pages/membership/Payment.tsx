// src/pages/membership/Payment.tsx

import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import BackHome from "../../components/BackHome";
import { MEMBERSHIP_PLANS } from "./membershipData";

export default function Payment() {
  const { planId } = useParams();
  const navigate = useNavigate();
  const { state } = useLocation(); // form data from previous step

  const selectedPlan = MEMBERSHIP_PLANS.find((p) => p.id === planId);

  if (!selectedPlan) {
    return (
      <div className="p-6">
        <BackHome />
        <p className="text-red-600">Invalid membership plan.</p>
      </div>
    );
  }

  if (!state) {
    return (
      <div className="p-6">
        <BackHome />
        <p className="text-red-600">Missing member information.</p>
      </div>
    );
  }

  const handlePay = () => {
    alert(
      "Wells Fargo payment gateway integration will be added.\nFor now, this is a placeholder."
    );
  };

  return (
    <>
      <BackHome />

      <div className="max-w-3xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-[#1E3A8A] mb-4">
          Membership Payment
        </h1>

        <div className="bg-white shadow rounded-xl p-6 border">
          <h2 className="text-xl font-semibold text-[#B91C1C] mb-3">
            {selectedPlan.title}
          </h2>

          <p className="text-3xl font-bold text-[#1E3A8A] mb-4">
            ${selectedPlan.price}
            <span className="text-sm ml-2 text-gray-600">
              {selectedPlan.type.includes("lifetime") ? "(one-time)" : "/year"}
            </span>
          </p>

          <h3 className="font-semibold text-lg mb-2">Member Details</h3>

          <div className="text-gray-700 space-y-1 mb-6">
            <p><b>Name:</b> {state.fullName}</p>
            <p><b>Email:</b> {state.email}</p>
            <p><b>Phone:</b> {state.phone}</p>
            <p><b>Address:</b> {state.address}</p>
            <p><b>Chapter:</b> {state.chapter}</p>

            {state.familyMembers && (
              <p><b>Family Members:</b> {state.familyMembers}</p>
            )}
          </div>

          {/* Wells Fargo Compliance Message */}
          <div className="bg-yellow-100 border-l-4 border-yellow-600 p-4 text-gray-800 mb-6">
            ATF uses a secure Wells Fargo Merchant Service for payment
            processing. Your information is encrypted and protected.
          </div>

          <button
            onClick={handlePay}
            className="w-full bg-[#B91C1C] text-white py-3 rounded-xl font-semibold hover:bg-[#8c1620]"
          >
            Proceed to Secure Payment
          </button>
        </div>
      </div>
    </>
  );
}
