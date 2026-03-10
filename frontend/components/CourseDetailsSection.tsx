"use client";

import React from "react";
import Image from "next/image";
import { TrendingUp, Globe } from "lucide-react";
import CountUp from "react-countup";

const CourseDetailsSection = () => {
  const courseStats = [
    { id: 1, endValue: 1000, label: "Qualified Students", separator: ",", duration: 2.5 },
    { id: 2, endValue: 10, label: "Years of Experience", duration: 2.5 },
    { id: 3, endValue: 6, label: "Expert Faculty", duration: 2.5 },
  ];

  return (
    <section className="relative w-full bg-[#0a0a0a] pt-12 pb-24 overflow-hidden font-sans border-none -mt-1">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-20">
        {/* Top Info Banner */}
        <div className="relative bg-white rounded-[2rem] lg:rounded-full border border-slate-300 shadow-sm flex flex-col lg:flex-row items-center p-4 lg:p-3 mb-16 lg:mb-24 gap-4 lg:gap-0 max-w-full overflow-hidden">
          {/* Main Purple Badge */}
          <div className="flex-shrink-0 w-20 h-20 lg:w-24 lg:h-24 bg-[#5a2ee0] rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.1)] flex items-center justify-center lg:-ml-2 lg:mr-6 z-20 relative border-4 lg:border-[8px] border-white bg-clip-border">
             {/* 3D Video/Play Placeholder */}
             <div className="w-11 h-9 bg-[#3bb0ff] rounded-[10px] shadow-sm rotate-[-6deg] flex items-center justify-center relative z-10">
               <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-white border-b-[5px] border-b-transparent ml-1 z-20"></div>
               {/* Back purple tab */}
               <div className="absolute top-[-6px] left-1 w-8 h-4 bg-[#d9a8ff] rounded-t-[6px] border-b border-[#3bb0ff]/50 -z-10 skew-x-[-10deg]"></div>
             </div>
          </div>

          <div className="flex-1 flex flex-wrap lg:flex-nowrap w-full items-center justify-center text-slate-800 py-2 overflow-x-auto scrollbar-hide gap-y-4">
            {courseStats.map((stat) => (
              <div 
                key={stat.id} 
                className="flex-1 min-w-[100px] lg:min-w-0 flex justify-center px-2 lg:px-6 relative lg:after:absolute lg:after:right-0 lg:after:top-[15%] lg:after:h-[70%] lg:after:w-px lg:after:bg-slate-200 last:after:hidden"
              >
                <div className="flex flex-col items-center whitespace-nowrap min-w-[70px]">
                  <span className="text-3xl lg:text-[36px] font-semibold tracking-tight text-[#1e293b]">
                    <CountUp 
                      end={stat.endValue} 
                      separator={stat.separator || ""} 
                      duration={stat.duration} 
                      enableScrollSpy={true} 
                      scrollSpyOnce={true}
                    >
                      {({ countUpRef }) => <span ref={countUpRef}>0</span>}
                    </CountUp>+
                  </span>
                  <span className="text-[13px] text-slate-500/80 font-medium mt-1">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Heading */}
          <div className="flex flex-col h-full justify-between pt-6 pr-4">
            <h2 className="text-3xl md:text-[44px] lg:text-[50px] font-bold leading-[1.15] tracking-tight text-white max-w-[450px]">
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
          <div className="relative w-full h-[360px] lg:h-[450px] flex justify-center items-center group cursor-pointer perspective-1000 mt-8 lg:mt-0">
            
            {/* Background Card (Partially Visible Base) */}
            <div className="absolute top-[200px] lg:top-[320px] bg-white border border-slate-200 rounded-[32px] p-6 lg:p-8 w-[95%] max-w-[400px] h-[240px] lg:h-[280px] shadow-sm z-0 opacity-40 translate-y-2 transition-all duration-500 ease-out group-hover:translate-y-6 group-hover:opacity-20 group-hover:scale-95">
               {/* Just lines for visual */}
            </div>

            {/* Middle Card (Partially Visible) */}
            <div className="absolute top-[160px] lg:top-[280px] bg-white border border-slate-200 rounded-[32px] p-6 lg:p-8 w-[95%] max-w-[400px] h-[240px] lg:h-[280px] shadow-lg z-0 transition-all duration-500 ease-out group-hover:translate-y-3 group-hover:rotate-[2deg]">
               <div className="w-16 h-16 bg-[#35109b] rounded-full flex items-center justify-center mb-6 shadow-inner relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent"></div>
                 <Globe width={28} height={28} className="text-[#fde047] rotate-[15deg] opacity-90" />
               </div>
               <h3 className="text-xl font-bold text-slate-900 leading-[1.3] pr-4">
                 Excellent opportunities for remote work globally
               </h3>
            </div>

            {/* Top Card (Fully Visible) */}
            <div className="absolute top-0 bg-white border border-[#a4e678] rounded-[32px] p-6 lg:p-8 w-[95%] max-w-[420px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10 rotate-[4deg] transform transition-all duration-500 ease-out origin-bottom-right group-hover:rotate-0 group-hover:-translate-y-4 group-hover:scale-[1.02]">
               <div className="w-[64px] h-[64px] lg:w-[88px] lg:h-[88px] bg-[#35109b] rounded-full flex items-center justify-center mb-6 lg:mb-8 shadow-inner relative overflow-hidden group-hover:shadow-[0_0_30px_rgba(119,66,230,0.4)] transition-shadow duration-500">
                 <div className="absolute inset-0 bg-gradient-to-b from-white/15 to-transparent"></div>
                 {/* Ribbon/Bookmark Icon inside circle */}
                 <TrendingUp width={36} height={36} className="text-[#a4e678] rotate-[-10deg] transition-transform duration-500 group-hover:scale-110" />
               </div>
               <h3 className="text-xl lg:text-2xl font-bold text-slate-800 leading-[1.25]">
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
