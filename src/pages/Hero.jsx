import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Meteors } from "../components/Meteors";
import data from "../data/heroSectionData";

// Sub-component for individual stars to safely use hooks
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

export default function Hero() {
  const containerRef = useRef(null);
  const [stars, setStars] = useState([]);

  // Framer Motion scroll hooks
  const { scrollYProgress, scrollY } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // 1. Adjusted Parallax speeds (increased moon and drone movement)
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.6, 0]);
  
  const moonY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]); 
  const backMountainY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  
  // Pilot parallax set between back (15%) and front (-10%) terrain
  const pilotY = useTransform(scrollYProgress, [0, 1], ["10%", "0%"]); 
  
  // Drone moves much faster now
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
    <section 
      ref={containerRef} 
      className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-[#070c15] via-[#1c304d] to-[#2d4a65]"
    >
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

      {/* Moon - Reduced Size (w-32 md:w-56) */}
        <motion.div 
        className="absolute left-1/2 top-[10%] md:top-[5%] z-10 w-20 sm:w-28 md:w-56 -translate-x-1/2"
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


      {/* Landing Drone - Rotated and Hovering */}
      <motion.div 
        className="absolute top-[15%] left-[10%] md:left-[25%] z-50 w-20 sm:w-24 md:w-36"
        style={{ y: droneY, scale: droneScale, rotate: -25 }}
      >
        {/* The image handles the continuous hover animation while the parent handles the scroll */}
        <motion.img 
          src="/drone.png" 
          alt="Drone" 
          className="w-full h-auto drop-shadow-2xl" 
          style={{ filter: "invert(1) brightness(2)" }} // Turns black image to white
          animate={{ y: [-15, 15, -15] }} // Hover up and down
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Club Name & Text - Moved lower to 65vh */}
      <motion.div 
        className="absolute top-[45vh] sm:top-[48vh] md:top-[50vh] left-0 right-0 z-40 flex flex-col items-center text-center px-4"
        style={{ y: textY, opacity: textOpacity }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-8xl font-bold text-white tracking-widest drop-shadow-lg font-special">
          {data.clubName}
        </h1>
        <p className="mt-4 text-sm sm:text-base md:text-2xl text-cyan-200 tracking-wide font-normal">
          {data.clubTagLine}
        </p>
      </motion.div>

      {/* Foreground Mountain/Terrain */}
      <motion.div 
        className="absolute bottom-[-5%] left-0 right-0 z-[60] w-full pointer-events-none"
        style={{ y: frontMountainY }}
      >
        <img src="/mountain-fg.png" alt="Foreground" className="w-full h-auto object-cover" />
      </motion.div>
      
      {/* Pilot / Person standing on cliff - Layered at z-30 */}
     <motion.div 
  className="absolute bottom-0 right-0 z-[70] 
             w-52 md:w-[420px] lg:w-[520px]"
  style={{ y: pilotY }}
>
  <img 
    src="/pilot_.png" 
    alt="Drone Pilot on Cliff" 
    className="w-full h-auto object-contain"
  />
</motion.div>
    </section>
  );
}