import React from "react";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-[#fafafc] text-slate-800 overflow-hidden font-sans">
      {/* Navbar */}
      <nav className="relative z-20 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {/* Logo Icon Placeholder */}
            <svg
              width="40"
              height="30"
              viewBox="0 0 40 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22H28C33.523 22 38 17.523 38 12C38 6.477 33.523 2 28 2H12Z"
                fill="#a8f278"
                fillOpacity="0.5"
              />
              <path
                d="M16 8C12.686 8 10 10.686 10 14C10 17.314 12.686 20 16 20H24C27.314 20 30 17.314 30 14C30 10.686 27.314 8 24 8H16Z"
                stroke="#632dec"
                strokeWidth="2"
              />
            </svg>
            <span className="text-xl font-bold tracking-tight text-purple-700 ml-1">
              gosmart
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#" className="hover:text-purple-700 transition-colors">About the coach</a>
          <a href="#" className="hover:text-purple-700 transition-colors">Course program</a>
          <a href="#" className="hover:text-purple-700 transition-colors">Loyalty program</a>
          <a href="#" className="hover:text-purple-700 transition-colors">Book a place</a>
          <a href="#" className="hover:text-purple-700 transition-colors">Contacts</a>
        </div>
      </nav>

      {/* Main Hero Area */}
      <main className="relative z-10 mx-auto max-w-7xl px-8 pt-12 pb-24 grid lg:grid-cols-2 gap-12 lg:gap-8 min-h-[calc(100vh-100px)] items-center">
        
        {/* Left Content */}
        <div className="flex flex-col items-start gap-6 max-w-xl">
          <div className="px-3 py-1 border border-slate-300 rounded-md text-xs font-semibold text-slate-600 uppercase tracking-wide">
            Online course
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-slate-900">
            The art of <span className="text-[#511ae4] italic font-serif font-medium">Business Analysis</span>. Go PRO.
          </h1>

          <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-lg mt-2 font-medium">
            Master the art of Business Analysis online, empower yourself with real-world strategies, gaining essential skills to transform data into actionable insights and elevate your career with confidence and expertise.
          </p>

          <button className="mt-4 bg-[#a4e678] hover:bg-[#8ee05b] text-[#1e1e1e] font-semibold text-lg px-8 py-4 rounded-xl flex items-center gap-3 transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-[#a4e678]/20">
            <div className="w-8 h-8 rounded-full border-2 border-slate-800 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </div>
            Attend the course
          </button>
        </div>

        {/* Right Content / Graphics */}
        <div className="relative h-full w-full min-h-[500px] flex items-center justify-center lg:justify-end">
          
          {/* Main Character Illustration Placeholder */}
          <div className="relative z-10 flex flex-col items-center top-10">
            {/* The character uses a placeholder since we don't have the 3D model */}
            <div className="w-[300px] h-[400px] relative">
               {/* Body parts approximation using basic shapes just for layout vibe */}
               <div className="absolute top-[30%] left-1/4 w-[150px] h-[200px] bg-slate-200 rounded-t-full rounded-b-xl shadow-inner z-0" />
               <div className="absolute top-1/4 left-1/3 w-20 h-24 bg-[#511ae4] rounded-t-full rounded-b-lg shadow-xl z-10" />
               <div className="absolute top-[10%] left-[38%] w-16 h-16 bg-[#eec8ae] rounded-full shadow-md z-20 flex items-center justify-center">
                 <div className="w-12 h-4 bg-amber-800 rounded-full mb-8 absolute" />
               </div>
               {/* Green glowing orb */}
               <div className="absolute top-[40%] left-[10%] w-20 h-20 bg-green-200 rounded-full shadow-[0_0_30px_10px_rgba(164,230,120,0.6)] mix-blend-screen z-30" />
            </div>

            {/* Speech Bubble */}
            <div className="absolute top-[-100px] right-[-50px] md:right-[50px] bg-white border border-[#a4e678] shadow-xl px-6 py-4 rounded-2xl max-w-xs z-30 transform hover:-translate-y-2 transition-transform duration-300">
              <p className="text-slate-700 text-sm font-medium">
                Gain the skills you need to become a professional Business Analyst
              </p>
              {/* Bubble Tail */}
              <div className="absolute -bottom-3 left-8 w-6 h-6 bg-white border-b border-r border-[#a4e678] transform rotate-45" />
            </div>
          </div>

          {/* Floating purple sphere (Top Right) */}
          <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-gradient-to-br from-[#8050e8] to-[#511ae4] rounded-full shadow-2xl z-0 transform translate-x-10 -translate-y-10" />
          
          {/* Floating purple sphere (Bottom Right) */}
          <div className="absolute bottom-[20%] right-[-5%] w-40 h-40 bg-gradient-to-br from-[#8050e8] to-[#511ae4] rounded-full shadow-2xl z-0" />
          
          {/* Floating purple sphere (Bottom Left) */}
          <div className="absolute bottom-[0%] left-[20%] w-48 h-48 bg-gradient-to-br from-[#8050e8] to-[#511ae4] rounded-full shadow-2xl z-0" />
          
          {/* Floating small sphere (Mid Left) */}
          <div className="absolute top-[40%] left-[0%] w-24 h-24 bg-gradient-to-br from-[#8050e8] to-[#511ae4] rounded-full shadow-2xl z-0" />
          
        </div>

      </main>

      {/* Footer Elements absolute positioned */}
      <div className="absolute bottom-10 left-8 md:left-12 max-w-[150px] text-xs font-semibold text-slate-500 leading-tight">
        Pre-booking discounts are available now
      </div>

      <div className="absolute bottom-10 right-8 md:right-12 flex flex-col items-center justify-center gap-2 cursor-pointer group">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-slate-500 group-hover:translate-y-1 transition-transform"
        >
          <path d="M12 5v14"></path>
          <path d="m19 12-7 7-7-7"></path>
        </svg>
        <span className="text-xs font-medium text-slate-500">Scroll down</span>
      </div>
      
    </div>
  );
};

export default HeroSection;
