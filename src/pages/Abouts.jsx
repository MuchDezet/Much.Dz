import { motion } from "framer-motion";

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-screen bg-primary text-white py-12 sm:py-24 md:py-48 px-4 sm:px-8 md:px-32 overflow-hidden">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-30"></div>

      {/* Diagonal Dotted Lines for Empty Space */}
      <motion.svg
        className="hidden sm:block absolute inset-0 w-full h-full opacity-10 pointer-events-none"
        fill="none"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
      >
        <line x1="0" y1="0" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="10 10" />
        <line x1="0" y1="20%" x2="80%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="10 10" />
        <line x1="20%" y1="0" x2="100%" y2="80%" stroke="white" strokeWidth="2" strokeDasharray="10 10" />
        <line x1="0" y1="100%" x2="100%" y2="0" stroke="white" strokeWidth="2" strokeDasharray="10 10" />
        <line x1="0" y1="80%" x2="80%" y2="0" stroke="white" strokeWidth="2" strokeDasharray="10 10" />
        <line x1="20%" y1="100%" x2="100%" y2="20%" stroke="white" strokeWidth="2" strokeDasharray="10 10" />
      </motion.svg>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 sm:mb-16 md:mb-20 text-center"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
        >
          My Books
        </motion.h2>

        {/* Dekorasi Statis untuk Ruang Kosong */}
        <motion.div
          className=" md:block absolute top-1/4 left-4 sm:left-8 w-px h-32 sm:h-48 bg-white/20 flex flex-col items-center justify-center gap-4 shadow-[0_0_10px_rgba(255,255,255,0.1)]"
          initial="hidden"
          whileInView="visible"
          variants={fadeInLeft}
        >
          <span className="text-white/50 text-xs sm:text-sm transform -rotate-90 whitespace-nowrap">
            Zephyr&apos;s Journey
          </span>
        </motion.div>
        <motion.div
          className=" md:block absolute bottom-1/4 right-4 sm:right-8 w-px h-32 sm:h-48 bg-white/20 flex flex-col items-center justify-center gap-4 shadow-[0_0_10px_rgba(255,255,255,0.1)]"
          initial="hidden"
          whileInView="visible"
          variants={fadeInRight}
        >
          <span className="text-white/50 text-xs sm:text-sm transform -rotate-90 whitespace-nowrap">
            Kael7&apos;s Legacy
          </span>
        </motion.div>

        {/* First Illustration (Light Complexity) */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12 md:gap-24 mb-16 sm:mb-24 md:mb-32"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
        >
          <div className="relative inline-block">
            {/* Number Circle */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center text-white/10 text-6xl sm:text-7xl md:text-9xl font-bold pointer-events-none"
              style={{ transform: "translate(-20%, -20%)" }}
              variants={fadeInUp}
            >
              01
            </motion.div>
            {/* Star Pattern */}
            <motion.svg
              className="hidden sm:block absolute -top-6 sm:-top-8 -left-6 sm:-left-8 w-24 sm:w-32 h-24 sm:h-32 opacity-15 pointer-events-none"
              fill="none"
              variants={fadeInLeft}
            >
              <path d="M10 10 L12 14 L16 14 L13 16 L14 20 L10 18 L6 20 L7 16 L4 14 L8 14 Z" fill="white" />
              <path d="M25 25 L27 29 L31 29 L28 31 L29 35 L25 33 L21 35 L22 31 L19 29 L23 29 Z" fill="white" />
              <path d="M40 40 L42 44 L46 44 L43 46 L44 50 L40 48 L36 50 L37 46 L34 44 L38 44 Z" fill="white" />
            </motion.svg>
            {/* Decorative Border */}
            <motion.div
              className="absolute inset-0 -m-2 sm:-m-4 border-2 border-dashed border-white/20 rounded-xl shadow-[0_0_15px_rgba(255,255,255,0.1)]"
              variants={fadeInUp}
            ></motion.div>
            <motion.img
              src="img/book.png"
              alt="Light Complexity"
              className="w-64 sm:w-80 md:w-96 rounded-lg shadow-2xl relative z-10"
              variants={fadeInLeft}
            />
            {/* Grid overlay */}
            <motion.div
              className="absolute top-0 right-0 w-1/3 h-full grid grid-cols-3 gap-1 opacity-50 z-20"
              variants={fadeInRight}
            >
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="bg-white/20"
                  style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
                ></div>
              ))}
            </motion.div>
            {/* Badge & Year */}
            <motion.div
              className="absolute -bottom-4 sm:-bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-30"
              variants={fadeInUp}
            >
              <div className="bg-green-500/20 text-green-300 text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-1 rounded-full shadow-md">
                Sci-Fi Epic
              </div>
              <span className="text-white/50 text-[10px] sm:text-xs">2023</span>
            </motion.div>
          </div>
          <div className="flex-1 text-left relative">
            {/* Subtitle */}
            <motion.span
              className="absolute -top-4 sm:-top-6 left-0 text-white/40 text-xs sm:text-sm italic"
              variants={fadeInUp}
            >
              An Intergalactic Odyssey
            </motion.span>
            <motion.h3
              className="text-xl sm:text-2xl font-semibold flex items-center relative z-10"
              variants={fadeInRight}
            >
              <span className="text-green-400 text-2xl sm:text-3xl">ZephyR</span> : Legacy Of The Celestial Heir
            </motion.h3>
            {/* Curved Line Decoration */}
            <motion.svg
              className="absolute top-0 left-0 w-full h-8 sm:h-12 -translate-y-2 opacity-30 z-0"
              viewBox="0 0 200 50"
              fill="none"
              variants={fadeInUp}
            >
              <path d="M0 40 Q50 -10 100 40 T200 40" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </motion.svg>
            <div className="relative">
              {/* Dotted Line Decoration */}
              <motion.svg
                className="hidden sm:block absolute -left-6 sm:-left-8 top-0 h-full w-6 opacity-50 shadow-[0_0_8px_rgba(255,255,255,0.1)]"
                fill="none"
                variants={fadeInLeft}
              >
                <line x1="50%" y1="0" x2="50%" y2="100%" stroke="url(#zephyrGradient)" strokeWidth="2" strokeDasharray="4 4" />
                <defs>
                  <linearGradient id="zephyrGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#34d399", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "#10b981", stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
              </motion.svg>
              {/* Geometric Pattern */}
              <motion.svg
                className="hidden sm:block absolute -right-8 sm:-right-12 bottom-0 w-16 sm:w-20 h-16 sm:h-20 opacity-20 pointer-events-none"
                fill="none"
                variants={fadeInRight}
              >
                <rect x="0" y="0" width="15" height="15" stroke="white" strokeWidth="1" strokeDasharray="2 2" />
                <rect x="25" y="25" width="10" height="10" stroke="white" strokeWidth="1" strokeDasharray="2 2" />
                <rect x="45" y="45" width="8" height="8" stroke="white" strokeWidth="1" strokeDasharray="2 2" />
              </motion.svg>
              {/* Star Pattern */}
              <motion.svg
                className="hidden sm:block absolute -right-12 sm:-right-16 top-1/2 -translate-y-1/2 w-20 sm:w-24 h-20 sm:h-24 opacity-15 pointer-events-none"
                fill="none"
                variants={fadeInRight}
              >
                <path d="M10 10 L12 14 L16 14 L13 16 L14 20 L10 18 L6 20 L7 16 L4 14 L8 14 Z" fill="white" />
                <path d="M20 20 L22 24 L26 24 L23 26 L24 30 L20 28 L16 30 L17 26 L14 24 L18 24 Z" fill="white" />
              </motion.svg>
              <motion.p
                className="mt-4 sm:mt-6 text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg"
                variants={fadeInRight}
              >
                Zephyr Thornhart, the sixth child of a noble family, grew up in the shadow of a life-changing tragedy. When her country is invaded by aliens and her siblings are kidnapped, Zephyr must find strength in the darkness. In this epic journey, she will face inner conflict, revenge, and learn that true strength comes from the heart. Together with her family, she will explore a world full of mystery, face powerful enemies, and reclaim her lost honor, woven into a heart-pounding adventure story in a world full of wonder and danger, where Zephyr will find her true self and face her destiny with extraordinary courage and wisdom.
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Second Illustration (Medium Complexity) */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12 md:gap-24"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
        >
          <div className="flex-1 text-left relative order-2 sm:order-1">
            {/* Subtitle */}
            <motion.span
              className="absolute -top-4 sm:-top-6 left-0 text-white/40 text-xs sm:text-sm italic"
              variants={fadeInUp}
            >
              A Tale of Valor
            </motion.span>
            <motion.h3
              className="text-xl sm:text-2xl font-semibold flex items-center relative z-10"
              variants={fadeInLeft}
            >
              <span className="text-green-400 text-2xl sm:text-3xl">UnbrokenChain</span>
            </motion.h3>
            {/* Curved Line Decoration */}
            <motion.svg
              className="absolute top-0 left-0 w-full h-8 sm:h-12 -translate-y-2 opacity-30 z-0"
              viewBox="0 0 200 50"
              fill="none"
              variants={fadeInUp}
            >
              <path d="M0 40 Q50 -10 100 40 T200 40" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </motion.svg>
            <div className="relative">
              {/* Dotted Line Decoration */}
              <motion.svg
                className="hidden sm:block absolute -right-6 sm:-right-8 top-0 h-full w-6 opacity-50 shadow-[0_0_8px_rgba(255,255,255,0.1)]"
                fill="none"
                variants={fadeInRight}
              >
                <line x1="50%" y1="0" x2="50%" y2="100%" stroke="url(#chainGradient)" strokeWidth="2" strokeDasharray="6 6" />
                <defs>
                  <linearGradient id="chainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#10b981", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "#047857", stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
              </motion.svg>
              {/* Geometric Pattern */}
              <motion.svg
                className="hidden sm:block absolute -left-8 sm:-left-12 bottom-0 w-16 sm:w-20 h-16 sm:h-20 opacity-20 pointer-events-none"
                fill="none"
                variants={fadeInLeft}
              >
                <rect x="0" y="0" width="15" height="15" stroke="white" strokeWidth="1" strokeDasharray="2 2" />
                <rect x="25" y="25" width="10" height="10" stroke="white" strokeWidth="1" strokeDasharray="2 2" />
                <rect x="45" y="45" width="8" height="8" stroke="white" strokeWidth="1" strokeDasharray="2 2" />
              </motion.svg>
              {/* Star Pattern */}
              <motion.svg
                className="hidden sm:block absolute -left-12 sm:-left-16 top-1/2 -translate-y-1/2 w-20 sm:w-24 h-20 sm:h-24 opacity-15 pointer-events-none"
                fill="none"
                variants={fadeInLeft}
              >
                <path d="M10 10 L12 14 L16 14 L13 16 L14 20 L10 18 L6 20 L7 16 L4 14 L8 14 Z" fill="white" />
                <path d="M20 20 L22 24 L26 24 L23 26 L24 30 L20 28 L16 30 L17 26 L14 24 L18 24 Z" fill="white" />
              </motion.svg>
              <motion.p
                className="mt-4 sm:mt-6 text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg"
                variants={fadeInLeft}
              >
                In a land of power, intrigue, and ancient bloodlines, Kael Thalrune, an 18-year-old warrior, is forced into a life of exile. As the heir to the once-mighty Clan Thalrune, he must navigate the dangerous landscapes of Vallhala, uncovering the hidden truths behind his family’s downfall. Betrayals, battles, and a destiny intertwined with forgotten legends drive him forward. Will he rise to reclaim his legacy, or will the chains of fate forever bind him?
              </motion.p>
            </div>
          </div>
          <div className="relative inline-block order-1 sm:order-2">
            {/* Number Circle */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center text-white/10 text-6xl sm:text-7xl md:text-9xl font-bold pointer-events-none"
              style={{ transform: "translate(-20%, -20%)" }}
              variants={fadeInUp}
            >
              02
            </motion.div>
            {/* Star Pattern */}
            <motion.svg
              className="hidden sm:block absolute -top-6 sm:-top-8 -left-6 sm:-left-8 w-24 sm:w-32 h-24 sm:h-32 opacity-15 pointer-events-none"
              fill="none"
              variants={fadeInLeft}
            >
              <path d="M10 10 L12 14 L16 14 L13 16 L14 20 L10 18 L6 20 L7 16 L4 14 L8 14 Z" fill="white" />
              <path d="M25 25 L27 29 L31 29 L28 31 L29 35 L25 33 L21 35 L22 31 L19 29 L23 29 Z" fill="white" />
              <path d="M40 40 L42 44 L46 44 L43 46 L44 50 L40 48 L36 50 L37 46 L34 44 L38 44 Z" fill="white" />
            </motion.svg>
            {/* Decorative Border */}
            <motion.div
              className="absolute inset-0 -m-2 sm:-m-4 border-2 border-dashed border-white/20 rounded-xl shadow-[0_0_15px_rgba(255,255,255,0.1)]"
              variants={fadeInUp}
            ></motion.div>
            <motion.img
              src="img/book1.png"
              alt="Medium Complexity"
              className="w-64 sm:w-80 md:w-96 rounded-lg shadow-2xl relative z-10"
              variants={fadeInRight}
            />
            {/* Grid overlay */}
            <motion.div
              className="absolute top-0 right-0 w-1/3 h-full grid grid-cols-3 gap-1 opacity-50 z-20"
              variants={fadeInLeft}
            >
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="bg-white/20"
                  style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
                ></div>
              ))}
            </motion.div>
            {/* Badge & Year */}
            <motion.div
              className="absolute -bottom-4 sm:-bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-30"
              variants={fadeInUp}
            >
              <div className="bg-green-500/20 text-green-300 text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-1 rounded-full shadow-md">
                Fantasy Saga
              </div>
              <span className="text-white/50 text-[10px] sm:text-xs">2024</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;