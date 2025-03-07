// Hero.jsx
import Noise from "./Animations/Noise";
import Waves from "./Animations/Waves";
import { FaInstagram, FaLinkedin, FaDribbble } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="min-h-screen bg-[#101010] flex items-center justify-center px-4 sm:px-6 md:px-12 relative overflow-hidden">
      {/* Noise Background */}
      <Waves />
      <div className="absolute inset-0 z-0">
        <Noise
          patternSize={250}
          patternScaleX={1}
          patternScaleY={1}
          patternRefreshInterval={2}
          patternAlpha={15}
        />
      </div>

      {/* Subtle Background Overlay */}
      <div className="absolute inset-0 bg-[#C0C0C0]/5 opacity-20"></div>

      {/* Blur Effect di Bagian Bawah */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 bg-gradient-to-t from-[#101010] via-[#101010]/50 to-transparent backdrop-blur-xxs pointer-events-none z-10"></div>

      <div className="text-center max-w-4xl relative z-10">
        {/* Name and Years */}
        <div className="flex justify-between items-center mb-4 text-xs sm:text-sm font-['SF_Pro_Display'] font-light text-[#C0C0C0]/70">
          <span>2004</span>
          <span className="text-sm sm:text-base">Muchamad Dzaki</span>
          <span>RECENT</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-['SF_Pro_Display'] font-bold text-[#C0C0C0] mb-6 leading-none tracking-tight">
          WEB DEVELOPER
        </h1>

        {/* Subtitle/Role */}
        <p className="text-base sm:text-lg font-['SF_Pro_Display'] font-medium text-[#C0C0C0]/80 mb-8">
          Part Of Artemis Studio
        </p>

        {/* CTA and Social Icons */}
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8">
  <a 
    href="https://wa.me/6281315081316" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="px-6 sm:px-8 py-2 sm:py-3 font-['SF_Pro_Display'] font-semibold text-[#101010] bg-[#C0C0C0] rounded-full text-sm sm:text-base tracking-wide hover:bg-[#C0C0C0]/90 transition-colors duration-300"
  >
    Discover Me
  </a>
  <div className="flex gap-3 sm:gap-4 text-[#C0C0C0]/70">
    <a href="https://www.instagram.com/muchdzf?igsh=MW8zZGU3YjJrbXJkaQ==" aria-label="Instagram">
      <FaInstagram className="w-4 sm:w-5 h-4 sm:h-5 hover:text-[#C0C0C0] transition-colors duration-300" />
    </a>
    <a href="https://www.linkedin.com/in/muchamad-fahrudin-a58a21284" aria-label="LinkedIn">
      <FaLinkedin className="w-4 sm:w-5 h-4 sm:h-5 hover:text-[#C0C0C0] transition-colors duration-300" />
    </a>
    <a href="https://dribbble.com/muchdz" aria-label="Dribbble">
      <FaDribbble className="w-4 sm:w-5 h-4 sm:h-5 hover:text-[#C0C0C0] transition-colors duration-300" />
    </a>
  </div>
</div>

        {/* Description */}
        <p className="text-sm sm:text-base font-['SF_Pro_Display'] font-normal text-[#C0C0C0]/70 max-w-md mx-auto leading-relaxed">
          I’m a Web Developer and Co-founder of Alcemyst Studio, a studio focused on creating tailor-made, decentralized web experiences, with a focus on accessibility.
        </p>
      </div>

      {/* Decorative Photos */}
      <div className="hidden sm:block absolute top-16 sm:top-20 left-4 sm:left-1/8 w-24 sm:w-32 md:w-40 h-20 sm:h-24 md:h-32 z-0">
        <img
          src="img/dzaki/2.jpeg"
          alt="Decorative Photo 2"
          className="w-full h-full object-cover rounded-lg shadow-md opacity-50 rotate-[7deg]"
        />
      </div>
      <div className="hidden sm:block absolute top-24 sm:top-32 right-4 sm:right-1/8 w-20 sm:w-28 md:w-36 h-24 sm:h-36 md:h-48 z-0">
        <img
          src="img/dzaki/4.jpeg"
          alt="Decorative Photo 3"
          className="w-full h-full object-cover rounded-lg shadow-md opacity-70 rotate-[-4deg]"
        />
      </div>
      <div className="hidden sm:block absolute bottom-16 sm:bottom-20 left-6 sm:left-1/5 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 z-0">
        <img
          src="img/dzaki/5.jpeg"
          alt="Decorative Photo 4"
          className="w-full h-full object-cover rounded-lg shadow-md opacity-60 rotate-[2deg]"
        />
      </div>

      {/* Decorative Dots */}
      <div className="absolute top-4 left-4 text-[#C0C0C0]/50 text-lg sm:text-xl">●</div>
      <div className="absolute bottom-4 right-4 text-[#C0C0C0]/50 text-lg sm:text-xl">●</div>
    </section>
  );
};

export default Hero;