import React from "react";

const GraduatesSection = () => {
  const benefits = [
    {
      id: 1,
      text: "Electronic certificate of completion of the course \"The art of Business Analysis. Go PRO\".",
    },
    {
      id: 2,
      text: "Access to recordings of all lectures for 6 months.",
    },
    {
      id: 3,
      text: "Opportunity to complete an internship to gain the necessary experience and material for your portfolio.",
    },
    {
      id: 4,
      text: "After the internship, you may be included in the database of job seekers that we share with our partners.",
    },
    {
      id: 5,
      text: "Checklists and useful links to help you with your future projects",
    },
    {
      id: 6,
      text: "The opportunity to use our loyalty programme in the future.",
    },
    {
      id: 7,
      text: "A database of materials on each topic covered in the course.",
    },
    {
      id: 8,
      text: "Help with interview preparation: creating a CV and preparing for interviews.",
    },
  ];

  return (
    <section className="relative w-full bg-[#fdfdfd] py-24 overflow-hidden border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-20">
        
        {/* Header Section */}
        <div className="flex justify-end mb-20 relative">
          
          {/* Top Left Illustrations */}
          <div className="absolute top-[-40px] left-0 w-[400px] h-[300px] hidden md:block z-0 pointer-events-none">
            
            {/* The character proxy */}
            <div className="absolute top-[80px] left-[20px] w-24 h-40">
               <div className="w-16 h-16 bg-[#a76a52] rounded-full absolute top-0 left-1/2 -translate-x-1/2 z-20"></div>
               <div className="w-8 h-8 bg-[#4a2e26] rounded-full absolute -top-3 left-1/2 -translate-x-1/2 z-10"></div>
               <div className="w-20 h-24 bg-[#6c86e2] rounded-[30px] absolute top-[50px] left-1/2 -translate-x-1/2 z-10"></div>
               <div className="w-6 h-16 bg-[#a76a52] rounded-full absolute top-[60px] -right-4 -rotate-12 z-0"></div>
            </div>

            {/* Central Dashboard / Shield Graphic */}
            <div className="absolute top-0 left-[200px] w-64 h-64 flex items-center justify-center">
               <div className="w-48 h-48 bg-gradient-to-br from-[#7742e6] to-[#4512d1] rounded-full absolute top-[10%] left-[10%] z-0"></div>
               
               {/* Light blue UI panel */}
               <div className="w-40 h-32 bg-[#a1bcf4] rounded-2xl absolute top-[25%] left-[15%] z-10 transform -rotate-12 shadow-xl border border-white/50 overflow-hidden p-2 flex flex-col justify-end gap-2">
                 <div className="w-8 h-2 bg-[#d794b6] rounded-full mb-1"></div>
                 <div className="w-16 h-2 bg-white/70 rounded-full"></div>
                 <div className="w-12 h-2 bg-white/70 rounded-full"></div>
               </div>

               {/* Dark blue chart panel */}
               <div className="w-32 h-24 bg-[#2d1b6e] rounded-xl absolute top-[25%] right-[-10px] z-20 transform rotate-12 shadow-2xl border border-white/20 p-3 flex items-end gap-2 justify-center">
                 <div className="w-4 h-8 bg-[#d794b6] rounded-t-sm"></div>
                 <div className="w-4 h-14 bg-white rounded-t-sm"></div>
                 <div className="w-4 h-10 bg-[#fce096] rounded-t-sm"></div>
               </div>

               {/* Purple check shield */}
               <div className="w-20 h-24 bg-[#7742e6] rounded-t-full rounded-b-3xl absolute -top-[10px] left-[20%] z-30 transform -rotate-[15deg] shadow-lg border border-white/20 flex items-center justify-center">
                 <div className="w-10 h-10 rounded-full bg-[#fce096] flex items-center justify-center shadow-inner">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7742e6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                     <path d="M5 12l5 5L20 7"></path>
                   </svg>
                 </div>
               </div>
            </div>

          </div>

          <h2 className="text-4xl md:text-[44px] lg:text-[50px] font-bold leading-[1.15] tracking-tight text-slate-900 text-right max-w-xl relative z-10">
            <span className="text-[#511ae4] italic font-medium">Graduates</span> of our online<br />
            course <span className="text-[#511ae4] italic font-medium">will receive</span>
          </h2>
        </div>

        {/* 8-Card Grid container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <div 
              key={benefit.id} 
              className="bg-white rounded-[32px] border border-slate-300 p-6 shadow-sm hover:shadow-md transition-shadow hover:border-[#a4e678] min-h-[200px] flex flex-col"
            >
              <div className="w-12 h-12 bg-[#511ae4] rounded-full flex items-center justify-center mb-6 text-white font-bold text-[17px] shadow-inner flex-shrink-0">
                {benefit.id}
              </div>
              <p className="text-[13px] text-slate-700 font-medium leading-relaxed mt-auto pb-2">
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
