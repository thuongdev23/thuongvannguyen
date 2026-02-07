import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./Home";
import AboutMe from "./AboutMe";
import CreativeDesin from "./Experience";
import AcademicProject from "./AcademicProject";
import BuiltDesign from "./SocialMedia";
import BuiltDesignInter from "./BuiltDesignInter";
import Projects from "./Projects";
import Experience from "./Experience";
import SocialMedia from "./SocialMedia";

export default function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/academic" element={<AcademicProject/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/social" element={<SocialMedia/>} />
        <Route path="/built-design-inter" element={<BuiltDesignInter/>} />
      </Routes>
    </AnimatePresence>
  );
}
