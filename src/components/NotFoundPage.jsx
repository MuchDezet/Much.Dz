import { motion } from 'framer-motion';
import { FaRocket, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Jika menggunakan React Router

const NotFoundPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        duration: 1, 
        staggerChildren: 0.3 
      } 
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: 'easeOut' 
      } 
    }
  };

  const buttonVariants = {
    hover: { 
      scale: 1.05, 
      boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <motion.section
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center overflow-hidden relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)] animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float top-10 left-10"></div>
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float bottom-10 right-10 delay-1000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6">
        {/* 404 Text */}
        <motion.h1
          className="text-9xl md:text-[12rem] font-bold text-white/90 tracking-tight"
          variants={textVariants}
          style={{ fontFamily: '"SF Pro Display", sans-serif' }}
        >
          404
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          className="text-2xl md:text-4xl text-gray-200 mt-6 mb-8 font-light"
          variants={textVariants}
        >
          Reality Not Found
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg"
          variants={textVariants}
        >
          It seems you've ventured into an alternate dimension. 
          The page you're looking for doesn't exist in this reality.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center"
          variants={textVariants}
        >
          <Link to="/">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="group relative px-8 py-4 bg-white/10 backdrop-blur-lg text-white rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2 font-medium">
                Return to Reality
                <FaRocket className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              </span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.button>
          </Link>

          <Link to="/work">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="group relative px-8 py-4 bg-transparent text-white rounded-full border border-white/20 hover:bg-white/10 transition-all duration-300"
            >
              <span className="flex items-center gap-2 font-medium">
                Explore More Projects
                <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/50 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default NotFoundPage;