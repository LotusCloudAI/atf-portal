import React from 'react';
import SouthIndianChart from './Charts/SouthIndianChart';
import NorthIndianChart from './Charts/NorthIndianChart';
import WesternChart from './Charts/WesternChart'; // <--- NEW IMPORT

interface ChartsViewProps {
  activeTab: string;
  planets: any[];
  lang: 'en' | 'te';
  chartStyle: string; 
  setChartStyle: (style: string) => void;
  selectedChart: any;
  setSelectedChart: (chart: any) => void;
}

const ChartsView: React.FC<ChartsViewProps> = ({ 
  planets, lang, chartStyle, setChartStyle 
}) => {

  const getChartData = (vargaCode: string) => {
    return planets.map(p => ({
      name: p.name.substring(0, 2), 
      rashi: (p.vargas && p.vargas[vargaCode] !== undefined) 
             ? (p.vargas[vargaCode] > 11 ? p.vargas[vargaCode] - 1 : p.vargas[vargaCode]) 
             : (p.rashi > 11 ? p.rashi - 1 : p.rashi), 
      degree: p.degree || 0
    }));
  };

  const d1Data = getChartData('D-1');
  const d9Data = getChartData('D-9');

  // --- LOGIC TO SELECT CHART STYLE ---
  let ChartComponent;
  if (chartStyle === 'north') {
    ChartComponent = NorthIndianChart;
  } else if (chartStyle === 'west') {
    ChartComponent = WesternChart; // <--- Connects West
  } else {
    ChartComponent = SouthIndianChart;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#800000]">
      
      {/* HEADER & TOGGLE */}
      <div className="flex justify-between items-center mb-6 border-b pb-4">
        <h2 className="text-xl font-bold text-[#800000]">
          {lang === 'te' ? 'జాతక చక్రాలు' : 'Vedic Charts'}
        </h2>
        <div className="flex bg-gray-100 p-1 rounded">
          <button onClick={() => setChartStyle('south')} className={`px-3 py-1 text-xs font-bold rounded ${chartStyle === 'south' ? 'bg-white shadow text-[#800000]' : 'text-gray-500'}`}>South</button>
          <button onClick={() => setChartStyle('north')} className={`px-3 py-1 text-xs font-bold rounded ${chartStyle === 'north' ? 'bg-white shadow text-[#800000]' : 'text-gray-500'}`}>North</button>
          <button onClick={() => setChartStyle('west')} className={`px-3 py-1 text-xs font-bold rounded ${chartStyle === 'west' ? 'bg-white shadow text-[#800000]' : 'text-gray-500'}`}>West</button>
        </div>
      </div>

      {/* CHARTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* LEFT: D-1 RASHI */}
        <div className="flex flex-col items-center">
          <h3 className="font-bold text-[#800000] mb-2">{lang === 'te' ? 'రాశి చక్రం (D-1)' : 'Rashi Chakra (D-1)'}</h3>
          <ChartComponent planets={d1Data} />
        </div>

        {/* RIGHT: D-9 NAVAMSA */}
        <div className="flex flex-col items-center">
          <h3 className="font-bold text-[#800000] mb-2">{lang === 'te' ? 'నవాంశ చక్రం (D-9)' : 'Navamsa Chakra (D-9)'}</h3>
          <ChartComponent planets={d9Data} />
        </div>

      </div>

      {/* PLANETARY TABLE */}
      <div className="mt-8">
        <h3 className="font-bold text-[#800000] mb-2">{lang === 'te' ? 'గ్రహ స్థితి' : 'Planetary Positions'}</h3>
        <table className="w-full text-xs text-left border-collapse">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-2">Planet</th>
              <th className="p-2">Rashi</th>
              <th className="p-2">Degree</th>
              <th className="p-2">Nakshatra</th>
            </tr>
          </thead>
          <tbody>
            {planets.map((p, i) => (
              <tr key={i} className="border-b hover:bg-yellow-50">
                <td className="p-2 font-bold text-[#800000]">{p.name}</td>
                <td className="p-2">{p.rashi_name}</td>
                <td className="p-2 font-mono">{p.degree?.toFixed(2)}°</td>
                <td className="p-2">{p.nakshatra} ({p.pada})</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default ChartsView;