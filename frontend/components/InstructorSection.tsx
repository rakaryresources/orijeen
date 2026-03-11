"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const instructors = [
  {
    id: 1,
    name: "Mr. Balram Mishra",
    role: "Btech, NIT Durgapur",
    course: "Chemistry Faculty",
    tags: ["JEE Expert", "Senior Faculty", "Mentor"],
    about:
      "I play a pivotal role in shaping the learning experience for the students. Drawing upon my expertise in the field, I provide hands-on guidance to ensure students acquire practical skills and valuable insights.",
    image: "/ins1.png",
    socials: { facebook: "#", twitter: "#", instagram: "#" },
    accentBg: "bg-[#a4e678]",
    tagBorder: "border-[#a4e678]",
  },
  {
    id: 2,
    name: "Ms. Monali Mondal",
    role: "B.Sc., M.Sc. in Chemistry",
    course: "Chemistry Faculty",
    tags: ["Chemistry Expert", "Senior Faculty", "Dedicated Mentor"],
    about:
      "With extensive experience in chemistry education, I bring real-world scenarios into the classroom. My goal is to bridge the gap between theoretical knowledge and practical application.",
    image: "/ins2.png",
    socials: { facebook: "#", twitter: "#", instagram: "#" },
    accentBg: "bg-[#f4a17d]",
    tagBorder: "border-[#f4a17d]",
  },
  {
    id: 3,
    name: "Mr. Shubham Tanti",
    role: "Bsc, Msc Physics",
    course: "Physics Faculty",
    tags: ["Physics Expert", "Concept Builder", "Board & JEE"],
    about:
      "Specializing in concept building, I help students understand complex physics phenomena from the ground up. I believe in fostering a collaborative environment where every idea can be tested.",
    image: "/ins3.png",
    socials: { facebook: "#", twitter: "#", instagram: "#" },
    accentBg: "bg-[#c8b7f7]",
    tagBorder: "border-[#c8b7f7]",
  },
  {
    id: 4,
    name: "Ms. Sweta Suman",
    role: "Bsc, and MSc Biology (Zoology)",
    course: "Biology Faculty",
    tags: ["NEET Expert", "Zoology Specialist", "Exam Strategist"],
    about:
      "Focusing on deep biological concepts, I teach students the fundamentals of life sciences. My approach prepares students thoroughly for competitive medical entrance exams like NEET.",
    image: "/ins4.jpg",
    socials: { facebook: "#", twitter: "#", instagram: "#" },
    accentBg: "bg-[#fce096]",
    tagBorder: "border-[#fce096]",
  },
  {
    id: 5,
    name: "Mr. Abhishek Banerjee",
    role: "Bsc, Msc & B.Ed. in Chemistry",
    course: "Chemistry Faculty",
    tags: ["Academic Leader", "Chemistry Wizard", "Student Guide"],
    about:
      "I'm here to support your learning journey every step of the way. From breaking down organic chemistry reactions to mastering physical chemistry numericals, I provide practical tips.",
    image: "/ins5.jpg",
    socials: { facebook: "#", twitter: "#", instagram: "#" },
    accentBg: "bg-[#a1bcf4]",
    tagBorder: "border-[#a1bcf4]",
  },
  {
    id: 6,
    name: "Mr. Shubham Vishwakarma",
    role: "Bsc, B.Ed. in Mathematics",
    course: "Mathematics Faculty",
    tags: ["Math Expert", "Problem Solving", "Speed & Accuracy"],
    about:
      "Mathematics is the language of logic. I guide students through complex problem-solving techniques, ensuring they build both speed and accuracy for competitive exams.",
    image: "/ins6.jpg",
    socials: { facebook: "#", twitter: "#", instagram: "#" },
    accentBg: "bg-[#d4a373]",
    tagBorder: "border-[#d4a373]",
  },
];

const benefits = [
  {
    id: 1,
    title: "Flexible Learning with Video Access",
    description:
      "Enjoy flexible learning through video records, enabling convenient review of lectures and discussions.",
    color: "bg-[#a4e678]",
    border: "border-[#a4e678]",
  },
  {
    id: 2,
    title: "Expert Guidance via Mentorship",
    description:
      "Mentorship, providing personalized guidance for you and your questions.",
    color: "bg-[#f4a17d]",
    border: "border-[#f4a17d]",
  },
  {
    id: 3,
    title: "Interactive Live Workshops",
    description:
      "Participate in real-time exercises alongside peers to put theoretical concepts into practice immediately.",
    color: "bg-[#c8b7f7]",
    border: "border-[#c8b7f7]",
  },
  {
    id: 4,
    title: "Dedicated Q&A Sessions",
    description:
      "Weekly office hours where instructors break down complex problems and answer your specific questions.",
    color: "bg-[#fce096]",
    border: "border-[#fce096]",
  },
  {
    id: 5,
    title: "Real-world Project Portfolio",
    description:
      "Build a comprehensive portfolio of practical projects that you can showcase to future employers.",
    color: "bg-[#a1bcf4]",
    border: "border-[#a1bcf4]",
  },
  {
    id: 6,
    title: "Lifetime Community Access",
    description:
      "Join an exclusive network of alumni and professionals for continued learning and career opportunities.",
    color: "bg-[#d4a373]",
    border: "border-[#d4a373]",
  },
];

const InstructorSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const bottomSectionRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);
  const scrollCardsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
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
          },
        });

        return () => {
          tween.kill();
        };
      });
    },
    { scope: bottomSectionRef },
  );

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
          <div className="relative w-full max-w-[460px] mx-auto lg:mx-0 flex justify-center lg:justify-start items-center">
            {/* Base container for image with advanced borders and shadows */}
            <div className="w-full aspect-square bg-[#0a0a0a] border border-gray-900 p-1.5 shadow-[0_30px_60px_-15px_rgba(81,26,228,0.2),0_0_0_1px_rgba(255,255,255,0.5)_inset] relative group rounded-[2.5rem] z-10">
              {/* Inner wrapper for the actual image */}
              <div className="absolute inset-1.5 rounded-[2.25rem] overflow-hidden bg-[#0a0a0a] ring-1 ring-white/10">
                {currentInstructor.image ? (
                  <Image
                    src={currentInstructor.image}
                    alt={currentInstructor.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400">
                    Image Placeholder
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right: Author Details */}
          <div className="flex flex-col relative">
            {/* Overlay wrapper to handle opacity transition nicely */}
            <div
              className={`flex flex-col transition-opacity duration-300 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
            >
              <h2 className="text-3xl md:text-4xl lg:text-[46px] font-bold leading-[1.15] tracking-tight text-slate-900 mb-3 lg:mb-4">
                <span className="text-[#511ae4] italic font-medium">
                  {currentInstructor.course}
                </span>
              </h2>

              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                {currentInstructor.name}
              </h3>

              <p className="text-[#f47265] font-semibold text-[17px] mb-6">
                {currentInstructor.role}
              </p>

              {/* Tags Ribbon */}
              <div className="flex flex-wrap gap-3 mb-8">
                {currentInstructor.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-5 py-2.5 border ${currentInstructor.tagBorder} text-slate-700 text-sm font-medium rounded-2xl bg-white shadow-sm transition-colors duration-500`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mb-10">
                <h4 className="text-sm font-bold text-slate-900 mb-2">About me</h4>
                <p className="text-sm font-medium text-slate-600 leading-relaxed max-w-lg mb-6">
                  {currentInstructor.about}
                </p>
                {/* Social Links */}
                <div className="flex items-center gap-5">
                  <a
                    href={currentInstructor.socials.facebook}
                    className="w-12 h-12 rounded-full bg-slate-50 hover:bg-[#511ae4] flex items-center justify-center transition-all duration-300 group shadow-[0_4px_14px_rgba(0,0,0,0.04)] border border-slate-100"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-slate-600 group-hover:text-white transition-colors">
                      <path d="M14.542 12H12.607V19.167H9.727V12H8.381V9.529H9.727V7.817C9.727 6.131 10.495 5.048 12.646 5.048L14.735 5.05V7.411H13.228C12.261 7.411 12.183 7.788 12.183 8.361V9.529H14.739L14.542 12Z" />
                    </svg>
                  </a>
                  <a
                    href={currentInstructor.socials.twitter}
                    className="w-12 h-12 rounded-full bg-slate-50 hover:bg-[#511ae4] flex items-center justify-center transition-all duration-300 group shadow-[0_4px_14px_rgba(0,0,0,0.04)] border border-slate-100"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-slate-600 group-hover:text-white transition-colors">
                      <path d="M22 5.8a8.49 8.49 0 0 1-2.36.65 4.14 4.14 0 0 0 1.8-2.27 8.24 8.24 0 0 1-2.6.99 4.13 4.13 0 0 0-7.03 3.77A11.72 11.72 0 0 1 3.29 4.67a4.13 4.13 0 0 0 1.28 5.51A4.08 4.08 0 0 1 2.7 9.6v.05a4.13 4.13 0 0 0 3.3 4.04 4.1 4.1 0 0 1-1.86.07 4.13 4.13 0 0 0 3.86 2.86 8.29 8.29 0 0 1-5.13 1.77A8.4 8.4 0 0 1 2 18.28a11.68 11.68 0 0 0 6.33 1.85c7.6 0 11.75-6.3 11.75-11.75 0-.18 0-.36-.01-.54A8.38 8.38 0 0 0 22 5.8z" />
                    </svg>
                  </a>
                  <a
                    href={currentInstructor.socials.instagram}
                    className="w-12 h-12 rounded-full bg-slate-50 hover:bg-[#511ae4] flex items-center justify-center transition-all duration-300 group shadow-[0_4px_14px_rgba(0,0,0,0.04)] border border-slate-100"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-slate-600 group-hover:text-white transition-colors"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="4" ry="4"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                </div>
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
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentIndex === idx ? "bg-[#511ae4] w-6" : "bg-slate-300"}`}
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
        <div
          ref={bottomSectionRef}
          className="mt-16 lg:mt-32 border-t border-slate-100 pt-12 lg:pt-16 min-h-0 lg:min-h-screen flex flex-col justify-center relative"
        >
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start w-full max-w-6xl mx-auto">
            {/* Left Content */}
            <div className="lg:col-span-5 relative w-full">
              <h2 className="text-3xl md:text-[44px] lg:text-[50px] font-bold leading-[1.15] tracking-tight text-slate-900 mb-10 lg:mb-20 relative z-10">
                <span className="text-[#511ae4] italic font-medium">
                  Each student
                </span>{" "}
                of the
                <br />
                course{" "}
                <span className="text-[#511ae4] italic font-medium">
                  will receive
                </span>
              </h2>

              <div className="flex items-start gap-3 relative z-10">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#badbad] to-[#80bd6e] shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),0_4px_8px_rgba(130,190,110,0.4)] flex-shrink-0 mt-1"></div>
                <p className="text-xs font-semibold text-slate-600 max-w-[280px] leading-relaxed">
                  Our courses are designed to be effective for everyone. Whether
                  you study online or watch our recorded lectures.
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
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    className="text-white"
                  >
                    <path d="M5 12l5 5L20 7"></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* Right Content - Horizontal Scroll Cards */}
            <div className="lg:col-span-7 flex flex-col lg:pt-0 pt-12">
              <div className="flex items-center gap-2 mb-4 pl-4 lg:pl-0 lg:hidden">
                <span className="text-xs font-bold text-slate-800">Scroll</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="text-slate-800"
                >
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
                      <div
                        className={`w-12 h-12 ${benefit.color} rounded-full flex items-center justify-center mb-6 shadow-inner text-slate-800 font-bold text-lg`}
                      >
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
                  <div className="snap-center shrink-0 w-[80px] bg-white border-y border-l border-slate-200 rounded-l-[32px] shadow-sm relative overflow-hidden"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;
