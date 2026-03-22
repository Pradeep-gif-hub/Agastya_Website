import Hero from "./pages/Hero";
import Events from "./pages/Events";
import Coordinators from "./pages/Coordinators";
import Team from "./pages/Team";
import Footer from "./pages/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Alumni from "./pages/Alumni";
import DroneAnatomy from "./pages/DroneAnatomy";
import SystemOverview from "./pages/System";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="bg-[#0a0f1a] min-h-screen font-normal">

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
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