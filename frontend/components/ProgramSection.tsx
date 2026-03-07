"use client";

import React, { useState } from "react";

const ProgramSection = () => {
  // State for Accordion - currently tracking which module is open
  const [openModule, setOpenModule] = useState<number | null>(2);

  const modules = [
    {
      id: 1,
      title: "Introduction to Business Analysis",
      onlineLessons: 9,
      homeworks: 8,
      details: null,
    },
    {
      id: 2,
      title: "Business Analysis Techniques and Tools",
      onlineLessons: 4,
      homeworks: 4,
      details: [
        "Requirement Elicitation and Documentation.",
        "Data Modeling and Analysis.",
        "Process Modeling and Improvement.",
        "Use of Various Analysis Tools and Software.",
      ],
    },
    {
      id: 3,
      title: "Stakeholder Management and Communication",
      onlineLessons: 4,
      homeworks: 8,
      details: null,
    },
    {
      id: 4,
      title: "Project Management for Business Analysts.\nDiploma project",
      onlineLessons: 1,
      homeworks: 8,
      details: null,
    },
  ];

  const toggleModule = (id: number) => {
    setOpenModule(openModule === id ? null : id);
  };

  return (
    <section className="relative w-full bg-[#fdfdfd] py-24 overflow-hidden font-sans border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-20">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 relative">
          
          <div className="relative z-10 w-full md:w-auto">
            <h2 className="text-4xl md:text-[44px] lg:text-[50px] font-bold leading-[1.15] tracking-tight text-slate-900 mb-8">
              <span className="text-[#511ae4] italic font-serif font-medium">Program</span> of the course
            </h2>

            <div className="flex items-center gap-8 text-sm text-slate-900">
              <div className="flex flex-col">
                <span className="text-slate-500 text-xs mb-1 font-medium">days</span>
                <span className="font-bold text-base">Mon; Thu</span>
              </div>
              <div className="h-8 w-px bg-slate-300"></div>
              <div className="flex flex-col">
                <span className="text-slate-500 text-xs mb-1 font-medium">time</span>
                <span className="font-bold text-base">17:00-19:00</span>
              </div>
            </div>
          </div>

          {/* Top Right Graphic Placeholder */}
          <div className="absolute top-0 right-0 w-[300px] h-[200px] hidden lg:block -translate-y-12 translate-x-12 z-0">
             <div className="w-64 h-64 bg-gradient-to-br from-[#7742e6] to-[#4512d1] rounded-full absolute top-0 right-10"></div>
             
             {/* Fake UI window 1 */}
             <div className="absolute top-[20%] right-16 w-48 h-32 bg-[#e9e3e3] rounded-xl shadow-xl transform rotate-[-8deg] overflow-hidden border border-white/40">
                <div className="flex gap-1 p-2">
                  <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                </div>
                {/* Fake image block inside window */}
                <div className="absolute bottom-[-10px] right-[-10px] w-28 h-28 bg-[#a1ded5] rounded-[30%] rotate-12 opacity-80 mix-blend-multiply"></div>
             </div>

             {/* Fake floating object */}
             <div className="absolute top-[80%] left-[-10px] w-12 h-12 bg-[#ed7f9b] rounded-lg shadow-lg rotate-12 flex items-center justify-center -translate-y-10 border border-white/20">
               <div className="w-0 h-0 border-l-[15px] border-l-transparent border-b-[20px] border-b-white/30 border-r-[15px] border-r-transparent"></div>
             </div>
             
             <div className="absolute top-[-20px] left-[50px] w-8 h-8 bg-[#eabe88] shadow-md border border-white/20"></div>

             {/* Dark Blue Window / Card */}
             <div className="absolute top-[40%] right-[-10px] w-40 h-28 bg-[#2d1b6e] rounded-xl shadow-2xl transform rotate-[12deg] p-4 border border-white/10 flex flex-col justify-center gap-3">
                <div className="w-8 h-8 rounded-full border-[3px] border-[#fce096] flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-[#fce096]"></div>
                </div>
                <div className="w-8 h-1.5 bg-[#8ba1f3] rounded-full"></div>
                <div className="w-16 h-1.5 bg-[#7742e6] rounded-full"></div>
             </div>
          </div>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-4">
          {modules.map((mod) => (
            <div 
              key={mod.id} 
              className={`rounded-3xl border transition-all duration-300 overflow-hidden cursor-pointer ${
                openModule === mod.id 
                  ? "border-[#a4e678] bg-white shadow-sm" 
                  : "border-slate-300 bg-white hover:border-slate-400"
              }`}
              onClick={() => toggleModule(mod.id)}
            >
              <div className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative">
                
                {/* Module Number */}
                <div className="w-full md:w-1/4">
                  <span className="font-bold text-slate-800 text-[15px]">Module {mod.id}</span>
                </div>

                {/* Main Content */}
                <div className="flex-1">
                  <h3 className="text-[22px] font-bold text-slate-900 leading-tight mb-4 whitespace-pre-line">
                    {mod.title}
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-3 mt-4 md:mt-0">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-300 text-xs font-semibold text-slate-700">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[#511ae4]">
                        <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
                        <path d="M10 9L15 12L10 15V9Z" fill="currentColor"/>
                      </svg>
                      {mod.onlineLessons} online lessons
                    </span>
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-300 text-xs font-semibold text-slate-700">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[#511ae4]">
                        <path d="M4 19.5C4 18.837 4.53726 18.3 5.2 18.3H19C19.6627 18.3 20 18.837 20 19.5C20 20.163 19.6627 20.7 19 20.7H5.2C4.53726 20.7 4 20.163 4 19.5Z" fill="currentColor"/>
                        <path d="M4 19.5V5.2C4 4.53726 4.53726 4 5.2 4H19C19.6627 4 20 4.53726 20 5.2V19.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M12 4V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      {mod.homeworks} homeworks
                    </span>
                  </div>
                </div>

                {/* The "More / Less" Circle Button + Arrow Indicator block */}
                <div className="flex items-center gap-4">
                  {/* Circle text button visible on md+ screens */}
                  <div className={`hidden md:flex w-[72px] h-[72px] rounded-full border items-center justify-center transition-colors ${
                      openModule === mod.id ? "border-[#a4e678]" : "border-slate-300 hover:border-[#a4e678] hover:bg-[#a4e678]/10"
                  }`}>
                    <span className="text-xs font-bold text-slate-900 leading-none">
                      {openModule === mod.id ? "Less" : "More"}
                    </span>
                  </div>

                  {/* Arrow Indicator relative to flex block */}
                  <div className="flex items-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`text-slate-800 transition-transform ${openModule === mod.id ? "rotate-180" : ""}`}>
                      <path d="M7 17l9.2-9.2M17 17V7H7"/>
                    </svg>
                  </div>
                </div>

              </div> {/* Close Header Row */}

              {/* Accordion Expanded Content */}
              {openModule === mod.id && mod.details && (
                <div className="px-6 md:px-8 pb-8 md:pl-[25%] border-t border-slate-200 mt-0 bg-white shadow-inner">
                  <ul className="space-y-4 pt-6 max-w-lg">
                    {mod.details.map((detail, index) => (
                      <li key={index} className="text-[15px] font-medium text-slate-700 flex gap-3 leading-relaxed tracking-wide">
                        <span className="text-slate-800">{index + 1}.</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Booking Block */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 pt-6">
          <div className="w-full md:w-auto flex flex-col">
            <span className="text-xs font-semibold text-slate-500 mb-1">seats left</span>
            <span className="text-2xl font-bold text-slate-900">10 of 32</span>
          </div>

          <button className="w-full md:flex-1 md:max-w-md bg-[#a4e678] hover:bg-[#8ee05b] text-[#1e1e1e] font-semibold text-[15px] px-8 py-5 rounded-2xl flex items-center justify-center gap-3 transition-transform hover:scale-[1.01] active:scale-[0.99]">
            <div className="w-5 h-5 rounded-full border-[1.5px] border-slate-800 flex items-center justify-center relative">
               <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="-mr-[1px]">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
               </svg>
            </div>
            Book a seat
          </button>
        </div>

      </div>
    </section>
  );
};

export default ProgramSection;
