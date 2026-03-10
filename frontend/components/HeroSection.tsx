"use client";

import Image from "next/image";
import { useState } from "react";

const HeroSection = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[#0a0a0a] px-2 py-4 md:px-6 md:py-8 lg:p-10 relative z-10 min-h-screen flex flex-col justify-center">
      <div className="relative w-full max-w-[1440px] mx-auto min-h-[calc(100vh-2rem)] md:min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-6rem)] bg-[#fafafc] text-slate-800 font-sans flex flex-col items-center pt-8 md:pt-10 rounded-xl shadow-2xl overflow-hidden">
        {/* Navbar Container - Pill Shape */}
        <nav className="relative z-50 w-[90%] max-w-5xl mx-auto bg-[#0a0a0a] text-white rounded-2xl px-8 py-4 flex items-center justify-between shadow-2xl">
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
          <div
            className="flex items-center justify-center flex-1 md:flex-none cursor-pointer md:cursor-default"
            onClick={() => {
              if (window.innerWidth < 768) {
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }
            }}
          >
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

        {/* Screen Overlay Menu for Mobile */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[100] bg-[#0a0a0a] text-white flex flex-col pt-8 px-6 md:hidden overflow-hidden overflow-y-auto">
            {/* Header config inside modal */}
            <div className="flex justify-between items-center w-full max-w-[90%] mx-auto py-2">
              <div className="flex items-center gap-1">
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

              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 bg-white/10 rounded-full text-slate-300 hover:text-white transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex flex-col gap-6 items-center justify-center flex-1 text-2xl font-medium tracking-tight mt-12 pb-24">
              <a
                href="#"
                className="hover:text-[#a4e678] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#"
                className="hover:text-[#a4e678] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Courses
              </a>
              <a
                href="#"
                className="hover:text-[#a4e678] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Results
              </a>
              <a
                href="#"
                className="hover:text-[#a4e678] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#"
                className="hover:text-[#a4e678] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Team
              </a>
              <a
                href="#"
                className="hover:text-[#a4e678] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contacts
              </a>

              <div className="mt-8 pt-8 w-full border-t border-white/10 flex justify-center">
                <button className="bg-[#a4e678] text-[#0a0a0a] px-8 py-4 rounded-full text-lg w-[80%] max-w-sm hover:bg-[#92d663] transition-colors duration-300 shadow-[0_0_20px_rgba(164,230,120,0.3)]">
                  Start Learning
                </button>
              </div>
            </div>

            {/* Abstract blobs in background for menu */}
            <div className="absolute top-[20%] left-[-20%] w-64 h-64 bg-[#511ae4] rounded-full blur-[100px] opacity-20 -z-10 pointer-events-none"></div>
            <div className="absolute bottom-[10%] right-[-20%] w-64 h-64 bg-[#a4e678] rounded-full blur-[100px] opacity-10 -z-10 pointer-events-none"></div>
          </div>
        )}

        {/* Main Content Area */}
        <main className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center mt-12 md:mt-16 px-4">
          {/* Decorative Doodles Background */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-b-[2.5rem] md:rounded-b-[4rem]">
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
            <h1 className="text-3xl md:text-5xl lg:text-[3rem] xl:text-[4rem] font-semibold tracking-tight text-slate-900 leading-[1.10]">
              Empowering Minds Through{" "}
              <span className="text-[#511ae4] font-light relative whitespace-nowrap">
                Premium Education
                {/* Doodle Sparkle Burst */}
                <svg
                  className="absolute -right-6 lg:-right-18 top-0 lg:top-4 w-8 h-8 md:w-16 md:h-12 text-[#a4e678]"
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
          <div className="relative w-full max-w-5xl mt-12 md:mt-20 flex justify-center h-[450px] md:h-[550px] lg:h-[600px] flex-grow">
            {/* Large Half-Circle/Circle Background behind character */}
            <div className="absolute top-28 md:top-24 lg:top-32 w-[380px] h-[380px] md:w-[550px] md:h-[550px] bg-[#f0f0f4] shadow-inner rounded-full -z-10 overflow-hidden border border-slate-200" />

            {/* Left Floating Card (Text Content) */}
            <div className="hidden lg:flex absolute left-0 top-1/4 max-w-xs flex-col gap-5 p-2 z-30">
              <p className="text-slate-600 text-[15px] leading-[1.6] font-medium">
                We strive to be synonymous with academic excellence, providing
                the highest quality of education and coaching to our students.
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
            <div className="relative z-10 flex flex-col items-center h-full pt-4 md:pt-8 w-full">
              <div className="w-[380px] h-[450px] md:w-[600px] md:h-[650px] relative -mt-6 md:-mt-10">
                <Image
                  src="/girl-hero-removebg.png"
                  alt="Hero Girl"
                  fill
                  className="object-contain object-bottom scale-105 md:scale-[1.12] origin-bottom pointer-events-none"
                  priority
                />
              </div>
            </div>

            {/* Decorative blurred background colors */}
            <div className="absolute top-[0%] left-[20%] w-48 h-48 bg-[#8050e8] rounded-full z-0 opacity-20 blur-[80px]" />
            <div className="absolute bottom-[10%] right-[20%] w-64 h-64 bg-[#a4e678] rounded-full z-0 opacity-20 blur-[80px]" />
          </div>
        </main>
      </div>

      {/* Straddling CTA Pill */}
      <div className="absolute bottom-[-10px] md:bottom-[14vh] left-1/2 transform -translate-x-1/2 md:translate-y-1/2 z-50 bg-[#16161b]/60 backdrop-blur-2xl border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.4),inset_0_0_20px_rgba(255,255,255,0.05)] rounded-[2rem] md:rounded-full p-2 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-0 w-[90%] sm:w-max max-w-[320px] sm:max-w-none mx-auto">
        <button className="bg-[#a4e678] hover:bg-[#92d663] transition-colors text-slate-900 font-bold text-sm md:text-base px-6 py-3.5 md:py-4 rounded-full z-10 w-full sm:w-auto sm:min-w-[150px] md:w-[220px]">
          Start Your Project
        </button>

        {/* Glossy Separator with Glow */}
        <div className="relative hidden md:flex items-center justify-center w-8 h-8 z-10">
          <div className="absolute w-[1px] h-8 bg-white/50 z-10" />
          <div className="absolute w-[24px] h-[36px] bg-white opacity-40 blur-md rounded-full pointer-events-none" />
        </div>

        <button className="px-6 py-3.5 md:py-4 font-medium text-sm md:text-base text-white hover:text-slate-200 transition-colors rounded-full z-10 w-full sm:w-auto sm:min-w-[150px] md:w-[220px] whitespace-nowrap bg-white/5 sm:bg-transparent">
          Let&apos;s Collaborate
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
