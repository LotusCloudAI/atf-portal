import React from "react";

export default function Delivery() {
  return (
    <div className="px-6 py-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-[#1E3A8A]">Delivery / Shipping Policy</h1>

      <p className="mb-4">
        American Telugu Federation (ATF) does not ship physical goods. All services offered—
        including memberships, donations, event registrations, cultural programs, and community
        services—are delivered electronically or onsite during events.
      </p>

      <h2 className="text-xl font-semibold mt-6">Service Delivery</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Membership access is activated immediately after successful payment.</li>
        <li>Event registrations are confirmed via email.</li>
        <li>Donation receipts are emailed automatically.</li>
        <li>No physical items are shipped.</li>
      </ul>

      <p>If you experience issues receiving digital confirmations, please contact us at 972-268-5007.</p>
    </div>
  );
}
