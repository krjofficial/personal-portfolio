import { BrowserRouter, Routes, Route } from "react-router-dom"; // Correct import
import "./App.css";
import Home from "./pages/Home"
import About from "./pages/About";
import Achievements from "./pages/Achievements";
import Projects from "./pages/Projects";
import TheTimeline from "./pages/TheTimeline";
import Experience from "./pages/Experience";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
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
