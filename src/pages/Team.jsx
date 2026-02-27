import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { 
  motion, 
  useScroll, 
  useTransform, 
  useAnimationFrame, 
  useVelocity, 
  useSpring, 
  useMotionValue
} from "framer-motion";
import membersData, { priorityMembers } from "../data/membersData";
import { Linkedin, Instagram } from "lucide-react";
import heroSectionData from "../data/heroSectionData";

// --- Card Component ---
const MemberCard = ({ member, direction }) => {
  const cardRef = useRef(null);

  useAnimationFrame(() => {
    if (!cardRef.current) return;

    // getBoundingClientRect gives us the actual position on the screen, 
    // even inside a rotated and translated container.
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;

    const focusX =
      direction === "right"
        ? window.innerWidth * 0.25
        : window.innerWidth * 0.75;

    const distance = Math.abs(centerX - focusX);
    const effectRadius = window.innerWidth * 0.2; 

    let scale = 1;
    if (distance < effectRadius) {
      scale = 1 + 0.25 * (1 - distance / effectRadius);
    }

    // High performance direct DOM manipulation
    cardRef.current.style.transform = `scale(${scale})`;
    cardRef.current.style.zIndex = scale > 1.1 ? "10" : "1";
  });

  return (
    <div
      ref={cardRef}
      className="relative flex-shrink-0 w-20 h-28 sm:w-24 sm:h-32 md:w-28 md:h-36 lg:w-44 lg:h-60 rounded-xl overflow-hidden border border-white/10 transition-colors duration-300 hover:border-amber-400 cursor-pointer shadow-2xl bg-[#0a0f1a] will-change-transform"
    >
      <img
        src={member.image}
        alt={member.name}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent p-2 md:p-3 flex flex-col justify-end h-3/5">
        <h3 className="text-white font-bold font-special text-[10px] sm:text-xs md:text-sm lg:text-base tracking-wide truncate drop-shadow-md">
          {member.name}
        </h3>
        <div className="mt-2 flex items-center gap-2">
          {member.socials?.linkedin && (
            <button
              aria-label={`${member.name} LinkedIn`}
              onClick={(e) => {
                e.stopPropagation();
                window.open(member.socials.linkedin, "_blank", "noopener,noreferrer");
              }}
              className="p-1 rounded-full hover:scale-125 transition-colors"
            >
              <Linkedin size={16} className="text-amber-400 drop-shadow-sm" />
            </button>
          )}

          {member.socials?.instagram && (
            <button
              aria-label={`${member.name} Instagram`}
              onClick={(e) => {
                e.stopPropagation();
                window.open(member.socials.instagram, "_blank", "noopener,noreferrer");
              }}
              className="p-1 rounded-full hover:scale-125 transition-colors"
            >
              <Instagram size={16} className="text-amber-400 drop-shadow-sm" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const Strip = ({ teamName, members, direction, rotate, scrollYProgress }) => {
  // 1. Position State
  const baseX = useMotionValue(0);
  
  // 2. Scroll Velocity Logic
  const scrollVelocity = useVelocity(scrollYProgress);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });

  // TUNE SCROLL EFFECT HERE: 
  // Increase '40' to make scrolling have a more violent impact.
  const velocityFactor = useTransform(smoothVelocity, [0, 1], [0, 32], {
    clamp: false
  });
  const x = useTransform(baseX, (v) => `${wrap(-40, -20, v)}%`);

  useAnimationFrame((t, delta) => {
    let moveBy = (direction === "right" ? 1.4 : -1.4) * (delta / 1000);

    // Add the scroll momentum
    const acceleration = velocityFactor.get() * (delta / 1000);
    
    moveBy += direction === "right" ? acceleration : -acceleration;

    baseX.set(baseX.get() + moveBy);
  });

  // Create the 5 sets for the buffer
  const loopedMembers = [
    ...members, // Set 1
    ...members, // Set 2
    ...members, // Set 3
    ...members, // Set 4
    ...members  // Set 5
  ];

  return (
    <div className="relative w-full h-36 md:h-48 lg:h-60 my-10 flex items-center justify-center">
      
      {/* Team Label */}
      <div 
        className="absolute z-20 pointer-none"
        style={{ 
          [direction === "right" ? "left" : "right"]: "8vw", 
          top: "-15%", 
          transform: `rotate(${rotate}deg)`,
          transformOrigin: direction === "right" ? "left bottom" : "right bottom"
        }}
      >
        <h3 className="text-amber-500 font-special text-2xl md:text-4xl font-bold uppercase tracking-tighter opacity-80">
          {teamName}
        </h3>
      </div>

      {/* The Sliding Track */}
      <div 
        className="absolute w-[500%] flex items-center justify-center" 
        style={{ transform: `rotate(${rotate}deg)` }}
      >
        <motion.div
          className="flex gap-4 md:gap-8 px-4 items-center w-max"
          style={{ x }}
        >
          {loopedMembers.map((member, idx) => (
            <MemberCard
              key={`${member.id}-${idx}`}
              member={member}
              direction={direction}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

// --- Main Page Component ---
export default function Team() {
  const containerRef = useRef(null);
  const [groupedTeams, setGroupedTeams] = useState({});

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], 
  });

  useEffect(() => {
    const currentYear = new Date().getFullYear();

    const activeMembers = priorityMembers.filter((m) => {
      const memberYear = m.year || 2024;
      // Include current active members (within 4 years) OR alumni before 2022
      return currentYear < memberYear + 4 || (typeof memberYear === 'number' && memberYear < 2022);
    });

    const teams = activeMembers.reduce((acc, member) => {
      const team = member.team.toLowerCase();
      if (!acc[team]) acc[team] = [];
      acc[team].push(member);
      return acc;
    }, {});

    // Ensure desired display order: core -> technical -> social -> marketing
    const ordered = {};
    ["core", "technical", "social", "marketing"].forEach((k) => {
      if (teams[k]) ordered[k] = teams[k];
    });
    // append any other teams that might exist
    Object.keys(teams).forEach((k) => {
      if (!ordered[k]) ordered[k] = teams[k];
    });

    setGroupedTeams(ordered);
  }, []);

  const teamKeys = Object.keys(groupedTeams);

  return (
    <section 
      ref={containerRef}
      className="relative w-full bg-[#0a0f1a] overflow-hidden py-16 md:py-24 z-10 flex flex-col" 
      id="crew-section"
    >
      {/* Left Fade */}
      <div className="absolute top-0 left-0 h-full w-20 md:w-40 z-30 pointer-events-none bg-gradient-to-r from-[#0a0f1a] to-transparent" />
      
      {/* Right Fade */}
      <div className="absolute top-0 right-0 h-full w-20 md:w-40 z-30 pointer-events-none bg-gradient-to-l from-[#0a0f1a] to-transparent" />

      <div
        className="absolute inset-0 -z-20 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url(${heroSectionData.logo})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "80%",
        }}
      />
      {/* Section Header */}
      <div className="relative z-50 flex flex-col items-center text-center w-full mb-10 md:mb-14">
        <div className="absolute top-[-25px] md:top-[-30px] left-1/2 -translate-x-1/2 w-px h-6 md:h-8 border-l border-dashed border-amber-400/30"></div>
        
        <h2 className="text-3xl md:text-5xl font-bold font-special tracking-widest text-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
          THE <span className="text-amber-400">CREW</span>
        </h2>

        <Link
          to="/alumni"
          className="mt-3 inline-block px-6 py-2 rounded-full font-bold tracking-widest uppercase text-xs md:text-sm text-white transition-all duration-500 bg-[linear-gradient(to_right,#92400e_0%,#f59e0b_50%,#92400e_100%)] bg-[length:200%_auto] shadow-[0_0_20px_rgba(245,158,11,0.35)] hover:bg-right hover:scale-105"
        >
          Visit Alumni
        </Link>

        <div className="absolute bottom-[-30px] md:bottom-[-35px] left-1/2 -translate-x-1/2 w-px h-6 md:h-8 border-l border-dashed border-amber-400/30"></div>
      </div>

      {/* Render Strips in a Flex Column layout */}
      <div className="flex flex-col w-full h-full justify-center gap-8 md:gap-16 lg:gap-32">
        {teamKeys.map((teamName, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <Strip
              key={teamName}
              teamName={teamName}
              members={groupedTeams[teamName]}
              direction={isEven ? "right" : "left"}
              rotate={isEven ? -6 : 6}
              scrollYProgress={scrollYProgress} 
            />
          );
        })}
      </div>
      
    </section>
  );
}