import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Linkedin, Mail, Twitter, ShieldCheck } from "lucide-react";
import coordinators from "../data/coordinatorsData";

export default function Coordinators() {
  const [hoveredId, setHoveredId] = useState(null);
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = async (email, id) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1500);
    } catch (err) {
      console.error("Clipboard copy failed", err);
    }
  };

  return (
    <section className="min-h-screen py-24 text-white relative z-10 overflow-hidden" id="visionaries-section">
      <div className="absolute inset-0 bg-[#0a0f1a] -z-30"></div>
      
      <div 
        className="absolute inset-0 -z-20 opacity-30 mix-blend-luminosity bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: 'url(/drone-blueprint.png)' }} 
      ></div>
      <div className="absolute inset-0 -z-10 pointer-events-none bg-gradient-to-b from-[#0a0f1a] via-transparent to-[#0a0f1a]"></div>

      {/* 1. Static White Grid (Keeping your base grid as requested) */}
      <div 
        className="absolute inset-0 -z-5 pointer-events-none opacity-[0.05]" 
        style={{ 
          backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
          backgroundPosition: "0, -10px"
        }} 
      />

      {/* 2. Animated Amber Data Lines (The Amber "Transfer" effect) */}
      <div className="absolute inset-0 -z-4 pointer-events-none overflow-hidden">
        {/* Horizontal Amber Burst */}
        <motion.div 
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-full h-full opacity-30" // Slightly higher opacity for amber glow
          style={{ 
            backgroundImage: `linear-gradient(#fbbf24 1px, transparent 1px)`,
            backgroundSize: '100px 100px',
            maskImage: `linear-gradient(to right, transparent, #fbbf24, transparent)`,
            WebkitMaskImage: `linear-gradient(to right, transparent, #fbbf24, transparent)`,
            maskSize: '30% 100%',
            WebkitMaskSize: '30% 100%',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
            backgroundPosition: "0, -10px"
          }} 
        />

        {/* Vertical Amber Burst */}
        <motion.div 
          animate={{ y: ["-100%", "100%"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute top-0 left-0 w-full h-full opacity-30"
          style={{ 
            backgroundImage: `linear-gradient(90deg, #fbbf24 1px, transparent 1px)`,
            backgroundSize: '100px 100px',
            maskImage: `linear-gradient(to bottom, transparent, #fbbf24, transparent)`,
            WebkitMaskImage: `linear-gradient(to bottom, transparent, #fbbf24, transparent)`,
            maskSize: '100% 30%',
            WebkitMaskSize: '100% 30%',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
            backgroundPosition: "-10px, 0px"
          }} 
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* HEADER: System_Command_Personnel */}
        <div className="flex flex-col items-center justify-center text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-amber-500/30 bg-amber-500/10 rounded-full mb-4">
            <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-[10px] font-mono text-amber-500 tracking-[0.2em] uppercase">
              System_Command_Personnel
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-special tracking-widest text-white/90">
            THE <span className="text-amber-400">VISIONARIES</span>
          </h2>
        </div>

        {/* COORDINATOR CARDS: Tactical Style */}
        <div className="flex flex-wrap justify-center gap-12">
          {coordinators.map((person, idx) => (
            <div 
              key={person.id}
              className="relative group"
              onMouseEnter={() => setHoveredId(person.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* ID Metadata (Top Left) */}
              <AnimatePresence>
                {hoveredId === person.id && (
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute -top-8 -left-4 font-mono text-[10px] text-amber-500 z-20"
                  >
                    ID: NITJ_COORD_0{idx + 1} // LVL: SENIOR
                  </motion.div>
                )}
              </AnimatePresence>

              {/* TARGETING RETICLE (Corner Brackets) */}
              <AnimatePresence>
                {hoveredId === person.id && (
                  <div className="absolute inset-[-15px] pointer-events-none z-30">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-amber-400" />
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-amber-400" />
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-amber-400" />
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-amber-400" />
                  </div>
                )}
              </AnimatePresence>

              {/* CARD CONTAINER */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="relative w-56 sm:w-64 md:w-[280px] aspect-[3/4] bg-[#131b2e]/40 backdrop-blur-md border border-white/10 overflow-hidden"
              >
                {/* Image: FULL COLOR as requested */}
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-90 group-hover:brightness-105"
                />

                {/* Info Block */}
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-[#0a0f1a] via-[#0a0f1a]/90 to-transparent">
                  <h3 className="text-xl font-special font-bold text-white mb-1 tracking-tight">
                    {person.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="h-px w-4 bg-amber-400" />
                    <p className="text-amber-400 font-mono text-[10px] uppercase tracking-widest">
                      {person.role}
                    </p>
                  </div>

                  {/* Social Uplink */}
                  <div className="flex items-center gap-4">
                    {person.socials.linkedin && (
                      <a href={person.socials.linkedin} className="text-gray-400 hover:text-white transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {person.socials.mail && (
                      <div className="relative">
                        <Mail 
                          className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" 
                          onClick={() => handleCopy(person.socials.mail, person.id)} 
                        />
                        {copiedId === person.id && (
                          <div className="absolute -top-8 left-0 font-mono text-[10px] bg-amber-500 text-black px-1">
                            UPLINK_COPIED
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}