import { motion } from "framer-motion";
import coordinatorsData from "../data/coordinatorsData";

// Grid Card Component for Faculty
const FacultyGridCard = ({ member, idx, accentColor, label, onAvatarClick }) => (
  <motion.div
    key={member.id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: idx * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ y: -10 }}
    className={`group relative h-72 rounded-xl overflow-hidden bg-gradient-to-br from-${accentColor}-500/10 to-${accentColor}-600/10 border border-${accentColor}-400/30 hover:border-${accentColor}-400/60 transition-all shadow-lg`}
  >
    {/* Background glow */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent opacity-60"></div>

    {/* Image */}
    <img
      src={member.image}
      alt={member.name}
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
      onClick={() => onAvatarClick(member)}
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-[#0a0f1a]/40 to-transparent group-hover:from-[#0a0f1a]/90 group-hover:via-[#0a0f1a]/60 transition-all duration-300 flex flex-col justify-end p-6">
      <h3 className="text-white font-special font-bold text-xl">{member.name}</h3>
      <p className={`text-${accentColor}-300 text-sm uppercase tracking-wide`}>{label}</p>
    </div>
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
          <h1 className="text-4xl md:text-5xl font-special font-bold text-white tracking-widest mb-4">
            Faculty <span className="text-blue-400">Coordinators</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Guiding our mission and vision
          </p>
        </motion.div>

        {/* Faculty Section */}
        <div className="space-y-8">
          <div className="text-center mb-12">
            <p className="text-gray-400 mt-4 text-lg">Meet our dedicated faculty coordinators</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coordinatorsData.map((member, idx) => (
              <FacultyGridCard 
                key={member.id} 
                member={member} 
                idx={idx} 
                accentColor="blue" 
                label="Faculty Coordinator" 
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
