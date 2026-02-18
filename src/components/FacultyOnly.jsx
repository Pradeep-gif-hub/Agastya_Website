import { motion } from "framer-motion";
import coordinatorsData from "../data/coordinatorsData";

const HorizontalCard = ({ member, idx, accentColor, label, onAvatarClick }) => (
  <motion.div
    key={member.id}
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: idx * 0.08 }}
    viewport={{ once: true }}
    whileHover={{ x: 10 }}
    className={`group flex items-center gap-6 p-6 rounded-lg bg-gradient-to-r from-${accentColor}-500/5 to-transparent border border-${accentColor}-400/30 hover:border-${accentColor}-400/60 hover:bg-gradient-to-r hover:from-${accentColor}-500/10 hover:to-transparent transition-all cursor-pointer`}
  >
    {/* Avatar */}
    <div 
      onClick={() => onAvatarClick(member)}
      className={`relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-${accentColor}-400/50 group-hover:border-${accentColor}-400 transition-all cursor-pointer hover:scale-110`}
    >
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Info */}
    <div className="flex-1">
      <h3 className="text-white font-special font-bold text-lg">{member.name}</h3>
      <p className={`text-${accentColor}-300 text-sm`}>{label}</p>
    </div>

    {/* Arrow */}
    <motion.div
      animate={{ x: [0, 5, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className={`text-${accentColor}-400`}
    >
      →
    </motion.div>
  </motion.div>
);

const FacultyOnly = () => {
  const handleMemberClick = (member) => {
    const linkedinUrl = member.socials?.linkedin || "https://www.linkedin.com/in/pradeep-kumar-awasthi-9313a2280/";
    window.open(linkedinUrl, '_blank');
  };

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
            Faculty <span className="text-blue-400">Coordinators</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Guiding our mission and vision
          </p>
        </motion.div>

        {/* Faculty Section */}
        <div className="space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-special font-bold text-white tracking-widest mb-4">
              <span className="text-blue-400">FACULTY</span> TEAM
            </h2>
            <div className="h-1 w-32 bg-blue-400 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-4 text-lg">Meet our dedicated faculty coordinators</p>
          </div>

          <div className="space-y-4">
            {coordinatorsData.map((member, idx) => (
              <HorizontalCard 
                key={member.id} 
                member={member} 
                idx={idx} 
                accentColor="blue" 
                label="Coordinator" 
                onAvatarClick={handleMemberClick} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyOnly;
