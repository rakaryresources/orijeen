import HoverDiagonalGrid from "./ui/HoverDiagonalGrid";

const GraduatesSection = () => {
  const benefits = [
    {
      id: 1,
      text: "Certificate of completion for the selected JEE / NEET preparation programme.",
    },
    {
      id: 2,
      text: "Access to recorded lectures, notes, and study materials for revision throughout the course.",
    },
    {
      id: 3,
      text: "Structured assignments, Daily Practice Problems (DPP), and topic-wise practice sheets.",
    },
    {
      id: 4,
      text: "Regular doubt-clearing sessions and academic support from experienced faculty.",
    },
    {
      id: 5,
      text: "Weekly topic tests and full-length mock exams with detailed performance analysis.",
    },
    {
      id: 6,
      text: "Previous year question practice and advanced problem-solving sessions.",
    },
    {
      id: 7,
      text: "Personalised feedback on performance and guidance to improve weak topics.",
    },
    {
      id: 8,
      text: "Final revision sessions and exam strategy guidance before the main examination.",
    },
  ];

  return (
    <section className="relative w-full bg-[#fdfdfd] py-24 overflow-hidden border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-20">
        {/* Header Section */}
        <div className="flex justify-end mb-20 relative">
          {/* Top Left Illustrations */}
          <div className="absolute top-[-60px] left-0 w-[420px] h-[320px] hidden md:block z-0 group cursor-pointer transition-transform duration-700 hover:scale-[1.02]">
            {/* Floating Deep Purple Background Blob */}
            <div className="absolute top-[20%] left-[30%] w-60 h-60 bg-gradient-to-br from-[#381d85] to-[#5123d1] rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>

            {/* The 3D Character Avatar */}
            <div className="absolute top-[90px] left-[30px] w-32 h-44 transition-transform duration-700 group-hover:-translate-y-4 group-hover:rotate-[-5deg] z-20">
              {/* Hair (Back) */}
              <div className="w-14 h-14 bg-gradient-to-br from-[#4a2e26] to-[#251713] rounded-full absolute -top-4 left-1/2 -translate-x-1/2 z-10 shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.3)]"></div>
              
              {/* Head / Face */}
              <div className="w-16 h-16 bg-gradient-to-br from-[#f8c1a6] to-[#d68565] rounded-full absolute top-0 left-1/2 -translate-x-1/2 z-20 shadow-[inset_-4px_-4px_8px_rgba(255,255,255,0.4),0_10px_15px_rgba(0,0,0,0.15)]"></div>
              
              {/* Hair (Front / Bangs) */}
              <div className="w-14 h-8 bg-gradient-to-b from-[#4a2e26] to-[#362118] rounded-t-full absolute -top-1 left-1/2 -translate-x-1/2 z-30 opacity-90 shadow-sm"></div>

              {/* Body / Graduate Gown */}
              <div className="w-24 h-28 bg-gradient-to-br from-[#511ae4] to-[#350d9e] rounded-t-[40px] rounded-b-[20px] absolute top-[55px] left-1/2 -translate-x-1/2 z-10 shadow-[inset_-5px_-5px_15px_rgba(0,0,0,0.2),0_15px_25px_rgba(81,26,228,0.3)] border border-[#6b3deb]">
                 {/* Academic hood / collar */}
                 <div className="w-16 h-10 bg-gradient-to-b from-[#fce096] to-[#dca543] absolute top-0 left-1/2 -translate-x-1/2 rounded-b-full shadow-inner opacity-90 border-b border-[#fff2b2]"></div>
              </div>

              {/* Left Arm */}
              <div className="w-8 h-20 bg-gradient-to-br from-[#6232e8] to-[#4512d1] rounded-full absolute top-[65px] -left-2 rotate-[25deg] z-0 shadow-lg border border-[#7a4bf0]"></div>

              {/* Right Arm (Holding Diploma) */}
              <div className="w-8 h-20 bg-gradient-to-bl from-[#6232e8] to-[#4512d1] rounded-full absolute top-[65px] -right-2 -rotate-[35deg] z-20 shadow-lg border border-[#7a4bf0] flex items-end justify-center pb-2">
                <div className="w-5 h-5 bg-[#d68565] rounded-full shadow-inner"></div>
              </div>

              {/* Floating Diploma */}
              <div className="absolute top-[120px] -right-14 w-24 h-7 bg-gradient-to-r from-white to-[#e2e8f0] rounded-sm transform -rotate-[15deg] z-30 shadow-[0_5px_15px_rgba(0,0,0,0.15)] flex items-center justify-center border-l-[6px] border-l-white">
                 <div className="w-2.5 h-full bg-[#f43f5e] shadow-sm ml-4 border-x border-[#fb7185]"></div>
              </div>
            </div>

            {/* Central Dashboard / Shield Graphic */}
            <div className="absolute top-0 left-[180px] w-64 h-64 flex items-center justify-center">
              {/* Back Circle Graphic */}
              <div className="w-48 h-48 bg-gradient-to-br from-[#a4e678] to-[#80bd6e] rounded-full absolute top-[10%] left-[15%] z-0 shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.1),0_15px_30px_rgba(164,230,120,0.3)] transition-transform duration-700 group-hover:scale-110 group-hover:rotate-[10deg] border-[4px] border-[#bdf598]"></div>

              {/* Light crystal UI panel / Web Window */}
              <div className="w-44 h-32 bg-white/90 backdrop-blur-md rounded-2xl absolute top-[20%] left-[0%] z-10 transform -rotate-12 shadow-[0_20px_40px_rgba(0,0,0,0.15)] border border-white overflow-hidden p-3 flex flex-col justify-between transition-all duration-700 group-hover:-rotate-6 group-hover:-translate-y-5">
                <div className="flex gap-1.5 px-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#f43f5e]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#fbbf24]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#34d399]"></div>
                </div>
                <div className="flex flex-col gap-2.5 mt-2">
                   <div className="w-1/2 h-2.5 bg-gradient-to-r from-[#a4e678] to-[#80bd6e] rounded-full shadow-inner"></div>
                   <div className="w-3/4 h-2 bg-slate-200 rounded-full"></div>
                   <div className="w-5/6 h-2 bg-slate-200 rounded-full"></div>
                </div>
                <div className="mt-auto flex justify-end">
                   <div className="w-12 h-5 bg-[#511ae4] rounded-md opacity-20 group-hover:opacity-30 transition-opacity"></div>
                </div>
              </div>

              {/* Dark blue chart panel / Analytics */}
              <div className="w-36 h-28 bg-[#1e1e2f] rounded-xl absolute top-[30%] right-[-20px] z-20 transform rotate-[15deg] shadow-[0_25px_45px_rgba(0,0,0,0.3)] border border-slate-700 p-4 flex items-end gap-2.5 justify-center transition-all duration-700 group-hover:rotate-[5deg] group-hover:translate-x-4 group-hover:-translate-y-2">
                <div className="flex flex-col gap-1.5 w-full absolute top-3 left-4">
                  <div className="w-12 h-1.5 bg-slate-600 rounded-full"></div>
                  <div className="w-8 h-1.5 bg-slate-700 rounded-full"></div>
                </div>
                <div className="w-5 h-10 bg-gradient-to-t from-[#9d5b7a] to-[#d794b6] rounded-t-md shadow-[0_0_15px_rgba(215,148,182,0.3)] relative overflow-hidden"><div className="absolute top-0 left-0 w-full h-1 bg-white/40"></div></div>
                <div className="w-5 h-16 bg-gradient-to-t from-[#609a47] to-[#a4e678] rounded-t-md shadow-[0_0_15px_rgba(164,230,120,0.3)] relative group-hover:h-[72px] transition-all duration-500 delay-100">
                   <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-7 h-4 bg-white rounded-sm text-[8px] font-bold flex items-center justify-center text-slate-800 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">98%</div>
                   <div className="absolute top-0 left-0 w-full h-1 bg-white/40"></div>
                </div>
                <div className="w-5 h-12 bg-gradient-to-t from-[#2d0e8a] to-[#511ae4] rounded-t-md shadow-[0_0_15px_rgba(81,26,228,0.3)] relative overflow-hidden"><div className="absolute top-0 left-0 w-full h-1 bg-white/40"></div></div>
              </div>

              {/* Golden Check Shield / Badge */}
              <div className="w-20 h-24 bg-gradient-to-br from-[#f8d46a] to-[#dca543] rounded-t-full rounded-b-[40px] absolute -top-[10px] left-[35%] z-30 transform -rotate-[10deg] shadow-[0_15px_25px_rgba(220,165,67,0.4),inset_2px_2px_4px_rgba(255,255,255,0.6)] border border-[#fff2b2] flex items-center justify-center transition-all duration-700 group-hover:rotate-[0deg] group-hover:-translate-y-4 group-hover:scale-110">
                <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center shadow-inner border border-white/50 group-hover:bg-white/40 transition-colors">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#a76315"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                {/* Shiny star micro-interaction */}
                <div className="absolute -top-2 -right-2 w-6 h-6 text-yellow-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300 transform group-hover:rotate-45 group-hover:scale-125">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-4xl md:text-[44px] lg:text-[50px] font-bold leading-[1.15] tracking-tight text-slate-900 text-right max-w-xl relative z-10">
            <span className="text-[#511ae4] italic font-medium">Graduates</span>{" "}
            of our online
            <br />
            course{" "}
            <span className="text-[#511ae4] italic font-medium">
              will receive
            </span>
          </h2>
        </div>

        {/* 8-Card Grid container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="group relative overflow-hidden bg-white rounded-[32px] border border-slate-300 p-6 shadow-sm hover:shadow-md transition-shadow hover:border-[#a4e678] min-h-[200px] flex flex-col"
            >
              <HoverDiagonalGrid />
              <div className="relative z-10 w-12 h-12 bg-[#511ae4] rounded-full flex items-center justify-center mb-6 text-white font-bold text-[17px] shadow-inner flex-shrink-0">
                {benefit.id}
              </div>
              <p className="relative z-10 text-[13px] text-slate-700 font-medium leading-relaxed mt-auto pb-2">
                {benefit.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GraduatesSection;
