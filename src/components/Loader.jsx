// src/components/Loader.jsx
import { useState, useEffect } from "react";

const Loader = ({ onLoadingComplete }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showLoader, setShowLoader] = useState(true);
  const [transitionToLogo, setTransitionToLogo] = useState(false);

  const fullName = "Muchamad";

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        const newProgress = prev + 2;
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setTransitionToLogo(true);
            setTimeout(() => {
              setShowLoader(false);
              if (onLoadingComplete) onLoadingComplete();
            }, 700); // Durasi transisi logo
          }, 300); // Jeda sebelum logo
        }
        return Math.min(newProgress, 100);
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  const charactersToShow = Math.ceil((loadingProgress / 100) * fullName.length);
  const visibleText = fullName.substring(0, charactersToShow);

  if (!showLoader) return null;

  return (
    <div
      className={`
        fixed inset-0 bg-[#101010] flex items-center justify-center z-50
        transition-opacity duration-700 ease-in-out
        ${transitionToLogo ? "opacity-0" : "opacity-100"}
      `}
    >
      <div
        className={`
          relative text-2xl sm:text-3xl md:text-4xl lg:text-6xl 
          font-['SF_Pro_Display'] font-bold text-[#C0C0C0]
          transition-all duration-500 ease-in-out
          ${transitionToLogo ? "scale-90 opacity-0" : "scale-100 opacity-100"}
        `}
      >
        <span>{visibleText}</span>
        <span className="opacity-30">
          {fullName.substring(charactersToShow)}
        </span>
        <span
          className={`
            absolute inset-0 flex items-center justify-center
            text-2xl sm:text-3xl md:text-4xl lg:text-6xl
            transition-opacity duration-500 ease-in-out
            ${transitionToLogo ? "opacity-100" : "opacity-0"}
          `}
        >
          DZ
        </span>
      </div>
    </div>
  );
};

export default Loader;