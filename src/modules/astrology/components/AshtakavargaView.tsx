import React from 'react';
import { TEXT_DB, SANSKRIT_PLANETS } from '../data/translations';

interface Props {
    ashtaka: any[];
    sarvashtaka: number[];
    lang: 'en' | 'te';
}

const AshtakavargaView: React.FC<Props> = ({ ashtaka, sarvashtaka, lang }) => {
    const t = TEXT_DB.common[lang];
    const tm = TEXT_DB.menu[lang];

    return (
        <div className="bg-white p-6 rounded border border-gray-300 shadow-sm animate-fade-in">
            <h3 className="font-bold text-[#1E3A8A] text-lg mb-4 text-center">{tm.m_ashtaka}</h3>
            <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse border border-gray-300">
                    <thead><tr className="bg-blue-800 text-white"><th className="p-2 border">{t.sr}</th><th className="p-2 border">{t.moon_rasi}</th>{["1","2","3","4","5","6","7","8","9","10","11","12"].map(r => <th key={r} className="p-2 border">{r}</th>)}<th className="p-2 border bg-yellow-100 text-black">{t.total}</th></tr></thead>
                    <tbody>
                        {ashtaka.map((row, idx) => (
                            <tr key={idx} className="text-center hover:bg-gray-50"><td className="p-2 border bg-yellow-50 font-bold">{idx}</td><td className="p-2 border bg-yellow-50 font-bold text-left">{SANSKRIT_PLANETS[row.planet] || row.planet}</td>{row.scores.map((s:number, i:number) => <td key={i} className="p-2 border">{s}</td>)}<td className="p-2 border bg-yellow-50 font-bold">{row.total}</td></tr>
                        ))}
                        <tr className="bg-gray-100 font-bold"><td className="p-2 border"></td><td className="p-2 border text-left">Totals</td>{sarvashtaka.map((s, i) => <td key={i} className="p-2 border">{s}</td>)}<td className="p-2 border">337</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AshtakavargaView;