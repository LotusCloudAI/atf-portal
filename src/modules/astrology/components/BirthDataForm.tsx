import React, { useState } from 'react';
import { translations } from '../../../utils/translations';

interface BirthDataFormProps {
  onSubmit: (data: any) => void;
  loading?: boolean;
  lang: 'en' | 'te';
}

const BirthDataForm: React.FC<BirthDataFormProps> = ({ onSubmit, loading = false, lang }) => {
  
  const t = (lang === 'te' && translations.te) 
    ? translations.te.birthPage 
    : translations.en.birthPage;

  const [formData, setFormData] = useState({
    name: '',
    gender: 'Male',
    dob: '',
    tob: '',
    country: 'India',
    city: '',
    lat: '', 
    long: '',
    ayanamsa: 'lahiri'
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [locationStatus, setLocationStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isTimeUnknown, setIsTimeUnknown] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCitySearch = async () => {
    if (!searchQuery) return;
    setIsSearching(true);
    setLocationStatus('idle');

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchQuery)}`
      );
      const data = await response.json();

      if (data && data.length > 0) {
        const place = data[0];
        setFormData(prev => ({
          ...prev,
          city: place.name || searchQuery,
          country: place.display_name.split(',').pop()?.trim() || 'India',
          lat: parseFloat(place.lat).toFixed(4),
          long: parseFloat(place.lon).toFixed(4)
        }));
        setLocationStatus('success');
      } else {
        setLocationStatus('error');
      }
    } catch (error) {
      console.error("Search failed:", error);
      setLocationStatus('error');
    } finally {
      setIsSearching(false);
    }
  };

  const handleSubmit = () => {
    console.log("Submit button clicked"); // Debug log

    // 1. Time Validation
    let finalTime = formData.tob;
    if (isTimeUnknown) {
        finalTime = "12:00"; // Default noon for unknown time
    } else if (!formData.tob) {
        alert("Please enter Time of Birth or select 'Unknown'.");
        return;
    }

    // 2. City Validation
    if (!formData.city) {
        alert("Please search and select a City.");
        return;
    }

    // 3. General Validation
    if (!formData.name || !formData.dob) {
        alert("Please fill in Name and Date of Birth.");
        return;
    }

    // 4. Prepare Data
    const finalData = {
        name: formData.name,
        date: formData.dob,
        time: finalTime,
        place: formData.city,
        gender: formData.gender,
        lat: parseFloat(formData.lat) || 0.0,
        lon: parseFloat(formData.long) || 0.0,
        ayanamsa: formData.ayanamsa,
        isTimeUnknown: isTimeUnknown
    };

    console.log("Sending Data:", finalData); // Debug log
    onSubmit(finalData);
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-gray-50 p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-2xl border-t-4 border-[#800000]">
        
        <h2 className="text-2xl font-bold text-[#800000] text-center mb-2 font-serif">{t.title}</h2>
        <p className="text-center text-gray-500 text-sm mb-8">{t.subtitle}</p>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* NAME */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wide">{t.fields.name}</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full border border-gray-300 p-2.5 rounded focus:ring-1 focus:ring-[#800000] outline-none" />
            </div>

            {/* GENDER */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wide">{t.fields.gender}</label>
              <select name="gender" value={formData.gender} onChange={handleChange} className="w-full border border-gray-300 p-2.5 rounded focus:ring-1 focus:ring-[#800000] outline-none bg-white">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            {/* DOB */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wide">{t.fields.dob}</label>
              <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="w-full border border-gray-300 p-2.5 rounded focus:ring-1 focus:ring-[#800000] outline-none" />
              <p className="text-[10px] text-gray-400 mt-1">{t.helpers.gregorian_note}</p>
            </div>

            {/* TOB */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wide">{t.fields.tob}</label>
              <input 
                 type="time" 
                 name="tob" 
                 value={formData.tob} 
                 onChange={handleChange} 
                 disabled={isTimeUnknown} 
                 className={`w-full border border-gray-300 p-2.5 rounded focus:ring-1 focus:ring-[#800000] outline-none ${isTimeUnknown ? 'bg-gray-100 text-gray-400' : ''}`} 
              />
              
              <div className="flex items-center mt-2">
                 <input type="checkbox" id="timeUnknown" checked={isTimeUnknown} onChange={(e) => setIsTimeUnknown(e.target.checked)} className="mr-2"/>
                 <label htmlFor="timeUnknown" className="text-xs text-gray-600 cursor-pointer">{t.helpers.time_unknown}</label>
              </div>
              
              {isTimeUnknown && (
                <p className="text-[10px] text-orange-600 mt-1 font-medium">⚠️ {t.helpers.time_warning}</p>
              )}
            </div>
          </div>

          {/* PLACE SEARCH */}
          <div className="pt-4 border-t border-gray-100">
            <label className="block text-sm font-bold text-[#800000] mb-1">{t.fields.place_header}</label>
            <p className="text-[11px] text-gray-500 mb-3">{t.helpers.place_note}</p>
            
            <div className="relative">
              <input type="text" placeholder={t.helpers.place_placeholder} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onBlur={handleCitySearch} onKeyDown={(e) => e.key === 'Enter' && handleCitySearch()} className={`w-full border p-2.5 rounded outline-none text-sm transition-colors ${locationStatus === 'error' ? 'border-red-500 bg-red-50' : locationStatus === 'success' ? 'border-green-500 bg-green-50' : 'border-gray-300'}`} />
              {isSearching && <span className="absolute right-3 top-2.5 text-xs text-gray-400 animate-pulse">...</span>}
            </div>
            
            {locationStatus === 'success' && <p className="text-green-600 text-xs mt-2">✅ {formData.city}, {formData.country}</p>}
            {locationStatus === 'error' && <p className="text-red-600 text-xs mt-2">❌ {t.helpers.place_help_extra || "Not found"}</p>}
            
            <p className="text-[10px] text-gray-400 mt-2 italic">{t.helpers.place_help_extra}</p>
          </div>

          {/* AYANAMSA (UNLOCKED NOW) */}
          <div className="pt-2">
            <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">{t.fields.ayanamsa_label}</label>
            {/* FIXED: Changed disabled={true} to disabled={false} */}
            <select name="ayanamsa" value={formData.ayanamsa} onChange={handleChange} disabled={false} className="w-full bg-white border border-gray-300 text-gray-700 p-2.5 rounded focus:outline-none focus:border-[#800000] focus:ring-1 focus:ring-[#800000]">
              <option value="lahiri">{t.ayanamsa_options.lahiri}</option>
              <option value="raman">{t.ayanamsa_options.raman}</option>
              <option value="kp">{t.ayanamsa_options.kp}</option>
              <option value="sayana">{t.ayanamsa_options.sayana}</option>
            </select>
            <p className="text-[10px] text-gray-400 mt-1 italic">{t.helpers.ayanamsa_note}</p>
          </div>

          <div className="text-center mt-2"><p className="text-[10px] text-gray-400 flex justify-center items-center gap-1">🔒 {t.helpers.privacy_line}</p></div>

          {/* BUTTON */}
          <button onClick={handleSubmit} disabled={loading} className="w-full bg-[#800000] text-white font-bold py-3.5 rounded mt-2 hover:bg-[#600000] transition-colors shadow-md uppercase tracking-wider text-sm disabled:bg-gray-400">
            {loading ? 'Calculating...' : t.button}
          </button>

          <p className="text-center text-[10px] font-medium text-gray-400 mt-2">{t.trust_line}</p>
        </div>
      </div>
    </div>
  );
};

export default BirthDataForm;
