import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import heroSectionData from "../data/heroSectionData";

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Events", path: "/events" },
    { label: "Current Projects", path: "/projects" },
    { label: "Crew", path: "/crew" },
    { label: "Faculty", path: "/faculty" },
  ];

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-[#070c15] via-[#1c304d]/80 to-transparent backdrop-blur-md border-b border-cyan-500/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <motion.img 
            src={heroSectionData.logo} 
            alt="Club Logo" 
            className="w-12 h-12 hover:scale-110 transition-transform" 
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          />
        </Link>

        {/* Navigation Buttons */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to={item.path}>
                <button
                  className={`px-3 py-2 text-xs md:text-sm font-special font-semibold rounded-lg transition-all duration-300 ${
                    location.pathname === item.path
                      ? "bg-cyan-500 text-[#0a0f1a] shadow-lg shadow-cyan-500/50"
                      : "text-cyan-200 border border-cyan-400/50 hover:bg-cyan-500/10 hover:border-cyan-300"
                  }`}
                >
                  {item.label}
                </button>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Link to="/">
            <motion.button 
              className="px-4 py-2 text-sm font-special text-cyan-200 border border-cyan-400/50 rounded-lg hover:bg-cyan-500/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Menu
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}

