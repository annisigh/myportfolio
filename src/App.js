import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import SocialFollow from "./components/socialFollow";
import Skills from "./components/skills";
import Portfolio from "./components/portfolio";
import Navbar from "./components/navbar";
import Resume from "./components/resume";
import PageHeaderContent from "./components/pageHeaderContent";
import particles from "./utils.js/particles";

function App() {
  const location = useLocation();
  console.log(location);

  const handleInit = async (main) => {
    await loadFull(main);
  };

  const renderParticleJsInHomePage = location.pathname === "/";

  return (
    <div className="App">
      {renderParticleJsInHomePage && (
        <Particles id="particles" options={particles} init={handleInit} />
      )}

      <Navbar />

      <div className="App__main-page-content">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/socialFollow" element={<SocialFollow />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/pageHeaderContent" element={<PageHeaderContent />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
