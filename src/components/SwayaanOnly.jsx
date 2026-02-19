import { motion } from "framer-motion";

const SwayaanOnly = () => {
  // Swayaan project images from public/events/swayaan folder
  const swayaanImages = [
    "/events/swayaan/1.jpeg",
    "/events/swayaan/2.jpeg",
    "/events/swayaan/3.jpeg",
  ];

  return (
    <div className="bg-[#0a0f1a] min-h-screen w-full text-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl md:text-8xl font-special font-bold text-white tracking-widest mb-4">
            <span className="text-amber-400">SWAYAAN</span> PROJECT
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Innovation, Excellence, and Precision in Drone Engineering
          </p>
        </motion.div>

        {/* Project Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 p-8 rounded-lg bg-gradient-to-br from-amber-500/10 to-orange-600/10 border border-amber-400/30"
        >
          <h2 className="text-3xl font-special font-bold text-amber-400 mb-4">About Swayaan</h2>
          <p className="text-gray-300 leading-relaxed">
            Swayaan represents the pinnacle of autonomous drone engineering at NIT Jalandhar. 
            Our multidisciplinary team works relentlessly to push the boundaries of what's possible 
            in autonomous aerial systems, combining hardware innovation with cutting-edge software solutions.
          </p>
        </motion.div>

        {/* Project Gallery */}
        <div className="mb-12">
          <h2 className="text-4xl font-special font-bold text-white mb-8 text-center">
            Project <span className="text-amber-400">Gallery</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {swayaanImages.map((image, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group relative h-80 rounded-lg overflow-hidden border border-amber-400/30 hover:border-amber-400/60 shadow-lg"
              >
                <img
                  src={image}
                  alt={`Swayaan Project ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/400x300?text=Swayaan+Project";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { title: "Autonomous Flight", desc: "Advanced AI-powered navigation systems" },
            { title: "Hardware Innovation", desc: "Custom-designed drone architecture" },
            { title: "Real-time Control", desc: "Precision control and responsiveness" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg bg-gradient-to-br from-amber-500/5 to-orange-600/5 border border-amber-400/20 hover:border-amber-400/40 transition-all"
            >
              <h3 className="text-xl font-special font-bold text-amber-400 mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SwayaanOnly;
