import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Home, Info, Users, Calendar, Layers } from "lucide-react";

const ROUTES = [
  { to: "/", label: "Home", icon: Home },
  { to: "/about", label: "About", icon: Info },
  { to: "/crew", label: "Crew", icon: Users },
  { to: "/events", label: "Events", icon: Calendar },
  { to: "/coordinators", label: "Coordinators", icon: Layers },
];

export default function FloatingCompassNav() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const isTouchRef = useRef(false);

  // Close on outside click (desktop)
  useEffect(() => {
    function onDoc(e) {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", onDoc);
    document.addEventListener("touchstart", onDoc);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("touchstart", onDoc);
    };
  }, []);

  // Detect if device touched to adapt toggling behaviour
  useEffect(() => {
    function touchStart() {
      isTouchRef.current = true;
      window.removeEventListener("touchstart", touchStart);
    }
    window.addEventListener("touchstart", touchStart);
    return () => window.removeEventListener("touchstart", touchStart);
  }, []);

  const radius = 90; // px orbit radius

  const parentVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06,
        when: "beforeChildren",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({ opacity: 1, scale: 1, transition: { duration: 0.35, delay: i * 0.04 } }),
    exit: { opacity: 0, scale: 0, transition: { duration: 0.18 } },
  };

  const needleVariants = {
    hidden: { scale: 0, rotate: 0, opacity: 0 },
    visible: { scale: 1, rotate: 360, opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } },
    exit: { scale: 0, rotate: 0, opacity: 0, transition: { duration: 0.45 } },
  };

  function handleToggle(e) {
    // If a touch interaction, treat as toggle
    if (isTouchRef.current) {
      setOpen((s) => !s);
      return;
    }

    // For mouse interactions hover manages open; this handler used for click fallback
    setOpen((s) => !s);
  }

  function handleNavigate(to) {
    setOpen(false);
    navigate(to);
  }

  return (
    <div
      ref={containerRef}
      className="fixed top-5 right-5 z-[9999] w-16 h-16"
      style={{ pointerEvents: "auto" }}
    >
      <div
        onMouseEnter={() => !isTouchRef.current && setOpen(true)}
        onMouseLeave={() => !isTouchRef.current && setOpen(false)}
        onClick={handleToggle}
        className="relative w-16 h-16"
      >
        {/* Rotating orbital wrapper - slow clockwise rotation */}
        <motion.div
          animate={{ rotate: open ? 10 : 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {/* Needles behind the logo (larger, visible, slow spin) */}
          <AnimatePresence>
            {open && (
              <>
                <motion.div
                  variants={needleVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute z-10 w-[3px] h-20 bg-amber-400 rounded-full origin-bottom shadow-[0_0_18px_rgba(245,158,11,0.25)]"
                  style={{ transformOrigin: "50% 100%", rotate: "10deg" }}
                >
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-b-amber-400" />
                </motion.div>
                <motion.div
                  variants={needleVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute z-9 w-[2px] h-16 bg-cyan-400 rounded-full origin-bottom shadow-[0_0_16px_rgba(34,211,238,0.18)]"
                  style={{ transformOrigin: "50% 100%", rotate: "200deg" }}
                >
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-r-[5px] border-b-[8px] border-l-transparent border-r-transparent border-b-cyan-400" />
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* Orbiting buttons wrapper (keeps slow rotation) */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ rotate: open ? 360 : 0 }}
            transition={{ duration: open ? 24 : 0, repeat: open ? Infinity : 0, ease: "linear" }}
          >
            <AnimatePresence>
              {open && (
                <motion.div
                  variants={parentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="absolute inset-0 w-full h-full flex items-center justify-center"
                >
                  {ROUTES.map((r, i) => {
                    const angle = (360 / ROUTES.length) * i - 90; // start from top
                    const Icon = r.icon;

                    // wrapper positioned along orbit; label placed under the button
                    return (
                      <motion.div
                        key={r.to}
                        custom={i}
                        variants={buttonVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        style={{
                          position: "absolute",
                          transform: `rotate(${angle}deg) translate(${radius}px) rotate(${-angle}deg)`,
                          pointerEvents: "auto",
                        }}
                        className="flex flex-col items-center justify-center"
                      >
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                            handleNavigate(r.to);
                          }}
                          aria-label={r.label}
                          className="w-10 h-10 rounded-full bg-[#0b1220]/90 border border-amber-400/10 flex items-center justify-center text-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.08)] hover:scale-110 transition-transform pointer-events-auto"
                        >
                          <Icon className="w-4 h-4" />
                        </button>

                        <div className="mt-2 text-amber-400 text-[10px] font-semibold tracking-wider uppercase select-none pointer-events-none drop-shadow-sm">
                          {r.label}
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Main Logo Button */}
          <motion.button
            whileHover={{ scale: 1.07 }}
            className={`relative z-30 w-16 h-16 rounded-full overflow-hidden border border-amber-400/10 flex items-center justify-center bg-gradient-to-br from-[#07101a] to-[#0e1722] shadow-[0_6px_30px_rgba(0,0,0,0.6)]
              ${open ? "ring-2 ring-amber-400/30" : ""}`}
            aria-label="Agastya Compass Nav"
            onClick={(e) => {
              // prevent immediate navigate on logo click; treat as toggle
              e.stopPropagation();
              if (isTouchRef.current) {
                setOpen((s) => !s);
              }
            }}
          >
            <img src="/logo.png" alt="Agastya" className="w-10 h-10 object-contain" />
            {/* Subtle glow */}
            <span className="absolute -inset-1 rounded-full blur-sm opacity-30 bg-amber-500/5" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
