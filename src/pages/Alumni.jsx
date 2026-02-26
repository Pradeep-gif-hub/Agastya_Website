import { useState, useRef, useMemo, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { Linkedin } from "lucide-react";
import membersData from "../data/membersData";

/* ---------------- Honeycomb Layout ---------------- */

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

/* ---------------- Bubble Component ---------------- */

const Bubble = ({ member, dragX, dragY, setHoveredMember, sectionRef, onClick }) => {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const measureOffset = () => {
      if (ref.current && sectionRef.current) {
        const bubbleRect = ref.current.getBoundingClientRect();
        const sectionRect = sectionRef.current.getBoundingClientRect();

        const centerX = sectionRect.width / 2;
        const centerY = sectionRect.height / 2;

        setOffset({
          x: (bubbleRect.left - sectionRect.left) + bubbleRect.width / 2 - centerX,
          y: (bubbleRect.top - sectionRect.top) + bubbleRect.height / 2 - centerY,
        });
      }
    };

    const timeoutId = setTimeout(measureOffset, 100);
    window.addEventListener("resize", measureOffset);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", measureOffset);
    };
  }, [sectionRef]);

  const scale = useTransform(() => {
    if (!sectionRef.current) return 0.8;

    const dx = offset.x + dragX.get();
    const dy = offset.y + dragY.get();
    const distance = Math.sqrt(dx * dx + dy * dy);

    const maxDist = sectionRef.current.offsetWidth / 3;
    let newScale = 1.3 - distance / maxDist;

    return Math.max(0.3, newScale);
  });

  return (
    <motion.div
      ref={ref}
      style={{ scale }}
      onMouseEnter={() => setHoveredMember(member)}
      onMouseLeave={() => setHoveredMember(null)}
      onClick={() => onClick && onClick(member)}
      whileHover={{
        scale: 1.6,
        zIndex: 50,
        borderColor: "#fbbf24",
        boxShadow:
          "0 20px 25px -5px rgba(0,0,0,0.5), 0 0 20px rgba(251,191,36,0.5)",
      }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-[#131b2e] border-2 border-white/10 shadow-lg shrink-0 origin-center cursor-pointer"
    >
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover pointer-events-none"
        draggable="false"
      />
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
    </motion.div>
  );
};

/* ---------------- MAIN COMPONENT ---------------- */

export default function Alumni() {
  const [hoveredMember, setHoveredMember] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);
  const [nameQuery, setNameQuery] = useState("");
  const [yearQuery, setYearQuery] = useState("");

  const constraintsRef = useRef(null);
  const sectionRef = useRef(null);

  const dragX = useMotionValue(0);
  const dragY = useMotionValue(0);

  const alumniData = useMemo(
    () => membersData.filter((m) => typeof m.year === "number" && m.year < 2022),
    []
  );

  const filteredAlumni = useMemo(() => {
    const nq = nameQuery.toLowerCase();
    const yq = yearQuery;

    return alumniData.filter((m) => {
      if (nq && !m.name.toLowerCase().includes(nq)) return false;
      if (yq && m.year !== parseInt(yq)) return false;
      return true;
    });
  }, [alumniData, nameQuery, yearQuery]);

  const honeycombRows = useMemo(
    () => generateHoneycombRows(filteredAlumni),
    [filteredAlumni]
  );

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full bg-[#0a0f1a] overflow-hidden select-none"
    >
      {/* Header */}
      <div className="absolute top-8 left-6 z-50 pointer-events-none">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-widest text-white">
          THE <span className="text-amber-400">CREW</span>
        </h2>
      </div>

      {/* Draggable Grid */}
      <div ref={constraintsRef} className="absolute inset-0 flex items-center justify-center">
        <motion.div
          drag
          style={{ x: dragX, y: dragY }}
          dragConstraints={constraintsRef}
          className="py-[8rem] sm:py-[12rem] md:py-[20rem] px-[6rem] sm:px-[12rem] md:px-[30rem] flex flex-col items-center"
        >
          {honeycombRows.map((row, i) => (
            <div key={i} className="flex gap-6 md:gap-14 mt-4 md:mt-6">
              {row.map((member) => (
                <Bubble
                  key={member.id}
                  member={member}
                  dragX={dragX}
                  dragY={dragY}
                  sectionRef={sectionRef}
                  setHoveredMember={setHoveredMember}
                  onClick={setSelectedMember}
                />
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Right Controls */}
      <div className="absolute right-6 bottom-20 z-50 flex flex-col items-end gap-3">
        <div className="bg-[#071028] border border-amber-400/30 rounded-md px-2 py-1 flex items-center gap-2">
          <input
            value={nameQuery}
            onChange={(e) => setNameQuery(e.target.value)}
            placeholder="Name"
            className="bg-transparent text-white outline-none w-24 sm:w-32 text-xs sm:text-sm"
          />

          {/* FIXED DROPDOWN */}
          <select
            value={yearQuery}
            onChange={(e) => setYearQuery(e.target.value)}
            className="bg-[#071028] text-white px-2 text-xs sm:text-sm"
          >
            <option value="" className="bg-[#071028] text-white">
              Year
            </option>
            {Array.from(new Set(alumniData.map((m) => m.year)))
              .sort()
              .map((y) => (
                <option key={y} value={y} className="bg-[#071028] text-white">
                  {y}
                </option>
              ))}
          </select>

          <button
            onClick={() => {
              setNameQuery("");
              setYearQuery("");
            }}
            className="text-amber-400 text-xs sm:text-sm"
          >
            Reset
          </button>
        </div>

        {/* Selected Member */}
        <AnimatePresence>
          {selectedMember && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              className="bg-[#0f1724] border border-white/10 rounded-lg px-3 py-2 flex items-center gap-3"
            >
                <div className="text-white font-semibold text-sm sm:text-base">
                  {selectedMember.name}
                </div>

              {selectedMember.socials?.linkedin && (
                <a
                  href={selectedMember.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400"
                >
                  <Linkedin size={28} />
                </a>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}