import React from "react";

export default function Events() {
  const events = [
    { title: "Diwali Celebration 2025", date: "Nov 15 2025", location: "Dallas TX" },
    { title: "Youth Leadership Summit", date: "Dec 20 2025", location: "Houston TX" },
    { title: "ATF Cultural Fest 2026", date: "Jan 10 2026", location: "New Jersey" },
  ];

  return (
    <div className="min-h-screen bg-white px-6 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">Upcoming ATF Events</h1>
      <div className="space-y-4 max-w-3xl mx-auto">
        {events.map((e) => (
          <div
            key={e.title}
            className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold mb-1">{e.title}</h2>
            <p className="text-sm text-gray-600">{e.date}</p>
            <p className="text-sm text-gray-600">{e.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

