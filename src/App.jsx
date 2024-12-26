import "./App.css";
import Card from "./components/card";
import HeroSection from "./components/HeroSection";

function App(props) {
  return (
    <>
      <div className="m-9">
        <HeroSection />
      </div>
      <div className="flex space-x-8">
        <Card title="Who am I" />
        <Card title="Projects" />
        <Card title="The Timeline" />
        <Card title="Achievements" />
        <Card title="Experience" />
      </div>
    </>
  );
}

export default App;
