import React from "react";

export default function Products() {
  return (
    <div className="px-6 py-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-[#1E3A8A]">Products & Services Overview</h1>

      <p className="mb-4">
        American Telugu Federation (ATF) operates as a nonprofit cultural organization. ATF does 
        not sell physical goods. All offerings fall under nonprofit permitted activities.
      </p>

      <h2 className="text-xl font-semibold mt-6">Our Services Include:</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Membership enrollment</li>
        <li>Cultural programs & community events</li>
        <li>Youth development initiatives</li>
        <li>Educational and scholarship programs</li>
        <li>Leadership & community service activities</li>
        <li>Donation and fundraising services</li>
      </ul>

      <p>
        All services are nonprofit in nature and follow IRS 501(c)(3) guidelines and ATF bylaws.
      </p>
    </div>
  );
}
