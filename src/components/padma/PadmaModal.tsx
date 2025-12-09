import React from "react";
import { Link } from "react-router-dom";

export default function PadmaModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 p-8 rounded-xl max-w-lg w-full relative">

        <button className="absolute top-2 right-3 text-xl" onClick={onClose}>
          ✕
        </button>

        <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">
          PADMA — Autonomous AI Assistant
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-4">
          PADMA is a fully autonomous AI agent built by Lotus Cloud.
          It performs operations end-to-end without human intervention:
        </p>

        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>Intelligent search & knowledge retrieval</li>
          <li>Member support & interactive guidance</li>
          <li>Automated administration workflows</li>
          <li>Event & membership processing</li>
          <li>AI governance insights & reporting</li>
        </ul>

        <Link
          to="/padma"
          className="mt-6 block bg-[#1E3A8A] text-white text-center py-3 rounded-xl hover:bg-[#0b2458]"
        >
          Start Using PADMA →
        </Link>

      </div>
    </div>
  );
}
