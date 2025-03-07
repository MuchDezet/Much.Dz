import { useState } from 'react';
import { motion } from 'framer-motion';
import CircularGallery from './Animations/CircularGallery';
import { FaArrowRight } from 'react-icons/fa';

// Project data for standard gallery
const projectData = [
  {
    id: 1,
    title: "GameHub",
    description: "A full-stack e-commerce solution with integrated payment processing and inventory management.",
    technologies: ["Tailwind", "React.js", "MongoDB", "Firebase"],
    image: "img/project2.png",
    link: "https://example.com/ecommerce"
  },
  {
    id: 2,
    title: "Company Profile",
    description: "Interactive analytics dashboard with real-time data visualization for business intelligence.",
    technologies: ["React", "Tailwind", "Firebase", "Material UI", "Figma"],
    image: "img/service.png",
    link: "https://example.com/dashboard"
  },
  {
    id: 3,
    title: "CRM Dashboard",
    description: "Patient management application with appointment scheduling and medical records tracking.",
    technologies: ["ReactJS", "Tailwind", "Framer-Motion", "Vite", "Firebase"],
    image: "img/dash.png",
    link: "https://example.com/healthcare"
  }
];

// Projects for circular gallery
const circularProjects = [
  { image: "/img/project2.png", text: "GAMEHUB Platform" },
  { image: "/img/beyazid.jpeg", text: "Export Gateway" },
  { image: "/img/ryan.jpeg", text: "Creative Portfolio" },
  { image: "/img/dash.png", text: "EduLearn Platform" },
  { image: "/img/Web.jpg", text: "FitTrack App" },
  { image: "/img/mobile.jpg", text: "SmartHome Dashboard" }
];

const WorkSection = () => {
  const [displayMode, setDisplayMode] = useState('cards');
  const [showNotification, setShowNotification] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const buttonVariants = {
    active: { 
      backgroundColor: '#E0E0E0', 
      color: '#101010', 
      scale: 1.05, 
      boxShadow: '0 6px 16px rgba(224, 224, 224, 0.25)' 
    },
    inactive: { 
      backgroundColor: 'transparent', 
      color: '#E0E0E0', 
      scale: 1, 
      boxShadow: 'none' 
    }
  };

  const notificationVariants = {
    hidden: { 
      opacity: 0, 
      y: -50, 
      scale: 0.95 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.4, 
        ease: 'easeOut' 
      }
    },
    exit: { 
      opacity: 0, 
      y: -50, 
      scale: 0.95,
      transition: { 
        duration: 0.3 
      }
    }
  };

  const handleExploreClick = () => {
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000); // Auto-dismiss after 3 seconds
  };

  return (
    <section 
      id="work" 
      className="py-28 bg-[var(--color-primary)] text-[var(--text-secondary)] relative"
    >
      <div className="container mx-auto px-6 md:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-20"
        >
          <h2 
            className="text-8xl md:text-8xl font-bold tracking-tight font-['SF_Pro_Display']"
          >
            My Work
          </h2>
          <p 
            className="mt-6 text-lg md:text-xl text-[var(--color-secondary)] max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-secondary)' }}
          >
            Building innovative solutions that blend functionality with exceptional design.
          </p>
        </motion.div>

        {/* Toggle Buttons */}
        <motion.div 
          className="flex justify-center gap-6 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <motion.button
            variants={buttonVariants}
            animate={displayMode === 'cards' ? 'active' : 'inactive'}
            whileHover={{ scale: 1.1, color: displayMode === 'cards' ? '#101010' : 'var(--text-hover)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setDisplayMode('cards')}
            className="px-8 py-3 rounded-xl font-medium border border-[var(--color-secondary)] transition-all duration-300"
            style={{ fontFamily: 'var(--font-secondary)' }}
          >
            Card View
          </motion.button>
          <motion.button
            variants={buttonVariants}
            animate={displayMode === 'circular' ? 'active' : 'inactive'}
            whileHover={{ scale: 1.1, color: displayMode === 'circular' ? '#101010' : 'var(--text-hover)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setDisplayMode('circular')}
            className="px-8 py-3 rounded-xl font-medium border border-[var(--color-secondary)] transition-all duration-300"
            style={{ fontFamily: 'var(--font-secondary)' }}
          >
            Circular View
          </motion.button>
        </motion.div>

        {/* Content */}
        <motion.div
          key={displayMode}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="min-h-[600px]"
        >
          {/* Card View */}
          {displayMode === 'cards' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectData.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)' }}
                  className="relative rounded-2xl overflow-hidden h-96 shadow-xl border border-white/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10"></div>
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col z-20">
                    <h3 
                      className="text-2xl font-bold text-white mb-3 drop-shadow-lg"
                      style={{ fontFamily: 'var(--font-primary)' }}
                    >
                      {project.title}
                    </h3>
                    <p 
                      className="text-gray-100 text-sm mb-4 leading-relaxed line-clamp-2 drop-shadow-md"
                      style={{ fontFamily: 'var(--font-secondary)' }}
                    >
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-2.5 py-1 bg-white/30 rounded-full text-xs font-medium text-white drop-shadow-md backdrop-blur-sm"
                          style={{ fontFamily: 'var(--font-secondary)' }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Circular Gallery View */}
          {displayMode === 'circular' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full mx-auto relative"
              style={{ height: '700px' }}
            >
              <CircularGallery 
                items={circularProjects}
                bend={2}
                textColor="var(--text-secondary)"
                borderRadius={0.05}
                font="bold 24px var(--font-primary)"
              />
            </motion.div>
          )}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-1 text-center"
        >
          <motion.button 
            onClick={handleExploreClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-transparent border-2 border-[var(--color-secondary)] text-[var(--color-secondary)] font-semibold hover:bg-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-all duration-300"
            style={{ fontFamily: 'var(--font-secondary)' }}
          >
            Explore More Projects
            <FaArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>

      {/* Apple Vision Pro-style Notification */}
      {showNotification && (
        <motion.div
          variants={notificationVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed top-10 left-1/2 transform -translate-x-1/2 z-50"
        >
          <div className="bg-black/20 backdrop-blur-2xl text-white px-8 py-4 rounded-2xl border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            <p className="text-lg font-medium" style={{ fontFamily: 'var(--font-secondary)' }}>
              Under Development
            </p>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default WorkSection;