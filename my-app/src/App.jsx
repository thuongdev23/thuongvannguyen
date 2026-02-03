import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./Home";
import AboutMe from "./AboutMe";
import CreativeDesin from "./CreativeDesign";
import Illustration from "./Illustration";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import AcademicProject from "./AcademicProject";
import Uluonder from "./Uluonder";
import StudentHouse from "./StudentHouse";
import Book from "./Book";
import Competition from "./Projects";
import BuiltDesign from "./BuiltDesign";
import BuiltDesignInter from "./BuiltDesignInter";
import Branding from "./Branding";
import SarangSalang from "./SarangSalang";
import LavieGreen from "./LavieGreen";
import NuUrang from "./NuUrang";
import Kotak from "./Kotak";
import WKG from "./WKG";
import CiwideyResort from "./CiwideyResort";
import Imaji from "./Imaji";
import Wisata from "./Wisata";
import KlinikBening from "./KlinikBening";
import CuciinMami from "./CuciinMami";
import OfficeBandung from "./OfficeBandung";
import MeetingHall from "./MeetingHall";
import PlannerOffice from "./PlannerOffice";
import HouseWorkshop from "./HouseWorkshop";
import Villa from "./Villa";
import Amphitheatre from "./Amphitheatre";
import Skywalk from "./Skywalk";
import Villa2 from "./Villa2";
import Plaza from "./Plaza";
import Projects from "./Projects";

export default function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/creative" element={<CreativeDesin />} />
        <Route path="/illustration" element={<Illustration/>} />
        <Route path="/logo" element={<Logo/>} />
        <Route path="/book" element={<Book/>} /> 
        <Route path="/academic" element={<AcademicProject/>} />
        <Route path="/uluonder" element={<Uluonder/>} />
        <Route path="/student-house" element={<StudentHouse/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/built-design" element={<BuiltDesign/>} />
        <Route path="/built-design-inter" element={<BuiltDesignInter/>} />
        <Route path="/branding" element={<Branding/>} /> 
        <Route path="/sarang" element={<SarangSalang/>} /> 
        <Route path="/lavie-en-green" element={<LavieGreen/>} /> 
        <Route path="/nu-urang" element={<NuUrang/>} /> 
        <Route path="/kotak" element={<Kotak/>} /> 
        <Route path="/wkg" element={<WKG/>} /> 
        <Route path="/ciwidey-resort" element={<CiwideyResort/>} /> 
        <Route path="/imaji" element={<Imaji/>} /> 
        <Route path="/wisata" element={<Wisata/>} /> 
        <Route path="/klinik-bening" element={<KlinikBening/>} /> 
        <Route path="/cuciin-mami" element={<CuciinMami/>} /> 
        <Route path="/office-bandung" element={<OfficeBandung/>} /> 
        <Route path="/meeting-hall" element={<MeetingHall/>} /> 
        <Route path="/planner-office" element={<PlannerOffice/>} />
        <Route path="/house-gargage-workshop" element={<HouseWorkshop/>} /> 
        <Route path="/villa" element={<Villa/>} /> 
        <Route path="/amphitheatre" element={<Amphitheatre/>} /> 
        <Route path="/skywalk" element={<Skywalk/>} /> 
        <Route path="/villa2" element={<Villa2/>} /> 
        <Route path="/plaza" element={<Plaza/>} /> 
      </Routes>
    </AnimatePresence>
  );
}
