import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const HamburgerDropdown = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  // Variants untuk animasi dropdown
  const menuVariants = {
    hidden: { 
      opacity: 0, 
      y: -10,
      scale: 0.95 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 400,
        damping: 25,
        mass: 0.5,
        staggerChildren: 0.05
      }
    },
    exit: { 
      opacity: 0, 
      y: -10,
      scale: 0.95,
      transition: { duration: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -5 }
  };

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Play", path: "/play" },
  ];

  // Toggle hamburger menu
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="relative z-50">
      {/* Tombol Hamburger */}
      <motion.div
        className="text-white/30 hover:text-gray-300 transition-colors cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleMenu}
      >
        <Menu size={20} />
      </motion.div>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-12 left-0 bg-black/90 backdrop-blur-md w-72 p-4 rounded-b-lg shadow-lg border border-white/10 z-50"
          >
            {/* Main Menu Items */}
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                onClick={() => setIsMenuOpen(false)}
                className="py-2"
              >
                <Link
                  to={item.path}
                  className="text-base font-semibold text-white/80 hover:text-gray-300 transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
                </Link>
              </motion.div>
            ))}

            {/* Submenu dengan toggle */}
            <motion.div
              variants={itemVariants}
              className="py-2 border-t border-white/20 mt-2"
            >
              <div
                className="flex items-center justify-between text-base font-semibold text-white/80 hover:text-gray-300 cursor-pointer transition-colors"
                onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
              >
                <span>Contact</span>
                <motion.div
                  animate={{ rotate: isSubMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={16} />
                </motion.div>
              </div>

              {/* Submenu Items */}
              <AnimatePresence>
                {isSubMenuOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="mt-2 pl-4"
                  >
                    <motion.div className="py-1">
                      <span className="text-sm text-gray-300">
                        Phone: +62 123 456 7890
                      </span>
                    </motion.div>
                    <motion.div className="py-1">
                      <span className="text-sm text-gray-300">
                        Address: Jl. Contoh No. 123, Jakarta, Indonesia
                      </span>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HamburgerDropdown;