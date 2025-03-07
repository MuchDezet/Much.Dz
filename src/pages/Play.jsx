// src/pages/Play.jsx
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const Play = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const canvasRef = useRef(null);

  const backgroundX = useTransform(x, [-2000, 2000], ["0%", "100%"]);
  const backgroundY = useTransform(y, [-2000, 2000], ["0%", "100%"]);

  const [hoveredItem, setHoveredItem] = useState(null);
  const [introComplete, setIntroComplete] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [gameActive, setGameActive] = useState(false);
  const [gameScore, setGameScore] = useState(0);
  const [collectibles, setCollectibles] = useState([]);
  const [gameTime, setGameTime] = useState(30);
  const [gameOver, setGameOver] = useState(false);
  const [gameHighScore, setGameHighScore] = useState(0);
  const [collectedItems, setCollectedItems] = useState([]);

  const lifeEvents = [
    { id: 1, title: "Early Childhood", year: "2013", description: "Discovered a passion for creativity and storytelling.", image: "img/play/child.jpeg", x: -1000, y: -500 },
    { id: 2, title: "Dashboard CRM System.", year: "2024", description: "Building a CRM dashboard for companies to manage their relationships with clients", image: "img/dash.png", x: -600, y: -200 },
    { id: 3, title: "Second Project", year: "2024", description: "Built a full-stack e-commerce game market solution.", image: "img/project2.png", x: -300, y: 300 },
    { id: 4, title: "First Project", year: "2024", description: "Built Company Profile for Export Company.", image: "img/service.png", x: 0, y: -400 },
    { id: 5, title: "High School", year: "2023", description: "Graduated from high school.", image: "img/play/Graduate.jpeg", x: 450, y: 100 },
    { id: 6, title: "Exporter", year: "2024", description: "Exporter Experience on Export", image: "img/play/ek.jpeg", x: 600, y: 400 },
    { id: 8, title: "Freelance Project", year: "2023", description: "Freelance on one of the platforms, namely Fiverr, to create a portfolio website for someone", image: "img/ryan.jpeg", x: 1200, y: 0 },
    { id: 9, title: "Still cooking!", year: "On-Going", description: "Creating innovative web For Event.", image: "img/ss.png", x: 650, y: -300 },
    { id: 10, title: "Future", year: "On-Going", description: "My grind is untouchable. No distractions, no excuses. I’m built different, putting in work most people can’t even handle. While they sleep, I’m leveling up. While they talk, I execute.", image: "img/billl.jpg", x: 100, y: 700 },
    { id: 11, title: "Portfolio", year: "2025", description: "My Personal Website Portfolio", image: "img/play/prt.jpeg", x: -670, y: 150 },
  ];

  const projects = [
    { id: 1, title: "Book What I Read", description: "A book that tells how money works in a country, and how money can be used for everything", image: "img/play/adim.jpg", x: -800, y: -700, rotation: -5 },
    { id: 2, title: "Book What I Read", description: "Rory Sutherland explores how psychology and behavioral economics drive effective, unconventional solutions.", image: "img/play/lok.jpg", x: 400, y: -800, rotation: 3 },
    { id: 3, title: "High School", description: "A day in the life of a high school student.", image: "img/play/School.jpeg", x: -900, y: 500, rotation: 6 },
    { id: 5, title: "University Activity", description: "A day in the life of a university student.", image: "img/play/univ.jpeg", x: 1000, y: 600, rotation: -3 },
    { id: 6, title: "Book What I Read", description: "A book that contains information about how the world changes with a very predictable pattern every quarter of change.", image: "img/play/raydalio.jpg", x: -400, y: -900, rotation: 4 },
    { id: 7, title: "Book What I Read", description: "The Way of the Superior Man explores masculinity, relationships, and spiritual growth. David Deida provides guidance on living with purpose, courage, and full presence.", image: "img/play/ind.jpg", x: 700, y: -700, rotation: -2 },
    { id: 8, title: "Side Hustle", year: "Now", description: "Apart from being a website developer, I am an exporter in all fields depending on how much demand there is.", image: "img/play/no.jpeg", x: 1200, y: -300 },
  ];

  const skillBadges = [
    { id: "html", name: "HTML", color: "#E34F26" },
    { id: "css", name: "CSS", color: "#1572B6" },
    { id: "js", name: "JavaScript", color: "#F7DF1E" },
    { id: "react", name: "React", color: "#61DAFB" },
    { id: "node", name: "Node.js", color: "#339933" },
    { id: "python", name: "Python", color: "#3776AB" },
    { id: "figma", name: "Figma", color: "#F24E1E" },
    { id: "ai", name: "AI", color: "#FF9E0F" },
    { id: "ux", name: "UX Design", color: "#FF61F6" },
    { id: "git", name: "Git", color: "#F05032" },
    { id: "vue", name: "Vue.js", color: "#4FC08D" },
    { id: "aws", name: "AWS", color: "#FF9900" },
  ];

  const generateThreadPaths = () => {
    if (!lifeEvents || lifeEvents.length < 2) return [];
    const centerX = 0;
    const centerY = 0;
    return lifeEvents.map(event => {
      const distance = Math.sqrt(Math.pow(event.x - centerX, 2) + Math.pow(event.y - centerY, 2));
      const curveFactor = Math.min(0.3, distance / 10000 + 0.1);
      return {
        id: event.id,
        path: `M ${centerX} ${centerY} C ${centerX + (event.x - centerX) * curveFactor} ${centerY + (event.y - centerY) * (curveFactor + 0.1)}, ${centerX + (event.x - centerX) * (1 - curveFactor)} ${centerY + (event.y - centerY) * (1 - curveFactor - 0.1)}, ${event.x} ${event.y}`,
        color: event.id % 2 === 0 ? "#C0C0C0" : "#A0A0A0",
      };
    });
  };

  const threadPaths = generateThreadPaths();

  const startGame = () => {
    if (gameActive || isMobile) return;
    setGameActive(true);
    setGameScore(0);
    setGameTime(30);
    setGameOver(false);
    setCollectedItems([]);
    generateCollectibles();
    x.set(0);
    y.set(0);
  };

  const endGame = () => {
    setGameActive(false);
    setGameOver(true);
    if (gameScore > gameHighScore) {
      setGameHighScore(gameScore);
    }
    setCollectibles([]);
  };

  const generateCollectibles = () => {
    const newCollectibles = [];
    const gridSize = 400;
    const usedPositions = new Set();
    
    for (let i = 0; i < 15; i++) {
      const xPos = Math.floor((Math.random() * 2 - 1) * gridSize) * 10;
      const yPos = Math.floor((Math.random() * 2 - 1) * gridSize) * 10;
      const posKey = `${xPos},${yPos}`;
      
      if (!usedPositions.has(posKey)) {
        usedPositions.add(posKey);
        const skill = skillBadges[Math.floor(Math.random() * skillBadges.length)];
        newCollectibles.push({
          id: `collectible-${i}`,
          x: xPos,
          y: yPos,
          collected: false,
          points: Math.floor(Math.random() * 3) + 1,
          skill: skill
        });
      } else {
        i--;
      }
    }
    setCollectibles(newCollectibles);
  };

  const collectItem = (id) => {
    if (!gameActive) return;
    setCollectibles(prev => {
      const updatedCollectibles = prev.map(item => {
        if (item.id === id && !item.collected) {
          setGameScore(score => score + item.points);
          setCollectedItems(collected => [...collected, item.skill]);
          return { ...item, collected: true };
        }
        return item;
      });
      return updatedCollectibles;
    });
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const resetPosition = () => {
      x.set(0);
      y.set(0);
    };

    resetPosition();
    const handleWheel = (e) => e.preventDefault();
    window.addEventListener("wheel", handleWheel, { passive: false });
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const introTimer = setTimeout(() => setIntroComplete(true), 1000);
    const readyTimer = setTimeout(() => setIsReady(true), 1500);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("wheel", handleWheel);
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
      clearTimeout(introTimer);
      clearTimeout(readyTimer);
    };
  }, [x, y]);

  useEffect(() => {
    let timer;
    if (gameActive && gameTime > 0) {
      timer = setInterval(() => {
        setGameTime(prevTime => {
          if (prevTime <= 1) {
            clearInterval(timer);
            endGame();
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [gameActive, gameTime]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isMobile) return;
      const moveAmount = 100;
      switch (e.key) {
        case "ArrowUp":
          y.set(y.get() + moveAmount);
          break;
        case "ArrowDown":
          y.set(y.get() - moveAmount);
          break;
        case "ArrowLeft":
          x.set(x.get() + moveAmount);
          break;
        case "ArrowRight":
          x.set(x.get() - moveAmount);
          break;
        case "Home":
          x.set(0);
          y.set(0);
          break;
        case "g":
          if (!gameActive && !gameOver) {
            startGame();
          } else if (gameActive) {
            endGame();
          }
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [x, y, gameActive, gameOver, isMobile]);

  return (
    <div className="w-screen h-screen bg-[#101010] overflow-hidden relative font-sans">
      <AnimatePresence>
        {isMobile && (
          <motion.div
            className="absolute inset-0 z-60 flex items-center justify-center bg-[#101010]/90 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="bg-[#1a1a1a] p-6 sm:p-8 rounded-xl shadow-2xl border border-[#C0C0C0]/20 w-11/12 sm:w-96 text-center"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-xl sm:text-2xl font-bold text-[#C0C0C0] mb-4">Desktop Required</h2>
              <p className="text-sm sm:text-md text-[#C0C0C0]/90 mb-6">
                This interactive playground is designed for desktop use only. Please access it from a desktop device to explore and play!
              </p>
              <button
                onClick={() => window.history.back()}
                className="bg-[#C0C0C0] hover:bg-[#D0D0D0] text-[#101010] font-bold py-2 px-4 rounded transition-colors w-full"
              >
                Go Back
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isMobile && (
        <>
          <motion.div
            className="absolute inset-0 z-50 flex items-center justify-center bg-[#101010]"
            initial={{ opacity: 1 }}
            animate={{ opacity: introComplete ? 0 : 1, display: introComplete ? "none" : "flex" }}
            transition={{ duration: 1.5, delay: 2 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-[#C0C0C0] tracking-widest"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1, 1, 1.2] }}
              transition={{ duration: 3, times: [0, 0.3, 0.7, 1] }}
            >
              Journey So Far
            </motion.h1>
          </motion.div>

          <AnimatePresence>
            {gameActive && (
              <motion.div 
                className="absolute top-0 left-0 w-full py-2 bg-[#101010]/80 backdrop-blur-sm z-50 flex justify-between items-center px-6"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-[#C0C0C0] font-bold">
                    <span className="text-sm mr-1">SCORE:</span> 
                    <span className="text-xl">{gameScore}</span>
                  </div>
                  <div className="text-[#C0C0C0] font-bold">
                    <span className="text-sm mr-1">TIME:</span> 
                    <span className={`text-xl ${gameTime <= 10 ? "text-red-500" : ""}`}>{gameTime}</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-xs text-[#C0C0C0]/80 mr-4">Find and collect skill badges!</div>
                  <button 
                    onClick={() => endGame()}
                    className="text-xs bg-red-500/80 hover:bg-red-500 text-white px-2 py-1 rounded transition-colors"
                  >
                    End Game
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {gameOver && (
              <motion.div 
                className="absolute inset-0 z-50 flex items-center justify-center bg-[#101010]/90 backdrop-blur-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div 
                  className="bg-[#1a1a1a] p-8 rounded-xl shadow-2xl border border-[#C0C0C0]/20 w-96"
                  initial={{ scale: 0.9, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h2 className="text-3xl font-bold text-[#C0C0C0] mb-4 text-center">Game Over!</h2>
                  <div className="text-center mb-6">
                    <p className="text-[#C0C0C0]/90 mb-2">Your Score</p>
                    <p className="text-5xl font-bold text-[#C0C0C0]">{gameScore}</p>
                    {gameScore === gameHighScore && gameScore > 0 && (
                      <p className="text-sm text-yellow-400 mt-1">New High Score!</p>
                    )}
                  </div>
                  {collectedItems.length > 0 && (
                    <div className="mb-6">
                      <p className="text-[#C0C0C0]/90 text-sm mb-2">Skills Collected:</p>
                      <div className="flex flex-wrap gap-1">
                        {[...new Set(collectedItems)].map(skill => (
                          <span 
                            key={skill.id} 
                            className="text-xs px-2 py-1 rounded-full" 
                            style={{ backgroundColor: `${skill.color}30`, color: skill.color }}
                          >
                            {skill.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="flex space-x-3">
                    <button 
                      onClick={() => {
                        setGameOver(false);
                        startGame();
                      }}
                      className="flex-1 bg-[#C0C0C0] hover:bg-[#D0D0D0] text-[#101010] font-bold py-2 rounded transition-colors"
                    >
                      Play Again
                    </button>
                    <button 
                      onClick={() => setGameOver(false)}
                      className="flex-1 bg-transparent hover:bg-[#C0C0C0]/10 text-[#C0C0C0] border border-[#C0C0C0]/30 py-2 rounded transition-colors"
                    >
                      Return to Portfolio
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            ref={canvasRef}
            className="absolute"
            style={{
              x,
              y,
              width: "500vw",
              height: "500vh",
              left: "-200vw",
              top: "-200vh",
              background: `radial-gradient(circle at ${backgroundX} ${backgroundY}, #1a1a1a, #101010)`,
              cursor: gameActive ? "crosshair" : "grab",
            }}
            drag
            dragConstraints={false}
            dragElastic={0.05}
            dragTransition={{ power: 0.2, timeConstant: 200 }}
            whileDrag={{ cursor: gameActive ? "crosshair" : "grabbing" }}
          >
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
              <defs>
                <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#C0C0C0" strokeWidth="0.5" opacity="0.2" />
                </pattern>
                <radialGradient id="gridFade" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <stop offset="0%" stopColor="#C0C0C0" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#C0C0C0" stopOpacity="0.1" />
                </radialGradient>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              <rect width="100%" height="100%" fill="url(#gridFade)" opacity="0.3" style={{ mixBlendMode: "overlay" }} />
            </svg>

            <AnimatePresence>
              {gameActive && collectibles.map((item) => (
                !item.collected && (
                  <motion.div
                    key={item.id}
                    className="absolute"
                    style={{ left: "50%", top: "50%", x: item.x - 30, y: item.y - 30, zIndex: 25 }}
                    initial={{ scale: 0, opacity: 0, rotate: -180 }}
                    animate={{ 
                      scale: 1, 
                      opacity: 1, 
                      rotate: 0,
                      y: [item.y - 30, item.y - 30 - 5, item.y - 30]
                    }}
                    exit={{ scale: 1.5, opacity: 0 }}
                    transition={{ 
                      duration: 0.5,
                      y: { repeat: Infinity, duration: 2, repeatType: "reverse" }
                    }}
                    onClick={() => collectItem(item.id)}
                    whileHover={{ scale: 1.1 }}
                  >
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center cursor-pointer shadow-lg"
                      style={{ backgroundColor: `${item.skill.color}20`, border: `2px solid ${item.skill.color}` }}
                    >
                      <div className="text-center">
                        <p className="text-xs font-bold" style={{ color: item.skill.color }}>{item.skill.name}</p>
                        <p className="text-xs opacity-80 mt-1" style={{ color: item.skill.color }}>+{item.points}</p>
                      </div>
                      <motion.div 
                        className="absolute inset-0 rounded-full"
                        style={{ border: `2px solid ${item.skill.color}` }}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>

            <motion.div
              className="absolute text-center"
              style={{ left: "50%", top: "50%", x: -150, y: -120, zIndex: 40 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: introComplete ? 1 : 0, y: introComplete ? 0 : -20 }}
              transition={{ duration: 1, delay: 2.5 }}
            >
              <h1 className="text-5xl font-extrabold text-[#C0C0C0] tracking-wider">ALL EYES</h1>
              <h2 className="text-5xl font-extrabold text-[#C0C0C0] tracking-wider">ON ME</h2>
              <p className="text-md text-[#C0C0C0]/80 mt-2">Success isn’t luck, it’s the only outcome.</p>
              <p className="text-md text-[#C0C0C0]/80 mt-2">I don’t compete. I dominate</p>
            </motion.div>

            <motion.div
              className="absolute left-1/2 mt-[-75px] transform-translate-x-1/2 text-[#C0C0C0]/80 text-lg bg-[#1a1a1a]/70 px-6 py-3 rounded-full shadow-md flex items-center gap-2"
              style={{ top: "50%", x: -150, y: -200, zIndex: 50 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: !gameActive && !gameOver && isReady ? 1 : 0, y: !gameActive && !gameOver && isReady ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 5 }}
            >
              <motion.div
                className="w-3 h-3 rounded-full bg-green-500"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
              />
              PRESS <span className="text-[#C0C0C0] font-bold mx-1">G</span> TO START GAME
            </motion.div>

            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
              <g>
                {threadPaths.map((thread, index) => (
                  <motion.path
                    key={`thread-${thread.id}`}
                    d={thread.path}
                    stroke={thread.color}
                    strokeWidth="1.5"
                    fill="transparent"
                    strokeDasharray="8,4"
                    filter="url(#glow)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: introComplete ? 1 : 0, opacity: introComplete ? 0.6 : 0 }}
                    transition={{ duration: 2.5, delay: 3 + index * 0.15, ease: "easeInOut" }}
                  />
                ))}
              </g>
            </svg>

            {lifeEvents.map((event) => (
              <motion.div
                key={`event-${event.id}`}
                className="absolute"
                style={{ left: "50%", top: "50%", x: event.x - 160, y: event.y - 100, zIndex: hoveredItem === `event-${event.id}` ? 30 : 10 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ 
                  opacity: introComplete ? 1 : 0, 
                  scale: introComplete ? 1 : 0.9,
                  y: event.y - 100 + (hoveredItem === `event-${event.id}` ? -10 : 0)
                }}
                transition={{ duration: 0.8, delay: 3.5 + event.id * 0.2 }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.5)",
                  transition: { duration: 0.3 } 
                }}
                onHoverStart={() => setHoveredItem(`event-${event.id}`)}
                onHoverEnd={() => setHoveredItem(null)}
              >
                <div className="w-120 h-80 bg-[#1a1a1a] rounded-xl shadow-md border border-[#C0C0C0]/10 overflow-hidden relative">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover absolute inset-0" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 p-5 w-full">
                    <h2 className="text-xl font-bold text-white drop-shadow-md relative z-10">{event.title}</h2>
                    <p className="text-sm text-white/90 mt-2 drop-shadow-md relative z-10 leading-relaxed">{event.description}</p>
                  </div>
                  <div className="absolute top-3 right-3 bg-black/70 text-white text-xs py-1 px-3 rounded-full drop-shadow-md">{event.year}</div>
                </div>
              </motion.div>
            ))}

            {projects.map((project) => {
              if (project.id === 5) {
                return (
                  <motion.div
                    key={`project-${project.id}`}
                    className="absolute"
                    style={{ 
                      left: "50%", 
                      top: "50%", 
                      x: project.x - 120, 
                      y: project.y - 90, 
                      rotate: project.rotation, 
                      zIndex: hoveredItem === `project-${project.id}` ? 20 : 8 
                    }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: introComplete ? 1 : 0, scale: introComplete ? 1 : 0.9 }}
                    transition={{ duration: 0.8, delay: 4 + project.id * 0.25 }}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 0, 
                      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.5)", 
                      zIndex: 30, 
                      transition: { duration: 0.3 } 
                    }}
                    onHoverStart={() => setHoveredItem(`project-${project.id}`)}
                    onHoverEnd={() => setHoveredItem(null)}
                  >
                    <div className="w-60 h-60 bg-[#1a1a1a] rounded-lg shadow-md border border-[#C0C0C0]/10 overflow-hidden relative">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover absolute inset-0" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 p-4 w-full">
                        <h3 className="text-lg font-semibold text-white drop-shadow-md relative z-10">{project.title}</h3>
                        <p className="text-xs text-white/90 mt-1 drop-shadow-md relative z-10 leading-relaxed">{project.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              }

              return (
                <motion.div
                  key={`project-${project.id}`}
                  className="absolute"
                  style={{ 
                    left: "50%", 
                    top: "50%", 
                    x: project.x - 120, 
                    y: project.y - 90, 
                    rotate: project.rotation, 
                    zIndex: hoveredItem === `project-${project.id}` ? 20 : 8 
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: introComplete ? 1 : 0, scale: introComplete ? 1 : 0.9 }}
                  transition={{ duration: 0.8, delay: 4 + project.id * 0.25 }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 0, 
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.5)", 
                    zIndex: 30, 
                    transition: { duration: 0.3 } 
                  }}
                  onHoverStart={() => setHoveredItem(`project-${project.id}`)}
                  onHoverEnd={() => setHoveredItem(null)}
                >
                  <div className="w-80 h-100 bg-[#1a1a1a] rounded-lg shadow-md border border-[#C0C0C0]/10 overflow-hidden relative">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover absolute inset-0" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 p-4 w-full">
                      <h3 className="text-lg font-semibold text-white drop-shadow-md relative z-10">{project.title}</h3>
                      <p className="text-xs text-white/90 mt-1 drop-shadow-md relative z-10 leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            <AnimatePresence>
              {!introComplete && (
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 text-[#C0C0C0]/80 text-sm bg-[#1a1a1a]/70 px-4 py-2 rounded-full shadow-md flex items-center gap-2"
                  style={{ top: "50%", x: -150, y: -40, zIndex: 40 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 1, delay: 4 }}
                >
                  <motion.div
                    className="w-3 h-3 rounded-full bg-green-500"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                  />
                  PLEASE DRAG ME TO SEE PLAYGROUND
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div
              className="absolute top-6 left-6 text-[#C0C0C0]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isReady && !gameActive ? 1 : 0, x: isReady && !gameActive ? 0 : -20 }}
              transition={{ delay: 5, duration: 1 }}
              style={{ zIndex: 40 }}
            >
              <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-[#C0C0C0] to-[#909090] bg-clip-text text-transparent">Portfolio</h2>
              <p className="text-md text-[#C0C0C0]/80 mt-1">A journey through my career and creations</p>
            </motion.div>

            <motion.div
              className="absolute bottom-6 right-6 text-[#C0C0C0]/80 text-sm"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: isReady && !gameActive ? 1 : 0, x: isReady && !gameActive ? 0 : 20 }}
              transition={{ delay: 5, duration: 1 }}
              style={{ zIndex: 40 }}
            >
              © 2025 My Journey | Designed with Passion
            </motion.div>
          </motion.div>

          {gameActive && (
            <motion.div
              className="fixed w-6 h-6 rounded-full pointer-events-none z-50"
              style={{
                left: "50%",
                top: "50%",
                x,
                y,
                background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)",
                border: "1px solid rgba(255,255,255,0.5)"
              }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Play;