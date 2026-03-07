import React from "react";

const AuthorAndContentSection = () => {
  return (
    <section className="relative w-full bg-[#fdfdfd] py-24 overflow-hidden font-sans border-t border-slate-100">

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-20">
        
        {/* Top Part: Author Section */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 mb-32 items-center">
          
          {/* Left: Author Image/Graphic */}
          <div className="relative w-full max-w-[450px] mx-auto lg:mx-0">
             {/* Base solid purple rounded rectangle behind the image */}
             <div className="w-full pt-[100%] bg-[#511ae4] rounded-[40px] shadow-lg relative overflow-hidden">
                {/* Yellow accent lines */}
                <div className="absolute top-12 right-12 w-12 h-12">
                   <div className="absolute top-0 right-0 w-8 h-2 bg-[#a4e678] rounded-full rotate-45 transform origin-right"></div>
                   <div className="absolute top-4 right-0 w-6 h-2 bg-[#a4e678] rounded-full rotate-45 transform origin-right"></div>
                   <div className="absolute top-8 right-0 w-4 h-2 bg-[#a4e678] rounded-full rotate-45 transform origin-right"></div>
                </div>

                {/* Abstract green shape behind author */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] h-[110%] bg-[#a4e678] rounded-[60px] transform rotate-[10deg] scale-110"></div>
                
                {/* Image Placeholder - Since we don't have the real image, using a generic dark placeholder that mimics the shape of a person */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[90%] flex justify-center items-end overflow-hidden rounded-b-[40px]">
                   <div className="w-full h-full bg-[#1e1e1e] rounded-t-full relative">
                     {/* Face/Head placeholder */}
                     <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-32 h-40 bg-[#d4a373] rounded-[40px] z-10"></div>
                     <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-36 h-48 bg-[#2d2320] rounded-t-[50px] rounded-b-[20px] z-0"></div>
                   </div>
                </div>
             </div>
          </div>

          {/* Right: Author Details */}
          <div className="flex flex-col">
            <h2 className="text-4xl lg:text-[46px] font-bold leading-[1.15] tracking-tight text-slate-900 mb-8">
              <span className="text-[#511ae4] italic font-serif font-medium">Author and trainer</span><br />
              of the course
            </h2>

            <h3 className="text-xl font-bold text-slate-900 mb-6">Anna Lyndsey</h3>

            {/* Tags Ribbon */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-5 py-2.5 border border-[#a4e678] text-slate-700 text-sm font-medium rounded-2xl bg-white shadow-sm">
                CEO in TradeZone
              </span>
              <span className="px-5 py-2.5 border border-[#a4e678] text-slate-700 text-sm font-medium rounded-2xl bg-white shadow-sm">
                CEO in Gosmart
              </span>
              <span className="px-5 py-2.5 border border-[#a4e678] text-slate-700 text-sm font-medium rounded-2xl bg-white shadow-sm">
                Chief BA in Limos
              </span>
              <span className="px-5 py-2.5 border border-[#a4e678] text-slate-700 text-sm font-medium rounded-2xl bg-white shadow-sm">
                Career Therapist
              </span>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-bold text-slate-900">About me</h4>
              <p className="text-sm font-medium text-slate-600 leading-relaxed max-w-lg">
                I play a pivotal role in shaping the learning experience for the business analysis course. Drawing upon my expertise in the field, I provide hands-on guidance to ensure students acquire practical skills and valuable insights. My role extends beyond traditional teaching as I offer mentorship to aspiring business analysts, empowering them to excel in their studies and prepare for successful careers.
              </p>
            </div>
            
            {/* Absolute positioned floating icon for right side */}
            <div className="hidden lg:block absolute top-[50px] right-0 w-32 h-32 transform translate-x-16">
               <div className="w-full h-full bg-gradient-to-br from-[#7742e6] to-[#4512d1] rounded-full shadow-lg relative flex items-center justify-center p-4">
                 <div className="w-full h-full bg-[#8ba1f3] rounded-lg -rotate-12 shadow-md relative overflow-hidden flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-[#fce096] absolute right-2 bottom-2"></div>
                    <div className="w-4 h-4 rounded-full bg-white/50 absolute left-2 top-2"></div>
                 </div>
                 {/* Red smiling face sticker */}
                 <div className="absolute -right-2 top-4 w-10 h-10 bg-[#f47265] rounded-full shadow-md z-10 flex flex-col items-center justify-center gap-1 -rotate-12">
                   <div className="flex gap-2">
                     <div className="w-1.5 h-1.5 bg-[#4a2e26] rounded-full"></div>
                     <div className="w-1.5 h-1.5 bg-[#4a2e26] rounded-full"></div>
                   </div>
                   <div className="w-4 h-1.5 bg-[#4a2e26] rounded-b-full"></div>
                 </div>
               </div>
            </div>

          </div>
        </div>

        {/* Bottom Part: "Each student..." Section */}
        <div className="mt-32 border-t border-slate-100 pt-16">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            
            {/* Left Content */}
            <div className="lg:col-span-5 relative">
              <h2 className="text-4xl md:text-[44px] lg:text-[50px] font-bold leading-[1.15] tracking-tight text-slate-900 mb-20 relative z-10">
                <span className="text-[#511ae4] italic font-serif font-medium">Each student</span> of the<br />
                course <span className="text-[#511ae4] italic font-serif font-medium">will receive</span>
              </h2>

              <div className="flex items-start gap-3 relative z-10">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#badbad] to-[#80bd6e] shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),0_4px_8px_rgba(130,190,110,0.4)] flex-shrink-0 mt-1"></div>
                <p className="text-xs font-semibold text-slate-600 max-w-[280px] leading-relaxed">
                  Our courses are designed to be effective for everyone. Whether you study online or watch our recorded lectures.
                </p>
              </div>

              {/* Character Illustration Next to Text */}
              <div className="absolute bottom-[-20%] right-[-10%] md:right-[10%] lg:right-[-20%] w-[120px] h-[250px] z-0 drop-shadow-2xl">
                {/* Dummy placeholder for 3d character */}
                <div className="w-16 h-20 bg-[#695d7f] rounded-[30px] absolute top-[20%] left-1/2 -translate-x-1/2 z-10"></div>
                <div className="w-12 h-26 bg-[#7742e6] rounded-full absolute bottom-[10%] left-[20%] z-0 rotate-12"></div>
                <div className="w-12 h-26 bg-[#7742e6] rounded-full absolute bottom-[10%] right-[20%] z-0 -rotate-12"></div>
                <div className="w-12 h-12 bg-[#8c6753] rounded-full absolute top-[10%] left-1/2 -translate-x-1/2 z-20"></div>
              </div>

              {/* Small floating icon Top Left */}
              <div className="absolute -top-16 left-24 w-12 h-12 bg-gradient-to-br from-[#7742e6] to-[#4512d1] rounded-full shadow-lg flex items-center justify-center p-2 z-0">
                <div className="w-full h-full bg-[#a1bcf4] rounded -rotate-12 border border-white/50 flex flex-col gap-1 p-1">
                  <div className="w-full h-1 bg-white/60"></div>
                  <div className="w-full h-1 bg-white/60"></div>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#c8b7f7] rounded-full border border-white flex items-center justify-center">
                   <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-white">
                      <path d="M5 12l5 5L20 7"></path>
                   </svg>
                </div>
              </div>
            </div>

            {/* Right Content - Horizontal Scroll Cards */}
            <div className="lg:col-span-7 flex flex-col pt-12">
              <div className="flex items-center gap-2 mb-4 pl-4 lg:pl-0">
                <span className="text-xs font-bold text-slate-800">Scroll</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-slate-800">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>

              <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory px-4 lg:px-0 scrollbar-hide">
                
                {/* Card 1 */}
                <div className="snap-center shrink-0 w-[280px] bg-white border border-[#a4e678] rounded-[32px] p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-[#a4e678] rounded-full flex items-center justify-center mb-6 shadow-inner text-slate-800 font-bold text-lg">
                    1
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 leading-tight mb-4 pr-4">
                    Flexible Learning with Video Access
                  </h3>
                  <p className="text-[13px] text-slate-600 font-medium leading-relaxed pb-4">
                    Enjoy flexible learning through video records, enabling convenient review of lectures and discussions.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="snap-center shrink-0 w-[280px] bg-white border border-[#a4e678] rounded-[32px] p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-[#a4e678] rounded-full flex items-center justify-center mb-6 shadow-inner text-slate-800 font-bold text-lg">
                    2
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 leading-tight mb-4 pr-4">
                    Expert Guidance via Mentorship
                  </h3>
                  <p className="text-[13px] text-slate-600 font-medium leading-relaxed pb-4">
                    Mentorship, providing personalized guidance for you and your questions.
                  </p>
                </div>

                {/* Card 3 (Partial view / decorative to prompt scroll in mockup) */}
                <div className="snap-center shrink-0 w-[80px] bg-white border-y border-l border-[#a4e678] rounded-l-[32px] shadow-sm relative overflow-hidden">
                   {/* Empty just for visual effect of off-screen card */}
                </div>

              </div>

              {/* Decorative bottom floating icon */}
              <div className="mx-auto mt-12 w-20 h-20 bg-gradient-to-br from-[#7742e6] to-[#4512d1] rounded-full flex relative items-center justify-center shadow-lg -ml-10">
                <div className="absolute top-2 left-6 w-8 h-8 rounded bg-[#a1bcf4] -rotate-12 border border-white/50"></div>
                <div className="absolute bottom-4 left-4 w-10 h-4 rounded-full bg-[#f4a17d] rotate-12"></div>
                <div className="absolute top-4 right-2 w-6 h-6 rounded-full bg-yellow-400 -rotate-12"></div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AuthorAndContentSection;
