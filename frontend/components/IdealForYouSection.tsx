import React from "react";

const IdealForYouSection = () => {
  return (
    <section className="relative w-full bg-[#fdfdfd] pb-24 overflow-hidden font-sans">
      
      {/* Top green marquee strip - seamless infinite animation */}
      <div className="w-full bg-[#a4e678] border-y border-slate-500 py-3 overflow-hidden whitespace-nowrap mb-16 relative flex items-center">
        <div className="animate-[slide_30s_linear_infinite] flex items-center flex-nowrap text-[#1e1e1e] font-medium text-[22px] w-max">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center flex-nowrap shrink-0">
              {[...Array(6)].map((_, j) => (
                <React.Fragment key={j}>
                  <span className="whitespace-nowrap px-4">20% early bird discount is only available until 20 June</span>
                  <div className="w-[18px] h-[18px] rounded-full bg-gradient-to-br from-[#badbad] to-[#609a47] shadow-inner flex-shrink-0 mx-2"></div>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 lg:gap-8 relative z-20">
        
        {/* Left Side: Illustration and CTA */}
        <div className="flex flex-col h-full relative">
          
          <h2 className="text-4xl md:text-[44px] lg:text-[50px] font-bold leading-[1.15] tracking-tight text-slate-900 mb-12">
            The course is ideal <br />
            fo you <span className="text-[#511ae4] italic font-serif font-medium">if you are</span>
          </h2>

          {/* 3D Illustration Placeholder - Laptop & charts */}
          <div className="relative w-full max-w-[400px] h-[350px] self-center my-8 ml-0 lg:ml-10">
            {/* Background Purple Circle */}
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-[#7742e6] to-[#4512d1] rounded-full z-0"></div>
            
            {/* Laptop Base Placeholder */}
            <div className="absolute bottom-[20%] left-[10%] w-[280px] h-[180px] bg-[#d3d9e3] rounded-xl z-20 transform -rotate-[15deg] skew-x-12 shadow-2xl flex flex-col justify-end p-3 border border-white/50">
               {/* Keyboard area simulation */}
               <div className="w-full h-2/3 bg-slate-400/20 rounded-md p-2 flex flex-col gap-[3px]">
                 <div className="w-full h-2 bg-slate-400/30 rounded-sm"></div>
                 <div className="w-full flex gap-1">
                   {Array(10).fill(0).map((_, i) => (
                     <div key={`k1-${i}`} className="flex-1 h-2 bg-white/70 rounded-[1px]"></div>
                   ))}
                 </div>
                 <div className="w-[90%] flex gap-1 mx-auto">
                   {Array(9).fill(0).map((_, i) => (
                     <div key={`k2-${i}`} className="flex-1 h-2 bg-white/70 rounded-[1px]"></div>
                   ))}
                 </div>
                 <div className="w-[80%] flex gap-1 mx-auto">
                   {Array(8).fill(0).map((_, i) => (
                     <div key={`k3-${i}`} className="flex-1 h-3 bg-white/70 rounded-[1px]"></div>
                   ))}
                 </div>
                 <div className="w-[40%] h-3 bg-white/80 rounded-[1px] mx-auto mt-1"></div>
               </div>
            </div>

            {/* Laptop Screen Placeholder */}
            <div className="absolute top-[10%] left-[5%] w-[260px] h-[170px] bg-gradient-to-br from-[#3b2a8a] to-[#25156a] rounded-lg z-10 transform -rotate-12 skew-x-6 border-4 border-[#50409f] shadow-xl overflow-hidden">
              {/* Screen Content - Floating elements */}
              <div className="absolute top-[40%] left-[-10px] w-12 h-2 bg-[#d794b6] rounded-full -rotate-6"></div>
              <div className="absolute top-[50%] left-[-5px] w-16 h-2 bg-[#d794b6] rounded-full -rotate-6"></div>
            </div>

            {/* Floating Chart Graphic */}
            <div className="absolute top-[20%] right-[-10%] w-[140px] h-[100px] bg-gradient-to-br from-[#8ba1f3] to-[#6c86e2] rounded-xl z-30 transform rotate-12 shadow-lg border border-white/20 flex items-center justify-center">
               {/* Pie Chart */}
               <div className="w-16 h-16 rounded-full bg-[#fce096] flex items-center justify-center relative shadow-inner overflow-hidden">
                 {/* Slice */}
                 <div className="absolute right-0 top-0 w-1/2 h-full bg-[#c98beb] origin-left"></div>
                 {/* Inner hole */}
                 <div className="w-6 h-6 bg-[#6c86e2] rounded-full z-10 shadow-inner"></div>
               </div>
               
               {/* Small floating tooltip-like triangle */}
               <div className="absolute -bottom-3 left-1/2 w-4 h-4 bg-[#6c86e2] rotate-45 transform -translate-x-1/2 border-r border-b border-white/20"></div>
            </div>
          </div>

          <div className="mt-auto pt-8">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#badbad] to-[#80bd6e] shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),0_2px_4px_rgba(130,190,110,0.4)] flex-shrink-0"></div>
              <p className="text-xs font-semibold text-slate-700">Wondering if the course is right for you?</p>
            </div>
            
            <h3 className="text-3xl font-bold text-slate-900 leading-[1.1] mb-6 max-w-[280px]">
              We offer a trial lesson for free
            </h3>
            
            <button className="w-full bg-[#a4e678] hover:bg-[#8ee05b] text-[#1e1e1e] font-semibold text-sm px-6 py-4 rounded-xl flex items-center justify-center gap-3 transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-sm">
              <div className="w-6 h-6 rounded-full border border-slate-800 flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
              I want a free lesson
            </button>
          </div>
          
        </div>

        {/* Right Side: Features List Box */}
        <div className="flex flex-col gap-4 mt-12 lg:mt-[90px]">
          
          {/* Card 1 */}
          <div className="bg-white border border-slate-400 rounded-3xl p-6 md:p-8 flex items-center gap-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-[#511ae4] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-lg shadow-inner">
              1
            </div>
            <div className="grid md:grid-cols-2 gap-4 flex-1 items-center">
              <h4 className="text-xl font-bold text-slate-900 leading-tight">
                Business Analyst in IT
              </h4>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                and you want to systematise your work on current projects, expand your knowledge and reach a new level of tasks and responsibilities.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-slate-400 rounded-3xl p-6 md:p-8 flex items-center gap-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-[#511ae4] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-lg shadow-inner">
              2
            </div>
            <div className="grid md:grid-cols-2 gap-4 flex-1 items-center">
              <h4 className="text-xl font-bold text-slate-900 leading-tight">
                IT Related Area Business Analyst
              </h4>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                and want to dive into the world of business analysis in IT, and discover the prospects for development in a new field.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-slate-400 rounded-3xl p-6 md:p-8 flex items-center gap-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-[#511ae4] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-lg shadow-inner">
              3
            </div>
            <div className="grid md:grid-cols-2 gap-4 flex-1 items-center">
              <h4 className="text-xl font-bold text-slate-900 leading-tight">
                IT specialist
              </h4>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                And you want to understand a new direction in order to change the field of activity.
              </p>
            </div>
          </div>

        </div>

      </div>
      
      {/* Required custom CSS for marquee animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slide {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </section>
  );
};

export default IdealForYouSection;
