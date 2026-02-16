import { motion } from "framer-motion";
import { useState } from "react";
import { Linkedin, Mail, Twitter, Check } from "lucide-react";
import coordinators from "../data/coordinatorsData";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Coordinators() {
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
    <section className="min-h-screen py-24 text-white relative z-10 overflow-hidden" id="coordinators">
      
      {/* 1. Base Dark Navy Background */}
      <div className="absolute inset-0 bg-[#0a0f1a] -z-30"></div>

      {/* 2. Drone Blueprint Image (Low opacity & blended to look like a watermark) */}
      <div 
        className="absolute inset-0 -z-20 opacity-80 mix-blend-luminosity bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: 'url(/drone-blueprint.png)' }} 
      ></div>

      {/* 3. The Amber Engineering Line Grid */}
      <div 
        className="absolute inset-0 -z-10 opacity-20 pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(#fbbf24 1px, transparent 1px), linear-gradient(90deg, #fbbf24 1px, transparent 1px)', 
          backgroundSize: '50px 50px' 
        }}
      ></div>

      {/* 4. Smooth Gradient Fades at Top and Bottom (blends section into the rest of the site) */}
      <div className="absolute inset-0 -z-10 pointer-events-none bg-gradient-to-b from-[#0a0f1a] via-transparent to-[#0a0f1a]"></div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
        {/* Header section */}
        <div className="flex flex-col items-center justify-center text-center mb-16 md:mb-20">
          <h2 className="text-5xl md:text-6xl font-bold font-special tracking-widest text-white/90">
            OUR <span className="text-amber-400">COORDINATORS</span>
          </h2>
          <div className="h-1 w-24 bg-amber-400 mt-6 mb-4 rounded-full"></div>
          <p className="text-gray-300 text-lg md:text-xl font-normal tracking-wide uppercase shadow-black drop-shadow-md">
            The Visionaries Guiding Our Flight
          </p>
        </div>

        {/* Coordinators Grid */}
        <motion.div 
          className="flex justify-center gap-8 overflow-x-auto px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {coordinators.map((person) => (
            <motion.div key={person.id} variants={cardVariants} className="group cursor-pointer flex-shrink-0 w-[280px]">
              
              {/* Card Container */}
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden border-2 border-white/5 group-hover:border-amber-400/50 transition-colors duration-500 shadow-2xl bg-[#131b2e]/80 backdrop-blur-sm">
                
                {/* Image */}
                <img
                  src={person.image}
                  alt={person.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-90 group-hover:brightness-110"
                  loading="lazy"
                  decoding="async"
                />

                {/* Info Overlay (Glassmorphism effect) */}
                <div className="absolute bottom-0 left-0 right-0 bg-[#0a0f1a]/80 backdrop-blur-md border-t border-amber-400/30 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-bold font-special text-white truncate">
                    {person.name}
                  </h3>
                  <p className="text-amber-400 font-normal text-sm mt-1 mb-3 uppercase tracking-wider truncate">
                    {person.role}
                  </p>
                  
                  {/* Social Links */}
                  <div className="flex items-center gap-3">
                    {person.socials.linkedin && (
                      <a href={person.socials.linkedin} className="text-gray-400 hover:text-amber-400 transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {person.socials.twitter && (
                      <a href={person.socials.twitter} className="text-gray-400 hover:text-amber-400 transition-colors">
                        <Twitter className="w-5 h-5" />
                      </a>
                    )}
                    {person.socials.mail && (
                      <div className="relative">
                        <div
                          onClick={() => handleCopy(person.socials.mail, person.id)}
                          className="text-gray-400 hover:text-amber-400 transition-colors"
                        >
                          <Mail className="w-5 h-5" />
                        </div>

                        {copiedId === person.id && (
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex items-center gap-1 text-xs bg-[#0a0f1a]/90 border border-amber-400/30 text-amber-300 px-2 py-1 rounded-md backdrop-blur-sm shadow-md">
                            <Check className="w-3 h-3" />
                            Copied
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Subtle Amber Glow behind the info box on hover */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-amber-400/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}