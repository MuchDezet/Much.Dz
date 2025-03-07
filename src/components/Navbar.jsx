import { useEffect, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { MousePointer, Loader2, Menu } from "lucide-react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [time, setTime] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const controls = useAnimation();

  // Update waktu
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(
        `${now.getHours().toString().padStart(2, "0")}:${now
          .getMinutes()
          .toString()
          .padStart(2, "0")}`
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Track scroll progress dan posisi
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = window.scrollY / totalHeight;
      setScrollProgress(Math.min(1, Math.max(0, progress)));
      const atTop = window.scrollY < 50;
      setIsAtTop(atTop);

      if (atTop) {
        setIsExpanded(true);
        controls.start({
          width: window.innerWidth < 768 ? "280px" : window.innerWidth < 1024 ? "360px" : "480px",
          height: window.innerWidth < 768 ? "40px" : "50px",
          transition: { type: "spring", stiffness: 400, damping: 25, mass: 0.5 },
        });
      } else if (!isHovered) {
        setIsExpanded(false);
        controls.start({
          width: window.innerWidth < 768 ? "120px" : "160px",
          height: window.innerWidth < 768 ? "40px" : "50px",
          transition: { type: "spring", stiffness: 400, damping: 25, mass: 0.5 },
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls, isHovered]);

  // Initial animation
  useEffect(() => {
    controls.start({
      width: window.innerWidth < 768 ? "280px" : window.innerWidth < 1024 ? "360px" : "480px",
      height: window.innerWidth < 768 ? "40px" : "50px",
      borderRadius: "30px",
      transition: { type: "spring", stiffness: 400, damping: 25 },
    });
  }, [controls]);

  // Handler mouse
  const handleMouseEnter = async () => {
    if (!isAtTop && window.innerWidth >= 768) {
      setIsHovered(true);
      setIsLoading(true);
      await controls.start({
        width: window.innerWidth < 768 ? "280px" : window.innerWidth < 1024 ? "360px" : "480px",
        height: window.innerWidth < 768 ? "40px" : "50px",
        transition: { type: "spring", stiffness: 400, damping: 25, mass: 0.5 },
      });
      setTimeout(() => {
        setIsLoading(false);
        setIsExpanded(true);
      }, 400);
    }
  };

  const handleMouseLeave = () => {
    if (!isAtTop && window.innerWidth >= 768) {
      setIsHovered(false);
      setIsLoading(false);
      setIsExpanded(false);
      controls.start({
        width: window.innerWidth < 768 ? "120px" : "160px",
        height: window.innerWidth < 768 ? "40px" : "50px",
        transition: { type: "spring", stiffness: 400, damping: 25, mass: 0.5 },
      });
    }
  };

  // Toggle hamburger menu
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Komponen Logo
  const Logo = () => {
    const [showLogoImage, setShowLogoImage] = useState(false);
    return (
      <div className="fixed left-4 md:left-6 lg:left-8 top-4 md:top-6 z-40 flex items-center gap-2">
        <div
          className="relative group backdrop-blur-md rounded-full w-10 md:w-12 lg:w-14 h-10 md:h-12 lg:h-14 flex items-center justify-center text-white cursor-pointer transition-all duration-300 ease-out bg-black/20 hover:bg-black/70 shadow-lg hover:shadow-xl"
          onMouseEnter={() => setShowLogoImage(true)}
          onMouseLeave={() => setShowLogoImage(false)}
        >
          <span className="font-bold text-lg md:text-xl lg:text-2xl tracking-tight group-hover:scale-110 transition-transform duration-200">
            DZ
          </span>
          <AnimatePresence>
            {showLogoImage && window.innerWidth >= 768 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.7, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.7, x: -20 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="absolute left-full ml-4 top-1/2 -translate-y-1/2"
              >
                <img
                  src="img/pink.jpeg"
                  className="rounded-full w-12 md:w-14 lg:w-16 h-12 md:h-14 lg:h-16 border-2 border-white/80 shadow-lg object-cover"
                  alt="Profile"
                />
              </motion.div>
            )}
          </AnimatePresence>
          <motion.div
            className="absolute inset-0 rounded-full border border-white/30 opacity-0 group-hover:opacity-100"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    );
  };

  // Komponen TimeDisplay
  const TimeDisplay = () => {
    const [fullTime, setFullTime] = useState("");
    useEffect(() => {
      const timer = setInterval(() => {
        const now = new Date();
        setFullTime(
          `${now.getHours().toString().padStart(2, "0")}:${now
            .getMinutes()
            .toString()
            .padStart(2, "0")}:${now.getSeconds().toString().padStart(2, "0")}`
        );
      }, 1000);
      return () => clearInterval(timer);
    }, []);
    return (
      <div className="fixed right-4 md:right-6 lg:right-8 top-4 md:top-6 z-40 backdrop-blur-md rounded-full w-10 md:w-12 h-10 md:h-12 flex items-center justify-center text-white cursor-pointer hover:w-24 md:hover:w-32 transition-all duration-300 group">
        <span className="group-hover:hidden text-sm md:text-base">{time}</span>
        <span className="hidden group-hover:block text-xs md:text-sm">{fullTime}</span>
      </div>
    );
  };

  return (
    <>
      <Logo />
      <motion.div
        animate={controls}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="fixed top-4 md:top-6 z-30 left-1/2 transform -translate-x-1/2 bg-none backdrop-blur-md text-white/30 flex items-center justify-center overflow-hidden cursor-pointer border border-white/10"
      >
        <motion.div
          className="absolute left-4 md:left-6 z-40"
          animate={{ rotate: isLoading ? 360 : 0, scale: isLoading ? 1.2 : 1 }}
          transition={{ duration: 1, repeat: isLoading ? Infinity : 0, ease: "linear" }}
        >
          {isLoading ? (
            <Loader2 size={20} className="text-white/30 animate-spin" />
          ) : window.innerWidth < 768 ? (
            <Menu
              size={20}
              className="text-white/30 hover:text-gray-300 transition-colors cursor-pointer"
              onClick={toggleMenu}
            />
          ) : (
            <MousePointer size={20} className="text-white/30 hover:text-gray-300 transition-colors" />
          )}
        </motion.div>

        <AnimatePresence mode="wait">
          {(isExpanded && !isLoading && window.innerWidth >= 768) || (isMenuOpen && window.innerWidth < 768) ? (
            <motion.div
              className={`flex ${
                window.innerWidth < 768
                  ? "flex-col absolute top-12 left-0 bg-black/90 backdrop-blur-md w-72 p-4 rounded-b-lg shadow-lg border border-white/10 z-50"
                  : "flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
              }`}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.2 } }}
              exit={{ opacity: 0, y: -5, transition: { duration: 0.15 } }}
            >
              <motion.div whileHover={{ scale: 1.1 }} className="py-2" onClick={() => setIsMenuOpen(false)}>
                <Link to="/" className="text-base md:text-lg font-semibold hover:text-gray-300 transition-colors relative group">
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="py-2" onClick={() => setIsMenuOpen(false)}>
                <Link to="/about" className="text-base md:text-lg font-semibold hover:text-gray-300 transition-colors relative group">
                  About
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="py-2" onClick={() => setIsMenuOpen(false)}>
                <Link to="/play" className="text-base md:text-lg font-semibold hover:text-gray-300 transition-colors relative group">
                  Play
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
                </Link>
              </motion.div>
              {window.innerWidth < 768 && (
                <>
                  <motion.div className="py-2 border-t border-white/20 mt-2">
                    <span className="text-sm text-gray-300">Phone: +62 123 456 7890</span>
                  </motion.div>
                  <motion.div className="py-2">
                    <span className="text-sm text-gray-300">Address: Jl. Contoh No. 123, Jakarta, Indonesia</span>
                  </motion.div>
                </>
              )}
            </motion.div>
          ) : null}
        </AnimatePresence>

        <motion.div
          className="absolute right-4 md:right-6"
          animate={{ scale: isExpanded ? 1.2 : 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <div className="relative w-5 md:w-6 h-5 md:h-6 rounded-full overflow-hidden bg-white/20 hover:bg-white/30 transition-colors">
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: `conic-gradient(
                  from ${scrollProgress * 360}deg,
                  rgba(255, 255, 255, 0.3),
                  rgba(169, 169, 169, 0.3),
                  rgba(255, 255, 255, 0.3)
                )`,
              }}
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: `conic-gradient(
                  from 0deg,
                  RGBA(255, 255, 255, 1) ${scrollProgress * 360}deg,
                  transparent ${scrollProgress * 360}deg
                )`,
              }}
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute inset-[3px] md:inset-[4px] rounded-full bg-black/50"
              animate={{
                scale: [0.9, 1, 0.9],
                boxShadow: [
                  `0 0 8px rgba(34, 197, 94, ${scrollProgress * 0.5})`,
                  `0 0 12px rgba(34, 197, 94, ${scrollProgress * 0.7})`,
                  `0 0 8px rgba(34, 197, 94, ${scrollProgress * 0.5})`,
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.div>
      <TimeDisplay />
    </>
  );
};

export default Navbar;