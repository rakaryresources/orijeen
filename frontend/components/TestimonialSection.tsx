"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const testimonials = [
  {
    id: 1,
    name: "Arjun Sharma",
    role: "JEE Advanced 2025",
    quote:
      "Orijeen transformed the way I approach problem-solving. The structured practice and mentorship helped me crack JEE Advanced with a top 500 rank.",
    avatar: "AS",
    accent: "#a4e678",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "NEET 2025 Qualifier",
    quote:
      "The biology sessions were incredible. Ms. Sweta's teaching method made complex concepts feel simple. I scored 680+ in NEET thanks to Orijeen.",
    avatar: "PP",
    accent: "#f4a17d",
    rating: 5,
  },
  {
    id: 3,
    name: "Rahul Verma",
    role: "JEE Mains 99.2%ile",
    quote:
      "The daily practice problems and mock tests built my confidence. The faculty is always available for doubt clearing, even late at night.",
    avatar: "RV",
    accent: "#c8b7f7",
    rating: 5,
  },
  {
    id: 4,
    name: "Sneha Gupta",
    role: "NEET AIR 342",
    quote:
      "I joined the Foundation Builder programme in Class 11 and it gave me a massive head start. The structured approach is unmatched.",
    avatar: "SG",
    accent: "#fce096",
    rating: 5,
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "JEE Advanced 2024",
    quote:
      "Mr. Shubham's physics classes changed everything for me. His concept-first approach made me fall in love with the subject all over again.",
    avatar: "VS",
    accent: "#a1bcf4",
    rating: 5,
  },
  {
    id: 6,
    name: "Ananya Das",
    role: "NEET 2024 Topper",
    quote:
      "The recorded lectures saved me during revision season. I could revisit tough topics anytime. Best decision I made was joining Orijeen.",
    avatar: "AD",
    accent: "#d4a373",
    rating: 5,
  },
  {
    id: 7,
    name: "Karan Mehta",
    role: "JEE Mains 98.8%ile",
    quote:
      "Chemistry was my weakest subject. Mr. Balram's classes turned it into my strongest. The weekly tests helped me track my progress perfectly.",
    avatar: "KM",
    accent: "#f47265",
    rating: 5,
  },
  {
    id: 8,
    name: "Divya Nair",
    role: "NEET 2025 Qualifier",
    quote:
      "The personalised feedback after every mock test was a game changer. The teachers genuinely care about each student's progress.",
    avatar: "DN",
    accent: "#a4e678",
    rating: 4,
  },
  {
    id: 9,
    name: "Rohan Joshi",
    role: "JEE Advanced 2025",
    quote:
      "The maths sessions with Mr. Shubham Vishwakarma were brilliant. Speed and accuracy drills boosted my score dramatically.",
    avatar: "RJ",
    accent: "#c8b7f7",
    rating: 5,
  },
  {
    id: 10,
    name: "Meera Iyer",
    role: "Foundation Builder Batch",
    quote:
      "Starting early with the Foundation course was the smartest choice. I'm well ahead of my classmates now. Highly recommend Orijeen!",
    avatar: "MI",
    accent: "#fce096",
    rating: 5,
  },
];

// Split testimonials into 4 columns for the diamond grid
const col1 = testimonials.filter((_, i) => i % 4 === 0);
const col2 = testimonials.filter((_, i) => i % 4 === 1);
const col3 = testimonials.filter((_, i) => i % 4 === 2);
const col4 = testimonials.filter((_, i) => i % 4 === 3);

// Triple the items for seamless infinite loop
const tripleItems = (items: typeof testimonials) => [
  ...items,
  ...items,
  ...items,
];

const StarIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-[#f5c45a]"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

interface TestimonialCardProps {
  testimonial: (typeof testimonials)[0];
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => (
  <div className="w-56 shrink-0 mx-auto group">
    <div className="w-full bg-white/95 rounded-[22px] shadow-[0_6px_20px_rgba(15,23,42,0.06)] hover:shadow-[0_10px_28px_rgba(15,23,42,0.09)] transition-all duration-500 overflow-hidden relative p-5.5">
      {/* Accent stripe top */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-45"
        style={{ backgroundColor: testimonial.accent }}
      />

      {/* Avatar & Info Row */}
      <div className="flex items-center gap-2.5 mb-3.5">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-white font-semibold text-[10px] shadow-[0_4px_10px_rgba(0,0,0,0.12)] shrink-0"
          style={{
            background: `linear-gradient(135deg, ${testimonial.accent}, #511ae4)`,
          }}
        >
          {testimonial.avatar}
        </div>
        <div>
          <p className="text-[11px] font-semibold text-slate-800 leading-tight tracking-[0.01em]">
            {testimonial.name}
          </p>
          <p
            className="text-[10px] font-medium leading-tight mt-0.5 opacity-80"
            style={{ color: testimonial.accent }}
          >
            {testimonial.role}
          </p>
        </div>
      </div>

      {/* Stars */}
      <div className="flex gap-0.5 mb-2.5 opacity-90">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>

      {/* Quote */}
      <p className="text-[10.5px] text-slate-600/90 font-normal leading-[1.7] line-clamp-4">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Decorative corner accent */}
      <div
        className="absolute bottom-0 right-0 w-16 h-16 rounded-tl-full opacity-[0.05]"
        style={{ backgroundColor: testimonial.accent }}
      />
    </div>
  </div>
);

interface ScrollColumnProps {
  items: typeof testimonials;
  direction: "up" | "down";
  speed: number;
  columnRef: React.RefObject<HTMLDivElement | null>;
}

const ScrollColumn = ({ items, columnRef }: ScrollColumnProps) => {
  const tripled = tripleItems(items);

  return (
    <div className="h-full overflow-hidden relative">
      <div
        ref={columnRef}
        className="flex flex-col gap-5"
        style={{
          willChange: "transform",
        }}
      >
        {tripled.map((t, i) => (
          <TestimonialCard key={`${t.id}-${i}`} testimonial={t} />
        ))}
      </div>
    </div>
  );
};

const TestimonialSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);
  const col3Ref = useRef<HTMLDivElement>(null);
  const col4Ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const columns = [
        { ref: col1Ref.current, direction: "up" },
        { ref: col2Ref.current, direction: "down" },
        { ref: col3Ref.current, direction: "up" },
        { ref: col4Ref.current, direction: "down" },
      ];

      columns.forEach(({ ref, direction }) => {
        if (!ref) return;

        // Get the height of one set of items (1/3 of total since we tripled)
        const singleSetHeight = ref.scrollHeight / 3;

        // Position: "down" columns start offset so they scroll opposite
        if (direction === "down") {
          gsap.set(ref, { y: -singleSetHeight });
        }

        // Create the infinite scroll animation
        gsap.to(ref, {
          y: direction === "up" ? -singleSetHeight : 0,
          ease: "none",
          duration: direction === "up" ? 30 : 35,
          repeat: -1,
          modifiers: {
            y: gsap.utils.unitize((y: number) => {
              const val = parseFloat(String(y));
              if (direction === "up") {
                // When scrolling up, reset when we've scrolled one set
                return val % singleSetHeight;
              } else {
                // When scrolling down, keep cycling
                const mod = val % singleSetHeight;
                return mod - singleSetHeight;
              }
            }),
          },
        });
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full pt-12 pb-24 bg-[#fdfdfd] overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[6%] left-[6%] w-72 h-72 bg-[#a4e678]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[8%] right-[3%] w-96 h-96 bg-[#511ae4]/12 rounded-full blur-3xl" />
        <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-120 h-120 bg-white/50 rounded-full blur-3xl" />
        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(81,26,228,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(81,26,228,0.08) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 pb-8 lg:pb-10 relative z-20">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 lg:mb-18 relative">
          <div className="max-w-2xl relative z-10">
            <h2 className="text-4xl md:text-[44px] lg:text-[50px] font-semibold leading-[1.16] tracking-tight text-slate-900">
              What our{" "}
              <span className="text-[#511ae4] italic font-medium">
                students
              </span>
              <br />
              are{" "}
              <span className="text-[#511ae4] italic font-medium">saying</span>
            </h2>
            <p className="text-sm font-normal text-slate-600/90 max-w-md leading-relaxed mt-5">
              Real stories from learners who improved rank, confidence, and
              consistency through focused guidance and practice.
            </p>
          </div>

          {/* Top Right Graphics Area */}
          <div className="absolute -top-[90px] -right-[10px] w-[420px] h-[320px] hidden lg:block z-0 group cursor-pointer transition-transform duration-700 hover:scale-[1.02] transform scale-[0.85] origin-right xl:scale-100">
            {/* Floating glow backdrop */}
            <div className="absolute top-[30%] right-[30%] w-56 h-56 bg-gradient-to-br from-[#a4e678] to-[#609a47] rounded-full blur-3xl opacity-20 group-hover:opacity-35 transition-opacity duration-700"></div>

            {/* Main central orb */}
            <div className="absolute top-[20%] right-[20%] w-60 h-60 flex items-center justify-center">
              <div className="w-48 h-48 bg-gradient-to-br from-[#511ae4] to-[#2d0e8a] rounded-full absolute z-0 shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.2),0_15px_30px_rgba(81,26,228,0.3)] border-[4px] border-[#6b3deb] transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-[10deg]"></div>
              <div className="relative z-10 w-20 h-20 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/90 text-[34px] font-light shadow-[0_6px_20px_rgba(0,0,0,0.22)]">
                &ldquo;
              </div>
            </div>

            {/* Back dark review card */}
            <div className="absolute top-[25%] right-[25%] w-36 h-48 bg-gradient-to-b from-[#1e1e2f] to-[#0f0f1a] rounded-2xl z-10 transform -rotate-[15deg] shadow-[0_25px_45px_rgba(0,0,0,0.4)] border border-slate-700 p-4 transition-all duration-700 group-hover:-rotate-[5deg] group-hover:-translate-x-4 group-hover:-translate-y-4">
              <div className="w-14 h-2 bg-[#a4e678] rounded-full mb-3 shadow-[0_0_10px_rgba(164,230,120,0.35)]"></div>
              <div className="flex gap-1 mb-3 text-[#fbbf24]">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
              <div className="flex flex-col gap-2.5">
                <div className="w-4/5 h-2 bg-slate-600 rounded-full"></div>
                <div className="w-3/4 h-2 bg-slate-600 rounded-full"></div>
                <div className="w-11/12 h-2 bg-slate-600 rounded-full"></div>
              </div>
              <div className="w-full h-6 bg-gradient-to-r from-[#5f43b6] to-[#3d278f] mt-8 rounded-lg border border-[#7b67c4]/40 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-white/10"></div>
              </div>
            </div>

            {/* Front light testimonial card */}
            <div className="absolute top-[35%] right-[5%] w-44 h-36 bg-white/95 backdrop-blur-xl rounded-2xl z-20 transform rotate-[10deg] shadow-[0_20px_40px_rgba(0,0,0,0.15),-10px_-10px_20px_rgba(255,255,255,0.4)_inset] border border-white/80 p-4 flex flex-col transition-all duration-700 group-hover:rotate-[20deg] group-hover:translate-x-4 group-hover:-translate-y-2">
              <div className="flex gap-2 items-center mb-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-bl from-[#a4e678] to-[#609a47] flex items-center justify-center shadow-[inset_1px_1px_3px_rgba(255,255,255,0.6)] text-white text-[9px] font-semibold">
                  AD
                </div>
                <div className="w-16 h-3 bg-[#a4e678] rounded-full opacity-50"></div>
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
              <div className="mt-auto self-end w-14 h-7 bg-gradient-to-br from-[#fce096] to-[#dca543] rounded-md shadow-inner flex items-center justify-center -skew-x-12 border border-[#fff2b2]">
                <div className="w-1/2 h-1 bg-white/80 rounded-full"></div>
              </div>
            </div>

            {/* Review score coin */}
            <div className="absolute top-[10%] right-[5%] w-16 h-16 bg-gradient-to-br from-[#f8d46a] to-[#dca543] rounded-full z-30 transform -rotate-12 shadow-[0_15px_25px_rgba(220,165,67,0.4),inset_4px_4px_8px_rgba(255,255,255,0.8),inset_-4px_-4px_8px_rgba(200,140,40,0.8)] border-[2px] border-[#fff2b2] flex items-center justify-center transition-all duration-700 group-hover:-translate-y-6 group-hover:rotate-[15deg] group-hover:scale-110">
              <div className="w-10 h-10 rounded-full border-[2px] border-[#fff2b2]/80 flex items-center justify-center text-[#a76315] text-[11px] font-bold opacity-90">
                4.9
              </div>
            </div>

            {/* Small coin accent */}
            <div className="absolute top-[50%] right-[60%] w-10 h-10 bg-gradient-to-br from-[#f8d46a] to-[#dca543] rounded-full z-10 transform rotate-[25deg] shadow-[0_10px_15px_rgba(220,165,67,0.3),inset_2px_2px_5px_rgba(255,255,255,0.8)] border border-[#fff2b2] flex items-center justify-center transition-all duration-700 group-hover:-translate-x-5 group-hover:rotate-[50deg]">
              <div className="w-5 h-5 border border-[#fff2b2]/80 rounded-full opacity-80"></div>
            </div>

            {/* Verified badge */}
            <div className="absolute bottom-[20%] right-[35%] w-24 h-24 bg-gradient-to-tr from-[#2563eb] to-[#1d4ed8] rounded-[24px] z-40 transform -rotate-[12deg] shadow-[0_20px_35px_rgba(37,99,235,0.35),inset_4px_4px_10px_rgba(255,255,255,0.45)] border border-[#93c5fd] flex flex-col items-center justify-center transition-all duration-700 group-hover:-rotate-[5deg] group-hover:-translate-y-4 group-hover:scale-110">
              <span className="text-white font-black text-[22px] leading-none tracking-tight drop-shadow-md">
                98%
              </span>
              <span className="text-[8px] mt-1 font-semibold uppercase tracking-[0.08em] text-blue-100">
                Happy
              </span>
              <div className="absolute -top-3 -right-3 w-8 h-8 text-yellow-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 transform group-hover:rotate-45 group-hover:scale-125">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z"></path>
                </svg>
              </div>
            </div>

            <div className="absolute top-[70%] right-[5%] w-6 h-6 bg-gradient-to-br from-[#a1bcf4] to-[#6c86e2] rounded-full z-30 shadow-[0_5px_10px_rgba(108,134,226,0.3)] transition-transform duration-700 group-hover:translate-x-3 group-hover:-translate-y-2 border border-[#dbe4fa]"></div>
          </div>
        </div>

        {/* Scrolling Columns Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-6xl mx-auto h-175 relative">
          {/* Column 1 - Scrolls Up */}
          <ScrollColumn
            items={col1}
            direction="up"
            speed={30}
            columnRef={col1Ref}
          />

          {/* Column 2 - Scrolls Down (offset) */}
          <div className="mt-10">
            <ScrollColumn
              items={col2}
              direction="down"
              speed={35}
              columnRef={col2Ref}
            />
          </div>

          {/* Column 3 - Scrolls Up (hidden on mobile) */}
          <div className="hidden lg:block">
            <ScrollColumn
              items={col3}
              direction="up"
              speed={32}
              columnRef={col3Ref}
            />
          </div>

          {/* Column 4 - Scrolls Down offset (hidden on mobile) */}
          <div className="hidden lg:block mt-10">
            <ScrollColumn
              items={col4}
              direction="down"
              speed={28}
              columnRef={col4Ref}
            />
          </div>

          {/* Top fade overlay */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-20 z-30 bg-gradient-to-b from-[#fdfdfd] via-[#fdfdfd]/80 to-transparent" />
        </div>
      </div>

      {/* Section bottom fade overlay */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 lg:h-32 z-30 bg-gradient-to-t from-[#fdfdfd] via-[#fdfdfd]/88 to-transparent" />
    </section>
  );
};

export default TestimonialSection;
