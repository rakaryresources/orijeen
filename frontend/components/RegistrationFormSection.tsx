"use client";

import React, { useState } from "react";

const RegistrationFormSection = () => {
  const [selectedTopic, setSelectedTopic] = useState<string>("Register to the course");

  const topics = [
    "Register to the course",
    "Get a free trial lesson",
    "Get a consultation",
  ];

  return (
    <section className="relative w-full bg-[#fdfdfd] py-12">
      
      {/* Top Banner Stripe */}
      <div className="w-full bg-[#511ae4] py-4 px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between z-10 relative mt-32">
        <div className="text-white text-sm md:text-base font-medium flex-1 max-w-md">
          Book and pay for the course in full by 20.06 and get a 20% discount
        </div>
        
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <span className="text-white text-sm md:text-base font-medium hidden md:block">
            The early booking discount expires in
          </span>
          <div className="border border-white text-white px-4 py-2 rounded-lg font-medium text-sm w-36 text-center shadow-sm">
            10 days 13:34:48
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 mt-20 relative z-20">
        
        {/* Header and Floating Character */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8 relative">
          
          <h2 className="text-4xl md:text-[44px] lg:text-[50px] font-bold leading-[1.1] tracking-tight text-slate-900 max-w-lg z-10 relative">
            <span className="text-[#511ae4] italic font-medium">Fill out the form</span> and we will contact you
          </h2>

          <div className="flex items-center gap-12 mt-8 md:mt-0 text-slate-900 relative z-10 self-end md:self-center">
            <div className="flex flex-col">
              <span className="text-slate-500 text-[13px] mb-1 font-medium">Start date</span>
              <span className="font-bold text-xl tracking-tight">12.07</span>
            </div>
            <div className="flex flex-col">
              <span className="text-slate-500 text-[13px] mb-1 font-medium">Seats left</span>
              <span className="font-bold text-xl tracking-tight">10/32</span>
            </div>
          </div>

          {/* 3D Character overlapping the form Placeholder */}
          <div className="absolute top-0 md:-top-16 left-1/2 -translate-x-1/2 w-[200px] h-[350px] z-30 pointer-events-none hidden md:block drop-shadow-2xl">
            {/* Using basic shapes to roughly match character volume/position over the form border */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-14 h-16 bg-[#a76a52] rounded-3xl"></div> {/* Head */}
            <div className="absolute top-[70px] left-1/2 -translate-x-1/2 w-20 h-28 bg-[#7742e6] rounded-2xl shadow-inner"></div> {/* Body */}
            
            {/* Arms holding phone */}
            <div className="absolute top-[80px] left-4 w-6 h-16 bg-[#a76a52] rounded-full transform rotate-[30deg]"></div>
            <div className="absolute top-[80px] right-4 w-6 h-16 bg-[#a76a52] rounded-full transform -rotate-[30deg]"></div>
            <div className="absolute top-[120px] left-1/2 -translate-x-1/2 w-8 h-12 bg-slate-800 rounded z-20"></div> {/* Phone */}
            
            {/* Legs intersecting the form line */}
            <div className="absolute top-[180px] left-8 w-8 h-24 bg-[#e9e3ed] rounded-full transform rotate-12 shadow-md"></div>
            <div className="absolute top-[180px] right-2 w-8 h-20 bg-[#e9e3ed] rounded-full transform -rotate-[20deg] shadow-md z-0"></div>
            <div className="absolute top-[250px] right-0 w-8 h-12 bg-[#e9e3ed] rounded-full z-10"></div>
            
            {/* Red Shoes */}
            <div className="absolute bottom-[20px] left-4 w-10 h-6 bg-[#d94848] rounded-t-lg border-b-4 border-white shadow"></div>
            <div className="absolute bottom-[80px] right-1 w-10 h-6 bg-[#d94848] rounded-t-lg border-b-4 border-white shadow"></div>
          </div>
        </div>

        {/* Main Form Container - With Border */}
        <div className="w-full bg-white border border-slate-300 rounded-[32px] p-8 lg:p-12 relative z-0 flex flex-col md:flex-row gap-12 lg:gap-16 pt-16">
          
          {/* Left Column (Inputs) */}
          <div className="flex-1 flex flex-col gap-6">
            <h3 className="text-[15px] font-bold text-slate-800 mb-2">Your information</h3>
            
            <input 
              type="text" 
              placeholder="Name*" 
              className="w-full h-14 px-5 rounded-2xl border border-slate-300 text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#a4e678] focus:ring-1 focus:ring-[#a4e678] transition-all bg-white"
            />
            <input 
              type="text" 
              placeholder="Surname*" 
              className="w-full h-14 px-5 rounded-2xl border border-slate-300 text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#a4e678] focus:ring-1 focus:ring-[#a4e678] transition-all bg-white"
            />
            <input 
              type="email" 
              placeholder="Email*" 
              className="w-full h-14 px-5 rounded-2xl border border-slate-300 text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#a4e678] focus:ring-1 focus:ring-[#a4e678] transition-all bg-white"
            />
            <input 
              type="tel" 
              placeholder="Phone*" 
              className="w-full h-14 px-5 rounded-2xl border border-slate-300 text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#a4e678] focus:ring-1 focus:ring-[#a4e678] transition-all bg-white"
            />
          </div>

          {/* Right Column (Topic Selection & Submit) */}
          <div className="flex-1 flex flex-col gap-6">
            <h3 className="text-[15px] font-bold text-slate-800 mb-2">Select a topic</h3>
            
            <div className="flex flex-wrap gap-3 mb-8">
              {topics.map((topic) => (
                <button
                  key={topic}
                  onClick={() => setSelectedTopic(topic)}
                  className={`px-5 py-3 rounded-2xl border text-sm font-medium transition-colors ${
                    selectedTopic === topic
                      ? "border-slate-800 text-slate-800 bg-white"
                      : "border-slate-300 text-slate-500 bg-white hover:border-slate-400"
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>

            <div className="mt-auto">
              <button className="w-full bg-[#a4e678] hover:bg-[#8ee05b] text-[#1e1e1e] font-semibold text-base px-6 py-5 rounded-2xl flex items-center justify-center gap-3 transition-transform hover:scale-[1.01] active:scale-[0.99] shadow-sm mb-4">
                <div className="w-6 h-6 rounded-full border-[1.5px] border-slate-800 flex items-center justify-center relative">
                   <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="-mr-[1px] ml-[1px]">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                   </svg>
                </div>
                Contact us
              </button>
              
              <p className="text-[11px] text-slate-500 font-medium leading-relaxed max-w-[90%]">
                By registering and clicking the &quot;Submit&quot; button, you agree to the terms of service and privacy policy
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default RegistrationFormSection;
