import { BrowserRouter, Routes, Route } from "react-router-dom"; // Correct import
import "./App.css";
import HeroSection from "./components/HeroSection";
import Card from "./components/Card";
import About from "./pages/About";
import Achievements from "./pages/Achievements";
import Projects from "./pages/Projects";
import TheTimeline from "./pages/TheTimeline";
import Experience from "./pages/Experience";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen flex justify-center p-8 items-center">
              <div className="w-full max-w-7xl">
                <div className="grid grid-cols-3 gap-8"> {/* 3-column grid */}
                  <div> {/* First Column */}
                    <Card title="Who am I" linkTo="/about" />
                    <Card title="Projects" linkTo="/projects" />
                  </div>
                  <div className="flex flex-col items-center"> {/* Second Column (Hero + Timeline) */}
                    <div className="mb-8"> {/* Spacing below HeroSection */}
                      <HeroSection />
                    </div>
                    <Card title="The Timeline" linkTo="/timeline" />
                  </div>
                  <div> {/* Third Column */}
                    <Card title="Achievements" linkTo="/achievements" />
                    <Card title="Experience" linkTo="/experience" />
                  </div>
                </div>
              </div>
            </div>
          }
        />

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