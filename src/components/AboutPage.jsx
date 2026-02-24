import { motion } from "framer-motion";
import { Zap, Target, Eye, Users, Code, Cpu, Linkedin, Instagram, Mail } from "lucide-react";

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[#0a0f1a] min-h-screen w-full text-white"
    >
      {/* Hero Section */}
      <div className="pt-24 pb-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-special font-bold text-white tracking-widest mb-6 text-center"
          >
            About <span className="text-cyan-400">AGASTYA</span>
          </motion.h1>
        </div>
      </div>

     

      {/* Core Values - Mission, Vision, Goals */}
      <div className="px-6 md:px-12 py-12 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-500/20 to-cyan-600/20 border border-blue-400/40 rounded-xl p-8 hover:border-blue-400/70 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-blue-400" />
                <h3 className="text-2xl font-special font-bold text-blue-400">MISSION</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                To design, develop, and deploy autonomous UAV systems that showcase innovation in 
                aerodynamics, control systems, and artificial intelligence while representing 
                NIT Jalandhar with excellence at national and global platforms.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-500/20 to-teal-600/20 border border-cyan-400/40 rounded-xl p-8 hover:border-cyan-400/70 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-8 h-8 text-cyan-400" />
                <h3 className="text-2xl font-special font-bold text-cyan-400">VISION</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                To be India's leading collegiate UAV research and development hub, setting benchmarks 
                in autonomous flight technology and inspiring the next generation of aerospace engineers 
                to push the boundaries of what's possible.
              </p>
            </motion.div>

            {/* Goals */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-emerald-500/20 to-green-600/20 border border-emerald-400/40 rounded-xl p-8 hover:border-emerald-400/70 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-8 h-8 text-emerald-400" />
                <h3 className="text-2xl font-special font-bold text-emerald-400">GOALS</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                • Win national UAV competitions<br/>
                • Advance aerodynamic research<br/>
                • Build industry-standard drones<br/>
                • Develop autonomous capabilities<br/>
                • Foster technical excellence
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Core Focus Areas */}
      <div className="px-6 md:px-12 py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-special font-bold text-center text-white mb-12">
            Our <span className="text-cyan-400">Core Focus Areas</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="w-8 h-8" />,
                title: "Aerodynamics",
                desc: "Advanced airframe design, CFD analysis, and optimization for maximum efficiency and stability in flight."
              },
              {
                icon: <Cpu className="w-8 h-8" />,
                title: "Autonomous Systems",
                desc: "AI-powered navigation, path planning algorithms, and real-time decision-making capabilities."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Hardware Design",
                desc: "Custom PCB design, sensor integration, and propulsion system optimization for lightweight drones."
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Control Systems",
                desc: "PID tuning, flight dynamics modeling, and stability control for precise autonomous flight."
              },
              {
                icon: <Code className="w-8 h-8" />,
                title: "Software Development",
                desc: "Ground control systems, real-time data processing, and mission planning software."
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Competition Excellence",
                desc: "Competing at national UAV competitions and continuously improving performance metrics."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-400/30 rounded-lg p-6 hover:border-cyan-400/60 hover:bg-gradient-to-br hover:from-cyan-500/20 hover:to-blue-600/20 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-cyan-400">{item.icon}</div>
                  <h3 className="text-xl font-special font-bold text-cyan-300">{item.title}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* What Makes Us Unique */}
      <div className="px-6 md:px-12 py-12 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-special font-bold text-center text-white mb-12">
            What Makes <span className="text-cyan-400">Agastya</span> Unique
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                no: "01",
                title: "Interdisciplinary Excellence",
                content: "Our team brings together expertise in aerodynamics, electronics, software development, and mechanical engineering."
              },
              {
                no: "02",
                title: "Industry-Grade Development",
                content: "We use professional-grade tools and methodologies to design and manufacture drones comparable to industrial standards."
              },
              {
                no: "03",
                title: "Continuous Innovation",
                content: "Each project iteration brings improvements in performance, efficiency, and autonomous capabilities."
              },
              {
                no: "04",
                title: "National Recognition",
                content: "Proudly representing NIT Jalandhar at prestigious UAV competitions across India."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="border-l-4 border-cyan-400 pl-6 py-4"
              >
                <h3 className="text-3xl font-special font-bold text-cyan-400 mb-2">{item.no}</h3>
                <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
