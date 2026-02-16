import { useState, useRef, useMemo, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import membersData from "../data/membersData";

const generateHoneycombRows = (data) => {
  const rows = [];
  let i = 0;
  let isEven = false;
  const baseSize = Math.max(4, Math.ceil(Math.sqrt(data.length))); 

  while (i < data.length) {
    const currentSize = isEven ? baseSize + 1 : baseSize;
    rows.push(data.slice(i, i + currentSize));
    i += currentSize;
    isEven = !isEven;
  }
  return rows;
};

// --- THE SMART BUBBLE COMPONENT ---
// Notice we now pass in 'sectionRef'
const Bubble = ({ member, dragX, dragY, setHoveredMember, sectionRef }) => {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const measureOffset = () => {
      if (ref.current && sectionRef.current) {
        const bubbleRect = ref.current.getBoundingClientRect();
        const sectionRect = sectionRef.current.getBoundingClientRect();

        // Find the center of the parent section, NOT the window
        const centerX = sectionRect.width / 2;
        const centerY = sectionRect.height / 2;

        // Calculate offset by subtracting the section's position.
        // This completely eliminates scroll position from the math!
        setOffset({
          x: (bubbleRect.left - sectionRect.left) + bubbleRect.width / 2 - centerX,
          y: (bubbleRect.top - sectionRect.top) + bubbleRect.height / 2 - centerY,
        });
      }
    };

    // Run measurement on mount
    // A tiny timeout ensures all images and flex layouts are fully rendered before measuring
    const timeoutId = setTimeout(measureOffset, 100);

    // Recalculate if the user resizes their browser or rotates their phone
    window.addEventListener("resize", measureOffset);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", measureOffset);
    };
  }, [sectionRef]);

  // Real-time GPU math: Calculate current distance from center while dragging
  const scale = useTransform(() => {
    if (offset.x === 0 && offset.y === 0) return 0.8; 

    const dx = offset.x + dragX.get();
    const dy = offset.y + dragY.get();
    const distance = Math.sqrt(dx * dx + dy * dy);

    // The sweet spot for the circular mask
    // We use sectionRef width instead of window.innerWidth to keep it contained
    const maxDist = sectionRef.current ? sectionRef.current.offsetWidth / 3 : 500; 

    // Center = 1.3 (Large), Edge = 0.4 (Tiny)
    let newScale = 1.3 - (distance / maxDist);
    
    return Math.max(0.3, newScale);
  });

  return (
    <motion.div
      ref={ref}
      style={{ scale }}
      className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden bg-[#131b2e] border-2 border-white/10 shadow-lg shrink-0 origin-center"
      whileHover={{ 
        scale: 1.6, 
        zIndex: 50,
        borderColor: "#fbbf24",
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 0 20px rgba(251, 191, 36, 0.5)"
      }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      onMouseEnter={() => setHoveredMember(member)}
      onMouseLeave={() => setHoveredMember(null)}
    >
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover pointer-events-none"
        draggable="false" 
      />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
    </motion.div>
  );
};

// --- MAIN MEMBERS COMPONENT ---
export default function Members() {
  const [hoveredMember, setHoveredMember] = useState(null);
  
  // Create references for both the drag constraints and the parent section
  const constraintsRef = useRef(null);
  const sectionRef = useRef(null);
  
  const dragX = useMotionValue(0);
  const dragY = useMotionValue(0);

  const honeycombRows = useMemo(() => generateHoneycombRows(membersData), []);

  return (
    <section 
      ref={sectionRef} // Attach sectionRef here!
      className="relative h-screen w-full bg-[#0a0f1a] overflow-hidden select-none"
      id="members"
    >
      {/* FIXED UI: Header */}
      <div className="absolute top-12 left-6 md:left-12 z-50 pointer-events-none">
        <h2 className="text-4xl md:text-5xl font-bold font-special tracking-widest text-white/90">
          THE <span className="text-amber-400">CREW</span>
        </h2>
        <p className="text-gray-400 text-sm md:text-base font-normal tracking-wide uppercase mt-2 shadow-black drop-shadow-md">
          Drag to explore • Hover to identify
        </p>
      </div>

      {/* FIXED UI: Top Right Hover Info */}
      <div className="absolute bottom-12 right-6 md:right-12 z-50 pointer-events-none text-right">
        <AnimatePresence mode="wait">
          {hoveredMember && (
            <motion.div
              key={hoveredMember.id}
              initial={{ opacity: 0, x: 20, filter: "blur(5px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: 20, filter: "blur(5px)" }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-3xl md:text-4xl font-bold font-special text-amber-400 tracking-wider">
                {hoveredMember.name}
              </h3>
              <p className="text-white text-lg font-normal uppercase tracking-widest mt-1">
                {hoveredMember.role}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* THE DRAGGABLE VIEWPORT */}
      <div 
        ref={constraintsRef} 
        className="absolute inset-0 flex items-center justify-center z-10"
      >
        <div 
          className="w-full h-full flex items-center justify-center pointer-events-none"
          style={{ 
            maskImage: "radial-gradient(circle at center, black 15%, transparent 50%)",
            WebkitMaskImage: "radial-gradient(circle at center, black 15%, transparent 50%)" 
          }}
        >
          <motion.div
            drag
            style={{ x: dragX, y: dragY }}
            dragConstraints={constraintsRef}
            dragElastic={0.4} 
            dragTransition={{ bounceStiffness: 150, bounceDamping: 20 }}
            className="py-[20rem] px-[30rem] cursor-grab active:cursor-grabbing flex flex-col items-center justify-center pointer-events-auto"
          >
            {honeycombRows.map((row, rowIndex) => (
              <div 
                key={rowIndex} 
                className={`flex justify-center items-center gap-10 md:gap-14 ${rowIndex > 0 ? 'mt-4 md:mt-6' : ''}`}
              >
                {row.map((member) => (
                  <Bubble 
                    key={member.id} 
                    member={member} 
                    dragX={dragX} 
                    dragY={dragY} 
                    setHoveredMember={setHoveredMember}
                    sectionRef={sectionRef} // Pass sectionRef to the Bubble!
                  />
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}