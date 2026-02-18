import { motion } from "framer-motion";
import membersData from "../data/membersData";

// Distribute members by their assigned team (no randomization)
const distributeMembers = () => {
  return {
    coreTeam: membersData.filter(member => member.team === "core"),
    socialMediaTeam: membersData.filter(member => member.team === "social"),
    technicalTeam: membersData.filter(member => member.team === "technical"),
    marketingTeam: membersData.filter(member => member.team === "marketing"),
  };
};

// Core Team - Grid Layout
const CoreTeam = ({ members }) => (
  <div className="space-y-8">
    <div className="text-center mb-12">
      <h2 className="text-5xl md:text-6xl font-special font-bold text-white tracking-widest mb-4">
        <span className="text-cyan-400">CORE</span> TEAM
      </h2>
      <div className="h-1 w-32 bg-cyan-400 mx-auto rounded-full"></div>
      <p className="text-gray-400 mt-4 text-lg">Leading innovation and design</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {members.map((member, idx) => (
        <motion.div
          key={member.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -10 }}
          className="group relative h-80 rounded-xl overflow-hidden bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-400/30 hover:border-cyan-400/60 transition-all shadow-lg"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent opacity-60"></div>

          {/* Image */}
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-[#0a0f1a]/40 to-transparent group-hover:from-[#0a0f1a]/90 group-hover:via-[#0a0f1a]/60 transition-all duration-300 flex flex-col justify-end p-6">
            <h3 className="text-white font-special font-bold text-xl">{member.name}</h3>
            <p className="text-cyan-300 text-sm uppercase tracking-wide">Core Member</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

// Horizontal Card Component for all teams
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

// Social Media Team - Horizontal Cards with Amber theme
const SocialMediaTeam = ({ members, onMemberClick }) => (
  <div className="space-y-8">
    <div className="text-center mb-12">
      <h2 className="text-5xl md:text-6xl font-special font-bold text-white tracking-widest mb-4">
        <span className="text-amber-400">SOCIAL MEDIA</span> TEAM
      </h2>
      <div className="h-1 w-32 bg-amber-400 mx-auto rounded-full"></div>
      <p className="text-gray-400 mt-4 text-lg">Connecting with our community</p>
    </div>

    <div className="space-y-4">
      {members.map((member, idx) => (
        <HorizontalCard key={member.id} member={member} idx={idx} accentColor="amber" label="Social Lead" onAvatarClick={onMemberClick} />
      ))}
    </div>
  </div>
);

// Technical Team - Horizontal Cards with Green theme
const TechnicalTeam = ({ members, onMemberClick }) => (
  <div className="space-y-8">
    <div className="text-center mb-12">
      <h2 className="text-5xl md:text-6xl font-special font-bold text-white tracking-widest mb-4">
        <span className="text-green-400">TECHNICAL</span> TEAM
      </h2>
      <div className="h-1 w-32 bg-green-400 mx-auto rounded-full"></div>
      <p className="text-gray-400 mt-4 text-lg">Engineering excellence</p>
    </div>

    <div className="space-y-4">
      {members.map((member, idx) => (
        <HorizontalCard key={member.id} member={member} idx={idx} accentColor="green" label="Engineer" onAvatarClick={onMemberClick} />
      ))}
    </div>
  </div>
);

// Marketing Team - Horizontal Cards with Purple theme
const MarketingTeam = ({ members, onMemberClick }) => (
  <div className="space-y-8">
    <div className="text-center mb-12">
      <h2 className="text-5xl md:text-6xl font-special font-bold text-white tracking-widest mb-4">
        <span className="text-purple-400">MARKETING</span> TEAM
      </h2>
      <div className="h-1 w-32 bg-purple-400 mx-auto rounded-full"></div>
      <p className="text-gray-400 mt-4 text-lg">Building our brand presence</p>
    </div>

    <div className="space-y-4">
      {members.map((member, idx) => (
        <HorizontalCard key={member.id} member={member} idx={idx} accentColor="purple" label="Marketer" onAvatarClick={onMemberClick} />
      ))}
    </div>
  </div>
);

export default function Teams() {
  const teams = distributeMembers();

  // Handle member avatar click - opens LinkedIn profile
  const handleMemberClick = (member) => {
    // Dummy LinkedIn URL - replace with individual member links later
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
            Our <span className="text-cyan-400">Teams</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Meet the diverse talents driving innovation across Agastya Club NITJ
          </p>
        </motion.div>

        {/* Team Sections */}
        <div className="space-y-24">
          {/* Core Team */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <CoreTeam members={teams.coreTeam} />
          </motion.div>

          {/* Social Media Team */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SocialMediaTeam members={teams.socialMediaTeam} onMemberClick={handleMemberClick} />
          </motion.div>

          {/* Technical Team */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <TechnicalTeam members={teams.technicalTeam} onMemberClick={handleMemberClick} />
          </motion.div>

          {/* Marketing Team */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <MarketingTeam members={teams.marketingTeam} onMemberClick={handleMemberClick} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
