import HoverDiagonalGrid from "./ui/HoverDiagonalGrid";

const RatesAndLoyaltySection = () => {
  const plans = [
    {
      id: "foundation-builder",
      title: "Foundation Builder",
      subtitle: "Class 11–12 science foundation programme",
      features: [
        { text: "Conceptual lectures covering Physics, Chemistry, Mathematics and Biology", included: true },
        { text: "Structured assignments and daily practice problems (DPP)", included: true },
        { text: "Regular doubt-clearing sessions with faculty", included: true },
        { text: "Weekly topic-wise tests and progress tracking", included: true },
        { text: "Access to recorded lessons and study material", included: true },
        { text: "Monthly mock tests with performance analysis", included: true },
      ],
      price: "₹45,000",
      note: "*Complete foundation programme designed for Class 11–12 students preparing for JEE or NEET.",
      highlighted: false,
    },
    {
      id: "advanced-achievers",
      title: "Advanced Achievers",
      subtitle: "JEE / NEET advanced preparation batch",
      features: [
        { text: "Advanced problem-solving sessions for JEE and NEET", included: true },
        { text: "Deep coverage of Physics, Chemistry, Mathematics and Biology", included: true },
        { text: "Previous Year Question (PYQ) intensive practice", included: true },
        { text: "All India Test Series (AITS) and competitive ranking", included: true },
        { text: "Detailed performance analytics and improvement strategy", included: true },
        { text: "Mentorship sessions for exam strategy and preparation", included: true },
      ],
      price: "₹65,000",
      note: "*Designed for serious aspirants targeting top ranks in JEE or NEET.",
      highlighted: true,
    },
    {
      id: "repeater-achievers",
      title: "Repeater Achievers",
      subtitle: "Dropper batch for JEE / NEET",
      features: [
        { text: "Complete syllabus rapid revision for Class 11 and 12", included: true },
        { text: "High-weightage topic focused learning", included: true },
        { text: "Daily practice problem (DPP) system", included: true },
        { text: "Weekly full-length mock exams", included: true },
        { text: "Personalised weakness analysis and improvement plan", included: true },
        { text: "Final revision and exam strategy sessions", included: true },
      ],
      price: "₹55,000",
      note: "*Intensive programme designed for repeaters aiming to improve their rank in the next attempt.",
      highlighted: false,
    },
  ];

  return (
    <section className="relative w-full bg-[#fdfdfd] py-24 overflow-hidden border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-20">
        
        {/* Header Section for Rates */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 relative">
          <h2 className="text-4xl md:text-[44px] lg:text-[50px] font-bold leading-[1.15] tracking-tight text-slate-900 max-w-2xl relative z-10">
            <span className="text-[#511ae4] italic font-medium">Choose</span> the most convenient <br />
            <span className="text-[#511ae4] italic font-medium">learning format</span>
          </h2>

          {/* Top Right Graphics Area */}
          <div className="absolute -top-[90px] -right-[10px] w-[420px] h-[320px] hidden lg:block z-0 group cursor-pointer transition-transform duration-700 hover:scale-[1.02] transform scale-[0.85] origin-right xl:scale-100">
            {/* Floating Glow Backdrop Blob */}
            <div className="absolute top-[30%] right-[30%] w-56 h-56 bg-gradient-to-br from-[#a4e678] to-[#609a47] rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>

            {/* Main Central Sphere / Disc */}
            <div className="absolute top-[20%] right-[20%] w-60 h-60 flex items-center justify-center">
              <div className="w-48 h-48 bg-gradient-to-br from-[#511ae4] to-[#2d0e8a] rounded-full absolute z-0 shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.2),0_15px_30px_rgba(81,26,228,0.3)] border-[4px] border-[#6b3deb] transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-[10deg]"></div>
            </div>

            {/* Back Dark Pricing Card */}
            <div className="absolute top-[25%] right-[25%] w-36 h-48 bg-gradient-to-b from-[#1e1e2f] to-[#0f0f1a] rounded-2xl z-10 transform -rotate-[15deg] shadow-[0_25px_45px_rgba(0,0,0,0.4)] border border-slate-700 p-4 transition-all duration-700 group-hover:-rotate-[5deg] group-hover:-translate-x-4 group-hover:-translate-y-4">
               {/* Card Top / Header */}
               <div className="w-12 h-2 bg-[#d794b6] rounded-full mb-3 shadow-[0_0_10px_rgba(215,148,182,0.4)]"></div>
               <div className="w-full h-1 bg-slate-700/50 rounded-full mb-4"></div>
               {/* Fake Price Lines */}
               <div className="flex flex-col gap-2.5">
                  <div className="w-3/4 h-2.5 bg-slate-600 rounded-full"></div>
                  <div className="w-2/3 h-2.5 bg-slate-600 rounded-full"></div>
                  <div className="w-full h-2.5 bg-slate-600 rounded-full"></div>
               </div>
               {/* Button / Check */}
               <div className="w-full h-6 bg-gradient-to-r from-[#d794b6] to-[#9d5b7a] mt-8 rounded-lg shadow-inner border-b-2 border-[#804862] hover:from-[#e4a8c6] transition-colors relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-1/2 bg-white/10"></div>
               </div>
            </div>

            {/* Front Light Pricing Card / Interface */}
            <div className="absolute top-[35%] right-[5%] w-44 h-36 bg-white/95 backdrop-blur-xl rounded-2xl z-20 transform rotate-[10deg] shadow-[0_20px_40px_rgba(0,0,0,0.15),-10px_-10px_20px_rgba(255,255,255,0.4)_inset] border border-white/80 p-4 flex flex-col transition-all duration-700 group-hover:rotate-[20deg] group-hover:translate-x-4 group-hover:-translate-y-2">
               {/* Ticks and List */}
               <div className="flex gap-2 items-center mb-3">
                 <div className="w-6 h-6 rounded-full bg-gradient-to-bl from-[#a4e678] to-[#609a47] flex items-center justify-center shadow-[inset_1px_1px_3px_rgba(255,255,255,0.6)]">
                   <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7"></path></svg>
                 </div>
                 <div className="w-16 h-3 bg-[#a4e678] rounded-full opacity-60"></div>
               </div>
               <div className="flex flex-col gap-2.5 ml-1 mt-1">
                 <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                    <div className="w-20 h-1.5 bg-slate-200 rounded-full"></div>
                 </div>
                 <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#fce096]"></div>
                    <div className="w-16 h-1.5 bg-[#fce096]/50 rounded-full"></div>
                 </div>
               </div>
               {/* Accent Tag Drop */}
               <div className="mt-auto self-end w-14 h-7 bg-gradient-to-br from-[#fce096] to-[#dca543] rounded-md shadow-inner flex items-center justify-center -skew-x-12 border border-[#fff2b2]">
                 <div className="w-1/2 h-1 bg-white/80 rounded-full"></div>
               </div>
            </div>

            {/* Golden 3D Coin #1 */}
            <div className="absolute top-[10%] right-[5%] w-16 h-16 bg-gradient-to-br from-[#f8d46a] to-[#dca543] rounded-full z-30 transform -rotate-12 shadow-[0_15px_25px_rgba(220,165,67,0.4),inset_4px_4px_8px_rgba(255,255,255,0.8),inset_-4px_-4px_8px_rgba(200,140,40,0.8)] border-[2px] border-[#fff2b2] flex items-center justify-center transition-all duration-700 group-hover:-translate-y-6 group-hover:rotate-[15deg] group-hover:scale-110">
               <div className="w-10 h-10 rounded-full border-[2px] border-[#fff2b2]/80 flex items-center justify-center text-[#a76315] opacity-90">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
               </div>
            </div>

            {/* Golden 3D Coin #2 (Small, far left) */}
            <div className="absolute top-[50%] right-[60%] w-10 h-10 bg-gradient-to-br from-[#f8d46a] to-[#dca543] rounded-full z-10 transform rotate-[25deg] shadow-[0_10px_15px_rgba(220,165,67,0.3),inset_2px_2px_5px_rgba(255,255,255,0.8)] border border-[#fff2b2] flex items-center justify-center transition-all duration-700 group-hover:-translate-x-5 group-hover:rotate-[50deg]">
               <div className="w-5 h-5 border border-[#fff2b2]/80 rounded-full opacity-80"></div>
            </div>

            {/* Discount / Percentage Badge */}
            <div className="absolute bottom-[20%] right-[35%] w-24 h-24 bg-gradient-to-tr from-[#f43f5e] to-[#e11d48] rounded-[24px] z-40 transform -rotate-[12deg] shadow-[0_20px_35px_rgba(244,63,94,0.4),inset_4px_4px_10px_rgba(255,255,255,0.6)] border border-[#fda4af] flex flex-col items-center justify-center transition-all duration-700 group-hover:-rotate-[5deg] group-hover:-translate-y-4 group-hover:scale-110">
               <span className="text-white font-black text-[40px] leading-none tracking-tighter drop-shadow-md">%</span>
               {/* Star sparkle micro-interaction */}
               <div className="absolute -top-3 -right-3 w-8 h-8 text-yellow-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 transform group-hover:rotate-45 group-hover:scale-125">
                 <svg viewBox="0 0 24 24" fill="currentColor">
                   <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z"></path>
                 </svg>
               </div>
            </div>

            {/* Abstract Decorative Element */}
            <div className="absolute top-[70%] right-[5%] w-6 h-6 bg-gradient-to-br from-[#a1bcf4] to-[#6c86e2] rounded-full z-30 shadow-[0_5px_10px_rgba(108,134,226,0.3)] transition-transform duration-700 group-hover:translate-x-3 group-hover:-translate-y-2 border border-[#dbe4fa]"></div>
            
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 relative z-10">
          {plans.map((plan) => (
            <div 
              key={plan.id} 
              className={`group bg-white rounded-[32px] p-8 flex flex-col h-full transition-shadow hover:shadow-lg relative overflow-hidden ${
                plan.highlighted 
                  ? "border-2 border-[#a4e678] shadow-md" 
                  : "border border-slate-300 shadow-sm"
              }`}
            >
              {plan.id === "advanced-achievers" && <HoverDiagonalGrid />}
              
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-[28px] font-bold text-slate-900 mb-2 tracking-tight">
                {plan.title}
              </h3>
              <p className="text-[13px] text-slate-500 font-medium pb-6 border-b border-slate-200 mb-6 min-h-[40px]">
                {plan.subtitle}
              </p>

              {/* Features List */}
              <ul className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className={`flex items-start gap-3 text-[13px] leading-snug font-medium ${feature.included ? 'text-slate-700' : 'text-slate-400'}`}>
                    <div className={`w-3.5 h-3.5 rounded-full flex-shrink-0 mt-0.5 ${feature.included ? 'bg-[#511ae4]' : 'bg-slate-300'}`}></div>
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>

              {/* Price Block */}
              <div className="mt-auto pt-6 border-t border-slate-200">
                <div className="text-[34px] font-bold text-slate-900 leading-none mb-3">
                  {plan.price}
                </div>
                <p className="text-[11px] text-slate-500 leading-snug mb-8 min-h-[30px]">
                  {plan.note}
                </p>
                <button className="w-full bg-[#a4e678] hover:bg-[#8ee05b] text-[#1e1e1e] font-semibold text-sm px-6 py-4 rounded-xl flex items-center justify-center gap-3 transition-transform hover:scale-[1.02] active:scale-[0.98]">
                  <div className="w-5 h-5 rounded-full border-[1.5px] border-slate-800 flex items-center justify-center relative">
                     <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="-mr-[1px]">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                     </svg>
                  </div>
                  Buy this now
                </button>
              </div>
              
              </div>
            </div>
          ))}
        </div>

        {/* Loyalty Programme Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12 mt-10">
          <h2 className="text-3xl md:text-[34px] font-bold leading-tight tracking-tight text-slate-900 max-w-xl">
            Scholarships and Early Registration Benefits
          </h2>

          <div className="flex items-start gap-3 md:max-w-xs">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#badbad] to-[#80bd6e] shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),0_4px_8px_rgba(130,190,110,0.4)] flex-shrink-0 mt-0.5"></div>
            <p className="text-[13px] font-semibold text-slate-700 leading-snug">
              Students who register early or enroll with friends can receive special discounts. Contact our coordinator to learn about available scholarship opportunities.
            </p>
          </div>
        </div>

        {/* Loyalty Discount Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: 20% */}
          <div className="bg-white rounded-3xl border border-slate-300 p-8 shadow-sm">
            <div className="text-6xl font-bold text-slate-900 mb-6 tracking-tighter">20%</div>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-[13px] font-semibold text-slate-700">
                <span className="text-slate-900 mt-[5px] text-[8px]">⚫</span>
                Early Bird Registration
              </li>
              <li className="flex items-start gap-2 text-[13px] font-semibold text-slate-700">
                <span className="text-slate-900 mt-[5px] text-[8px]">⚫</span>
                Students who secure their seat before the deadline receive a special early registration discount.
              </li>
            </ul>
          </div>

          {/* Card 2: 10% */}
          <div className="bg-white rounded-3xl border border-[#a4e678] p-8 shadow-sm relative overflow-hidden">
            <div className="text-6xl font-bold text-slate-900 mb-6 tracking-tighter">10%</div>
            <ul className="space-y-2 relative z-10">
              <li className="flex items-start gap-2 text-[13px] font-semibold text-slate-700">
                <span className="text-slate-900 mt-[5px] text-[8px]">⚫</span>
                Group Enrollment
              </li>
              <li className="flex items-start gap-2 text-[13px] font-semibold text-slate-700">
                <span className="text-slate-900 mt-[5px] text-[8px]">⚫</span>
                Students enrolling together with a friend in the same batch can receive a group enrollment benefit.
              </li>
            </ul>
          </div>

          {/* Card 3: 5% */}
          <div className="bg-white rounded-3xl border border-[#a4e678] p-8 shadow-sm relative overflow-hidden">
            <div className="text-6xl font-bold text-slate-900 mb-6 tracking-tighter">5%</div>
            <ul className="space-y-2 relative z-10">
              <li className="flex items-start gap-2 text-[13px] font-semibold text-slate-700">
                <span className="text-slate-900 mt-[5px] text-[8px]">⚫</span>
                Merit Scholarship
              </li>
              <li className="flex items-start gap-2 text-[13px] font-semibold text-slate-700">
                <span className="text-slate-900 mt-[5px] text-[8px]">⚫</span>
                Limited scholarships are available for students with strong academic performance.
              </li>
            </ul>
          </div>

        </div>

        {/* Global Contact Us CTA */}
        <button className="w-full bg-[#a4e678] hover:bg-[#8ee05b] text-[#1e1e1e] font-semibold text-base px-6 py-5 rounded-2xl flex items-center justify-center gap-3 transition-transform hover:scale-[1.01] active:scale-[0.99] shadow-sm mt-4">
          <div className="w-5 h-5 rounded-full border-[1.5px] border-slate-800 flex items-center justify-center relative">
             <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="-mr-[1px]">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
             </svg>
          </div>
          Contact our coordinator
        </button>

      </div>
    </section>
  );
};

export default RatesAndLoyaltySection;
