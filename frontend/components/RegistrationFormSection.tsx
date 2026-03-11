"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const RegistrationFormSection = () => {
  const [selectedTopic, setSelectedTopic] = useState<string>("Foundation Builder (Class 11–12)");
  
  // State for the countdown timer
  const [timeLeft, setTimeLeft] = useState({
    days: 10,
    hours: 13,
    minutes: 34,
    seconds: 48,
  });

  // Setup the live countdown effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev; // Timer finished
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format time values with leading zeros
  const formatTime = (value: number) => value.toString().padStart(2, "0");

  const topics = [
    "Foundation Builder (Class 11–12)",
    "Advanced Achievers (JEE / NEET)",
    "Repeater Achievers (Dropper Batch)",
  ];

  return (
    <section className="relative w-full bg-[#fdfdfd] py-12">
      
      {/* Top Banner Stripe */}
      <div className="w-full bg-[#511ae4] py-2 px-4 lg:px-6 flex flex-col md:flex-row items-center justify-between z-10 relative mt-32 overflow-hidden">
        
        {/* Animated Diagonal Grid Background */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: "linear-gradient(-45deg, rgba(255, 255, 255, 0.3) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0.3) 75%, transparent 75%, transparent)",
            backgroundSize: "30px 30px",
            animation: "bannerDiagonalMove 1.5s linear infinite"
          }} 
        />
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes bannerDiagonalMove {
            0% { background-position: 0 0; }
            100% { background-position: 30px 30px; }
          }
        `}} />

        <div className="text-white text-sm md:text-base font-medium flex-1 max-w-md relative z-10">
          Reserve your seat in the upcoming JEE / NEET batch.
        </div>
        
        <div className="flex items-center gap-4 mt-4 md:mt-0 relative z-10">
          <span className="text-white text-sm md:text-base font-medium hidden md:block">
            Admissions closing in
          </span>
          <div className="border-[1.5px] border-white/40 text-white px-4 py-2 rounded-xl font-medium text-sm w-[150px] text-center shadow-sm flex items-center justify-center gap-1.5 backdrop-blur-sm bg-white/5 relative z-10">
            <span>{timeLeft.days} days</span>
            <span className="tabular-nums">
              {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
            </span>
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
              <span className="text-slate-500 text-[13px] mb-1 font-medium">Next Batch Starts</span>
              <span className="font-bold text-xl tracking-tight text-[#16508c]">July 12th</span>
            </div>
            <div className="flex flex-col">
              <span className="text-slate-500 text-[13px] mb-1 font-medium">Seats Available</span>
              <span className="font-bold text-xl tracking-tight">10/32</span>
            </div>
          </div>

          {/* Real Human Sitting Image overlaps the form border */}
          <div className="absolute top-0 md:-top-[120px] lg:-top-[160px] left-1/2 -translate-x-1/2 z-30 pointer-events-none hidden md:block drop-shadow-2xl w-[380px] h-[380px] lg:w-[500px] lg:h-[500px]">
            <Image
              src="/human-sitting.png"
              alt="Student sitting"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Main Form Container - With Border */}
        <div className="w-full bg-white border border-slate-300 rounded-[32px] p-8 lg:p-12 relative z-0 flex flex-col md:flex-row gap-12 lg:gap-16 pt-16">
          
          {/* Left Column (Inputs) */}
          <div className="flex-1 flex flex-col gap-6">
            <h3 className="text-[15px] font-bold text-slate-800 mb-2">Student information</h3>
            
            <input 
              type="text" 
              placeholder="Student Name*" 
              className="w-full h-14 px-5 rounded-2xl border border-slate-300 text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#a4e678] focus:ring-1 focus:ring-[#a4e678] transition-all bg-white"
            />
            <input 
              type="text" 
              placeholder="Parent / Guardian Name*" 
              className="w-full h-14 px-5 rounded-2xl border border-slate-300 text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#a4e678] focus:ring-1 focus:ring-[#a4e678] transition-all bg-white"
            />
            <input 
              type="email" 
              placeholder="Email Address*" 
              className="w-full h-14 px-5 rounded-2xl border border-slate-300 text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#a4e678] focus:ring-1 focus:ring-[#a4e678] transition-all bg-white"
            />
            <input 
              type="tel" 
              placeholder="Phone Number*" 
              className="w-full h-14 px-5 rounded-2xl border border-slate-300 text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#a4e678] focus:ring-1 focus:ring-[#a4e678] transition-all bg-white"
            />
          </div>

          {/* Right Column (Topic Selection & Submit) */}
          <div className="flex-1 flex flex-col gap-6">
            <h3 className="text-[15px] font-bold text-slate-800 mb-2">Select the programme</h3>
            
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
                Reserve my seat
              </button>
              
              <p className="text-[11px] text-slate-500 font-medium leading-relaxed max-w-[90%]">
                By submitting this form, you agree to be contacted by our academic coordinator regarding admission, course details, and batch availability.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default RegistrationFormSection;
