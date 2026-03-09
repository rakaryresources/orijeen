import React from "react";
import Image from "next/image";
import { TrendingUp, Globe } from "lucide-react";

const CourseDetailsSection = () => {
  return (
    <section className="relative w-full bg-[#0a0a0a] p-20 overflow-hidden font-sans border-none -mt-1">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-20">
        {/* Top Info Banner */}
        <div className="relative bg-white rounded-full border border-slate-300 shadow-sm flex items-center p-3 mb-24 max-w-full overflow-hidden">
          {/* Main Purple Badge */}
          <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-[#7742e6] to-[#4512d1] rounded-full shadow-lg flex items-center justify-center -ml-1 mr-4 z-20 relative border-4 border-white">
             {/* 3D Video/Play Placeholder */}
             <div className="w-10 h-8 bg-blue-400 rounded-lg shadow-inner rotate-[-8deg] flex items-center justify-center relative">
               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-white border-b-[5px] border-b-transparent ml-1 z-10"></div>
               <div className="absolute top-[-5px] left-2 w-6 h-3 bg-purple-300 rounded-t -z-10"></div>
             </div>
          </div>

          <div className="flex-1 flex justify-evenly items-center divide-x divide-slate-300 text-slate-800 py-2 overflow-x-auto scrollbar-hide">
            <div className="px-4 lg:px-6 flex flex-col items-start whitespace-nowrap">
              <span className="text-xs text-slate-500 font-medium mb-1">start</span>
              <span className="text-2xl font-bold tracking-tight">12 July</span>
            </div>
            <div className="px-4 lg:px-6 flex flex-col items-start whitespace-nowrap">
              <span className="text-xs text-slate-500 font-medium mb-1">duration</span>
              <span className="text-2xl font-bold tracking-tight">14 weeks</span>
            </div>
            <div className="px-4 lg:px-6 flex flex-col items-start whitespace-nowrap">
              <span className="text-xs text-slate-500 font-medium mb-1">lessons</span>
              <span className="text-2xl font-bold tracking-tight">28</span>
            </div>
            <div className="px-4 lg:px-6 flex flex-col items-start whitespace-nowrap">
              <span className="text-xs text-slate-500 font-medium mb-1">course format</span>
              <span className="text-2xl font-bold tracking-tight">online</span>
            </div>
            <div className="px-4 lg:px-6 flex flex-col items-start whitespace-nowrap">
              <span className="text-xs text-slate-500 font-medium mb-1">Discounts up to</span>
              <span className="text-2xl font-bold tracking-tight">20%</span>
            </div>
          </div>

          {/* Floating Small Icon Under Banner */}
          <div className="absolute -bottom-10 right-16 w-[70px] h-[70px] bg-gradient-to-br from-[#7742e6] to-[#4512d1] rounded-full shadow-lg flex items-center justify-center -z-10 rotate-12 -translate-y-4 translate-x-4 border-2 border-white">
            <div className="w-8 h-6 bg-slate-800 rounded flex flex-col justify-end p-1 rotate-12 relative overflow-hidden">
               <div className="w-full h-1 bg-yellow-400 mb-[2px] rounded-sm"></div>
               <div className="w-full flex gap-[2px]">
                 <div className="w-1/3 h-2 bg-blue-400 rounded-sm"></div>
                 <div className="w-1/3 h-3 bg-red-400 rounded-sm"></div>
                 <div className="w-1/3 h-1 bg-green-400 rounded-sm mt-auto"></div>
               </div>
            </div>
          </div>
        </div>

        {/* Bottom Split Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mt-10">
          
          {/* Left Heading */}
          <div className="flex flex-col h-full justify-between pt-6 pr-4">
            <h2 className="text-4xl md:text-[44px] lg:text-[50px] font-bold leading-[1.15] tracking-tight text-white max-w-[450px]">
              The <span className="text-[#a4e678] italic font-serif font-medium">Business Analyst profession</span> is becoming increasingly popular. And here&apos;s why
            </h2>

            <div className="flex items-start gap-3 mt-16 md:mt-20 lg:mt-32">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#badbad] to-[#80bd6e] shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),0_4px_12px_rgba(164,230,120,0.5)] flex-shrink-0 mt-1"></div>
              <p className="text-sm font-medium text-slate-300 max-w-[200px] leading-relaxed">
                And that is just a small part of the benefits of your future career
              </p>
            </div>
          </div>

          {/* Right Cards */}
          <div className="relative w-full h-[450px] flex justify-center items-center group cursor-pointer perspective-1000">
            
            {/* Background Card (Partially Visible Base) */}
            <div className="absolute top-[320px] bg-white border border-slate-200 rounded-[32px] p-8 w-[95%] max-w-[400px] h-[280px] shadow-sm z-0 opacity-40 translate-y-2 transition-all duration-500 ease-out group-hover:translate-y-6 group-hover:opacity-20 group-hover:scale-95">
               {/* Just lines for visual */}
            </div>

            {/* Middle Card (Partially Visible) */}
            <div className="absolute top-[280px] bg-white border border-slate-200 rounded-[32px] p-8 w-[95%] max-w-[400px] h-[280px] shadow-lg z-0 transition-all duration-500 ease-out group-hover:translate-y-3 group-hover:rotate-[2deg]">
               <div className="w-16 h-16 bg-[#35109b] rounded-full flex items-center justify-center mb-6 shadow-inner relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent"></div>
                 <Globe width={28} height={28} className="text-[#fde047] rotate-[15deg] opacity-90" />
               </div>
               <h3 className="text-xl font-bold text-slate-900 leading-[1.3] pr-4">
                 Excellent opportunities for remote work globally
               </h3>
            </div>

            {/* Top Card (Fully Visible) */}
            <div className="absolute top-0 bg-white border border-[#a4e678] rounded-[32px] p-8 w-[95%] max-w-[420px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10 rotate-[4deg] transform transition-all duration-500 ease-out origin-bottom-right group-hover:rotate-0 group-hover:-translate-y-4 group-hover:scale-[1.02]">
               <div className="w-[88px] h-[88px] bg-[#35109b] rounded-full flex items-center justify-center mb-8 shadow-inner relative overflow-hidden group-hover:shadow-[0_0_30px_rgba(119,66,230,0.4)] transition-shadow duration-500">
                 <div className="absolute inset-0 bg-gradient-to-b from-white/15 to-transparent"></div>
                 {/* Ribbon/Bookmark Icon inside circle */}
                 <TrendingUp width={36} height={36} className="text-[#a4e678] rotate-[-10deg] transition-transform duration-500 group-hover:scale-110" />
               </div>
               <h3 className="text-2xl font-bold text-slate-800 leading-[1.25]">
                 High Demand profession on IT market, <span className="font-medium text-slate-500">which is</span> offering excellent job opportunities and career growth
               </h3>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
};

export default CourseDetailsSection;
