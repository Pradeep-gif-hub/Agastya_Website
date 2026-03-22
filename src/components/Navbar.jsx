import React, { useState, useEffect } from 'react';
import heroSectionData from "../data/heroSectionData";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  // 1. Initial "Peek" Effect
  useEffect(() => {
    // Show the items immediately on load
    setIsHovered(true);

    // Hide them after 3 seconds
    const timer = setTimeout(() => {
      setIsHovered(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // 2. Click Toggle for Mobile
  const toggleMenu = () => {
    setIsHovered((prev) => !prev);
  };

  const navItems = [
    { label: "About Us", targetId: "about-section" },
    { label: "Crew", targetId: "crew-section" },
    { label: "Visionaries", targetId: "visionaries-section" },
    { label: "Events", targetId: "events-section" },
    { label: "Home", targetId: "hero-section" },
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="fixed z-[1000]" 
      style={{ top: '3rem', right: '3rem' }} 
    >
      <div 
        className={`absolute rounded-full transition-all duration-500 ease-in-out flex items-center justify-center ${
          isHovered ? 'w-[300px] h-[300px] pointer-events-auto' : 'w-16 h-16 pointer-events-auto'
        }`}
        style={{ right: '0', top: '0', transform: 'translate(50%, -50%)' }}
        // Keep hover for desktop, but add onClick for mobile/touch
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        
        {/* The Central Logo - Now clickable */}
        <div 
          onClick={toggleMenu}
          className={`absolute z-20 transition-transform duration-300 cursor-pointer ${isHovered ? 'scale-110' : 'scale-100'}`}
        >
          <img 
            src={heroSectionData.logo} 
            alt="Club Logo" 
            className="w-16 h-16 rounded-full shadow-lg"
          />
        </div>

        {/* Decorative Glow background */}
        <div className={`absolute inset-0 bg-blue-500/15 blur-3xl rounded-full transition-opacity duration-500 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'}`} />

        {/* The Fixed Rays */}
        {navItems.map((item, index) => {
          const startAngle = 90;
          const endAngle = 180;
          const angle = startAngle + (index * ((endAngle - startAngle) / (navItems.length - 1)));

          return (
            <div
              key={item.targetId}
              className="absolute z-10 flex items-center"
              style={{
                left: '50%',
                top: '50%',
                width: '0px', 
                height: '0px',
                transformOrigin: 'left center',
                transform: `translateY(-50%) rotate(${angle - 180}deg)`,
              }}
            >
              <div
                onClick={() => {
                  handleScroll(item.targetId);
                  setIsHovered(false); // Close menu after clicking an item
                }}
                className="absolute whitespace-nowrap uppercase tracking-widest text-[12px] font-bold text-white/90 transition-all duration-500 ease-out cursor-pointer hover:text-amber-500 pointer-events-auto"
                style={{
                  transform: `translateX(calc(-100% - ${isHovered ? '55px' : '0px'}))`,
                  opacity: isHovered ? 1 : 0,
                  textShadow: '0 0 8px rgba(255,255,255,0.5)',
                }}
              >
                {item.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;