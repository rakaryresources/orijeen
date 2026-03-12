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
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-[#fbbf24]"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

interface TestimonialCardProps {
  testimonial: (typeof testimonials)[0];
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => (
  <div className="w-60 shrink-0 mx-auto group">
    <div className="w-full bg-white rounded-[24px] border border-slate-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_50px_rgba(81,26,228,0.15)] transition-all duration-500 hover:border-[#511ae4]/30 overflow-hidden relative p-6">
      {/* Accent stripe top */}
      <div
        className="absolute top-0 left-0 right-0 h-1 opacity-60"
        style={{ backgroundColor: testimonial.accent }}
      />

      {/* Avatar & Info Row */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg shrink-0"
          style={{
            background: `linear-gradient(135deg, ${testimonial.accent}, #511ae4)`,
          }}
        >
          {testimonial.avatar}
        </div>
        <div>
          <p className="text-[12px] font-bold text-slate-900 leading-tight">
            {testimonial.name}
          </p>
          <p
            className="text-[10px] font-semibold leading-tight mt-0.5"
            style={{ color: testimonial.accent }}
          >
            {testimonial.role}
          </p>
        </div>
      </div>

      {/* Stars */}
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>

      {/* Quote */}
      <p className="text-[11px] text-slate-600 font-medium leading-relaxed line-clamp-4">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Decorative corner accent */}
      <div
        className="absolute bottom-0 right-0 w-20 h-20 rounded-tl-full opacity-[0.07]"
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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ScrollColumn = ({ items, direction, columnRef }: ScrollColumnProps) => {
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
      className="relative w-full py-12 bg-[#fdfdfd] overflow-hidden"
    >
      {/* Blue background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-[#a4e678]/10 rounded-full blur-3xl" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-[#7742e6]/30 rounded-full blur-3xl" />
        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-0.5 bg-[#0a0a0a]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em]">
              Testimonials
            </span>
            <div className="w-8 h-0.5 bg-[#0a0a0a]" />
          </div>
          <h2 className="text-3xl md:text-[44px] lg:text-[50px] font-bold leading-[1.15] tracking-tight text-[#0a0a0a] mb-6">
            What our{" "}
            <span className="text-[#511ae4] italic font-medium">students</span>
            <br />
            have to{" "}
            <span className="text-[#511ae4] italic font-medium">say</span>
          </h2>
          <p className="text-sm font-medium text-white/60 max-w-md mx-auto leading-relaxed">
            Hear from our students who achieved their dreams through our
            structured programmes and dedicated mentorship.
          </p>
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
          <div className="mt-25">
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
          <div className="hidden lg:block mt-25">
            <ScrollColumn
              items={col4}
              direction="down"
              speed={28}
              columnRef={col4Ref}
            />
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-34 lg:mt-36">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex -space-x-3">
              {testimonials.slice(0, 4).map((t) => (
                <div
                  key={t.id}
                  className="w-10 h-10 rounded-full border-2 border-[#511ae4] flex items-center justify-center text-white text-[10px] font-bold shadow-md"
                  style={{
                    background: `linear-gradient(135deg, ${t.accent}, #511ae4)`,
                  }}
                >
                  {t.avatar}
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-[#511ae4] bg-white flex items-center justify-center text-[#511ae4] text-[10px] font-bold shadow-md">
                +50
              </div>
            </div>
          </div>
          <p className="text-sm font-semibold text-[#0a0a0a] mb-1">
            Trusted by <span className="text-[#511ae4]">500+</span> students
          </p>
          <p className="text-xs text-slate-500 font-medium">
            Join the Orijeen family today
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
