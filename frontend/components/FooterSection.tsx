import React from "react";

const FooterSection = () => {
  return (
    <footer className="relative w-full bg-[#fdfdfd] py-12 lg:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto relative bg-[#0a0a0a] rounded-[32px] overflow-hidden border border-white/10 shadow-2xl p-8 lg:p-14 flex flex-col min-h-[450px] justify-between z-10">
        
        {/* Shimmering Diagonal Grid Background */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none opacity-[0.015]"
          style={{
            backgroundImage: "linear-gradient(-45deg, #ffffff 25%, transparent 25%, transparent 50%, #ffffff 50%, #ffffff 75%, transparent 75%, transparent)",
            backgroundSize: "24px 24px",
            animation: "footerDiagonalMove 2s linear infinite"
          }} 
        />
        
        {/* Shine Sweep Effect */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent bg-[length:200%_200%] animate-[shine_4s_ease-in-out_infinite] opacity-100" />

        <style dangerouslySetInnerHTML={{__html: `
          @keyframes footerDiagonalMove {
            0% { background-position: 0 0; }
            100% { background-position: 24px 24px; }
          }
          @keyframes shine {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
        `}} />

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 relative z-10 w-full mb-16 lg:mb-32">
          
          {/* Top Left: Label */}
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5e4d] shadow-[0_0_12px_#ff5e4d]"></div>
            <span className="text-white/90 text-xs font-semibold tracking-[0.2em] uppercase">
              Admission Information
            </span>
          </div>

          {/* Top Right: Links and Theme Toggle */}
          <div className="w-full lg:w-1/2 flex flex-col gap-12">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8">
              {/* Courses */}
              <div className="flex flex-col gap-3">
                <h4 className="text-white text-sm font-semibold mb-2">Courses</h4>
                <a href="#" className="text-[#a1a1aa] hover:text-white text-[13px] transition-colors">Foundation Builder (11-12)</a>
                <a href="#" className="text-[#a1a1aa] hover:text-white text-[13px] transition-colors">Advanced Achievers (JEE/NEET)</a>
                <a href="#" className="text-[#a1a1aa] hover:text-white text-[13px] transition-colors">Repeater Achievers</a>
                <a href="#" className="text-[#a1a1aa] hover:text-white text-[13px] transition-colors">Study Material</a>
                <a href="#" className="text-[#a1a1aa] hover:text-white text-[13px] transition-colors">Free Trial Class</a>
              </div>
              
              {/* Institute */}
              <div className="flex flex-col gap-3">
                <h4 className="text-white text-sm font-semibold mb-2">Institute</h4>
                <a href="#" className="text-[#a1a1aa] hover:text-white text-[13px] transition-colors">About Our Institute</a>
                <a href="#" className="text-[#a1a1aa] hover:text-white text-[13px] transition-colors">Our Faculty</a>
                <a href="#" className="text-[#a1a1aa] hover:text-white text-[13px] transition-colors">Success Stories</a>
                <a href="#" className="text-[#a1a1aa] hover:text-white text-[13px] transition-colors">Scholarships</a>
                <a href="#" className="text-[#a1a1aa] hover:text-white text-[13px] transition-colors">Student Results</a>
              </div>

              {/* Legal */}
              <div className="flex flex-col gap-3 lg:pl-4">
                <h4 className="text-white text-sm font-semibold mb-2">Legal</h4>
                <a href="#" className="text-[#a1a1aa] hover:text-white text-[13px] transition-colors">Privacy Policy</a>
                <a href="#" className="text-[#a1a1aa] hover:text-white text-[13px] transition-colors">Terms & Conditions</a>
                <a href="#" className="text-[#a1a1aa] hover:text-white text-[13px] transition-colors">Refund Policy</a>
                <a href="#" className="text-[#a1a1aa] hover:text-white text-[13px] transition-colors">Admission Policy</a>
                <a href="#" className="text-[#a1a1aa] hover:text-white text-[13px] transition-colors">Contact Us</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-10 relative z-10 w-full">
          {/* Logo bottom left */}
          <div className="flex items-center pb-2">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              {[0, 45, 90, 135].map((angle) => (
                <ellipse 
                  key={angle} 
                  cx="12" 
                  cy="12" 
                  rx="11" 
                  ry="3.5" 
                  transform={`rotate(${angle} 12 12)`} 
                  stroke="white" 
                  strokeWidth="1.5" 
                />
              ))}
            </svg>
          </div>

          {/* Socials & Copyright */}
          <div className="text-right flex flex-col gap-3 pb-1">
             <div className="text-[#e4e4e7] text-[13px] flex gap-2 justify-start lg:justify-end">
              <a href="#" className="hover:text-white transition-colors font-medium">Instagram</a>
              <span className="text-[#a1a1aa]">,</span>
              <a href="#" className="hover:text-white transition-colors font-medium">YouTube</a>
              <span className="text-[#a1a1aa]">,</span>
              <a href="#" className="hover:text-white transition-colors font-medium">Facebook</a>
            </div>
            <div className="text-[#a1a1aa] text-[13px]">
              © 2026 GoSmart Academy. All rights reserved.
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default FooterSection;
