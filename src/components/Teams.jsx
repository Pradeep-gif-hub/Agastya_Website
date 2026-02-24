import { useEffect, useRef, useState } from "react";
import membersData from "../data/membersData";

export default function Teams() {
  const trackRef = useRef(null);
  const crewSectionRef = useRef(null);
  const posRef = useRef(0); // current horizontal position
  const velRef = useRef(0); // velocity from wheel
  const rafRef = useRef(null);
  const [renderTick, setRenderTick] = useState(0); // minimal state to trigger React re-render when needed

  // Compact dimensions and spacing (original sizes)
  const cardWidth = 256; // original w-64
  const cardGap = 24; // original gap-6

  // Order requirement: Core, Social, Technical (preserve exact order)
  const core = membersData.filter((m) => m.team === "core");
  const social = membersData.filter((m) => m.team === "social");
  const technical = membersData.filter((m) => m.team === "technical");
  const marketing = membersData.filter((m) => m.team === "marketing");

  // Build ordered list and duplicate for seamless loop
  // include marketing at end so every member is present in the track
  const ordered = [...core, ...social, ...technical, ...marketing];
  const allMembers = [...ordered, ...ordered, ...ordered];

  // Compute single-pass width after mount
  const getTrackLength = () => {
    if (!trackRef.current) return 1;
    const fullWidth = trackRef.current.scrollWidth;
    return fullWidth / 3; // because we tripled
  };

  // Lock page scroll and map wheel -> horizontal movement using RAF
  useEffect(() => {
    // start at top and lock page
    window.scrollTo(0, 0);
    document.documentElement.classList.add("crew-locked");

    const targetRef = { current: 0 };
    // compute per-step as two card widths (user wants next 2 members per scroll)
    const stepPx = (cardWidth + cardGap) * 2;

    const onWheel = (e) => {
      e.preventDefault();
      if (e.deltaY > 0) targetRef.current += stepPx;
      else targetRef.current -= stepPx;
    };

    const onTouchMove = (e) => {
      // prevent page touch scroll while crew active
      if (e.touches) {
        const touch = e.touches[0];
        // no-op to prevent default scrolling
      }
    };

    // Only attach listeners on crew section to avoid global blocking
    const sectionEl = crewSectionRef.current;
    sectionEl?.addEventListener("wheel", onWheel, { passive: false });
    sectionEl?.addEventListener("touchmove", onTouchMove, { passive: false });

    // RAF loop - ease pos toward targetRef for stepped movement
    const loop = () => {
      const trackLen = getTrackLength();
      const stepTarget = targetRef.current;

      // ease interpolation
      posRef.current += (stepTarget - posRef.current) * 0.2;

      // snap small differences
      if (Math.abs(stepTarget - posRef.current) < 0.5) posRef.current = stepTarget;

      // wrap around track length
      if (trackLen > 0) {
        posRef.current = ((posRef.current % trackLen) + trackLen) % trackLen;
        targetRef.current = ((targetRef.current % trackLen) + trackLen) % trackLen;
      }

      if (trackRef.current) trackRef.current.style.transform = `translateX(-${posRef.current}px)`;
      setRenderTick((t) => (t + 1) % 60);
      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      // cleanup
      sectionEl?.removeEventListener("wheel", onWheel);
      sectionEl?.removeEventListener("touchmove", onTouchMove);
      cancelAnimationFrame(rafRef.current);
      document.documentElement.classList.remove("crew-locked");
    };
  }, []);

  // no responsive var; use fixed cardWidth for consistent sizing

  const getColorConfig = (team) => {
    const colors = {
      core: { text: "text-cyan-300", border: "hover:border-cyan-400/50", shadow: "rgba(34, 211, 238, 0.18)" },
      social: { text: "text-amber-300", border: "hover:border-amber-400/50", shadow: "rgba(251, 191, 36, 0.18)" },
      technical: { text: "text-green-300", border: "hover:border-green-400/50", shadow: "rgba(74, 222, 128, 0.18)" }
    };
    return colors[team] || colors.core;
  };

  const handleMemberClick = (member) => {
    const linkedinUrl = member.socials?.linkedin || "https://www.linkedin.com";
    window.open(linkedinUrl, "_blank");
  };

  return (
    <div className="bg-[#0a0f1a] w-full text-white">
      {/* Fixed crew viewport */}
      <div
        ref={crewSectionRef}
        className="fixed top-16 bottom-16 left-0 right-0 flex items-center overflow-hidden bg-[#0a0f1a] z-40"
      >
        {/* Heading pinned at top of the crew frame */}
        <div className="absolute top-4 left-0 right-0 flex items-center justify-center pointer-events-none">
          <h1 className="text-4xl font-special font-bold">Our Team</h1>
        </div>

        <div
          ref={trackRef}
          className="flex items-center px-6 member-track"
          style={{ transform: "translateX(0)", transition: "none", willChange: "transform" }}
        >
          {allMembers.map((member, idx) => {
            const colors = getColorConfig(member.team);
            return (
              <div
                key={`${member.id}-${idx}`}
                onClick={() => handleMemberClick(member)}
                className={`flex-shrink-0 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 ${colors.border} cursor-pointer relative`}
                style={{ width: `${cardWidth}px`, height: '288px', marginRight: `${cardGap}px` }}
                data-member
              >
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent flex flex-col justify-end p-4">
                  <div className="text-sm font-bold text-white">{member.name}</div>
                  <div className={`${colors.text} text-xs uppercase tracking-widest`}>{member.role}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer spacer removed; footer remains visible via CSS fixed positioning */}
    </div>
  );
}
