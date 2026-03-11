"use client";

import Image from "next/image";
import CountUp from "react-countup";
import { Users, Trophy } from "lucide-react";
import SunDoodle from "./ui/Doodle";
import Doodle from "./ui/Doodle";

const AboutSection = () => {
  const courseStats = [
    {
      id: 1,
      endValue: 1000,
      label: "Qualified Students",
      separator: ",",
      duration: 2.5,
    },
    { id: 2, endValue: 10, label: "Years of Experience", duration: 2.5 },
    { id: 3, endValue: 6, label: "Expert Faculty", duration: 2.5 },
  ];

  return (
    <section className="relative w-full bg-[#0a0a0a] py-20 overflow-hidden border-none">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-20">
        {/* Top Row */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 mb-6 lg:mb-8">
          {/* Top Left: Text */}
          <div className="flex-1 flex flex-col justify-center items-start lg:py-8 lg:pr-12 relative">
            {/* Hand-drawn scribble doodle (Sun) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-b-[2.5rem] md:rounded-b-[4rem]">
              {/* Top Left Sun Doodle */}
              <SunDoodle className="absolute top-0 right-[-10px] w-28 h-28 text-[#a4e678]" />
            </div>

            {/* Hand-drawn scribble doodle (Curly Arrow) */}
            <Doodle
              svgType="curly-arrow"
              className="absolute bottom-12 lg:bottom-4 right-[-20px] lg:right-[-34px] text-slate-400 opacity-60 hidden lg:block"
            />
            <div className="inline-flex items-center px-5 py-2 rounded-full border border-slate-700 bg-transparent mb-8">
              <span className="text-sm font-medium text-slate-300">
                About us
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-semibold text-white mb-6 leading-[1.1] tracking-tight">
              Meet oriJEEn: <br className="hidden md:block" />
              Your{" "}
              <span className="text-[#a4e678] italic text-[0.95em]">
                Academic Partners
              </span>
            </h2>

            <p className="text-[17px] text-slate-400/90 leading-relaxed max-w-[600px] font-medium">
              The premier institute dedicated to shaping the future of aspiring
              students in their journey towards success in competitive exams.
              <br />
              <br />
              At oriJEEn Academy, we specialize in providing comprehensive
              coaching and guidance for various entrance examinations, including{" "}
              <strong className="text-white font-semibold">
                JEE Mains & Advance, NEET, Olympiads
              </strong>
              , and more.
            </p>
          </div>

          {/* Top Right: Image Container */}
          <div className="w-full lg:w-[45%] h-[350px] lg:h-[420px] relative rounded-[32px] md:rounded-[40px] overflow-hidden bg-[#161616] shrink-0 border border-slate-800 group">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#35109b]/20 to-[#a4e678]/10 group-hover:scale-105 transition-transform duration-700"></div>

            {/* Placeholder Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500">
              <Users className="w-14 h-14 mb-4 opacity-40" />
              <span className="font-medium tracking-widest uppercase text-xs opacity-50 px-4 text-center">
                Replace with image
                <br />
                (e.g., Happy Students)
              </span>
            </div>
            <Image
              src="/about.png"
              alt="Students"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Bottom Row - Bento Cutout Structure */}
        <div className="relative w-full bg-gradient-to-br from-[#121212] to-[#050505] rounded-[32px] md:rounded-[40px] border border-slate-800 overflow-hidden group shadow-xl flex flex-col min-h-[450px] mt-2 lg:mt-6">
          {/* Abstract wavy lines background */}
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none overflow-hidden mix-blend-screen">
            {Array.from({ length: 28 }).map((_, i) => (
              <div
                key={i}
                className="absolute rounded-[45%_55%_70%_35%/40%_50%_60%_50%] border-2 border-white transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                style={{
                  width: `${400 + i * 40}px`,
                  height: `${400 + i * 40}px`,
                  top: "120%",
                  left: "30%",
                  transform: `translate(-50%, -50%) rotate(${i * 5}deg)`,
                }}
              />
            ))}
            <div className="absolute bottom-0 right-0 w-[80%] h-[80%] bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent blur-3xl rounded-full"></div>
          </div>

          {/* Main Top/Left Content Area */}
          <div className="relative z-10 p-8 md:p-12 lg:p-14 flex flex-col h-full w-full">
            {/* Stats (Top Area) */}
            <div className="flex flex-wrap gap-8 sm:gap-16 mb-12 xl:mb-20 lg:w-[60%]">
              {courseStats.map((stat) => (
                <div key={stat.id}>
                  <h3 className="text-5xl md:text-[64px] lg:text-[72px] font-bold text-white mb-2 leading-none tracking-tight whitespace-nowrap">
                    <CountUp
                      end={stat.endValue}
                      separator={stat.separator || ""}
                      duration={stat.duration}
                      enableScrollSpy={true}
                      scrollSpyOnce={true}
                    >
                      {({ countUpRef }) => <span ref={countUpRef}>0</span>}
                    </CountUp>
                    +
                  </h3>
                  <p className="text-slate-400 text-sm md:text-base font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Pill Tags (Bottom Left Area) */}
            <div className="relative z-20 flex flex-wrap gap-3 md:gap-4 mt-auto lg:w-[50%] lg:pr-6 pb-6 lg:pb-0">
              {[
                { label: "Academic Excellence", rotate: "-rotate-2" },
                { label: "Empowering Students", rotate: "rotate-1" },
                { label: "Holistic Development", rotate: "rotate-2" },
                { label: "Continuous Innovation", rotate: "-rotate-1" },
                { label: "Mentorship & Guidance", rotate: "rotate-1" },
                { label: "Collaborative Community", rotate: "-rotate-2" },
              ].map((pill, idx) => (
                <div
                  key={idx}
                  className={`bg-white text-slate-900 px-5 py-2.5 md:px-6 md:py-3 rounded-full font-bold text-sm shadow-[0_4px_20px_rgba(0,0,0,0.5)] cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-[#a4e678] hover:text-[#0a0a0a] ${pill.rotate} hover:rotate-0`}
                >
                  {pill.label}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Right Cutout Holder: Image Grid Simulation */}
          <div className="relative w-[calc(100%-48px)] mx-auto mb-6 lg:mx-0 lg:mb-0 lg:absolute lg:bottom-[-1px] lg:right-[-1px] lg:w-[45%] h-[280px] lg:h-[65%] bg-[#161616] rounded-[32px] lg:rounded-[0] lg:rounded-tl-[40px] overflow-hidden lg:border-t-[16px] lg:border-l-[16px] border-[#0a0a0a] group/image shadow-[-10px_-10px_30px_rgba(0,0,0,0.5)] z-20">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] group-hover:scale-105 transition-transform duration-700"></div>

            {/* Inner curve illusions using shadow masking */}
            <div className="hidden lg:block absolute -top-8 -left-8 w-16 h-16 pointer-events-none rounded-br-3xl shadow-[30px_30px_0_30px_#0a0a0a] z-30"></div>
            <Image src="/hand.jpg" alt="Achievements" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
