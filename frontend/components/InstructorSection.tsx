"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const instructors = [
  {
    id: 1,
    name: "Anna Lyndsey",
    role: "Author and trainer",
    course: "of the course",
    tags: ["CEO in TradeZone", "CEO in Gosmart", "Chief BA in Limos", "Career Therapist"],
    about: "I play a pivotal role in shaping the learning experience for the business analysis course. Drawing upon my expertise in the field, I provide hands-on guidance to ensure students acquire practical skills and valuable insights. My role extends beyond traditional teaching as I offer mentorship to aspiring business analysts, empowering them to excel in their studies and prepare for successful careers.",
    faceColor: "bg-[#d4a373]",
    accentBg: "bg-[#a4e678]",
    tagBorder: "border-[#a4e678]",
  },
  {
    id: 2,
    name: "David Smith",
    role: "Senior Instructor",
    course: "of the course",
    tags: ["Senior Engineer", "Tech Lead", "Data Scientist", "Author"],
    about: "With over 10 years of experience in the tech industry, I bring real-world scenarios into the classroom. My goal is to bridge the gap between theoretical knowledge and practical application, helping students build robust and scalable systems.",
    faceColor: "bg-[#a3b1d4]",
    accentBg: "bg-[#f4a17d]",
    tagBorder: "border-[#f4a17d]",
  },
  {
    id: 3,
    name: "Sarah Chen",
    role: "Subject Matter Expert",
    course: "of the course",
    tags: ["Product Manager", "UX Researcher", "Agile Coach"],
    about: "Specializing in user-centric design and agile methodologies, I help students understand the product lifecycle from ideation to launch. I believe in fostering a collaborative environment where every idea can be tested and refined.",
    faceColor: "bg-[#d4a3a3]",
    accentBg: "bg-[#c8b7f7]",
    tagBorder: "border-[#c8b7f7]",
  },
  {
    id: 4,
    name: "Michael Johnson",
    role: "Guest Lecturer",
    course: "of the course",
    tags: ["Security Expert", "DevOps Engineer", "Cloud Architect"],
    about: "In an increasingly connected world, security is paramount. I teach students the fundamentals of cloud infrastructure and how to design systems that are both resilient and secure against modern threats.",
    faceColor: "bg-[#a3d4b1]",
    accentBg: "bg-[#fce096]",
    tagBorder: "border-[#fce096]",
  },
  {
    id: 5,
    name: "Emily Davis",
    role: "Teaching Assistant",
    course: "of the course",
    tags: ["Frontend Developer", "Open Source Contributor", "Mentor"],
    about: "I'm here to support your learning journey every step of the way. From debugging complex CSS issues to optimizing React applications, I provide practical tips and tricks that you can immediately apply to your projects.",
    faceColor: "bg-[#d4d4a3]",
    accentBg: "bg-[#a1bcf4]",
    tagBorder: "border-[#a1bcf4]",
  }
];

const benefits = [
  {
    id: 1,
    title: "Flexible Learning with Video Access",
    description: "Enjoy flexible learning through video records, enabling convenient review of lectures and discussions.",
    color: "bg-[#a4e678]",
    border: "border-[#a4e678]"
  },
  {
    id: 2,
    title: "Expert Guidance via Mentorship",
    description: "Mentorship, providing personalized guidance for you and your questions.",
    color: "bg-[#f4a17d]",
    border: "border-[#f4a17d]"
  },
  {
    id: 3,
    title: "Interactive Live Workshops",
    description: "Participate in real-time exercises alongside peers to put theoretical concepts into practice immediately.",
    color: "bg-[#c8b7f7]",
    border: "border-[#c8b7f7]"
  },
  {
    id: 4,
    title: "Dedicated Q&A Sessions",
    description: "Weekly office hours where instructors break down complex problems and answer your specific questions.",
    color: "bg-[#fce096]",
    border: "border-[#fce096]"
  },
  {
    id: 5,
    title: "Real-world Project Portfolio",
    description: "Build a comprehensive portfolio of practical projects that you can showcase to future employers.",
    color: "bg-[#a1bcf4]",
    border: "border-[#a1bcf4]"
  },
  {
    id: 6,
    title: "Lifetime Community Access",
    description: "Join an exclusive network of alumni and professionals for continued learning and career opportunities.",
    color: "bg-[#d4a373]",
    border: "border-[#d4a373]"
  }
];

const InstructorSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const bottomSectionRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);
  const scrollCardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const bottomSection = bottomSectionRef.current;
    const scrollCards = scrollCardsRef.current;
    const scrollWrapper = scrollWrapperRef.current;

    if (!bottomSection || !scrollCards || !scrollWrapper) return;

    let mm = gsap.matchMedia();
    
    mm.add("(min-width: 1024px)", () => {
      const getScrollAmount = () => {
        let cardsWidth = scrollCards.scrollWidth;
        let wrapperWidth = scrollWrapper.clientWidth;
        return -(cardsWidth - wrapperWidth + 100); 
      };

      const tween = gsap.to(scrollCards, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: bottomSection,
          start: "center center", 
          end: () => `+=${Math.abs(getScrollAmount())}`,
          pin: true,
          scrub: 1, 
          invalidateOnRefresh: true,
          anticipatePin: 1,
        }
      });
      
      return () => {
        tween.kill();
      }
    });
  }, { scope: bottomSectionRef });

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % instructors.length);
        setIsTransitioning(false);
      }, 300); 
    }, 5000); 

    return () => clearInterval(timer);
  }, []);

  const currentInstructor = instructors[currentIndex];

  return (
    <section className="relative w-full bg-[#fdfdfd] py-24 overflow-hidden border-t border-slate-100">

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-20">
        
        {/* Top Part: Author Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-12 mb-16 lg:mb-32 items-center">
          
          {/* Left: Author Image/Graphic */}
          <div className="relative w-full max-w-[450px] mx-auto lg:mx-0">
             {/* Base solid purple rounded rectangle behind the image */}
             <div className="w-full pt-[100%] bg-[#511ae4] rounded-[40px] shadow-lg relative overflow-hidden">
                {/* Yellow accent lines */}
                <div className="absolute top-12 right-12 w-12 h-12">
                   <div className={`absolute top-0 right-0 w-8 h-2 ${currentInstructor.accentBg} rounded-full rotate-45 transform origin-right transition-colors duration-500`}></div>
                   <div className={`absolute top-4 right-0 w-6 h-2 ${currentInstructor.accentBg} rounded-full rotate-45 transform origin-right transition-colors duration-500`}></div>
                   <div className={`absolute top-8 right-0 w-4 h-2 ${currentInstructor.accentBg} rounded-full rotate-45 transform origin-right transition-colors duration-500`}></div>
                </div>

                {/* Abstract shape behind author */}
                <div className={`absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] h-[110%] ${currentInstructor.accentBg} rounded-[60px] transform rotate-[10deg] scale-110 transition-colors duration-500`}></div>
                
                {/* Image Placeholder - Since we don't have the real image, using a generic dark placeholder that mimics the shape of a person */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[90%] flex justify-center items-end overflow-hidden rounded-b-[40px]">
                   <div className="w-full h-full bg-[#1e1e1e] rounded-t-full relative">
                     {/* Face/Head placeholder */}
                     <div className={`absolute top-[10%] left-1/2 -translate-x-1/2 w-32 h-40 ${currentInstructor.faceColor} rounded-[40px] z-10 transition-colors duration-500`}></div>
                     <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-36 h-48 bg-[#2d2320] rounded-t-[50px] rounded-b-[20px] z-0"></div>
                   </div>
                </div>
             </div>
          </div>

          {/* Right: Author Details */}
          <div className="flex flex-col relative">
            {/* Overlay wrapper to handle opacity transition nicely */}
            <div className={`flex flex-col transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
              <h2 className="text-3xl md:text-4xl lg:text-[46px] font-bold leading-[1.15] tracking-tight text-slate-900 mb-6 lg:mb-8">
                <span className="text-[#511ae4] italic font-medium">{currentInstructor.role}</span><br />
                {currentInstructor.course}
              </h2>

              <h3 className="text-xl font-bold text-slate-900 mb-6">{currentInstructor.name}</h3>

              {/* Tags Ribbon */}
              <div className="flex flex-wrap gap-3 mb-8">
                {currentInstructor.tags.map(tag => (
                  <span key={tag} className={`px-5 py-2.5 border ${currentInstructor.tagBorder} text-slate-700 text-sm font-medium rounded-2xl bg-white shadow-sm transition-colors duration-500`}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="space-y-2 mb-10">
                <h4 className="text-sm font-bold text-slate-900">About me</h4>
                <p className="text-sm font-medium text-slate-600 leading-relaxed max-w-lg min-h-[120px]">
                  {currentInstructor.about}
                </p>
              </div>
            </div>

            {/* Pagination Dots beneath text but NOT inside the fading container */}
            <div className="flex gap-2">
              {instructors.map((instructor, idx) => (
                <button
                  key={instructor.id}
                  onClick={() => {
                    setIsTransitioning(true);
                    setTimeout(() => {
                      setCurrentIndex(idx);
                      setIsTransitioning(false);
                    }, 300);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentIndex === idx ? 'bg-[#511ae4] w-6' : 'bg-slate-300'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                ></button>
              ))}
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
        <div ref={bottomSectionRef} className="mt-16 lg:mt-32 border-t border-slate-100 pt-12 lg:pt-16 min-h-0 lg:min-h-screen flex flex-col justify-center relative">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start w-full max-w-6xl mx-auto">
            
            {/* Left Content */}
            <div className="lg:col-span-5 relative w-full">
              <h2 className="text-3xl md:text-[44px] lg:text-[50px] font-bold leading-[1.15] tracking-tight text-slate-900 mb-10 lg:mb-20 relative z-10">
                <span className="text-[#511ae4] italic font-medium">Each student</span> of the<br />
                course <span className="text-[#511ae4] italic font-medium">will receive</span>
              </h2>

              <div className="flex items-start gap-3 relative z-10">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#badbad] to-[#80bd6e] shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),0_4px_8px_rgba(130,190,110,0.4)] flex-shrink-0 mt-1"></div>
                <p className="text-xs font-semibold text-slate-600 max-w-[280px] leading-relaxed">
                  Our courses are designed to be effective for everyone. Whether you study online or watch our recorded lectures.
                </p>
              </div>

              {/* Character Illustration Next to Text */}
              <div className="absolute bottom-[-10%] lg:bottom-[-20%] right-0 md:right-[10%] lg:right-[-20%] w-[100px] lg:w-[120px] h-[200px] lg:h-[250px] z-0 drop-shadow-2xl opacity-40 lg:opacity-100 pointer-events-none">
                {/* Dummy placeholder for 3d character */}
                <div className="w-16 h-20 bg-[#695d7f] rounded-[30px] absolute top-[20%] left-1/2 -translate-x-1/2 z-10"></div>
                <div className="w-12 h-26 bg-[#7742e6] rounded-full absolute bottom-[10%] left-[20%] z-0 rotate-12"></div>
                <div className="w-12 h-26 bg-[#7742e6] rounded-full absolute bottom-[10%] right-[20%] z-0 -rotate-12"></div>
                <div className="w-12 h-12 bg-[#8c6753] rounded-full absolute top-[10%] left-1/2 -translate-x-1/2 z-20"></div>
              </div>

              {/* Small floating icon Top Left */}
              <div className="absolute -top-8 lg:-top-16 right-4 lg:right-auto lg:left-24 w-12 h-12 bg-gradient-to-br from-[#7742e6] to-[#4512d1] rounded-full shadow-lg items-center justify-center p-2 z-0 hidden md:flex">
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
            <div className="lg:col-span-7 flex flex-col lg:pt-0 pt-12">
              <div className="flex items-center gap-2 mb-4 pl-4 lg:pl-0 lg:hidden">
                <span className="text-xs font-bold text-slate-800">Scroll</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-slate-800">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>

              <div ref={scrollWrapperRef} className="lg:overflow-hidden w-full">
                <div 
                  ref={scrollCardsRef} 
                  className="flex gap-4 lg:gap-6 pb-8 px-2 lg:px-0 scrollbar-hide w-full lg:w-max overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:snap-none"
                >
                  
                  {/* Mapping over benefits array to create cards */}
                  {benefits.map((benefit) => (
                    <div 
                      key={benefit.id} 
                      className={`snap-center shrink-0 w-[280px] bg-white border ${benefit.border} rounded-[32px] p-8 shadow-sm hover:shadow-md transition-shadow`}
                    >
                      <div className={`w-12 h-12 ${benefit.color} rounded-full flex items-center justify-center mb-6 shadow-inner text-slate-800 font-bold text-lg`}>
                        {benefit.id}
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 leading-tight mb-4 pr-4 min-h-[56px]">
                        {benefit.title}
                      </h3>
                      <p className="text-[13px] text-slate-600 font-medium leading-relaxed pb-4">
                        {benefit.description}
                      </p>
                    </div>
                  ))}

                  {/* Empty decorative card at the end for visual spacing/effect */}
                  <div className="snap-center shrink-0 w-[80px] bg-white border-y border-l border-slate-200 rounded-l-[32px] shadow-sm relative overflow-hidden">
                  </div>

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

export default InstructorSection;
