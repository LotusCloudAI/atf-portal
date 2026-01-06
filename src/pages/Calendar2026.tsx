import React from 'react';
import BackHome from '../components/BackHome';

const Calendar2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 pb-20">
      
      {/* =======================
          1. HEADER SECTION
      ======================== */}
      <div className="bg-white border-b shadow-sm sticky top-0 z-20">
         {/* Top Row: Navigation */}
         <div className="max-w-[1400px] mx-auto px-4 py-2 border-b border-gray-100 bg-gray-50">
            <BackHome />
         </div>

         {/* Second Row: Title & Actions */}
         <div className="max-w-[1400px] mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
               {/* Icon */}
               <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl shadow-sm">
                  📅
               </div>
               {/* Title Text */}
               <div>
                  <h1 className="text-2xl font-bold text-[#1E3A8A] leading-tight">
                    2026 Telugu Calendar & Panchangam
                  </h1>
                  <p className="text-sm text-gray-500">
                    Interactive Digital Edition • Dallas, TX (CST)
                  </p>
               </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 w-full md:w-auto">
               <button className="flex-1 md:flex-none px-4 py-2 bg-white border border-gray-300 text-gray-700 font-medium rounded hover:bg-gray-50 transition shadow-sm flex items-center justify-center gap-2">
                  <span>🖨️</span> Print
               </button>
               <button className="flex-1 md:flex-none px-4 py-2 bg-[#1E3A8A] text-white font-medium rounded hover:bg-blue-800 transition shadow-md flex items-center justify-center gap-2">
                  <span>⬇️</span> PDF Download
               </button>
            </div>
         </div>
      </div>

      {/* =======================
          2. MAIN CONTENT GRID
      ======================== */}
      <div className="max-w-[1400px] mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
         
         {/* --- LEFT COLUMN: Calendar (Span 9) --- */}
         <div className="lg:col-span-9 space-y-8 min-w-0">
            
            {/* Calendar Card */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col">
               
               {/* Card Header */}
               <div className="bg-[#1E3A8A] text-white px-6 py-3 flex justify-between items-center rounded-t-xl">
                  <span className="font-semibold text-sm tracking-wide uppercase">Live View</span>
                  {/* Mobile Tip */}
                  <span className="text-xs bg-blue-700 px-2 py-1 rounded text-blue-100 lg:hidden">
                    Scroll to view
                  </span>
               </div>
               
               {/* --- THE FIX: Scroll Wrapper & Forced Width --- */}
               <div className="w-full overflow-x-auto bg-gray-100 p-2 border-b rounded-b-xl">
                 
                 {/* CHANGED: "w-[1280px]" 
                     This forces the container to be wide enough for the entire calendar.
                     The parent 'overflow-x-auto' will add a scrollbar if the screen is too small.
                 */}
                 <div className="w-[1280px]"> 
                   <iframe
                      src="/calendars/telugu-calendar-2026.html"
                      title="Telugu Calendar 2026"
                      className="w-full border-none block bg-white rounded-lg shadow-sm"
                      style={{ height: '1150px' }} 
                   />
                 </div>
               </div>
               {/* ----------------------------------------------- */}

            </div>

            {/* Bottom Banner Ad */}
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-8 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
               <div>
                  <h3 className="text-2xl font-bold mb-2">Want to advertise here?</h3>
                  <p className="text-purple-100 max-w-lg">
                     Reach thousands of Telugu families in the DFW metroplex. 
                     Sponsor a month in our 2026 Digital Calendar.
                  </p>
               </div>
               <button className="px-6 py-3 bg-white text-indigo-700 font-bold rounded-lg shadow hover:bg-gray-100 transition whitespace-nowrap">
                  Become a Sponsor
               </button>
            </div>

            {/* Instructions / Help */}
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 flex gap-4 items-start">
               <span className="text-2xl">ℹ️</span>
               <div>
                  <h4 className="font-bold text-[#1E3A8A]">How to use this calendar</h4>
                  <p className="text-sm text-gray-700 mt-1">
                     Use the <span className="font-semibold">Location</span> dropdown inside the calendar toolbar to switch settings. 
                     If the calendar looks small, use the scroll bar at the bottom of the calendar box.
                  </p>
               </div>
            </div>
         </div>

         {/* --- RIGHT COLUMN: Sidebar (Span 3) --- */}
         <div className="lg:col-span-3 space-y-6">
            
            {/* Visual Widget 1: Upcoming Festivals */}
            <div className="bg-white rounded-xl shadow border border-gray-200 overflow-hidden">
               <div className="bg-red-50 p-4 border-b border-red-100">
                  <h3 className="font-bold text-[#B91C1C]">🎉 Festivals</h3>
               </div>
               <div className="p-4 space-y-4">
                  <div className="flex gap-3 items-center">
                     <div className="bg-red-100 text-red-700 font-bold w-12 h-12 flex flex-col items-center justify-center rounded-lg text-xs leading-tight">
                        <span>JAN</span><span className="text-lg">14</span>
                     </div>
                     <div>
                        <p className="font-bold text-gray-800 text-sm">Sankranti</p>
                        <p className="text-xs text-gray-500">Wednesday</p>
                     </div>
                  </div>
                  <div className="flex gap-3 items-center">
                     <div className="bg-gray-100 text-gray-700 font-bold w-12 h-12 flex flex-col items-center justify-center rounded-lg text-xs leading-tight">
                        <span>FEB</span><span className="text-lg">16</span>
                     </div>
                     <div>
                        <p className="font-bold text-gray-800 text-sm">Maha Shivaratri</p>
                        <p className="text-xs text-gray-500">Monday</p>
                     </div>
                  </div>
                  <div className="flex gap-3 items-center">
                     <div className="bg-green-100 text-green-700 font-bold w-12 h-12 flex flex-col items-center justify-center rounded-lg text-xs leading-tight">
                        <span>MAR</span><span className="text-lg">19</span>
                     </div>
                     <div>
                        <p className="font-bold text-gray-800 text-sm">Ugadi</p>
                        <p className="text-xs text-gray-500">Wednesday</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* Visual Widget 2: Image Ad (Placeholder) */}
            <div className="rounded-xl overflow-hidden shadow-lg group relative cursor-pointer">
               <div className="h-64 bg-gradient-to-br from-yellow-400 to-orange-500 flex flex-col items-center justify-center text-center p-6 text-white">
                  <span className="text-5xl mb-4 transform group-hover:scale-110 transition duration-300">💎</span>
                  <h3 className="font-bold text-xl mb-1">Gold Sponsorship</h3>
                  <p className="text-sm opacity-90 mb-4">Your Business Logo Here</p>
                  <span className="bg-white text-orange-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                     Reserve Spot
                  </span>
               </div>
            </div>

            {/* Visual Widget 3: Membership */}
            <div className="bg-[#1E3A8A] text-white rounded-xl shadow-lg p-6 text-center">
               <h3 className="font-bold text-lg mb-2">Join ATF Today</h3>
               <p className="text-xs text-blue-200 mb-4">
                  Support our cultural initiatives and get exclusive access to events.
               </p>
               <button className="w-full py-2 bg-yellow-400 text-[#1E3A8A] font-bold rounded hover:bg-yellow-300 transition text-sm">
                  Become a Member
               </button>
            </div>

         </div>

      </div>
    </div>
  );
};

export default Calendar2026;