// src/pages/membership/MembershipPlans.tsx

import React from "react";
import BackHome from "../../components/BackHome";
import { MEMBERSHIP_PLANS } from "./membershipData";
import { Link } from "react-router-dom";

export default function MembershipPlans() {
  return (
    <>
      <BackHome />

      <div className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-[#1E3A8A] mb-6">
          ATF Membership Plans
        </h1>

        <p className="text-gray-700 mb-8">
          Choose a membership plan that best suits you or your family.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MEMBERSHIP_PLANS.map((plan) => (
            <div
              key={plan.id}
              className="border rounded-2xl shadow hover:shadow-lg transition bg-white p-6 flex flex-col"
            >
              <h2 className="text-xl font-bold text-[#B91C1C] mb-2">
                {plan.title}
              </h2>

              <p className="text-3xl font-semibold text-[#1E3A8A] mb-4">
                ${plan.price}
                <span className="text-sm text-gray-500 ml-1">
                  {plan.type === "lifetime" ||
                  plan.type === "lifetime-family"
                    ? "one-time"
                    : "/year"}
                </span>
              </p>

              <ul className="text-gray-700 space-y-2 mb-4">
                {Array.isArray(plan.description) ? (
                  plan.description.map((line, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-[#1E3A8A] font-bold mr-2">•</span>
                      {line}
                    </li>
                  ))
                ) : (
                  <li className="flex items-start">
                    <span className="text-[#1E3A8A] font-bold mr-2">•</span>
                    {plan.description}
                  </li>
                )}
              </ul>

              <Link
                to={`/membership/join/${plan.id}`}
                className="mt-auto text-center bg-[#1E3A8A] text-white px-4 py-2 rounded-xl hover:bg-[#0b215c]"
              >
                {plan.buttonLabel}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}