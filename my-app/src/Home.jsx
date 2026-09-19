import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-shell">
      <div className="home-grid grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5
                        lg:grid-cols-4
                        lg:gap-6 
                        lg:h-[calc(100vh-80px)]
                        ">
        {/* ABOUT ME CARD (EXPANDABLE) */}
        <motion.div
    
          layoutId="about-card"
          onClick={() => navigate("/about")}
          className="home-card cursor-pointer rounded-[32px] bg-gray-200 p-6 liquid-glass"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="font-semibold text-xl">Thuong Nguyen</h2>
          <p className="italic text-gray-600">
            Know more<br />about me
          </p>
           <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center">
            <a href="/about">
            →
            </a>
          </div>
        </motion.div>
        {/* CREATIVE DESIGN */}
        <motion.div
          layoutId="creative-card"
          onClick={() => navigate("/experience")}
          className="home-card cursor-pointer rounded-[32px] bg-yellow-400 row-span-2 p-6 text-white relative liquid-glass"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >

           {/* PLUS ICON */}
          <div className="absolute top-4 right-4 w-7 h-7 
                          rounded-full bg-white 
                          flex items-center justify-center 
                          text-gray-600 text-lg font-medium">
            +
          </div>
          <div className="experience-motion" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <h1 className="text-xl">
          Experience
          </h1>
        </motion.div>
        {/* COMPETITION */}
          <motion.div
          layoutId="projects-card"
          onClick={() => navigate("/projects")}
          className="home-card cursor-pointer relative rounded-[32px] bg-gray-200 row-span-2 p-6 text-black liquid-glass"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
              {/* PLUS ICON */}
          <div className="absolute top-4 right-4 w-7 h-7 
                          rounded-full bg-purple-500 
                          flex items-center justify-center 
                          text-gray-600 text-lg font-medium">
            +
          </div>
          <div className="projects-motion" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
          <h1 className="text-xl">
         Projects
          </h1>
        </motion.div>
        {/* BUILT DESIGN (INTERIOR) */}
          <motion.div
          layoutId="design-inter-card"
          onClick={() => navigate("/built-design-inter")}
          className="home-card cursor-pointer rounded-[32px] liquid-glass bg-red-500 row-span-1 p-6 text-white relative"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
            <div
            className="absolute top-4 right-4 w-7 h-7 
                      rounded-full bg-white 
                      flex items-center justify-center 
                      text-gray-600 text-lg font-medium
                      pointer-events-none"
          >
            +
          </div>
          <div className="creative-motion" aria-hidden="true">
            <span />
            <span />
          </div>
          <h1 className="text-xl">
          App Building
           </h1>
        </motion.div>
        {/* CONNECT WITH ME */}
        <div className="home-card rounded-[32px] liquid-glass bg-pink-600 row-span-3 p-6 text-white flex flex-col justify-between">
          <div className="connect-visual" aria-hidden="true">
            <span className="connect-orbit connect-orbit-one" />
            <span className="connect-orbit connect-orbit-two" />
            <span className="connect-orbit connect-orbit-three" />
            <span className="connect-core">✦</span>
            <span className="connect-node connect-node-one">in</span>
            <span className="connect-node connect-node-two">✉</span>
          </div>
          <div>
            <p className="connect-kicker">Open to good ideas</p>
            <h2 className="text-2xl">
              CONNECT<br />WITH ME
            </h2>
          </div>
          <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center">
            <a href="https://www.linkedin.com/in/thuong-nguyen-275a24190/" target="_blank" rel="noopener noreferrer" aria-label="Connect on LinkedIn">
            →
            </a>
          </div>
        </div>
          {/* Download cv */}
          <div className="home-card rounded-[32px] liquid-glass row-span-3 overflow-hidden relative">

          {/* IMAGE */}
          <img
            src="/avatar-1.jpg"
            className="cv-image w-full h-full object-cover"
            alt="Download CV"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/30 flex items-end p-6">
            
            <a
              href="/cv-nguyenvanthuong-1.pdf"
              download
              className="text-white flex items-center gap-3 
                        bg-white/10 backdrop-blur-sm 
                        px-4 py-3 rounded-full 
                        hover:bg-white/20 transition"
            >
              <span className="text-sm leading-tight">
                Download<br />My CV
              </span>

              {/* ARROW ICON */}
              <span className="w-9 h-9 rounded-full border border-white 
                              flex items-center justify-center">
                ↓
              </span>
            </a>
          </div>
          <span className="cv-sheen" aria-hidden="true" />
        </div>
         {/* ACADEMIC PROJECT */}
         <motion.div
          layoutId="academic-card"
          onClick={() => navigate("/academic")}
          className="home-card cursor-pointer relative rounded-[32px] liquid-glass bg-gray-200 row-span-2 p-6 text-black"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
           {/* PLUS ICON */}
          <div className="absolute top-4 right-4 w-7 h-7 
                          rounded-full bg-red-500 
                          flex items-center justify-center 
                          text-gray-600 text-lg font-medium">
            +
          </div>
          <div className="leetcode-motion" aria-hidden="true">
            <span>&lt;/&gt;</span>
            <i />
          </div>
          <h1 className="text-xl">
          LEETCODE<br />Probems Solved
          </h1>
        </motion.div>
          {/* BUILT DESIGN */}
        <motion.div
          layoutId="built-design-card"
          onClick={() => navigate("/social")}
          className="home-card cursor-pointer relative rounded-[32px] liquid-glass bg-blue-300 row-span-2 p-6 text-white"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
           {/* PLUS ICON */}
          <div className="absolute top-4 right-4 w-7 h-7 
                          rounded-full bg-purple-500 
                          flex items-center justify-center 
                          text-gray-600 text-lg font-medium">
            +
          </div>
          <div className="social-motion" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
          <h1 className="text-xl">
          Social Media
          </h1>
        </motion.div>
      </div>
    </div>
  );
}

