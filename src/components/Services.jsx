// ServicesSection.jsx
import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const SERVICES = [
  {
    id: "web-developmet",
    title: "Web Development",
    subtitle: "Turn your website imagination into reality together.",
    image: "img/Web.jpg",
    color: "#8f00ff",
    description: "Professional Website services for your special day with stunning results."
  },
  {
    id: "mobile-app",
    title: "Mobile App Development",
    subtitle: "Unlock the power of mobile apps for your business.",
    image: "img/mobile.jpg",
    color: "#FFEE8C",
    description: "Custom mobile app development solutions for your needs."
  },
  {
    id: "AI-Agent Development",
    title: "Ai-Agent Development",
    subtitle: "Unlock the power of AI agents for your business.",
    image: "img/n8n.png",
    color: "#000957",
    description: "Custom AI agent development solutions for your needs.We use N8N workflow platform."
  },
  {
    id: "data-entry",
    title: "CRM Dashboard",
    subtitle: "Precision in every detail.",
    image: "img/dash.png",
    color: "#96c93d",
    description: "Accurate and efficient data management solutions."
  }
];

const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [isInView, setIsInView] = useState(false);
  const cursorRef = useRef(null);
  const sectionRef = useRef(null);
  
  const springConfig = { damping: 30, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  const handleMouseMove = useCallback((e) => {
    const { clientX, clientY } = e;
    const offsetX = clientX - 200;
    const offsetY = clientY - 150;
    cursorX.set(offsetX);
    cursorY.set(offsetY);
  }, [cursorX, cursorY]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  useEffect(() => {
    const body = document.body;
    if (hoveredService) {
      body.style.cursor = 'none';
    } else {
      body.style.cursor = 'auto';
    }
    return () => {
      body.style.cursor = 'auto';
    };
  }, [hoveredService]);

  useEffect(() => {
    SERVICES.forEach(service => {
      const img = new Image();
      img.src = service.image;
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const contentVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.6,
        ease: "easeIn"
      }
    },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.15
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.6,
        ease: "easeIn"
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.85
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 0.8
      }
    },
    exit: {
      opacity: 0,
      scale: 0.85,
      transition: {
        duration: 0.5
      }
    }
  };

  const imageVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } }
  };

  return (
    <AnimatePresence>
      <section
        ref={sectionRef}
        className="relative w-full px-6 lg:px-12 py-32 bg-primary overflow-hidden"
        id="services"
      >
        <div className="absolute inset-0 opacity-5 bg-[url('/noise.png')] pointer-events-none" />

        <motion.div
          ref={cursorRef}
          className="fixed top-0 left-0 w-96 h-64 z-50 pointer-events-none mix-blend-difference"
          style={{
            x: cursorX,
            y: cursorY,
            opacity: hoveredService ? 1 : 0,
            scale: hoveredService ? 1 : 0.7,
            transition: 'opacity 0.2s ease, scale 0.2s ease'
          }}
        >
          <AnimatePresence mode="wait">
            {hoveredService && (
              <motion.div
                key={hoveredService.id}
                variants={imageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="w-full h-full"
              >
                <img
                  src={hoveredService.image}
                  alt=""
                  className="w-full h-full object-cover rounded-xl shadow-2xl border border-white/10"
                  loading="eager"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          exit="exit"
          className="max-w-7xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl lg:text-8xl font-bold text-center text-white mb-24 relative z-10"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Services
            <span className="block w-32 h-1 bg-gradient-to-r from-white/0 via-white to-white/0 mt-6 mx-auto" />
          </motion.h2>

          <div className="space-y-12">
            {SERVICES.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                onMouseEnter={() => setHoveredService(service)}
                onMouseLeave={() => setHoveredService(null)}
                className="group relative p-12 rounded-2xl bg-[#1a1a1a]/90 backdrop-blur-md border border-gray-800/50 hover:border-gray-700 transition-all duration-500 hover:shadow-2xl min-h-[300px]"
                style={{ '--service-color': service.color }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-25 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,var(--service-color),transparent_70%)] rounded-2xl" />
                
                <div className="relative flex flex-col h-full justify-between">
                  <div className="space-y-6">
                    <h3 className="text-5xl lg:text-6xl font-bold text-white transition-colors duration-300 group-hover:text-[var(--service-color)]">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-2xl lg:text-3xl font-medium max-w-2xl">
                      {service.subtitle}
                    </p>
                    <p className="text-gray-400 text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-3xl">
                      {service.description}
                    </p>
                  </div>

                  <motion.a
                    href={`#${service.id}`}
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    className="mt-8 w-16 h-16 flex items-center justify-center rounded-full bg-white/10 group-hover:bg-[var(--service-color)] transition-all duration-300 self-end"
                  >
                    <ArrowRight className="w-7 h-7 text-white" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </AnimatePresence>
  );
};

export default ServicesSection;