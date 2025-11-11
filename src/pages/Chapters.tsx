import React from "react";

export default function Chapters() {
  const chapters = [
    { name: "Dallas TX Chapter", lead: "Ravi Kumar", contact: "info@atf-dallas.org" },
    { name: "Houston TX Chapter", lead: "Srinivas Rao", contact: "houston@atf-usa.org" },
    { name: "Chicago IL Chapter", lead: "Meena Patel", contact: "chicago@atf-usa.org" },
    { name: "New Jersey Chapter", lead: "Anil Reddy", contact: "nj@atf-usa.org" },
  ];

  return (
    <div className="min-h-screen bg-white px-6 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">ATF Chapters Across USA</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {chapters.map((c) => (
          <div key={c.name} className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-1">{c.name}</h2>
            <p className="text-sm text-gray-600 mb-1">Lead: {c.lead}</p>
            <p className="text-sm text-gray-600">{c.contact}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

