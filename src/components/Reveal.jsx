import  { useState, useEffect } from 'react';
import Hero from './Hero'; // Import the Hero component

const Reveal = () => {
  const [isRevealing, setIsRevealing] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const revealTimeout = setTimeout(() => {
      setIsRevealing(false);
      
      // Slight delay to ensure smooth transition
      const contentTimeout = setTimeout(() => {
        setShowContent(true);
      }, 500);

      return () => clearTimeout(contentTimeout);
    }, 1000);

    return () => clearTimeout(revealTimeout);
  }, []);

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {/* Multiple reveal layers for a complex, dynamic reveal effect */}
      <div 
        className={`
          absolute inset-0 bg-[#101010] origin-bottom 
          transition-all duration-[1500ms] ease-in-out
          ${isRevealing 
            ? 'scale-y-100 opacity-100' 
            : 'scale-y-0 opacity-0'}
        `}
      />
      <div 
        className={`
          absolute inset-0 bg-[#C0C0C0]/20 origin-bottom 
          transition-all duration-[1600ms] ease-in-out delay-100
          ${isRevealing 
            ? 'scale-y-100 opacity-100' 
            : 'scale-y-0 opacity-0'}
        `}
      />
      <div 
        className={`
          absolute inset-0 bg-[#C0C0C0]/10 origin-bottom 
          transition-all duration-[1700ms] ease-in-out delay-200
          ${isRevealing 
            ? 'scale-y-100 opacity-100' 
            : 'scale-y-0 opacity-0'}
        `}
      />

      {/* Content fades in after reveal */}
      {showContent && (
        <div 
          className="
            fixed inset-0 
            opacity-0 animate-fade-in
            pointer-events-auto
          "
        >
          <Hero />
        </div>
      )}
    </div>
  );
};

export default Reveal;