import React from 'react';

interface Planet {
  name: string;
  rashi: number; // 0-11 (0=Aries)
}

interface ChartProps {
  planets: Planet[];
}

const NorthIndianChart: React.FC<ChartProps> = ({ planets }) => {
  // Find Lagna Rashi to rotate chart (North chart is fixed houses, rotating signs)
  const lagna = planets.find(p => p.name.includes('Lagna'));
  const lagnaRashi = lagna ? lagna.rashi : 0;

  // House Positions (Diamond Coordinates)
  const houses = [
    { x: 200, y: 80, id: 1 },   // H1 (Top Middle)
    { x: 100, y: 30, id: 2 },   // H2 (Top Left)
    { x: 40, y: 80, id: 3 },    // H3 (Left Top)
    { x: 100, y: 200, id: 4 },  // H4 (Middle Left)
    { x: 40, y: 320, id: 5 },   // H5 (Left Bottom)
    { x: 100, y: 370, id: 6 },  // H6 (Bottom Left)
    { x: 200, y: 320, id: 7 },  // H7 (Bottom Middle)
    { x: 300, y: 370, id: 8 },  // H8 (Bottom Right)
    { x: 360, y: 320, id: 9 },  // H9 (Right Bottom)
    { x: 300, y: 200, id: 10 }, // H10 (Middle Right)
    { x: 360, y: 80, id: 11 },  // H11 (Right Top)
    { x: 300, y: 30, id: 12 },  // H12 (Top Right)
  ];

  const size = 400;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="bg-white border shadow-sm">
      {/* BORDERS */}
      <rect x="0" y="0" width={size} height={size} fill="none" stroke="#800000" strokeWidth="2" />
      
      {/* DIAMOND LINES */}
      <line x1="0" y1="0" x2={size} y2={size} stroke="#800000" strokeWidth="1" />
      <line x1={size} y1="0" x2="0" y2={size} stroke="#800000" strokeWidth="1" />
      <line x1="0" y1={size/2} x2={size/2} y2={0} stroke="#800000" strokeWidth="1" />
      <line x1={size/2} y1={0} x2={size} y2={size/2} stroke="#800000" strokeWidth="1" />
      <line x1={size} y1={size/2} x2={size/2} y2={size} stroke="#800000" strokeWidth="1" />
      <line x1={size/2} y1={size} x2="0" y2={size/2} stroke="#800000" strokeWidth="1" />

      {/* PLANETS & SIGNS */}
      {houses.map((h, i) => {
        // Calculate Sign Number for this House (1-based)
        // House 1 = Lagna Rashi + 1. House 2 = Lagna + 2...
        const signNum = ((lagnaRashi + i) % 12) + 1;
        
        // Find planets in this sign (using 0-based index)
        const occupants = planets.filter(p => p.rashi === (signNum - 1));

        return (
          <g key={i}>
            {/* Sign Number */}
            <text x={h.x} y={h.y - 10} textAnchor="middle" fill="#ccc" fontSize="14" fontWeight="bold">
              {signNum}
            </text>
            {/* Planets */}
            {occupants.map((p, idx) => (
              <text key={idx} x={h.x} y={h.y + 5 + (idx * 12)} textAnchor="middle" fill={p.name.includes('Lagna') ? 'red' : 'blue'} fontSize="10" fontWeight="bold">
                {p.name}
              </text>
            ))}
          </g>
        );
      })}
    </svg>
  );
};

export default NorthIndianChart;