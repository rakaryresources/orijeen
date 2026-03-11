"use client";

import React, { useState } from "react";
import HoverDiagonalGrid from "./ui/HoverDiagonalGrid";

const programsData = [
  {
    id: "foundation-builder",
    name: "Foundation Builder",
    duration: "10-11 months",
    time: "Class 11 & 12",
    seats: { left: 10, total: 30 },

    modules: [
      {
        id: 1,
        title: "Physics Foundations",
        onlineLessons: 60,
        homeworks: 35,
        details: [
          "Kinematics, Motion in 1D & 2D",
          "Laws of Motion and Friction",
          "Work, Energy and Power",
          "Circular Motion",
          "Rotational Mechanics Basics",
          "Thermodynamics Fundamentals",
          "Heat Transfer Concepts",
          "Weekly numerical practice sessions",
        ],
      },

      {
        id: 2,
        title: "Chemistry Core Concepts",
        onlineLessons: 55,
        homeworks: 30,
        details: [
          "Mole Concept and Stoichiometry",
          "Atomic Structure",
          "Chemical Bonding",
          "States of Matter",
          "Thermodynamics in Chemistry",
          "Equilibrium",
          "Basic Organic Chemistry",
          "Periodic Table Trends",
        ],
      },

      {
        id: 3,
        title: "Mathematics Fundamentals",
        onlineLessons: 65,
        homeworks: 40,
        details: [
          "Algebra Fundamentals",
          "Quadratic Equations",
          "Sequences and Series",
          "Trigonometric Functions",
          "Coordinate Geometry",
          "Straight Line & Circle",
          "Limits and Basic Calculus",
          "Vectors introduction",
        ],
      },

      {
        id: 4,
        title: "Biology Foundations",
        onlineLessons: 50,
        homeworks: 28,
        details: [
          "Cell Structure and Function",
          "Biomolecules",
          "Plant Physiology Basics",
          "Human Physiology Fundamentals",
          "Structural Organisation in Animals",
          "Genetics Basics",
          "Ecology Introduction",
        ],
      },

      {
        id: 5,
        title: "Weekly Practice & Assignments",
        onlineLessons: 20,
        homeworks: 50,
        details: [
          "Topic-wise assignments",
          "Daily Practice Problems (DPP)",
          "Chapter revision worksheets",
          "MCQ concept drills",
          "Difficulty progression exercises",
        ],
      },

      {
        id: 6,
        title: "Monthly Mock Tests",
        onlineLessons: 12,
        homeworks: 12,
        details: [
          "Full syllabus mock exams",
          "Topic-wise test series",
          "AI-based performance analysis",
          "Rank prediction and benchmarking",
          "Personalized feedback reports",
        ],
      },

      {
        id: 7,
        title: "Doubt Solving System",
        onlineLessons: 30,
        homeworks: 10,
        details: [
          "Live doubt clearing sessions",
          "Dedicated doubt portal",
          "Faculty mentorship calls",
          "Problem solving workshops",
          "Peer discussion groups",
        ],
      },

      {
        id: 8,
        title: "Revision & Crash Program",
        onlineLessons: 25,
        homeworks: 15,
        details: [
          "Rapid syllabus revision",
          "Key formula recap",
          "PYQ solving marathons",
          "Exam simulation practice",
        ],
      },
    ],
  },
  {
    id: "advanced-achievers",
    name: "Advanced Achievers",
    duration: "10-11 months",
    time: "IIT JEE / NEET",
    seats: { left: 5, total: 30 },

    modules: [
      {
        id: 1,
        title: "Advanced Physics Problem Solving",
        onlineLessons: 75,
        homeworks: 45,
        details: [
          "Rotational Mechanics Advanced",
          "Electrostatics",
          "Current Electricity",
          "Magnetism and EMI",
          "Wave Optics",
          "Modern Physics",
          "Advanced numerical drills",
        ],
      },

      {
        id: 2,
        title: "Advanced Chemistry Mastery",
        onlineLessons: 70,
        homeworks: 40,
        details: [
          "Physical Chemistry Problem Solving",
          "Reaction Mechanisms",
          "Organic Chemistry Advanced",
          "Coordination Compounds",
          "Electrochemistry",
          "Surface Chemistry",
          "NCERT deep revision",
        ],
      },

      {
        id: 3,
        title: "Advanced Mathematics",
        onlineLessons: 80,
        homeworks: 50,
        details: [
          "Differential Calculus",
          "Integral Calculus",
          "Differential Equations",
          "Vectors & 3D Geometry",
          "Probability and Statistics",
          "Advanced Coordinate Geometry",
        ],
      },

      {
        id: 4,
        title: "NEET Biology Deep Dive",
        onlineLessons: 70,
        homeworks: 40,
        details: [
          "Human Physiology Detailed",
          "Plant Physiology",
          "Molecular Genetics",
          "Evolution",
          "Biotechnology",
          "Ecology",
        ],
      },

      {
        id: 5,
        title: "Previous Year Questions Lab",
        onlineLessons: 30,
        homeworks: 35,
        details: [
          "JEE Advanced PYQ analysis",
          "NEET PYQ topic mapping",
          "Difficulty pattern recognition",
          "Speed solving strategies",
        ],
      },

      {
        id: 6,
        title: "All India Test Series (AITS)",
        onlineLessons: 20,
        homeworks: 20,
        details: [
          "Full length national level tests",
          "AI ranking prediction",
          "Competitive benchmarking",
          "Weakness heatmap analysis",
        ],
      },

      {
        id: 7,
        title: "Mentorship & Strategy",
        onlineLessons: 15,
        homeworks: 5,
        details: [
          "Exam strategy workshops",
          "Time management training",
          "Personal performance mentoring",
          "Stress management sessions",
        ],
      },
    ],
  },
  {
    id: "repeater-achievers",
    name: "Repeater Achievers",
    duration: "8-10 months",
    time: "Dropper / Target Batch",
    seats: { left: 12, total: 30 },

    modules: [
      {
        id: 1,
        title: "Complete Syllabus Rapid Revision",
        onlineLessons: 60,
        homeworks: 50,
        details: [
          "Class 11 syllabus quick revision",
          "Class 12 syllabus revision",
          "Concept strengthening lectures",
          "Key formulas and theory recap",
        ],
      },

      {
        id: 2,
        title: "High Weightage Topic Focus",
        onlineLessons: 45,
        homeworks: 35,
        details: [
          "Exam trend analysis",
          "Important chapters coverage",
          "Score maximization techniques",
          "Shortcut solving strategies",
        ],
      },

      {
        id: 3,
        title: "Daily Practice Problem System",
        onlineLessons: 25,
        homeworks: 60,
        details: [
          "Daily Practice Problems (DPP)",
          "Difficulty graded assignments",
          "Timed practice drills",
        ],
      },

      {
        id: 4,
        title: "Full Length Mock Tests",
        onlineLessons: 20,
        homeworks: 20,
        details: [
          "Weekly full syllabus tests",
          "Exam simulation environment",
          "Detailed rank analysis",
        ],
      },

      {
        id: 5,
        title: "Weakness Elimination Program",
        onlineLessons: 20,
        homeworks: 25,
        details: [
          "Personalized topic improvement",
          "Faculty mentoring sessions",
          "Targeted practice sheets",
        ],
      },

      {
        id: 6,
        title: "Final Rank Booster",
        onlineLessons: 15,
        homeworks: 10,
        details: [
          "Final revision camps",
          "Last month strategy",
          "Topper solving sessions",
        ],
      },
    ],
  },
];

const ProgramIllustration = ({ programId }: { programId: string }) => {
  if (programId === "foundation-builder") {
    return (
      <div className="absolute top-0 right-0 w-[300px] h-[200px] hidden lg:block -translate-y-12 translate-x-12 z-0 animate-in fade-in zoom-in duration-500 group cursor-pointer">
        <div className="w-64 h-64 bg-gradient-to-br from-[#7742e6] to-[#4512d1] rounded-full absolute top-0 right-10 shadow-2xl transition-transform duration-700 group-hover:scale-105"></div>

        {/* Fake UI window 1 - Notebook/Formulas */}
        <div className="absolute top-[20%] right-16 w-48 h-32 bg-white/90 backdrop-blur-sm rounded-xl shadow-xl transform rotate-[-8deg] overflow-hidden border border-white p-3 transition-all duration-500 group-hover:rotate-0 group-hover:-translate-y-2 group-hover:shadow-2xl">
          <div className="flex gap-1.5 mb-3">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
          </div>
          {/* Fake content lines */}
          <div className="space-y-2">
            <div className="w-3/4 h-2 bg-slate-200 rounded-full"></div>
            <div className="w-1/2 h-2 bg-[#7742e6]/30 rounded-full"></div>
            <div className="w-5/6 h-2 bg-slate-100 rounded-full"></div>
          </div>
          {/* Decorative atom-like or geometric shape */}
          <div className="absolute bottom-[-10px] right-[-10px] w-20 h-20 border-4 border-[#a1ded5]/40 rounded-full rotate-12 transition-transform duration-700 group-hover:rotate-45"></div>
        </div>

        {/* Fake floating object - Equation symbol / Geometry */}
        <div className="absolute top-[80%] left-[-10px] w-14 h-14 bg-gradient-to-tr from-[#ed7f9b] to-[#f4a5b9] rounded-2xl shadow-lg rotate-12 flex items-center justify-center -translate-y-10 border border-white/40 transition-all duration-500 group-hover:rotate-[24deg] group-hover:-translate-y-14 group-hover:scale-110">
          <div className="w-0 h-0 border-l-[12px] border-l-transparent border-b-[20px] border-b-white border-r-[12px] border-r-transparent"></div>
        </div>

        <div className="absolute top-[-10px] left-[50px] w-10 h-10 bg-gradient-to-br from-[#eabe88] to-[#d69f5c] rounded-lg shadow-md border border-white/40 transition-transform duration-500 group-hover:-translate-y-3 group-hover:rotate-12"></div>

        {/* Dark Blue Window / Card - Physics/Math graphic */}
        <div className="absolute top-[45%] right-[-10px] w-40 h-28 bg-[#2d1b6e]/95 backdrop-blur-md rounded-xl shadow-2xl transform rotate-[12deg] p-4 border border-white/20 flex flex-col justify-center gap-3 transition-all duration-500 group-hover:rotate-[6deg] group-hover:translate-x-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border-[3px] border-[#fce096]/80 flex items-center justify-center relative overflow-hidden group-hover:border-[#fce096] transition-colors">
              <div className="w-4 h-4 rounded-full bg-[#fce096] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-125 transition-transform duration-300"></div>
            </div>
            <div className="flex flex-col gap-1.5 flex-1">
              <div className="w-full h-1.5 bg-[#8ba1f3]/50 rounded-full"></div>
              <div className="w-2/3 h-1.5 bg-[#7742e6] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (programId === "advanced-achievers") {
    return (
      <div className="absolute top-0 right-0 w-[300px] h-[200px] hidden lg:block -translate-y-12 translate-x-12 z-0 animate-in fade-in zoom-in duration-500 group cursor-pointer">
        <div className="w-64 h-64 bg-gradient-to-br from-[#12cf97] to-[#0b9c71] rounded-full absolute top-0 right-10 shadow-2xl transition-transform duration-700 group-hover:scale-105"></div>

        {/* Chart Window - Performance Tracking */}
        <div className="absolute top-[15%] right-16 w-52 h-36 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl transform rotate-[5deg] overflow-hidden border border-white p-4 transition-all duration-500 group-hover:rotate-[-2deg] group-hover:-translate-y-2 group-hover:shadow-2xl">
          <div className="text-[10px] font-bold text-slate-400 mb-2 tracking-wider">
            MOCK TEST ANALYSIS
          </div>
          <div className="flex gap-2.5 items-end h-[60%] pt-2">
            <div className="w-full bg-slate-200 rounded-t-sm h-[30%] origin-bottom transition-all duration-500 group-hover:h-[40%]"></div>
            <div className="w-full bg-[#a1ded5] rounded-t-sm h-[70%] origin-bottom transition-all duration-500 group-hover:h-[85%]"></div>
            <div className="w-full bg-[#ed7f9b] rounded-t-sm h-[90%] origin-bottom transition-all duration-500 group-hover:h-[65%]"></div>
            <div className="w-full bg-[#511ae4] rounded-t-sm h-[50%] origin-bottom transition-all duration-500 group-hover:h-[95%]"></div>
          </div>
        </div>

        {/* Fake floating object - Target/Focus */}
        <div className="absolute top-[80%] left-[10px] w-14 h-14 bg-gradient-to-br from-[#2d1b6e] to-[#1a0f44] rounded-full shadow-lg rotate-12 flex items-center justify-center border border-white/20 transition-all duration-500 group-hover:scale-125 group-hover:-translate-y-4">
          <div className="w-6 h-6 border-[3px] border-[#a4e678] rounded-full relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#a4e678] rounded-full"></div>
          </div>
        </div>

        {/* Code / Status Card */}
        <div className="absolute top-[50%] right-[-20px] w-40 h-24 bg-[#1e1e2f]/95 backdrop-blur-md rounded-xl shadow-2xl transform rotate-[-10deg] p-4 border border-white/10 flex flex-col justify-center gap-2.5 transition-all duration-500 group-hover:rotate-0 group-hover:translate-x-3">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
          </div>
          <div className="w-3/4 h-2 bg-[#ed7f9b] rounded-full transition-all duration-300 group-hover:w-full"></div>
          <div className="w-full h-2 bg-[#a1ded5] rounded-full"></div>
          <div className="w-1/2 h-2 bg-[#a4e678] rounded-full transition-all duration-300 group-hover:w-2/3"></div>
        </div>
      </div>
    );
  }

  if (programId === "repeater-achievers") {
    return (
      <div className="absolute top-0 right-0 w-[300px] h-[200px] hidden lg:block -translate-y-12 translate-x-12 z-0 animate-in fade-in zoom-in duration-500 group cursor-pointer">
        <div className="w-64 h-64 bg-gradient-to-br from-[#ff7e5f] to-[#feb47b] rounded-full absolute top-0 right-10 shadow-2xl transition-transform duration-700 group-hover:scale-105"></div>

        {/* Schedule / Time Management Window */}
        <div className="absolute top-[15%] right-12 w-52 h-36 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl transform rotate-[-5deg] overflow-hidden border border-white p-3 flex flex-col gap-2 transition-all duration-500 group-hover:rotate-[2deg] group-hover:-translate-y-2 group-hover:shadow-2xl">
          <div className="flex justify-between items-center mb-1">
            <div className="w-16 h-2 bg-slate-200 rounded-full"></div>
            <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center">
              <div className="w-3 h-3 border-2 border-slate-300 rounded-full border-t-[#ff7e5f] animate-spin"></div>
            </div>
          </div>
          <div className="flex gap-2 h-full">
            <div className="w-1/3 flex flex-col gap-2">
              <div className="w-full h-full bg-slate-100 rounded-lg transition-colors group-hover:bg-[#ff7e5f]/10"></div>
              <div className="w-full h-full bg-slate-100 rounded-lg transition-colors group-hover:bg-[#ff7e5f]/10"></div>
            </div>
            <div className="w-2/3 h-full bg-gradient-to-b from-[#a1ded5] to-[#7acbc0] rounded-lg opacity-90 p-2 relative overflow-hidden text-[#1a5b50]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-4 h-4 text-white opacity-60 absolute bottom-2 right-2 group-hover:scale-125 transition-transform"
              >
                <path
                  d="M5 13l4 4L19 7"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Fake floating object - Flashcard/Notes */}
        <div className="absolute top-[75%] right-[20px] w-14 h-14 bg-[#511ae4] rounded-xl shadow-lg transform rotate-12 border border-white/20 flex flex-col items-center justify-center gap-1.5 transition-all duration-500 group-hover:rotate-45 group-hover:-translate-y-5 group-hover:scale-110">
          <div className="w-6 h-1 bg-white/50 rounded-full"></div>
          <div className="w-4 h-1 bg-white/80 rounded-full"></div>
          <div className="w-6 h-1 bg-white/50 rounded-full"></div>
        </div>

        {/* Priority Tiers Card */}
        <div className="absolute top-[40%] left-[-20px] w-28 h-32 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl transform rotate-[15deg] p-2 border border-white flex flex-col gap-1.5 transition-all duration-500 group-hover:rotate-0 group-hover:translate-x-4">
          <div className="flex items-center justify-between px-1 mb-1">
            <div className="w-8 h-2 bg-slate-200 rounded-full"></div>
            <div className="w-3 h-3 rounded-full border-2 border-slate-300"></div>
          </div>
          <div className="w-full flex-1 bg-gradient-to-r from-[#ff7e5f] to-[#ff9980] rounded-md relative overflow-hidden group-hover:flex-[1.2] transition-all duration-300">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/40"></div>
          </div>
          <div className="w-full h-6 bg-[#2d1b6e] rounded-md relative overflow-hidden"></div>
          <div className="w-full h-6 bg-[#a1ded5] rounded-md relative overflow-hidden"></div>
        </div>
      </div>
    );
  }

  return null;
};

const ProgramSection = () => {
  const [activeProgramId, setActiveProgramId] = useState(programsData[0].id);
  const [openModule, setOpenModule] = useState<number | null>(1);

  const activeProgram =
    programsData.find((p) => p.id === activeProgramId) || programsData[0];

  const handleProgramSwitch = (id: string) => {
    setActiveProgramId(id);
    setOpenModule(1);
  };

  const toggleModule = (id: number) => {
    setOpenModule(openModule === id ? null : id);
  };

  return (
    <section className="relative w-full bg-[#fdfdfd] py-24 overflow-hidden border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-20">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 relative">
          <div className="relative z-10 w-full md:w-auto">
            <h2 className="text-4xl md:text-[44px] lg:text-[50px] font-bold leading-[1.15] tracking-tight text-slate-900 mb-8">
              <span className="text-[#511ae4] italic font-medium">Program</span>{" "}
              of the courses
            </h2>

            {/* Course Selector Tabs */}
            <div className="flex flex-wrap gap-3 mb-8">
              {programsData.map((program) => (
                <button
                  key={program.id}
                  onClick={() => handleProgramSwitch(program.id)}
                  className={`px-5 py-2 rounded-full text-[14px] font-semibold transition-all ${
                    activeProgramId === program.id
                      ? "bg-[#511ae4] text-white shadow-md border border-[#511ae4]"
                      : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  {program.name}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-8 text-sm text-slate-900">
              <div className="flex flex-col">
                <span className="text-slate-500 text-xs mb-1 font-medium">
                  duration
                </span>
                <span className="font-bold text-base">
                  {activeProgram.duration as string}
                </span>
              </div>
              <div className="h-8 w-px bg-slate-300"></div>
              <div className="flex flex-col">
                <span className="text-slate-500 text-xs mb-1 font-medium">
                  focus
                </span>
                <span className="font-bold text-base">
                  {activeProgram.time}
                </span>
              </div>
            </div>
          </div>

          {/* Top Right Graphic */}
          <ProgramIllustration programId={activeProgramId} />
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-4">
          {activeProgram.modules.map((mod) => (
            <div
              key={mod.id}
              className={`group relative rounded-3xl border transition-all duration-300 overflow-hidden cursor-pointer ${
                openModule === mod.id
                  ? "border-[#a4e678] bg-white shadow-sm"
                  : "border-slate-300 bg-white hover:border-slate-400"
              }`}
              onClick={() => toggleModule(mod.id)}
            >
              <HoverDiagonalGrid />
              <div className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative">
                {/* Module Number */}
                <div className="w-full md:w-1/4">
                  <span className="font-bold text-slate-800 text-[15px]">
                    Module {mod.id}
                  </span>
                </div>

                {/* Main Content */}
                <div className="flex-1">
                  <h3 className="text-[22px] font-bold text-slate-900 leading-tight mb-4 whitespace-pre-line">
                    {mod.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-3 mt-4 md:mt-0">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-300 text-xs font-semibold text-slate-700">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-[#511ae4]"
                      >
                        <rect
                          x="2"
                          y="4"
                          width="20"
                          height="16"
                          rx="2"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path d="M10 9L15 12L10 15V9Z" fill="currentColor" />
                      </svg>
                      {mod.onlineLessons} online lessons
                    </span>
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-300 text-xs font-semibold text-slate-700">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-[#511ae4]"
                      >
                        <path
                          d="M4 19.5C4 18.837 4.53726 18.3 5.2 18.3H19C19.6627 18.3 20 18.837 20 19.5C20 20.163 19.6627 20.7 19 20.7H5.2C4.53726 20.7 4 20.163 4 19.5Z"
                          fill="currentColor"
                        />
                        <path
                          d="M4 19.5V5.2C4 4.53726 4.53726 4 5.2 4H19C19.6627 4 20 4.53726 20 5.2V19.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M12 4V14"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                      {mod.homeworks} homeworks
                    </span>
                  </div>
                </div>

                {/* The "More / Less" Circle Button + Arrow Indicator block */}
                <div className="flex items-center gap-4">
                  {/* Circle text button visible on md+ screens */}
                  <div
                    className={`hidden md:flex w-[72px] h-[72px] rounded-full border items-center justify-center transition-colors ${
                      openModule === mod.id
                        ? "border-[#a4e678]"
                        : "border-slate-300 hover:border-[#a4e678] hover:bg-[#a4e678]/10"
                    }`}
                  >
                    <span className="text-xs font-bold text-slate-900 leading-none">
                      {openModule === mod.id ? "Less" : "More"}
                    </span>
                  </div>

                  {/* Arrow Indicator relative to flex block */}
                  <div className="flex items-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`text-slate-800 transition-transform ${openModule === mod.id ? "rotate-180" : ""}`}
                    >
                      <path d="M7 17l9.2-9.2M17 17V7H7" />
                    </svg>
                  </div>
                </div>
              </div>{" "}
              {/* Close Header Row */}
              {/* Accordion Expanded Content */}
              {openModule === mod.id && mod.details && (
                <div className="px-6 md:px-8 pb-8 md:pl-[25%] border-t border-slate-200 mt-0 bg-white shadow-inner">
                  <ul className="space-y-4 pt-6 max-w-lg">
                    {mod.details.map((detail, index) => (
                      <li
                        key={index}
                        className="text-[15px] font-medium text-slate-700 flex gap-3 leading-relaxed tracking-wide"
                      >
                        <span className="text-slate-800">{index + 1}.</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Booking Block */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 pt-6">
          <div className="w-full md:w-auto flex flex-col">
            <span className="text-xs font-semibold text-slate-500 mb-1">
              seats left
            </span>
            <span className="text-2xl font-bold text-slate-900">
              {activeProgram.seats.left} of {activeProgram.seats.total}
            </span>
          </div>

          <button className="w-full md:flex-1 md:max-w-md bg-[#a4e678] hover:bg-[#8ee05b] text-[#1e1e1e] font-semibold text-[15px] px-8 py-5 rounded-2xl flex items-center justify-center gap-3 transition-transform hover:scale-[1.01] active:scale-[0.99]">
            <div className="w-5 h-5 rounded-full border-[1.5px] border-slate-800 flex items-center justify-center relative">
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="-mr-[1px]"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </div>
            Book a seat
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
