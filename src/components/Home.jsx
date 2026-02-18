import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Meteors } from "./Meteors";
import data from "../data/heroSectionData";

// Sub-component for individual stars
const Star = ({ star, scrollY }) => {
  const yTransform = useTransform(scrollY, (val) => val * star.speed);
  
  return (
    <motion.div
      className="absolute rounded-full bg-white animate-twinkle"
      style={{
        left: `${star.x}%`,
        top: `${star.y}%`,
        width: `${star.size}px`,
        height: `${star.size}px`,
        opacity: star.opacity,
        y: yTransform,
        animation: `twinkle ${star.twinkleDuration}s infinite ${star.twinkleDelay}s`,
      }}
    />
  );
};

// Floating Animation Component
const FloatingElement = ({ delay, children, className }) => (
  <motion.div
    animate={{ y: [-20, 20, -20] }}
    transition={{ duration: 6 + delay, repeat: Infinity, ease: "easeInOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function Home() {
  const containerRef = useRef(null);
  const [stars, setStars] = useState([]);

  const { scrollYProgress, scrollY } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.6, 0]);
  
  const moonY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]); 
  const backMountainY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const pilotY = useTransform(scrollYProgress, [0, 1], ["10%", "0%"]); 
  const droneY = useTransform(scrollYProgress, [0, 1], ["0%", "600%"]);
  const droneScale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const frontMountainY = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);

  useEffect(() => {
    const adjustedSize = window.innerWidth < 768 ? 0.5 : 1.5;
    const generatedStars = Array.from({ length: 220 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + adjustedSize,
      opacity: Math.random() * 0.5 + 0.3,
      speed: Math.random() * 0.05 + 0.01,
      twinkleDuration: 2 + Math.random() * 3,
      twinkleDelay: Math.random() * 2,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full bg-[#0a0f1a]">
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#070c15] via-[#1c304d] to-[#2d4a65] pt-32">
        {/* Meteors */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Meteors number={15} />
        </div>

        {/* Twinkling Stars */}
        <div className="absolute inset-0 z-[5]">
          {stars.map((star, index) => (
            <Star key={index} star={star} scrollY={scrollY} />
          ))}
        </div>

        {/* Moon */}
        <motion.div 
          className="absolute left-1/2 top-[10%] md:top-[5%] z-10 w-32 md:w-56 -translate-x-1/2"
          style={{ y: moonY }}
        >
          <img src="/moon.png" alt="Moon" className="w-full h-auto drop-shadow-[0_0_40px_rgba(200,200,255,0.4)]" />
        </motion.div>

        {/* Background Mountain */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 z-20 w-full"
          style={{ y: backMountainY }}
        >
          <img src="/mountain-bg.png" alt="Background Mountain" className="w-full h-auto object-cover" />
        </motion.div>

        {/* Landing Drone */}
        <motion.div 
          className="absolute top-[15%] left-[10%] md:left-[25%] z-50 w-24 md:w-36"
          style={{ y: droneY, scale: droneScale, rotate: -25 }}
        >
          <motion.img 
            src="/drone.png" 
            alt="Drone" 
            className="w-full h-auto drop-shadow-2xl" 
            style={{ filter: "invert(1) brightness(2)" }}
            animate={{ y: [-15, 15, -15] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Club Name - Made Visible */}
        <motion.div 
          className="absolute top-1/3 left-0 right-0 z-40 flex flex-col items-center text-center px-4"
          style={{ y: textY, opacity: textOpacity }}
        >
          <h1 className="text-5xl md:text-8xl font-bold text-white tracking-widest drop-shadow-lg font-special">
            {data.clubName}
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-cyan-200 tracking-wide font-normal">
            {data.clubTagLine}
          </p>
        </motion.div>

        {/* Foreground Mountain */}
        <motion.div 
          className="absolute bottom-[-5%] left-0 right-0 z-[60] w-full pointer-events-none"
          style={{ y: frontMountainY }}
        >
          <img src="/mountain-fg.png" alt="Foreground" className="w-full h-auto object-cover" />
        </motion.div>
        
        {/* Pilot */}
        <motion.div 
          className="absolute bottom-[0%] right-[0%] md:right-[0%] z-[70] w-32 md:w-1/2"
          style={{ y: pilotY }}
        >
          <img src="/pilot_.png" alt="Drone Pilot on Cliff" className="w-full h-auto" />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-cyan-300 text-sm font-special">SCROLL TO EXPLORE</span>
            <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-2 bg-cyan-400 rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
