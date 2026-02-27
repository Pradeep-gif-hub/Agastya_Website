import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import data from "../data/aboutUsData";

export default function Events() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const events = data;

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [activeIndex]);

  useEffect(() => {
    const currentImagesLength = events[activeIndex].images.length;
    if (currentImagesLength <= 1) return;

    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % currentImagesLength);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [activeIndex, events]);

  return (
    <section
      className="min-h-screen bg-gradient-to-b from-[#2d4a65] via-[#1a2b45] to-[#0a0f1a] py-24 text-white relative z-10"
      id="events-section"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="mb-12 md:mb-24">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold font-special tracking-widest text-white/90">
            OUR <span className="text-amber-400">EVENTS</span>
          </h2>
          <div className="h-1 w-24 bg-amber-400 mt-6 mb-4 rounded-full"></div>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg font-normal tracking-wide uppercase">
            Milestones in Aerodynamics & Flight
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-7 relative aspect-[4/3] md:aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10 group">
            <AnimatePresence mode="wait">
              <motion.img
                key={`${activeIndex}-${currentImageIndex}`}
                src={events[activeIndex].images[currentImageIndex]}
                alt={events[activeIndex].title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent opacity-80"></div>

            <div className="absolute bottom-8 left-6 right-6">
              <motion.p 
                key={`subtitle-${activeIndex}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-amber-400 font-special text-sm md:text-base tracking-widest uppercase mb-1"
              >
                {events[activeIndex].subtitle}
              </motion.p>
              <motion.h3
                key={`title-${activeIndex}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl md:text-3xl font-normal text-white"
              >
                {events[activeIndex].title}
              </motion.h3>
            </div>

            <div className="absolute bottom-4 left-6 flex gap-2">
              {events[activeIndex].images.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    idx === currentImageIndex ? "w-6 bg-amber-400" : "w-1.5 bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-2">
            {events.map((event, index) => {
              const isActive = index === activeIndex;
              const Icon = event.icon;

              return (
                <div
                  key={event.id}
                  onClick={() => setActiveIndex(index)}
                  className={`cursor-pointer overflow-hidden transition-all duration-300 rounded-xl border-l-4 ${
                    isActive
                      ? "bg-white/5 border-amber-400 py-6 px-6"
                      : "bg-transparent border-transparent py-4 px-6 hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg transition-colors ${isActive ? "bg-amber-400/20 text-amber-400" : "bg-white/5 text-gray-500"}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className={`text-xl font-bold font-special transition-colors ${isActive ? "text-white" : "text-gray-400"}`}>
                      {event.title}
                    </h4>
                  </div>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="mt-4 ml-14 text-gray-300 font-normal leading-relaxed text-sm md:text-base">
                          {event.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
