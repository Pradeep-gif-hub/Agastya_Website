import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, X, Cpu, Zap, Target, Code, Wind, Settings } from "lucide-react";

const hotspots = [
  {
    id: "aero",
    title: "Aerodynamics",
    icon: <Wind className="w-5 h-5" />,
    description: "Advanced airframe design, CFD analysis, and optimization for maximum efficiency and stability in flight.",
    x: "24%",
    y: "28%",
  },
  {
    id: "auto",
    title: "Autonomous Systems",
    icon: <Cpu className="w-5 h-5" />,
    description: "AI-powered navigation, path planning algorithms, and real-time decision-making capabilities.",
    x: "56%",
    y: "8%",
  },
  {
    id: "hardware",
    title: "Hardware Design",
    icon: <Settings className="w-5 h-5" />,
    description: "Custom PCB design, sensor integration, and propulsion system optimization for lightweight drones.",
    x: "80%",
    y: "35%",
  },
  {
    id: "control",
    title: "Control Systems",
    icon: <Zap className="w-5 h-5" />,
    description: "PID tuning, flight dynamics modeling, and stability control for precise autonomous flight.",
    x: "35%",
    y: "55%",
  },
  {
    id: "software",
    title: "Software Development",
    icon: <Code className="w-5 h-5" />,
    description: "Ground control systems, real-time data processing, and mission planning software.",
    x: "50%",
    y: "40%"
  },
  {
    id: "comp",
    title: "Competition Excellence",
    icon: <Target className="w-5 h-5" />,
    description: "Competing at national UAV competitions and continuously improving performance metrics.",
    x: "64%",
    y: "64%",
  },
];

const Hotspot = ({ data, active, onClick }) => {
  return (
    <div
      className="absolute z-30 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
      style={{ left: data.x, top: data.y }}
      onClick={() => onClick(data)}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="mb-2 bg-amber-500 text-black px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-md flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.5)] text-[10px] sm:text-xs md:text-sm lg:text-base"
      >
        <span className="font-bold">! {data.title}</span>
      </motion.div>

      <div className="relative flex items-center justify-center">
        <div className="w-3 h-3 bg-amber-400 rounded-full z-10" />
        <div className="absolute w-8 h-8 bg-amber-400/40 rounded-full animate-ping" />
      </div>
    </div>
  );
};

export default function DroneAnatomy() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="relative min-h-screen bg-[#0a0f1a] text-white flex flex-col items-center justify-center p-6 overflow-hidden font-mono" id="about-section">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] border border-cyan-500/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] md:w-[600px] h-[300px] sm:h-[500px] md:h-[600px] border border-cyan-500/10 rounded-full animate-[spin_20s_linear_infinite]" />
      </div>

      <h2 className="absolute top-4 text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-special font-bold tracking-tighter text-white/90">
        SYSTEM <span className="text-amber-400">ANATOMY</span>
      </h2>

      <motion.div 
        animate={{ 
          filter: selected ? "blur(8px) brightness(0.3)" : "blur(0px) brightness(1)",
          scale: selected ? 1.1 : 1
        }}
        className="relative w-full max-w-4xl flex items-center justify-center transition-all duration-500 mt-10 sm:mt-16 md:mt-20 lg:mt-24"
      >
        <img 
          src="/drone-wireframe.png" 
          alt="Drone Anatomy" 
          className="w-full h-auto object-contain pointer-events-none select-none"
        />

        {hotspots.map((h) => (
          <Hotspot 
            key={h.id} 
            data={h} 
            onClick={setSelected} 
            active={selected?.id === h.id} 
          />
        ))}
      </motion.div>

      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-[#131b2e] border-2 border-amber-400 p-8 shadow-[0_0_40px_rgba(245,158,11,0.2)]"
            >
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-amber-400 -translate-x-1 -translate-y-1" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-amber-400 translate-x-1 translate-y-1" />

              <button 
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-amber-400/10 text-amber-400 rounded-lg">
                  {selected.icon}
                </div>
                <h3 className="text-2xl font-special font-bold text-white uppercase tracking-wider">
                  {selected.title}
                </h3>
              </div>

              <p className="text-gray-300 leading-relaxed text-lg border-l-2 border-amber-400/30 pl-4">
                {selected.description}
              </p>

              <div className="mt-8 flex justify-between items-center text-[10px] text-amber-500/50 font-mono">
                <span>COORD_X: {selected.x}</span>
                <span>STATUS: OPERATIONAL</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <p className="text-gray-500 text-xs tracking-[0.4em] uppercase">
        Select component for technical breakdown
      </p>
    </section>
  );
}
