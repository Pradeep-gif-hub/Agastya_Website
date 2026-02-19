import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Drone3D = () => (
  <svg
    width="120"
    height="120"
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="filter drop-shadow-2xl"
  >
    <defs>
      <linearGradient id="droneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00e5ff" stopOpacity="1" />
        <stop offset="50%" stopColor="#00b8d4" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#0097a7" stopOpacity="0.8" />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Central Body/Battery */}
    <ellipse cx="60" cy="60" rx="12" ry="18" fill="url(#droneGradient)" filter="url(#glow)" />
    <ellipse cx="60" cy="52" rx="10" ry="8" fill="#00e5ff" opacity="0.6" />

    {/* Four Arms extending from body */}
    {/* Top arm */}
    <line x1="60" y1="42" x2="60" y2="15" stroke="url(#droneGradient)" strokeWidth="3" />
    {/* Right arm */}
    <line x1="78" y1="60" x2="105" y2="60" stroke="url(#droneGradient)" strokeWidth="3" />
    {/* Bottom arm */}
    <line x1="60" y1="78" x2="60" y2="105" stroke="url(#droneGradient)" strokeWidth="3" />
    {/* Left arm */}
    <line x1="42" y1="60" x2="15" y2="60" stroke="url(#droneGradient)" strokeWidth="3" />

    {/* Motors at arms end */}
    {/* Top motor */}
    <g transform="translate(60, 15)">
      <circle cx="0" cy="0" r="5" fill="url(#droneGradient)" filter="url(#glow)" />
      <circle cx="0" cy="0" r="3" fill="#00e5ff" opacity="0.8" />
    </g>
    {/* Right motor */}
    <g transform="translate(105, 60)">
      <circle cx="0" cy="0" r="5" fill="url(#droneGradient)" filter="url(#glow)" />
      <circle cx="0" cy="0" r="3" fill="#00e5ff" opacity="0.8" />
    </g>
    {/* Bottom motor */}
    <g transform="translate(60, 105)">
      <circle cx="0" cy="0" r="5" fill="url(#droneGradient)" filter="url(#glow)" />
      <circle cx="0" cy="0" r="3" fill="#00e5ff" opacity="0.8" />
    </g>
    {/* Left motor */}
    <g transform="translate(15, 60)">
      <circle cx="0" cy="0" r="5" fill="url(#droneGradient)" filter="url(#glow)" />
      <circle cx="0" cy="0" r="3" fill="#00e5ff" opacity="0.8" />
    </g>

    {/* Propellers with rotation animation */}
    {/* Top propeller */}
    <g transform="translate(60, 15)">
      <ellipse cx="0" cy="0" rx="10" ry="3" fill="#00e5ff" opacity="0.4" />
      <rect x="-11" y="-2" width="22" height="4" fill="#00e5ff" opacity="0.3" />
    </g>
    {/* Right propeller */}
    <g transform="translate(105, 60)">
      <ellipse cx="0" cy="0" rx="3" ry="10" fill="#00e5ff" opacity="0.4" />
      <rect x="-2" y="-11" width="4" height="22" fill="#00e5ff" opacity="0.3" />
    </g>
    {/* Bottom propeller */}
    <g transform="translate(60, 105)">
      <ellipse cx="0" cy="0" rx="10" ry="3" fill="#00e5ff" opacity="0.4" />
      <rect x="-11" y="-2" width="22" height="4" fill="#00e5ff" opacity="0.3" />
    </g>
    {/* Left propeller */}
    <g transform="translate(15, 60)">
      <ellipse cx="0" cy="0" rx="3" ry="10" fill="#00e5ff" opacity="0.4" />
      <rect x="-2" y="-11" width="4" height="22" fill="#00e5ff" opacity="0.3" />
    </g>

    {/* Camera gimbal underneath */}
    <g transform="translate(60, 80)">
      <circle cx="0" cy="0" r="4" fill="#0097a7" />
      <circle cx="0" cy="0" r="2" fill="#00e5ff" />
    </g>

    {/* Outer glow */}
    <circle cx="60" cy="60" r="35" fill="none" stroke="#00e5ff" strokeWidth="1" opacity="0.3" />
    <circle cx="60" cy="60" r="45" fill="none" stroke="#00e5ff" strokeWidth="0.5" opacity="0.15" />
  </svg>
);

export default function FlyingDrone({ onComplete }) {
  const [showDrone, setShowDrone] = useState(true);
  const [phase, setPhase] = useState("flying"); // flying, hovering, disappearing

  useEffect(() => {
    // Phase 1: Flying (0-3s)
    const flyTimer = setTimeout(() => {
      setPhase("hovering");
    }, 3000);

    // Phase 2: Hovering (3-7s)
    const hoverTimer = setTimeout(() => {
      setPhase("disappearing");
    }, 7000);

    // Phase 3: Disappear and complete (7-7.5s)
    const disappearTimer = setTimeout(() => {
      setShowDrone(false);
      if (onComplete) onComplete();
    }, 7500);

    return () => {
      clearTimeout(flyTimer);
      clearTimeout(hoverTimer);
      clearTimeout(disappearTimer);
    };
  }, [onComplete]);

  const droneVariants = {
    flying: {
      x: ["-200vw", "150px", "100px"],
      y: ["-200px", "150px", "calc(100vh - 200px)"],
      rotate: [0, 25, -15, 10, 0],
      scale: [0.5, 1, 1],
      transition: {
        duration: 3,
        ease: "easeInOut",
        times: [0, 0.3, 1],
      },
    },
    hovering: {
      x: "100px",
      y: "calc(100vh - 200px)",
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    disappearing: {
      opacity: 0,
      scale: 0.5,
      y: "calc(100vh - 100px)",
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Propeller rotation animation
  const propellerVariants = {
    spin: {
      rotate: 360,
      transition: {
        duration: 0.8,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <>
      {showDrone && (
        <motion.div
          className="fixed z-40 pointer-events-none"
          variants={droneVariants}
          animate={phase}
        >
          {/* Propeller rotation effect */}
          <motion.div
            variants={propellerVariants}
            animate="spin"
            className="w-full h-full"
          >
            <Drone3D />
          </motion.div>

          {/* Drone glow aura */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(0, 229, 255, 0.3) 0%, rgba(0, 229, 255, 0.1) 70%, transparent 100%)",
              filter: "blur(15px)",
            }}
            animate={{
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Light trail effect while flying */}
          {phase === "flying" && (
            <motion.div
              className="absolute -z-10 w-2 h-2 bg-cyan-400 rounded-full blur-sm"
              animate={{
                y: [0, -20, -40],
                opacity: [1, 0.5, 0],
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
              }}
            />
          )}
        </motion.div>
      )}
    </>
  );
}

