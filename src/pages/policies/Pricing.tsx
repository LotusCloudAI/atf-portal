import React from "react";

export default function Pricing() {
  return (
    <div className="px-6 py-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-[#1E3A8A]">Pricing & Fees Disclosure</h1>

      <p className="mb-4">
        American Telugu Federation (ATF) is a nonprofit organization. Any fees collected through
        the website are solely for nonprofit activities and community programs.
      </p>

      <h2 className="text-xl font-semibold mt-6">Standard Pricing Structure</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Membership fees — As listed on the membership page.</li>
        <li>Event registration fees — As published for each event.</li>
        <li>Donations — Voluntary and fully tax-deductible where applicable.</li>
        <li>No hidden fees, surcharges, or commercial sales.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">Payment Processing</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Payments are securely processed through Wells Fargo / Authorize.net.</li>
        <li>ATF does not store credit card numbers.</li>
        <li>Receipts are issued immediately upon payment.</li>
      </ul>

      <p>
        For any pricing questions, call ATF at 972-268-5007 or email the ATF Executive Team.
      </p>
    </div>
  );
}
