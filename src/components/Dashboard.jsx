import Hero from "./Hero";
import About from "./About";
import Coordinators from "./Coordinators";
import Members from "./Members";
import heroSectionData from "../data/heroSectionData";

export default function Dashboard() {
  return (
    <div className="bg-[#0a0f1a] min-h-screen font-normal pt-20">
      {/* Club Logo */}
      <div className="absolute top-0 right-0 p-4 z-[100]">
        <img src={heroSectionData.logo} alt="Club Logo" className="w-16 h-16" />
      </div>

      <Hero />
      <About />
      <Coordinators />
      <Members />
    </div>
  );
}
