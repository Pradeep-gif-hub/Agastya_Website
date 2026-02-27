import Hero from "./pages/Hero";
import Events from "./components/Events";
import Coordinators from "./pages/Coordinators";
import heroSectionData from "./data/heroSectionData";
import Team from "./pages/Team";
import Footer from "./pages/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Alumni from "./pages/Alumni";
import DroneAnatomy from "./pages/DroneAnatomy";
import SystemOverview from "./pages/System";

function App() {
  return (
    <Router>
      <div className="bg-[#0a0f1a] min-h-screen font-normal">
        {/* club logo at top right (kept) */}
        <div className="absolute top-0 right-0 p-4 z-[100]">
          <img src={heroSectionData.logo} alt="Club Logo" className="w-12 h-12 sm:w-16 sm:h-16" />
        </div>

        {/* Floating Compass Navigation removed to keep only the main club logo */}

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Events />
                <Coordinators />
                <Team />
                <DroneAnatomy />
                <SystemOverview />
                <Footer />
              </>
            }
          />

          <Route path="/alumni" element={<Alumni />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;