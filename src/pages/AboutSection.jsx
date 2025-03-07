import { FaPlay, FaPause } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

const AboutSection = () => {
  const [playingId, setPlayingId] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRefs = useRef([
    new Audio("/mp3/1.mp3"),
    new Audio("/mp3/2.mp3"),
    new Audio("/mp3/4.mp3"),
    new Audio("/mp3/3.mp3"),
  ]);

  useEffect(() => {
    return () => {
      audioRefs.current.forEach((audio) => {
        audio.pause();
        audio.currentTime = 0;
      });
    };
  }, []);

  const handleAudioControl = (id) => {
    const currentAudio = audioRefs.current[id];

    if (playingId === id) {
      if (currentAudio.paused) {
        currentAudio
          .play()
          .then(() => setIsPlaying(true))
          .catch((error) => console.error("Error playing audio:", error));
      } else {
        currentAudio.pause();
        setIsPlaying(false);
      }
    } else {
      audioRefs.current.forEach((audio, index) => {
        if (index !== id) {
          audio.pause();
          audio.currentTime = 0;
        }
      });

      currentAudio
        .play()
        .then(() => {
          setPlayingId(id);
          setIsPlaying(true);
        })
        .catch((error) => console.error("Error playing audio:", error));

      currentAudio.onended = () => {
        setPlayingId(null);
        setIsPlaying(false);
      };
    }
  };

  const musicData = [
    {
      bgColor: "yellow",
      label: "MOTIVATED SONG",
      bgImage: "img/blue.jpeg",
      albumImage: "img/lown.jpg",
      title: "Lonown(SLOWED)",
      artist: "Avangard",
      audioId: 0,
    },
    {
      bgColor: "red",
      label: "WORKOUT SONG",
      bgImage: "img/merah.jpeg",
      albumImage: "img/neffex.jpg",
      title: "Neffex",
      artist: "Statment",
      audioId: 1,
    },
    {
      bgColor: "pink",
      label: "VISUALIZE SONG",
      bgImage: "img/bil.jpg",
      albumImage: "img/SIA.jpg",
      title: "SIA (SLOWED)",
      artist: "The Greatest",
      audioId: 2,
    },
    {
      bgColor: "teal",
      label: "LOVE SONG",
      bgImage: "img/pink.jpeg",
      albumImage: "img/sweet.jpg",
      title: "Pink Sweat$",
      artist: "At My Worst",
      audioId: 3,
    },
  ];

  const getBgColorClass = (color) => {
    const colorMap = {
      yellow: "bg-yellow-900",
      red: "bg-red-900",
      pink: "bg-pink-900",
      teal: "bg-teal-900",
    };
    return colorMap[color] || "";
  };

  const getOverlayColorStyle = (color) => {
    const colorMap = {
      yellow: "rgba(253, 224, 71, 0.3)",
      red: "rgba(239, 68, 68, 0.3)",
      pink: "rgba(236, 72, 153, 0.3)",
      teal: "rgba(20, 184, 166, 0.3)",
    };
    return colorMap[color] || "rgba(75, 85, 99, 0.3)";
  };

  const getShadowClass = (color) => {
    const shadowMap = {
      yellow: "hover:shadow-yellow-500/50",
      red: "hover:shadow-red-500/50",
      pink: "hover:shadow-pink-500/50",
      teal: "hover:shadow-teal-500/50",
    };
    return shadowMap[color] || "";
  };

  const getFgColorClass = (color) => {
    const colorMap = {
      yellow: "bg-yellow-500",
      red: "bg-red-500",
      pink: "bg-pink-500",
      teal: "bg-teal-500",
    };
    return colorMap[color] || "";
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 sm:p-6 mx-auto max-w-7xl w-full">
      {/* Left column - About section */}
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-4 sm:p-6 flex-1 shadow-lg shadow-black/10">
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">About</h1>

        <div className="mb-4 sm:mb-6">
          <p className="text-gray-400 uppercase text-xs mb-2">TODAY</p>
          <p className="text-gray-200 text-sm sm:text-base">
            A dynamic and ambitious recent graduate of SMA 28 Jakarta, currently pursuing a degree in Informatics Engineering with a focus on bridging technical expertise and innovative problem-solving. My journey is defined by a commitment to growth through hands-on project execution, strategic internships, and freelance engagements on platforms like Fiverr, where I deliver tailored solutions in software development, UI/UX design, and digital innovation.
          </p>
        </div>

        <div className="mb-4 sm:mb-6">
          <p className="text-gray-400 uppercase text-xs mb-2">CHILDHOOD</p>
          <p className="text-gray-200 text-sm sm:text-base">
            From a young age, I&apos;ve been captivated by the interplay of business, investment, and innovation—a passion that has sculpted my strategic mindset and ethical compass. By delving into over 10 books on investment and business strategy, with a focus on IT ecosystems, I cultivated a nuanced understanding of value creation in tech-driven markets. My journey is inspired by the principles of ethical leadership embodied by the Prophet Muhammad, the visionary risk-taking of Elon Musk, and the disciplined value investing philosophy of Warren Buffett.
          </p>
        </div>

        <div className="mb-4 sm:mb-6">
          <p className="text-gray-400 uppercase text-xs mb-2">GROWTH</p>
          <p className="text-gray-200 text-sm sm:text-base">
            Today, I relentlessly refine my expertise in cutting-edge fields like WEB3 and blockchain development, driven by a singular vision: to architect decentralized solutions that empower communities and democratize access to innovation. My focus spans smart contracts, tokenomics, and NFT platforms—tools I wield to build scalable, human-centric systems. I see blockchain not just as a technology, but as a paradigm shift—a catalyst for reimagining trust, ownership, and collaboration. My work is rooted in strategic foresight and ethical innovation, ensuring every project balances technical excellence with societal relevance.
          </p>
        </div>

        <div>
          <p className="text-gray-400 uppercase text-xs mb-2">GOAL</p>
          <p className="text-gray-200 text-sm sm:text-base">
            I don’t chase opportunities—I create them. With sharp vision, unshakable discipline, and a relentless drive, I’m not just building wealth—I’m building a legacy. My time, my choices, my future I’m in full control. Becoming a billionaire isn’t the goal, it’s the natural result of my value, my work, and the impact I leave behind. I am a high-value man—a leader, an innovator, and the architect of the future.
          </p>
        </div>
      </div>

      {/* Right column - Music and experiences */}
      <div className="flex-1 flex flex-col gap-4">
        {/* Music grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center">
          {musicData.map((music, index) => (
            <div
              key={index}
              className={`${getBgColorClass(music.bgColor)} rounded-3xl p-3 relative overflow-hidden transition-all duration-300 hover:shadow-lg ${getShadowClass(music.bgColor)} group`}
              style={{ position: "relative", aspectRatio: "1 / 1" }}
            >
              <div className="absolute inset-0">
                <img src={music.bgImage} alt="Background" className="w-full h-full object-cover" />
                <div
                  className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-70"
                  style={{ backgroundColor: getOverlayColorStyle(music.bgColor) }}
                ></div>
              </div>
              <span className="absolute top-2 left-3 text-[10px] sm:text-xs text-white/70 z-10">{music.label}</span>
              <div className="relative z-10 flex flex-col h-full justify-end p-2">
                <div className={`${getFgColorClass(music.bgColor)} rounded-lg overflow-hidden flex items-center p-2 shadow-md`}>
                  <div className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 rounded overflow-hidden relative mr-2 flex-shrink-0">
                    <img src={music.albumImage} alt="Album cover" className="w-full h-full object-cover" />
                    <div className="absolute inset-0" style={{ backgroundColor: getOverlayColorStyle(music.bgColor) }}></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white text-[10px] sm:text-xs font-semibold truncate">{music.title}</h3>
                    <p className="text-gray-600 text-[10px] sm:text-xs truncate">{music.artist}</p>
                  </div>
                  <div className="flex items-center pl-2">
                    <button
                      className="w-6 sm:w-8 h-6 sm:h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0"
                      onClick={() => handleAudioControl(music.audioId)}
                    >
                      {playingId === music.audioId && isPlaying ? (
                        <FaPause className="text-black text-[10px] sm:text-xs" />
                      ) : (
                        <FaPlay className="text-black text-[10px] sm:text-xs" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Experiences section */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-4 sm:p-6 shadow-lg shadow-black/10">
          <div className="flex justify-between items-center mb-4">
            <p className="text-indigo-500 uppercase text-xs sm:text-sm animate-pulse transition-all duration-500 ease-in-out">
              RECENT EXPERIENCES
            </p>
            <p className="text-white-200 text-xs sm:text-sm transition-colors duration-300 hover:text-white hover:underline cursor-pointer">
              VIEW ALL
            </p>
          </div>

          <div className="space-y-3 sm:space-y-15">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center mr-2 sm:mr-3 shadow-sm">
                  <img src="img/po.png" alt="" />
                </div>
                <span className="text-gray-200 text-sm sm:text-base">Junior Web Developer Intern</span>
              </div>
              <span className="text-gray-400 text-xs sm:text-sm">2024</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center mr-2 sm:mr-3 shadow-sm">
                  <img src="img/ar.png" alt="" />
                </div>
                <span className="text-gray-200 text-sm sm:text-base">Ui & 3D Designer Freelance</span>
              </div>
              <span className="text-gray-400 text-xs sm:text-sm">2024</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center mr-2 sm:mr-3 shadow-sm">
                  <img src="img/ow.png" alt="" />
                </div>
                <span className="text-gray-200 text-sm sm:text-base">Owner of Fajar Terang Samudra</span>
              </div>
              <span className="text-gray-400 text-xs sm:text-sm">Since 2023</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;