import React, { useState } from 'react';
import { US_STATES } from "../data/usStates";

const ChaptersList = () => {
  const [selectedState, setSelectedState] = useState("");

  // Filter logic: If a state is selected, show only that one. Otherwise, show all.
  const filteredStates = US_STATES.filter((state) =>
    selectedState ? state.code === selectedState : true
  );

  return (
    <div className="p-4">
      {/* State Filter Dropdown */}
      <select
        className="border p-2 mb-6 rounded bg-white shadow-sm"
        onChange={(e) => setSelectedState(e.target.value)}
        value={selectedState}
      >
        <option value="">All States</option>
        {US_STATES.map((state) => (
          <option key={state.code} value={state.code}>
            {state.name}
          </option>
        ))}
      </select>

      {/* Chapters Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredStates.map((state) => (
          <div key={state.code} className="border p-4 rounded shadow hover:bg-gray-50 transition-colors">
            <h3 className="font-semibold">{state.name}</h3>
            <p className="text-sm text-gray-500">Chapter Coming Soon</p>
          </div>
        ))}
      </div>
      
      {/* Empty State handling */}
      {filteredStates.length === 0 && (
        <p className="text-gray-500 mt-4">No chapters found for this selection.</p>
      )}
    </div>
  );
};

export default ChaptersList;