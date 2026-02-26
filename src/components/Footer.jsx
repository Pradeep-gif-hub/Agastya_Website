import { motion } from "framer-motion";
import { Mail, Linkedin, Instagram, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Agastya social media links
  const agastyaSocials = {
    linkedin: "https://www.linkedin.com/company/the-agastya/",
    instagram: "https://www.instagram.com/the_agastya_nitj/",
    email: "agastya@nitj.ac.in"
  };

  return (
    <footer className="site-footer bg-[#0a0f1a] border-t border-cyan-500/20 py-2 px-4 md:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-special font-bold text-cyan-400 mb-4">
              Agastya — उड़ान का विज्ञान
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Pioneering innovation in autonomous flight research and aerodynamic 
              design at NIT Jalandhar since inception. Join us in the revolution 
              of autonomous drone technology.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-special font-bold text-cyan-400 mb-4">
              Get In Touch
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <a
                  href={agastyaSocials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-cyan-300 transition-colors text-sm"
                >
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${agastyaSocials.email}`}
                  className="flex items-center gap-2 text-gray-400 hover:text-cyan-300 transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>{agastyaSocials.email}</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mb-8"></div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Copyright */}
          <div className="text-center md:text-left text-gray-500 text-sm">
            <p>
              &copy; {currentYear} Agastya Club NITJ. All rights reserved.
            </p>
        
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <motion.a
              href={agastyaSocials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-gray-500 hover:text-cyan-400 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href={agastyaSocials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-gray-500 hover:text-cyan-400 transition-colors"
              title="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </motion.a>
            <motion.a
              href={`mailto:${agastyaSocials.email}`}
              whileHover={{ scale: 1.2 }}
              className="text-gray-500 hover:text-cyan-400 transition-colors"
              title="Email"
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Decorative top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent blur-sm"></div>
    </footer>
  );
}
