import React, { useState } from 'react';
import { TEXT_DB } from '../data/translations';

interface Props {
    type: string;
    lang: 'en' | 'te';
    planets: any[];
    dashas: any[];
}

const PredictionPanel: React.FC<Props> = ({ type, lang, planets, dashas }) => {
    const t = TEXT_DB.common[lang];
    const tm = TEXT_DB.menu[lang];
    const tp = TEXT_DB.predictions[lang];
    const [timePredictionType, setTimePredictionType] = useState<'Daily' | 'Weekly' | 'Monthly' | 'Yearly'>('Daily');

    const lagna = planets.find(p => p.id === -1);
    const moon = planets.find(p => p.id === 1);
    
    // @ts-ignore
    const lagnaName = TEXT_DB.rashis[lang][lagna?.rashi_name || ""] || lagna?.rashi_name;
    // @ts-ignore
    const moonName = TEXT_DB.rashis[lang][moon?.rashi_name || ""] || moon?.rashi_name;
    // @ts-ignore
    const dashaLord = TEXT_DB.planets[lang][dashas[0]?.planet] || dashas[0]?.planet;

    // --- TIME BASED (Daily/Weekly...) ---
    if (type === 'predict_time') {
        return (
            <div className="bg-white p-6 rounded border border-gray-300 shadow-sm animate-fade-in">
                <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-4">
                    <h2 className="text-xl font-bold text-[#A31F34] uppercase">{tm.menu_2}</h2>
                    <div className="flex gap-2 text-xs">
                        {['Daily', 'Weekly', 'Monthly', 'Yearly'].map((pt) => (
                            <button key={pt} onClick={() => setTimePredictionType(pt as any)} className={`px-3 py-1 rounded border transition ${timePredictionType === pt ? 'bg-[#1E3A8A] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                                {/* @ts-ignore */}
                                {tp[pt.toLowerCase() + '_title']}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="prose max-w-none text-gray-800 text-sm leading-relaxed">
                    <div>
                        {/* @ts-ignore */}
                        <h3 className="font-bold text-lg mb-2">{tp[timePredictionType.toLowerCase() + '_title']}</h3>
                        {lang === 'te' ? (
                            <p className="mb-4">ప్రస్తుతం చంద్రుడు <strong>{moonName}</strong> రాశిలో సంచరిస్తున్నాడు. మీకు <strong>{dashaLord}</strong> దశ నడుస్తోంది.</p>
                        ) : (
                            <p className="mb-4">Today’s planetary influences are guided primarily by the Moon’s transit in <strong>{moonName}</strong> and the running <strong>{dashaLord}</strong> Vimshottari period.</p>
                        )}
                        <h4 className="font-bold text-[#A31F34] mb-1">{tp.key_themes}:</h4>
                        <ul className="list-disc list-inside mb-4 space-y-1">
                            {/* @ts-ignore */}
                            <li>{tp[timePredictionType.toLowerCase() + '_text_1']}</li>
                        </ul>
                        <h4 className="font-bold text-[#A31F34] mb-1">{tp.guidance}:</h4>
                        {/* @ts-ignore */}
                        <p>{tp[timePredictionType.toLowerCase() + '_text_2']}</p>
                    </div>
                </div>
            </div>
        );
    }

    // --- OTHER TYPES (General, Career, Dasha) ---
    const getPredictionText = () => {
        if (lang === 'te') {
            switch(type) {
                case 'predict_life': return <div className="space-y-4"><p><strong>లగ్న విశ్లేషణ:</strong> మీ లగ్నం <strong>{lagnaName}</strong>. మీరు సహజంగా ధైర్యవంతులు.</p><p><strong>చంద్ర రాశి:</strong> మీ చంద్ర రాశి <strong>{moonName}</strong>.</p></div>;
                case 'predict_career': return <div className="space-y-4"><p><strong>ఉద్యోగం (10వ ఇల్లు):</strong> మీ జాతక రీత్యా, మీరు నాయకత్వ లక్షణాలు కలిగి ఉంటారు.</p><p><strong>దశ ప్రభావం:</strong> ప్రస్తుతం జరుగుతున్న <strong>{dashaLord}</strong> దశ మీ వృత్తిపరమైన అభివృద్ధికి సూచిక.</p></div>;
                case 'dasha': return <div className="space-y-4"><p><strong>ప్రస్తుత మహాదశ:</strong> మీరు ప్రస్తుతం <strong>{dashaLord}</strong> మహాదశలో ఉన్నారు.</p></div>;
                case 'predict_dosha': return <div className="space-y-4"><p><strong>కుజ దోషం:</strong> లగ్నం నుండి కుజుని స్థానం ఆధారంగా విశ్లేషణ. (సాధారణ దోషం).</p></div>;
                default: return <p>Loading...</p>;
            }
        } else {
            switch(type) {
                case 'predict_life': return <div className="space-y-4"><p><strong>Self (Lagna):</strong> {lagnaName} Ascendant indicates a dynamic personality.</p><p><strong>Mind (Moon):</strong> Moon in {moonName} suggests an intuitive nature.</p></div>;
                case 'predict_career': return <div className="space-y-4"><p><strong>Career (10th House):</strong> Analysis of the 10th house from {lagnaName} suggests leadership potential.</p><p><strong>Influence:</strong> {dashaLord} Dasha supports professional growth.</p></div>;
                case 'dasha': return <div className="space-y-4"><p><strong>Current Mahadasha:</strong> <strong>{dashaLord}</strong>.</p></div>;
                case 'predict_dosha': return <div className="space-y-4"><p><strong>Kuja Dosha Analysis:</strong> Mars position relative to {lagnaName} Lagna suggests standard Mars influence.</p></div>;
                default: return <p>Loading...</p>;
            }
        }
    };

    return (
        <div className="bg-white p-6 rounded border border-gray-300 shadow-sm animate-fade-in">
            <div className="border-b border-gray-200 pb-4 mb-4"><h2 className="text-xl font-bold text-[#A31F34] uppercase">Prediction</h2></div>
            <div className="prose max-w-none text-gray-800 text-sm leading-relaxed">{getPredictionText()}</div>
        </div>
    );
};

export default PredictionPanel;