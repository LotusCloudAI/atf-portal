import React from 'react';

interface Planet {
  name: string;
  rashi: number; // 0-11
  degree?: number;
}

interface ChartProps {
  planets: Planet[];
}

const WesternChart: React.FC<ChartProps> = ({ planets }) => {
  const radius = 180;
  const center = 200;
  const size = 400;

  // Signs ordered counter-clockwise
  const signs = [
    "Ari", "Tau", "Gem", "Can", "Leo", "Vir", 
    "Lib", "Sco", "Sag", "Cap", "Aq", "Pis"
  ];

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="bg-white border shadow-sm rounded-full">
      {/* Outer Circle */}
      <circle cx={center} cy={center} r={radius} fill="none" stroke="#800000" strokeWidth="2" />
      
      {/* Inner Circle (House Cusp Boundary) */}
      <circle cx={center} cy={center} r={radius - 40} fill="none" stroke="#ccc" strokeWidth="1" />
      
      {/* Center Hub */}
      <circle cx={center} cy={center} r={40} fill="#fdf2f8" stroke="#800000" strokeWidth="1" />
      <text x={center} y={center} textAnchor="middle" dy="5" fontSize="10" fill="#800000" fontWeight="bold">WEST</text>

      {/* Draw 12 Sectors (Houses/Signs) */}
      {signs.map((sign, i) => {
        // Calculate Angle (Standard Western starts Aries at 9 o'clock (180 deg) usually, but we'll do 0 at Top for simplicity of reading)
        // Let's place Aries at 0 degrees (Top) going counter-clockwise? 
        // Actually standard math: 0 is Right. Let's rotate -90 to make 0 Top.
        const angle = (i * 30) - 90; 
        const rad = (angle * Math.PI) / 180;
        
        // Line coordinates
        const x1 = center + (radius - 40) * Math.cos(rad);
        const y1 = center + (radius - 40) * Math.sin(rad);
        const x2 = center + radius * Math.cos(rad);
        const y2 = center + radius * Math.sin(rad);

        // Sign Label Position (Midpoint of sector)
        const textAngle = angle + 15;
        const textRad = (textAngle * Math.PI) / 180;
        const tx = center + (radius - 20) * Math.cos(textRad);
        const ty = center + (radius - 20) * Math.sin(textRad);

        // Find Planets in this Sign
        const occupants = planets.filter(p => p.rashi === i);

        return (
          <g key={i}>
            {/* Divider Line */}
            <line x1={center} y1={center} x2={center + radius * Math.cos(rad)} y2={center + radius * Math.sin(rad)} stroke="#eee" strokeWidth="1" />
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#800000" strokeWidth="1" />
            
            {/* Sign Label */}
            <text x={tx} y={ty} textAnchor="middle" dy="4" fontSize="10" fontWeight="bold" fill="#800000">{sign}</text>

            {/* Planets in this Sector */}
            {occupants.map((p, idx) => {
               // Stack planets radially inward
               const pDist = radius - 60 - (idx * 15);
               const px = center + pDist * Math.cos(textRad);
               const py = center + pDist * Math.sin(textRad);
               
               return (
                 <text 
                   key={idx} 
                   x={px} 
                   y={py} 
                   textAnchor="middle" 
                   fontSize="9" 
                   fill={p.name.includes('Lagna') ? 'red' : 'blue'} 
                   fontWeight="bold"
                 >
                   {p.name.substring(0, 2)}
                 </text>
               );
            })}
          </g>
        );
      })}
    </svg>
  );
};

export default WesternChart;