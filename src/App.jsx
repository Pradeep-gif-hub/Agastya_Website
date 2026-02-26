import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import AboutPage from "./components/AboutPage";
import Dashboard from "./components/Dashboard";
import Events from "./components/Events";
import Projects from "./components/Projects";
import Crew from "./components/Crew";
import Connect from "./components/Connect";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/events" element={<Events />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/faculty" element={<Connect />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;