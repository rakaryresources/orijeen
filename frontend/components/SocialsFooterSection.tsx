import React from "react";

const SocialsFooterSection = () => {
  const socials = [
    {
      id: "facebook",
      name: "Facebook",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="12" fill="#3b5998"/>
          <path d="M14.542 12H12.607V19.167H9.727V12H8.381V9.529H9.727V7.817C9.727 6.131 10.495 5.048 12.646 5.048L14.735 5.05V7.411H13.228C12.261 7.411 12.183 7.788 12.183 8.361V9.529H14.739L14.542 12Z" fill="white"/>
        </svg>
      )
    },
    {
      id: "telegram",
      name: "Telegram",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="12" fill="#0088cc"/>
          <path d="M17.428 6.34L4.76 11.231C4.76 11.231 4.102 11.458 4.167 11.979C4.225 12.5 4.885 12.723 4.885 12.723L8.038 13.684L9.623 18.528C9.623 18.528 9.771 18.995 10.158 18.895C10.518 18.802 10.648 18.452 10.648 18.452L12.551 16.591L15.932 19.068C15.932 19.068 16.565 19.458 16.946 19.123C17.327 18.788 17.202 17.989 17.202 17.989L19.165 7.027C19.165 7.027 19.333 5.672 18.3 5.61C17.228 5.545 15.908 6.19 15.908 6.19H17.428ZM8.621 13.064L15.533 8.657C15.533 8.657 16.035 8.359 16.069 8.675C16.103 8.991 15.65 9.382 15.65 9.382L9.742 14.805L9.362 17.473L8.621 13.064Z" fill="white"/>
        </svg>
      )
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="12" fill="#0077b5"/>
          <path d="M7.64 17.5H5.451V9.584H7.64V17.5ZM6.545 8.636C5.845 8.636 5.273 8.064 5.273 7.364C5.273 6.664 5.845 6.091 6.545 6.091C7.245 6.091 7.818 6.664 7.818 7.364C7.818 8.064 7.245 8.636 6.545 8.636ZM18.545 17.5H16.357V13.655C16.357 12.739 16.341 11.564 15.087 11.564C13.818 11.564 13.623 12.555 13.623 13.59V17.5H11.435V9.584H13.535V10.666H13.564C13.858 10.111 14.57 9.529 15.631 9.529C17.842 9.529 18.545 10.985 18.545 12.894V17.5Z" fill="white"/>
        </svg>
      )
    },
    {
      id: "instagram",
      name: "Instagram",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="6" fill="url(#paint0_linear)"/>
          <path d="M16 6H16.01M8 6H16C17.1046 6 18 6.89543 18 8V16C18 17.1046 17.1046 18 16 18H8C6.89543 18 6 17.1046 6 16V8C6 6.89543 6.89543 6 8 6ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <defs>
            <linearGradient id="paint0_linear" x1="4.00282" y1="19.9984" x2="20.3014" y2="4.35411" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FEDA77"/>
              <stop offset="0.25" stopColor="#F58529"/>
              <stop offset="0.5" stopColor="#DD2A7B"/>
              <stop offset="0.75" stopColor="#8134AF"/>
              <stop offset="1" stopColor="#515BD4"/>
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      id: "youtube",
      name: "Youtube",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="6" width="20" height="12" rx="4" fill="#FF0000"/>
          <path d="M10 15L15 12L10 9V15Z" fill="white"/>
        </svg>
      )
    },
    {
      id: "blog",
      name: "Gosmart blog",
      // Custom icon using the logo's SVG shape based on early components
      icon: (
        <svg width="30" height="20" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="-ml-1">
          <path d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22H28C33.523 22 38 17.523 38 12C38 6.477 33.523 2 28 2H12Z" fill="#a8f278" fillOpacity="0.5"/>
          <path d="M16 8C12.686 8 10 10.686 10 14C10 17.314 12.686 20 16 20H24C27.314 20 30 17.314 30 14C30 10.686 27.314 8 24 8H16Z" stroke="#632dec" strokeWidth="2"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="relative w-full bg-[#fdfdfd] pt-20 pb-12 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-20">
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center mb-16 relative">
          
          {/* Left Social Cards Grid */}
          <div className="grid grid-cols-2 gap-4">
            {socials.map((social) => (
              <a 
                href="#" 
                key={social.id}
                className="bg-white border border-slate-300 rounded-3xl p-6 md:p-8 flex flex-col justify-between h-32 md:h-40 hover:shadow-md transition-shadow hover:border-[#a4e678] group relative"
              >
                {/* Arrow Top Right */}
                <div className="absolute top-6 md:top-8 right-6 md:right-8 text-slate-400 group-hover:text-slate-900 transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17l9.2-9.2M17 17V7H7"/>
                  </svg>
                </div>
                
                {/* Icon */}
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center">
                  {social.icon}
                </div>

                {/* Name */}
                <span className="text-slate-800 font-bold text-sm md:text-base tracking-tight pb-1">
                  {social.name}
                </span>
              </a>
            ))}
          </div>

          {/* Right Text & Illustration Block */}
          <div className="flex flex-col relative h-full lg:min-h-[400px]">
            
            <h2 className="text-3xl md:text-5xl font-bold leading-[1.15] tracking-tight text-slate-900 lg:text-right mt-10 lg:mt-0 relative z-20">
              We actively share useful <br className="hidden lg:block"/>
              information on social <br className="hidden lg:block"/>
              media, so <span className="text-[#511ae4] italic font-serif font-medium">follow us</span>
            </h2>

            {/* Top Float Graphic Placeholder */}
            <div className="absolute -top-[120px] left-0 hidden lg:flex items-center justify-center w-48 h-48 z-10 pointer-events-none">
              <div className="w-40 h-40 bg-gradient-to-br from-[#7742e6] to-[#4512d1] rounded-full z-0 flex items-center justify-center relative">
                 <div className="w-24 h-16 bg-[#e1e2ec] rounded-xl transform -rotate-[20deg] shadow-lg border border-white/50 absolute top-[10%] left-[5%]"></div>
                 <div className="w-24 h-24 bg-[#a1bcf4] rounded-[50%] absolute right-[-10%] top-[40%] shadow-lg filter drop-shadow"></div>
                 
                 {/* Red smiling disc */}
                 <div className="w-16 h-16 bg-[#f47265] rounded-full absolute -top-[10px] -left-[10px] shadow-lg flex flex-col justify-center items-center gap-1">
                   <div className="flex gap-2">
                     <div className="w-1.5 h-1.5 bg-[#4a2e26] rounded-full"></div>
                     <div className="w-1.5 h-1.5 bg-[#4a2e26] rounded-full"></div>
                   </div>
                   <div className="w-3 h-1.5 bg-[#4a2e26] rounded-b-full"></div>
                 </div>
              </div>
            </div>

            {/* Central 3D Character Block */}
            <div className="mt-auto relative z-10 flex justify-center lg:justify-start lg:ml-12 w-[250px] h-[350px] mx-auto lg:mx-0">
               {/* Stand-in for Character */}
               <div className="w-12 h-16 bg-[#a76a52] rounded-3xl absolute top-[50px] left-1/2 -translate-x-1/2 z-20"></div> {/* head */}
               <div className="w-20 h-24 bg-[#a4e678] rounded-[20px] absolute top-[110px] left-1/2 -translate-x-1/2 z-10 border-b-4 border-yellow-300"></div> {/* top body/shirt */}
               <div className="w-24 h-48 bg-[#a1bcf4] rounded-t-[30px] rounded-b-xl absolute top-[130px] left-1/2 -translate-x-1/2 z-0"></div> {/* legs/pants */}
               <div className="w-6 h-20 bg-[#a76a52] rounded-full absolute top-[120px] left-[30px] transform rotate-[15deg]"></div> {/* left arm */}
               <div className="w-6 h-16 bg-[#a76a52] rounded-full absolute top-[120px] right-[30px] transform -rotate-[45deg] origin-top"></div> {/* right waving arm */}
            </div>

          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="w-full flex justify-end items-center pt-8">
          <p className="text-slate-500 font-medium text-xs">
            © 2011-2023 Gosmart
          </p>
        </div>

      </div>
    </footer>
  );
};

export default SocialsFooterSection;
