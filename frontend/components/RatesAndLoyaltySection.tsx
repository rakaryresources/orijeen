import React from "react";

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
      note: "*Complete foundation programme designed for Class 11–12 students preparing for IIT-JEE or NEET.",
      highlighted: false,
    },
    {
      id: "advanced-achievers",
      title: "Advanced Achievers",
      subtitle: "IIT-JEE / NEET advanced preparation batch",
      features: [
        { text: "Advanced problem-solving sessions for JEE and NEET", included: true },
        { text: "Deep coverage of Physics, Chemistry, Mathematics and Biology", included: true },
        { text: "Previous Year Question (PYQ) intensive practice", included: true },
        { text: "All India Test Series (AITS) and competitive ranking", included: true },
        { text: "Detailed performance analytics and improvement strategy", included: true },
        { text: "Mentorship sessions for exam strategy and preparation", included: true },
      ],
      price: "₹65,000",
      note: "*Designed for serious aspirants targeting top ranks in IIT-JEE or NEET.",
      highlighted: true,
    },
    {
      id: "repeater-achievers",
      title: "Repeater Achievers",
      subtitle: "Dropper batch for IIT-JEE / NEET",
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
          <div className="absolute top-[-50px] right-0 w-[300px] h-[250px] hidden lg:block z-0 pointer-events-none">
            {/* 3D Character Placeholder */}
            <div className="absolute bottom-[20%] left-[20%] w-16 h-32 z-20">
               <div className="w-12 h-14 bg-[#8c6753] rounded-[20px] absolute top-0 left-1/2 -translate-x-1/2 z-10"></div>
               <div className="w-16 h-20 bg-[#a1bcf4] rounded-[10px] absolute top-[40px] left-1/2 -translate-x-1/2 z-0"></div>
               <div className="w-6 h-12 bg-[#8c6753] rounded-full absolute top-[60px] -right-2 transform rotate-12 z-20"></div>
               <div className="w-6 h-12 bg-[#8c6753] rounded-full absolute top-[50px] -left-2 transform -rotate-12 z-0"></div>
            </div>

            {/* Top Right Floating Elements */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#7742e6] to-[#4512d1] rounded-full z-0 flex items-center justify-center">
              {/* Fake UI Card inside circle */}
              <div className="w-32 h-24 bg-[#a1bcf4] rounded-xl transform rotate-12 shadow-lg relative border border-white/40 overflow-hidden">
                <div className="absolute top-2 left-2 w-8 h-2 bg-white/70 rounded-full"></div>
                <div className="absolute top-6 left-2 w-16 h-2 bg-white/50 rounded-full"></div>
                
                {/* File/Folder icon placeholder */}
                <div className="absolute bottom-2 right-2 w-12 h-10 bg-[#fce096] rounded filter drop-shadow flex flex-col justify-end">
                   <div className="w-full h-8 bg-[#8ba1f3] rounded-sm transform rotate-[-5deg] origin-bottom-left"></div>
                </div>
              </div>
              {/* Floating coin/disc */}
              <div className="absolute -top-4 right-8 w-10 h-10 bg-[#eabe88] rounded-full shadow-md z-10"></div>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 relative z-10">
          {plans.map((plan) => (
            <div 
              key={plan.id} 
              className={`bg-white rounded-[32px] p-8 flex flex-col h-full transition-shadow hover:shadow-lg relative overflow-hidden ${
                plan.highlighted 
                  ? "border-2 border-[#a4e678] shadow-md" 
                  : "border border-slate-300 shadow-sm"
              }`}
            >
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
                  Buy this tariff
                </button>
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
