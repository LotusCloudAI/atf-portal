import React, { useState } from 'react';
import { TEXT_DB } from '../data/translations';

interface Props {
    lang: 'en' | 'te';
    userName: string;
}

const MarriageView: React.FC<Props> = ({ lang, userName }) => {
    const t = TEXT_DB.common[lang];
    const tr = TEXT_DB.marriage[lang];
    const [matchReport, setMatchReport] = useState<any>(null);
    const [partnerDetails, setPartnerDetails] = useState({ name: '' });

    const handlePartnerMatch = () => {
        setMatchReport({
            score: 28, rating: lang === 'en' ? "Good" : "మంచిది",
            kootas: [ { name: "Varna", score: 1, max: 1 }, { name: "Nadi", score: 3.5, max: 8 } ],
            dosha: { kuja: lang === 'en' ? "Mild (Cancelled)" : "సాధారణ", bhakoot: "Absent", nadi: "Exception" }
        });
    };

    if (!matchReport) {
        return (
            <div className="bg-white p-6 rounded border border-gray-300 shadow-sm">
                <div className="border-b border-gray-200 pb-4 mb-6"><h2 className="text-xl font-bold text-[#A31F34] uppercase">{tr.title}</h2><p className="text-sm text-gray-500 mt-1">{tr.sub} {userName}</p></div>
                <div className="bg-gray-50 border border-gray-200 p-6 rounded max-w-lg mx-auto">
                    <h4 className="font-bold text-[#1E3A8A] mb-4 text-center border-b pb-2">{t.enter_birth_details} ({tr.p_name})</h4>
                    <div className="space-y-4">
                        <div><label className="block text-xs font-bold text-gray-700 mb-1">{tr.p_name}</label><input type="text" className="w-full border p-2 rounded text-sm" onChange={(e) => setPartnerDetails({...partnerDetails, name: e.target.value})} /></div>
                        <button onClick={handlePartnerMatch} className="w-full bg-[#A31F34] text-white py-3 rounded font-bold hover:bg-red-800 transition mt-2 shadow-sm">{tr.calc}</button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white p-6 rounded border border-gray-300 shadow-sm space-y-8 animate-fade-in">
            <div className="bg-blue-50 p-4 rounded text-center border border-blue-200 mb-4">
                <span className="text-sm text-gray-600">{tr.guna}</span>
                <div className="text-3xl font-bold text-[#1E3A8A] my-1">{matchReport.score} / 36</div>
                <span className="text-xs font-bold px-2 py-1 rounded bg-green-200 text-green-800">{matchReport.rating} {tr.rating}</span>
            </div>
            <div><h4 className="font-bold text-lg border-b pb-2 mb-2">{tr.ashta_title}</h4><p className="text-sm">{tr.ashta_text}</p></div>
            <div><h4 className="font-bold text-lg border-b pb-2 mb-2">{tr.dosha_title}</h4><p className="text-sm"><strong>{tr.kuja}:</strong> {matchReport.dosha.kuja}</p></div>
            <button onClick={() => setMatchReport(null)} className="text-blue-600 underline text-sm mt-4">{tr.check_new}</button>
        </div>
    );
};

export default MarriageView;