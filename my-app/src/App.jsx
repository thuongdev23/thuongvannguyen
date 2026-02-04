import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./Home";
import AboutMe from "./AboutMe";
import CreativeDesin from "./CreativeDesign";
import AcademicProject from "./AcademicProject";
import BuiltDesign from "./BuiltDesign";
import BuiltDesignInter from "./BuiltDesignInter";
import Projects from "./Projects";

export default function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/creative" element={<CreativeDesin />} />
        <Route path="/academic" element={<AcademicProject/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/built-design" element={<BuiltDesign/>} />
        <Route path="/built-design-inter" element={<BuiltDesignInter/>} />
      </Routes>
    </AnimatePresence>
  );
}
