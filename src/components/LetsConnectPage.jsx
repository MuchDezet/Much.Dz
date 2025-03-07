import { motion } from "framer-motion"; // Pastikan framer-motion terinstall
import { useState, useEffect } from 'react';
import { 
  Hexagon, 
  ChevronRight, 
  Mail, 
  Linkedin, 
  Github, 
  Music 
} from 'lucide-react';

const LetsConnectPage = () => {
  const [activeGrid, setActiveGrid] = useState(null);
  const [isShifting, setIsShifting] = useState(false);

  const gridNodes = [
    { 
      id: 'code', 
      label: 'Work', 
      echo: 'Crafting innovative solutions with meticulous attention to every line of code, delivering results that stand the test of time.', 
      edge: 'text-[var(--color-secondary)]' 
    },
    { 
      id: 'link', 
      label: 'Collaborate', 
      echo: 'Building bridges between bold ideas and brilliant minds, turning collective vision into reality through seamless teamwork.', 
      edge: 'text-[var(--color-secondary)]' 
    },
    { 
      id: 'hack', 
      label: 'Friend', 
      echo: 'Forging connections that break limits, sharing knowledge and creativity to solve problems smarter, together.', 
      edge: 'text-[var(--color-secondary)]' 
    },
    { 
      id: 'push', 
      label: 'Challenge', 
      echo: 'Embracing tough obstacles head-on, driving innovation forward by pushing the boundaries of what’s possible every day.', 
      edge: 'text-[var(--color-secondary)]' 
    },
  ];

  // Handle shifting particles
  useEffect(() => {
    setIsShifting(true);
  }, []);

  // Variants untuk animasi
  const fadeSlideUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  const fadeSlideLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  const fadeSlideRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  const gridNodeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2, // Delay bertahap untuk setiap node
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const echoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-[var(--color-primary)] text-[var(--text-secondary)] font-primary overflow-hidden relative mt-32 md:mt-48"
      initial="hidden"
      whileInView="visible"
      variants={fadeSlideUp}
    >
      {/* Geometric Background */}
      <div className="absolute inset-0 bg-[var(--color-primary)]">
        {/* Garis-garis statis dan samar */}
        <div className="absolute w-full h-full opacity-5 grid grid-cols-12 gap-4">
          {[...Array(48)].map((_, i) => (
            <div
              key={i}
              className="border-[var(--text-hover)]/20 border-r border-b"
            />
          ))}
        </div>
        <motion.div
          className="absolute w-48 h-48 bg-[var(--color-secondary)]/15 rotate-45 blur-3xl animate-pulse-slow top-1/4 left-1/3"
          variants={fadeSlideUp}
        />
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-5xl mx-auto py-16 px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeSlideUp}
        >
          <motion.h1
            className="md:text-6xl font-extrabold font-secondary tracking-wider"
            data-text="Let's Connect With Me"
            variants={fadeSlideUp}
          >
            Let&apos;s Connect With Me
          </motion.h1>
          <motion.p
            className="text-[var(--text-hover)] mt-3 font-primary text-lg"
            variants={fadeSlideUp}
          >
            Conquer everything that is impossible to become possible
          </motion.p>
        </motion.div>

        {/* Dual Layout */}
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left: Grid Nodes */}
          <motion.div
            className="md:w-1/2"
            variants={fadeSlideLeft}
          >
            <motion.h2
              className="text-3xl font-semibold font-primary mb-8 text-[var(--text-secondary)] border-b border-[var(--text-hover)]/30 pb-2"
              variants={fadeSlideUp}
            >
              I&apos;m Ready For
            </motion.h2>
            <div className="space-y-8">
              {gridNodes.map((node, index) => (
                <motion.div
                  key={node.id}
                  className="group cursor-pointer"
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  variants={gridNodeVariants}
                  onMouseEnter={() => setActiveGrid(node.id)}
                  onMouseLeave={() => setActiveGrid(null)}
                >
                  <div className="flex items-center">
                    <Hexagon
                      className={`mr-4 transition-all duration-300 ${
                        activeGrid === node.id
                          ? `${node.edge} scale-110 rotate-12`
                          : 'text-[var(--text-hover)]'
                      }`}
                      size={22}
                    />
                    <span
                      className={`text-4xl font-semibold font-primary transition-all duration-300 ${
                        activeGrid === node.id ? 'text-[var(--color-secondary)]' : 'text-[var(--text-hover)]'
                      }`}
                    >
                      {node.label}
                    </span>
                  </div>
                  {activeGrid === node.id && (
                    <motion.div
                      className="ml-10 mt-2 text-sm text-[var(--text-hover)] font-secondary"
                      initial="hidden"
                      animate="visible"
                      variants={echoVariants}
                    >
                      {node.echo}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Contact Panel */}
          <motion.div
            className="md:w-1/2"
            variants={fadeSlideRight}
          >
            <motion.div
              className="relative bg-[var(--color-primary)]/90 rounded-lg p-6 border border-[var(--color-secondary)]/25 shadow-[0_0_12px_rgba(var(--color-secondary-rgb),0.1)]"
              variants={fadeSlideUp}
            >
              {/* Edge Glow */}
              <motion.div
                className="absolute -inset-1 bg-[var(--color-secondary)]/10 rounded-lg blur-md opacity-40 animate-pulse-slow"
                variants={fadeSlideUp}
              />
              <div className="relative z-10">
                <motion.p
                  className="text-lg mb-6 font-primary text-[var(--text-hover)]"
                  variants={fadeSlideUp}
                >
                  Send a ping
                </motion.p>

                {/* Email */}
    <motion.button
            className="w-full flex items-center justify-between bg-[var(--color-primary)] border border-[var(--text-hover)] hover:border-[var(--color-secondary)] rounded-md py-4 px-6 mb-4 transition-all duration-300 group"
            variants={fadeSlideUp}
            onClick={() => window.location.href = 'mailto:dzakirafa79@gmail.com'}
          >
      <div className="flex items-center">
      <Mail
      size={20}
      className="mr-3 text-[var(--color-secondary)] group-hover:scale-105 transition-transform"
      />
      <span className="text-[var(--text-secondary)] font-primary">
        dzakirafa79@gmail.com
        </span>
    </div>
  <ChevronRight
    size={20}
    className="text-[var(--color-secondary)] group-hover:translate-x-2 transition-transform"
  />
</motion.button>

                {/* LinkedIn */}
                <motion.button
                  className="w-full flex items-center justify-center bg-[var(--color-secondary)] text-[var(--color-primary)] rounded-md py-3 px-6 mb-8 hover:bg-[var(--text-hover)] transition-all duration-300 group font-primary font-medium"
                  variants={fadeSlideUp}
                >
                  <Linkedin size={20} className="mr-3 group-hover[scale-105 transition-transform" />
                  <span>Ping on LinkedIn</span>
                </motion.button>

                {/* Social Links */}
                <motion.p
                  className="mb-4 text-lg font-primary text-[var(--text-secondary)]"
                  variants={fadeSlideUp}
                >
                  Track my echo
                </motion.p>
                <motion.div
                  className="flex flex-wrap gap-6"
                  variants={fadeSlideUp}
                >
                  <motion.a
                    href="https://github.com/MuchDezet"
                    className="flex items-center group text-[var(--text-hover)] hover:text-[var(--color-secondary)] transition-all duration-300 font-secondary"
                    variants={fadeSlideUp}
                  >
                    <Github size={20} className="mr-2 group-hover:text-[var(--color-secondary)] transition-all" />
                    <span>MuchDezet</span>
                  </motion.a>
                  <motion.a
                    href="https://github.com/MuchDezet"
                    className="flex items-center group text-[var(--text-hover)] hover:text-[var(--color-secondary)] transition-all duration-300 font-secondary"
                    variants={fadeSlideUp}
                  >
                    <Music size={20} className="mr-2 group-hover:text-[var(--color-secondary)] transition-all" />
                    <span>MuchamadBeats</span>
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Shifting Edges */}
        <motion.div
          className={`absolute inset-0 pointer-events-none ${isShifting ? 'animate-edge-shift' : ''}`}
          variants={fadeSlideUp}
        >
          <motion.div
            className="w-2 h-2 bg-[var(--color-secondary)] rounded-sm absolute top-16 left-36 opacity-60"
            variants={fadeSlideUp}
          />
          <motion.div
            className="w-1.5 h-1.5 bg-[var(--text-hover)] rounded-sm absolute bottom-20 right-44 opacity-60"
            variants={fadeSlideUp}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LetsConnectPage;