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

  {/* Logo + Title */}
  <div className="flex items-center justify-center gap-4 mb-4 flex-wrap">

    <img
      src="https://swayaan.meity.gov.in/static/media/Swayaan_Logo.c6be7699dc5c0be797b5.png"
      alt="Swayaan Logo"
      className="w-14 h-14 md:w-16 md:h-16 object-contain hover:scale-110 transition duration-300"
    />

    <a
      href="https://swayaan.meity.gov.in/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-4xl md:text-6xl font-special font-bold tracking-widest
                 text-white hover:text-amber-300 transition duration-300"
    >
      <span className="text-amber-400">SWAYAAN</span> PROJECT
    </a>

  </div>

  {/* Subtitle */}
  <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
    Innovation, Excellence, and Precision in Drone Engineering
  </p>

</motion.div>


        {/* Project Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-special font-bold text-white mb-8 text-center">
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

        {/* Project Description */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="mb-20 max-w-5xl mx-auto px-6 md:px-10 py-10 rounded-2xl
             bg-gradient-to-br from-amber-500/10 to-orange-600/10
             border border-amber-400/30 backdrop-blur-md shadow-lg"
>

  {/* Heading + Logo */}
  <div className="flex items-center justify-center gap-3 mb-6">

    <img
      src="https://swayaan.meity.gov.in/static/media/Swayaan_Logo.c6be7699dc5c0be797b5.png"
      alt="Swayaan Logo"
      className="w-10 h-10 object-contain hover:scale-110 transition"
    />

    <a
      href="https://swayaan.meity.gov.in/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-3xl md:text-4xl font-special font-bold
                 text-amber-400 tracking-wide
                 hover:text-amber-200 transition"
    >
      About Swayaan
    </a>

  </div>


  {/* Paragraph 1 */}
  <p className="text-gray-300 text-lg leading-relaxed mb-6 text-justify">
    <a
      href="https://swayaan.meity.gov.in/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-amber-300 font-semibold hover:text-amber-200 underline decoration-amber-400/40 transition"
    >
      Swayaan
    </a>{" "}
    is an advanced autonomous agricultural drone project developed by{" "}
    <a
      href="/about"
      className="text-amber-300 font-semibold hover:text-amber-200 underline decoration-amber-400/40 transition"
    >
      Team Aagastya
    </a>{" "}
    at Dr. B. R. Ambedkar National Institute of Technology (NIT) Jalandhar.
    The system enables <span className="text-white font-medium">non-contact detection</span>
    of essential soil nutrients — <b>Potassium (K)</b>, <b>Sodium (Na)</b>,
    and <b>Nitrogen (N)</b> — using
    <span className="text-white font-medium"> Near-Infrared (NIR) sensing</span>
    mounted on an autonomous aerial platform powered by a
    <b> Raspberry Pi onboard computer</b>, enabling real-time spectral analysis.
  </p>


  {/* Paragraph 2 */}
  <p className="text-gray-300 text-lg leading-relaxed text-justify">
    Spectral data collected in flight is transmitted to a secure
    <span className="text-white font-medium"> cloud backend system</span>,
    where nutrient values are processed into
    <span className="text-white font-medium"> precision agricultural maps</span>.
    Supported by approximately <b>₹1 lakh funding</b> under initiatives of the{" "}
    <a
      href="https://www.meity.gov.in/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-amber-300 font-semibold hover:text-amber-200 underline decoration-amber-400/40 transition"
    >
      Ministry of Electronics and Information Technology (MeitY)
    </a>,
    the project integrates autonomous navigation, embedded systems,
    remote sensing, and data analytics to deliver affordable
    precision farming for sustainable agriculture.
  </p>

</motion.div>

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
