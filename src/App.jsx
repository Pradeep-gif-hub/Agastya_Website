import Hero from "./components/Hero";
import About from "./components/About";
import Coordinators from "./components/Coordinators";
import Members from "./components/Members";
import heroSectionData from "./data/heroSectionData";

function App() {
  return (
    <div className="bg-[#0a0f1a] min-h-screen font-normal">
      {/* i want to add club logo at top right */}
      <div className="sticky top-0 left-0 p-4 z-[100] flex justify-end">
        <img src={heroSectionData.logo} alt="Club Logo" className="w-16 h-16" />
      </div>

      <Hero />
      <About />
      <Coordinators />
      <Members />
    </div>
  );
}

export default App;