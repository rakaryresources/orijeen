import React from "react";

const RatesAndLoyaltySection = () => {
  // Converted placeholder prices from UAH to INR (roughly multiplying by 2 for visual sake, or using representative Indian Rupee amounts for technical courses)
  const plans = [
    {
      id: "independent",
      title: "“Independent”",
      subtitle: "27 video lectures",
      features: [
        { text: "Viewing the recording of 27 video lectures of the previous group", included: true },
        { text: "Checking homework assignments", included: true },
        { text: "Feedback from the trainer", included: true },
        { text: "Certificate", included: true },
        { text: "Access to all course videos for 3 months", included: true },
        { text: "One individual session with a trainer lasting 1 hour", included: false },
        { text: "You can buy the required number of individual sessions. The cost of 1 session is 3500 INR", included: false },
      ],
      price: "18,500 INR",
      note: "*The price does not include any individual sessions with a coach.",
      highlighted: false,
    },
    {
      id: "hybrid",
      title: "“Hybrid”",
      subtitle: "27 video lectures+1 online session with a coach",
      features: [
        { text: "Viewing the recording of 27 video lectures of the previous group", included: true },
        { text: "Checking homework assignments", included: true },
        { text: "Feedback from the trainer", included: true },
        { text: "Certificate", included: true },
        { text: "Access to all course videos for 3 months", included: true },
        { text: "One individual session with a trainer lasting 1 hour", included: true },
        { text: "You can buy the required number of individual sessions. The cost of 1 session is 3500 INR", included: true },
      ],
      price: "22,500 INR",
      note: "*The price includes 1 individual session at a cost of 3500 INR.",
      highlighted: true, // This one has the green border in the design
    },
    {
      id: "individual",
      title: "“Individual”",
      subtitle: "1 online session with a coach",
      features: [
        { text: "Training individually with a trainer", included: true },
        { text: "The ability to create a customised programme", included: true },
        { text: "Possibility to buy and complete only a single topic or topics", included: true },
        { text: "Certificate", included: true },
        { text: "You can buy the required number of individual sessions. The cost of 1 session is 3500 INR", included: true },
      ],
      price: "1,20,000 INR",
      note: "*The price includes 27 individual sessions at a cost of 3500 INR per session.",
      highlighted: false,
    },
  ];

  return (
    <section className="relative w-full bg-[#fdfdfd] pt-24 pb-32 overflow-hidden font-sans border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-20">
        
        {/* Header Section for Rates */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 relative">
          <h2 className="text-4xl md:text-[44px] lg:text-[50px] font-bold leading-[1.15] tracking-tight text-slate-900 max-w-2xl relative z-10">
            <span className="text-[#511ae4] italic font-serif font-medium">Choose</span> the most convenient <br />
            <span className="text-[#511ae4] italic font-serif font-medium">learning format</span>
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
              <h3 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight">
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
            Our school has a loyalty programme for online format on condition of payment in one transaction
          </h2>

          <div className="flex items-start gap-3 md:max-w-xs">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#badbad] to-[#80bd6e] shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),0_4px_8px_rgba(130,190,110,0.4)] flex-shrink-0 mt-0.5"></div>
            <p className="text-[13px] font-semibold text-slate-700 leading-snug">
              To clarify the details and the amount of the discount, you can contact our coordinator
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
                Graduate of our other courses
              </li>
              <li className="flex items-start gap-2 text-[13px] font-semibold text-slate-700">
                <span className="text-slate-900 mt-[5px] text-[8px]">⚫</span>
                Currently enrolled in our other courses
              </li>
              <li className="flex items-start gap-2 text-[13px] font-semibold text-slate-700">
                <span className="text-slate-900 mt-[5px] text-[8px]">⚫</span>
                University student
              </li>
              <li className="flex items-start gap-2 text-[13px] font-semibold text-slate-700">
                <span className="text-slate-900 mt-[5px] text-[8px]">⚫</span>
                Subject to booking and 100% payment by 20 June
              </li>
            </ul>
          </div>

          {/* Card 2: 10% */}
          <div className="bg-white rounded-3xl border border-[#a4e678] p-8 shadow-sm relative overflow-hidden">
            <div className="text-6xl font-bold text-slate-900 mb-6 tracking-tighter">10%</div>
            <ul className="space-y-2 relative z-10">
              <li className="flex items-start gap-2 text-[13px] font-semibold text-slate-700">
                <span className="text-slate-900 mt-[5px] text-[8px]">⚫</span>
                Came to us with a friend (if studying within the same group)
              </li>
            </ul>
          </div>

          {/* Card 3: 5% */}
          <div className="bg-white rounded-3xl border border-[#a4e678] p-8 shadow-sm relative overflow-hidden">
            <div className="text-6xl font-bold text-slate-900 mb-6 tracking-tighter">5%</div>
            <ul className="space-y-2 relative z-10">
              <li className="flex items-start gap-2 text-[13px] font-semibold text-slate-700">
                <span className="text-slate-900 mt-[5px] text-[8px]">⚫</span>
                Feedback about us at DOU
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
          Contact us
        </button>

      </div>
    </section>
  );
};

export default RatesAndLoyaltySection;
