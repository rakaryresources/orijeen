import React from "react";
import HoverDiagonalGrid from "./ui/HoverDiagonalGrid";

const featuresData = [
  {
    title: "Business Analyst in IT",
    description:
      "and you want to systematise your work on current projects, expand your knowledge and reach a new level of tasks and responsibilities.",
  },
  {
    title: "IT Related Area Business Analyst",
    description:
      "and want to dive into the world of business analysis in IT, and discover the prospects for development in a new field.",
  },
  {
    title: "IT specialist",
    description:
      "And you want to understand a new direction in order to change the field of activity.",
  },
];

const IdealForYouSection = () => {
  return (
    <section className="relative w-full bg-[#fdfdfd] pb-24 overflow-hidden">
      {/* Top green marquee strip - seamless infinite animation */}
      <div className="w-full bg-[#a4e678] border-y border-slate-500 py-3 overflow-hidden whitespace-nowrap mb-16 relative flex items-center">
        <div className="animate-[slide_30s_linear_infinite] flex items-center flex-nowrap text-[#1e1e1e] font-medium text-[22px] w-max">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center flex-nowrap shrink-0">
              {[...Array(6)].map((_, j) => (
                <React.Fragment key={j}>
                  <span className="whitespace-nowrap px-4">
                    20% early bird discount is only available until 20 June
                  </span>
                  <div className="w-4.5 h-4.5 rounded-full bg-linear-to-br from-[#badbad] to-[#609a47] shadow-inner shrink-0 mx-2"></div>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 mb-8">
          {/* Left Side: Heading and Illustration */}
          <div className="flex flex-col h-full relative">
            <h2 className="text-3xl md:text-[44px] lg:text-[50px] font-bold leading-[1.15] tracking-tight text-slate-900 mb-8 lg:mb-12">
              The course is ideal <br />
              to you{" "}
              <span className="text-[#511ae4] italic font-medium">
                if you are
              </span>
            </h2>

            {/* 3D Illustration - Matching Reference Image */}
            <div className="relative w-full max-w-100 h-87.5 self-center my-4 lg:my-8 ml-0 lg:ml-10 scale-[0.85] md:scale-100 transform origin-center group cursor-pointer pt-12">
              {/* Deep Purple Backdrop Sphere */}
              <div className="absolute top-[5%] left-[-5%] w-[80%] h-[100%] bg-gradient-to-tr from-[#381d85] to-[#5123d1] rounded-full z-0 transition-transform duration-700 group-hover:scale-[1.03] shadow-2xl skew-y-6"></div>

              {/* Floating Pills (Pink & Yellow) */}
              <div className="absolute top-[40%] left-[-2rem] z-30 transition-all duration-700 group-hover:-translate-y-2 flex flex-col gap-3">
                <div className="w-14 h-3.5 bg-[#f6b359] rounded-full transform -rotate-[15deg] shadow-[0_5px_15px_rgba(246,179,89,0.3)]"></div>
                <div className="w-24 h-3.5 bg-[#d794b6] rounded-full transform -rotate-[15deg] shadow-[0_5px_15px_rgba(215,148,182,0.3)] translate-x-4"></div>
              </div>

              {/* Laptop Screen */}
              <div className="absolute top-[8%] left-[8%] w-[68%] h-[50%] bg-[#322d73] rounded-2xl z-10 transform -rotate-[12deg] skew-x-[15deg] border-[6px] border-[#312a81] shadow-[-15px_25px_35px_rgba(0,0,0,0.3)] overflow-hidden transition-all duration-700 group-hover:-translate-y-2 group-hover:-rotate-[13deg]">
                <div className="absolute top-0 right-0 w-[150%] h-[100%] bg-gradient-to-tr from-transparent via-white/5 to-transparent transform -rotate-45 translate-x-12 pointer-events-none"></div>
              </div>

              {/* Laptop Base */}
              <div className="absolute top-[55%] left-[6%] w-[75%] h-[35%] bg-[#dedfdf] rounded-[14px] z-20 transform -rotate-[12deg] skew-x-[25deg] shadow-[0_25px_45px_rgba(0,0,0,0.25)] flex flex-col items-center justify-start py-2.5 px-3 border-b-8 border-l-4 border-[#c7c9c9] transition-all duration-700 group-hover:-translate-y-1">
                {/* Keyboard Layout */}
                <div className="w-[95%] h-[80%] bg-[#f5f6f6] rounded-[8px] shadow-sm flex flex-col justify-around py-1.5 px-3 border-t border-[#ffffff]">
                  <div className="w-[95%] mx-auto h-2 bg-[#d1d5db]/40 rounded-sm"></div>

                  <div className="flex gap-[3px] justify-center w-[98%] mx-auto">
                    {Array(11)
                      .fill(0)
                      .map((_, i) => (
                        <div
                          key={`r1-${i}`}
                          className="flex-1 h-3.5 bg-[#eaeaeb] rounded-sm shadow-[0_1px_2px_rgba(0,0,0,0.05),inset_0_-1px_1px_rgba(0,0,0,0.05)] border border-white/60"
                        ></div>
                      ))}
                  </div>

                  <div className="flex gap-[3px] justify-center w-[95%] mx-auto">
                    {Array(12)
                      .fill(0)
                      .map((_, i) => (
                        <div
                          key={`r2-${i}`}
                          className="flex-1 h-3.5 bg-[#eaeaeb] rounded-sm shadow-[0_1px_2px_rgba(0,0,0,0.05),inset_0_-1px_1px_rgba(0,0,0,0.05)] border border-white/60"
                        ></div>
                      ))}
                  </div>

                  <div className="flex gap-[3px] justify-center w-[90%] mx-auto">
                    {Array(9)
                      .fill(0)
                      .map((_, i) => (
                        <div
                          key={`r3-${i}`}
                          className="flex-1 h-3.5 bg-[#eaeaeb] rounded-sm shadow-[0_1px_2px_rgba(0,0,0,0.05),inset_0_-1px_1px_rgba(0,0,0,0.05)] border border-white/60"
                        ></div>
                      ))}
                    {/* Orange Keys Accent */}
                    <div className="flex-1 h-3.5 bg-[#f6b359] rounded-sm shadow-[0_1px_2px_rgba(246,179,89,0.3),inset_0_-1px_1px_rgba(0,0,0,0.1)] max-w-[20px]"></div>
                    <div className="flex-[2] h-3.5 bg-[#f1f2f2] rounded-sm max-w-[25px]"></div>
                  </div>

                  {/* Spacebar */}
                  <div className="w-[45%] h-5 bg-[#eaeaeb] rounded-sm mx-auto shadow-[0_1px_2px_rgba(0,0,0,0.05),inset_0_-1px_1px_rgba(0,0,0,0.05)] border border-white/60 mt-1 pointer-events-none"></div>
                </div>
              </div>

              {/* Floating Chat Bubble / Card Map */}
              <div className="absolute top-[4%] right-[-12%] w-48 h-36 bg-[#7c8bfc] rounded-[30px] z-40 shadow-[-15px_25px_45px_rgba(0,0,0,0.2)] flex items-center justify-center transition-all duration-700 group-hover:rotate-[3deg] group-hover:-translate-y-3">
                {/* Embedded decorative waves */}
                <div className="absolute inset-0 overflow-hidden rounded-[30px] opacity-[0.15] pointer-events-none mask-image-circle">
                  <svg
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    className="w-full h-full transform scale-150 -rotate-15"
                  >
                    <path
                      d="M0,50 Q25,25 50,50 T100,50 V100 H0 Z"
                      fill="#ffffff"
                    />
                  </svg>
                </div>

                {/* Chat Bubble Tail */}
                <div className="absolute -bottom-[14px] left-[30%] w-0 h-0 border-l-[15px] border-l-transparent border-t-[20px] border-t-[#7c8bfc] border-r-[15px] border-r-transparent transform -rotate-12"></div>

                {/* Donut Chart Icon */}
                <svg
                  viewBox="0 0 100 100"
                  className="w-[110px] h-[110px] transform rotate-[15deg] drop-shadow-[0_10px_15px_rgba(0,0,0,0.15)] z-10 transition-transform duration-700 group-hover:scale-105 group-hover:rotate-[20deg]"
                >
                  {/* Base hole background (Optional visual depth) */}
                  <circle cx="50" cy="50" r="16" fill="#6773df" />

                  {/* Pink Slice (~45%) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="28"
                    fill="transparent"
                    stroke="#d794b6"
                    strokeWidth="26"
                    strokeDasharray="130 176"
                    transform="rotate(-90 50 50)"
                  />

                  {/* Yellow Slice (~25%) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="28"
                    fill="transparent"
                    stroke="#eabe88"
                    strokeWidth="26"
                    strokeDasharray="50 176"
                    strokeDashoffset="-130"
                    transform="rotate(-90 50 50)"
                  />

                  {/* Purple Slice (~30%) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="28"
                    fill="transparent"
                    stroke="#a084eb"
                    strokeWidth="26"
                    strokeDasharray="80 176"
                    strokeDashoffset="-180"
                    transform="rotate(-90 50 50)"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Side: Features List Box */}
          <div className="flex flex-col justify-center h-full gap-4 mt-12 lg:mt-0">
            {featuresData.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white border border-slate-200 hover:border-slate-300 rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-6 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer"
              >
                {/* Premium Diagonal Grid Background Effect on Hover */}
                <HoverDiagonalGrid />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 pointer-events-none"></div>

                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-b from-[#6e3df1] to-[#4514cc] rounded-full flex items-center justify-center shrink-0 shadow-[0_6px_16px_rgba(69,20,204,0.3)] z-10 transition-transform duration-300 relative">
                  <span className="text-white font-bold text-xl sm:text-2xl">
                    {index + 1}
                  </span>
                </div>
                <div className="grid gap-2 flex-1 items-center text-center sm:text-left sm:items-start z-10 w-full">
                  <h4 className="text-[20px] md:text-[22px] font-bold text-slate-900 leading-tight">
                    {feature.title}
                  </h4>
                  <p className="text-[15px] text-slate-600 leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 mt-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-5 rounded-full bg-linear-to-br from-[#badbad] to-[#80bd6e] shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),0_2px_4px_rgba(130,190,110,0.4)] shrink-0"></div>
              <p className="text-xs font-semibold text-slate-700">
                Wondering if the course is right for you?
              </p>
            </div>

            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 leading-[1.1] max-w-70">
              We offer a trial lesson for free
            </h3>
          </div>

          <button className="w-full bg-[#a4e678] hover:bg-[#8ee05b] text-[#1e1e1e] font-semibold text-sm px-6 py-4 rounded-xl flex items-center justify-center gap-3 transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-sm shrink-0 whitespace-nowrap">
            <div className="w-6 h-6 rounded-full border border-slate-800 flex items-center justify-center shrink-0">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </div>
            I want a free lesson
          </button>
        </div>
      </div>

      {/* Required custom CSS for marquee animation */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes slide {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `,
        }}
      />
    </section>
  );
};

export default IdealForYouSection;
