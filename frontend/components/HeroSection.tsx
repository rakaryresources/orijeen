import React from "react";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-[#fafafc] text-slate-800 overflow-hidden font-sans flex flex-col items-center pt-6 pb-20">
      {/* Navbar Container - Pill Shape */}
      <nav className="relative z-50 w-[95%] max-w-6xl mx-auto bg-slate-900 text-white rounded-full px-8 py-4 flex items-center justify-between shadow-2xl">
        {/* Left Nav */}
        <div className="hidden md:flex flex-1 items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Courses
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Results
          </a>
        </div>

        {/* Center Logo */}
        <div className="flex items-center justify-center flex-1 md:flex-none">
          <div className="flex items-center gap-1">
            {/* Logo Icon Placeholder */}
            <svg
              width="32"
              height="24"
              viewBox="0 0 40 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22H28C33.523 22 38 17.523 38 12C38 6.477 33.523 2 28 2H12Z"
                fill="#a8f278"
                fillOpacity="0.8"
              />
              <path
                d="M16 8C12.686 8 10 10.686 10 14C10 17.314 12.686 20 16 20H24C27.314 20 30 17.314 30 14C30 10.686 27.314 8 24 8H16Z"
                stroke="#511ae4"
                strokeWidth="2"
              />
            </svg>
            <span className="text-xl tracking-tight text-white font-semibold">
              OriJEEn
            </span>
          </div>
        </div>

        {/* Right Nav */}
        <div className="hidden md:flex flex-1 justify-end items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#" className="hover:text-white transition-colors">
            Testimonials
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Team
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Contacts
          </a>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center mt-12 md:mt-16 px-4">
        {/* Decorative Doodles Background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Top Left Sun Doodle */}
          <svg
            className="absolute top-0 left-5 md:left-12 w-28 h-28 text-[#a4e678]"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          >
            <line x1="50" y1="10" x2="50" y2="35" />
            <line x1="50" y1="65" x2="50" y2="90" />
            <line x1="10" y1="50" x2="35" y2="50" />
            <line x1="65" y1="50" x2="90" y2="50" />
            <line x1="22" y1="22" x2="40" y2="40" />
            <line x1="60" y1="60" x2="78" y2="78" />
            <line x1="22" y1="78" x2="40" y2="60" />
            <line x1="60" y1="40" x2="78" y2="22" />
            <line x1="30" y1="15" x2="43" y2="38" />
            <line x1="57" y1="62" x2="70" y2="85" />
            <line x1="15" y1="30" x2="38" y2="43" />
            <line x1="62" y1="57" x2="85" y2="70" />
            <line x1="15" y1="70" x2="38" y2="57" />
            <line x1="62" y1="43" x2="85" y2="30" />
            <line x1="30" y1="85" x2="43" y2="62" />
            <line x1="57" y1="38" x2="70" y2="15" />
          </svg>

          {/* Left Middle Hash Doodle */}
          <svg
            className="absolute top-[45%] left-0 md:left-6 w-12 h-12 text-[#a4e678]"
            viewBox="0 0 40 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          >
            <line x1="10" y1="8" x2="16" y2="28" />
            <line x1="22" y1="12" x2="28" y2="32" />
            <line x1="34" y1="20" x2="40" y2="40" />
          </svg>

          {/* Right Top Hash Doodle */}
          <svg
            className="absolute top-[35%] right-2 md:right-12 w-16 h-12 text-[#a4e678]"
            viewBox="0 0 50 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          >
            <line x1="8" y1="25" x2="35" y2="20" />
            <line x1="12" y1="38" x2="39" y2="33" />
          </svg>
        </div>

        {/* Heading Section */}
        <div className="flex flex-col items-center text-center max-w-4xl z-20">
          <h1 className="text-4xl md:text-5xl lg:text-[3rem] xl:text-[4rem] font-semibold tracking-tight text-slate-900 leading-[1.10]">
            Empowering Minds Through{" "}
            <span className="text-[#511ae4] font-light relative whitespace-nowrap">
              Premium Education
              {/* Doodle Sparkle Burst */}
              <svg
                className="absolute -right-18 -top-[18px] w-16 h-14 text-[#a4e678]"
                viewBox="0 0 50 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              >
                <path d="M 5 5 Q 25 5 45 0" />
                <path d="M 0 20 Q 20 20 40 20" />
                <path d="M 5 35 Q 25 35 45 40" />
              </svg>
            </span>
          </h1>
        </div>

        {/* Hero Graphic & Floating Elements Area */}
        <div className="relative w-full max-w-5xl mt-16 md:mt-20 flex justify-center h-112.5 md:h-137.5">
          {/* Large Half-Circle/Circle Background behind character */}
          <div className="absolute top-10 md:top-5 w-95 h-95 md:w-137.5 md:h-137.5 bg-[#f0f0f4] shadow-inner rounded-full -z-10 overflow-hidden border border-slate-200" />

          {/* Left Floating Card (Text Content) */}
          <div className="hidden lg:flex absolute left-0 top-1/4 max-w-xs flex-col gap-5 p-2 z-30">
            <p className="text-slate-600 text-[15px] leading-[1.6] font-medium">
              We strive to be synonymous with academic excellence, providing the
              highest quality of education and coaching to our students.
              Empowering your journey.
            </p>
            <div className="px-5 py-2.5 border border-slate-400 rounded-full text-sm font-semibold text-slate-600 self-start hover:border-[#a4e678] transition-colors cursor-pointer">
              Join the Best Institute
            </div>

            {/* Doodle Black Curly Arrow pointing to CTA */}
            <svg
              width="80"
              height="80"
              viewBox="0 0 100 100"
              fill="none"
              className="absolute -bottom-24 -right-5 text-slate-800 opacity-70 z-0"
            >
              <path
                d="M 20 20 C 60 -10, 80 40, 40 40 C 10 40, 10 80, 50 80 C 70 80, 80 90, 80 90"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M 80 90 L 70 75 M 80 90 L 65 95"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Right Floating Card (Stats/Reviews) */}
          <div className="hidden lg:flex absolute right-4 top-1/3 flex-col items-center gap-1 z-30">
            <div className="flex gap-1 text-[#a4e678]">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div className="text-3xl font-bold text-slate-900 mt-2 tracking-tight">
              10 Years
            </div>
            <div className="text-base text-slate-600 font-medium">
              Experience
            </div>
          </div>

          {/* Center Character Placeholder */}
          <div className="relative z-10 flex flex-col items-center h-full pt-10 md:pt-16">
            <div className="w-62.5 h-87.5 md:w-75 md:h-100 relative">
              {/* Body approximation */}
              <div className="absolute top-[30%] left-1/4 w-31.25 h-50 md:w-37.5 md:h-62.5 bg-slate-800 rounded-t-full rounded-b-xl shadow-inner z-0" />
              <div className="absolute top-1/4 left-1/3 w-16 h-20 md:w-20 md:h-24 bg-[#511ae4] rounded-t-full rounded-b-lg shadow-xl z-20" />
              <div className="absolute top-[10%] left-[38%] w-12 h-12 md:w-16 md:h-16 bg-[#eec8ae] rounded-full shadow-md z-30 flex items-center justify-center">
                <div className="w-8 h-3 md:w-12 md:h-4 bg-amber-800 rounded-full mb-6 md:mb-8 absolute" />
              </div>
            </div>
          </div>

          {/* Bottom Floating Pill CTA (Overlapping Character) */}
          <div className="absolute -bottom-6 md:bottom-2 z-40 bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] rounded-full p-2 flex items-center gap-1 md:gap-2">
            <InteractiveHoverButton className="bg-[#a4e678] hover:bg-[#8ee05b] text-[#1e1e1e] font-semibold text-sm px-6 py-3 md:py-4 rounded-full border-none w-40 flex justify-center shadow-md">
              Start Your Journey
            </InteractiveHoverButton>
            <button className="px-6 py-3 md:py-4 font-semibold text-sm text-slate-600 hover:text-slate-900 transition-colors rounded-full relative after:content-[''] after:absolute after:bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-slate-900 hover:after:w-1/2 after:transition-all after:duration-300">
              Let&apos;s Collaborate
            </button>
          </div>

          {/* Decorative blurred background colors */}
          <div className="absolute top-[0%] left-[20%] w-48 h-48 bg-[#8050e8] rounded-full z-0 opacity-20 blur-[80px]" />
          <div className="absolute bottom-[10%] right-[20%] w-64 h-64 bg-[#a4e678] rounded-full z-0 opacity-20 blur-[80px]" />
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
