import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import HeroSection from "./components/HeroSection";
import Card from "./components/card";
import About from "./pages/About";
import Achievements from "./pages/Achievements";
import Projects from "./pages/Projects";
import TheTimeline from "./pages/TheTimeline";
import Experience from "./pages/Experience";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Root Route: Render HeroSection and Cards */}
        <Route
          path="/"
          element={
            <div>
              <div className="m-9">
                <HeroSection />
              </div>
              <div className="flex space-x-8">
                <Card title="Who am I" link="/about" />
                <Card title="Projects" link="/projects" />
                <Card title="The Timeline" link="/timeline" />
                <Card title="Achievements" link="/achievements" />
                <Card title="Experience" link="/experience" />
              </div>
            </div>
          }
        />

        {/* Individual Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/timeline" element={<TheTimeline />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
