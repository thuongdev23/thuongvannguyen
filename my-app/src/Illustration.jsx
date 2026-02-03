import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


export default function Illustration() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-yellow-500">
      {/* BACK ARROW */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 z-20 text-white text-2xl"
      >
        ←
      </button>

      {/* LEFT FIXED CARD */}
      <div className="w-full lg:w-[360px] px-6 py-6">
        <motion.div
          layoutId="illustration-card"
          className="rounded-[32px] bg-white p-6 h-full flex flex-col sticky top-10"
        >
          <h2 className="font-semibold text-xl text-yellow-500">
            Illustration
          </h2>
        </motion.div>
      </div>
      {/* RIGHT SCROLLABLE CONTENT */}
      <div className="flex-1 overflow-visible lg: overflow-y-auto no-scrollbar">
        <div className="relative min-h-[200vh]">

             <div className="lg:absolute lg:inset-0 lg:pointer-events-none lg:z-0
        sm:relative">
        <img
          src="./CreativeDesign/illus-1.png"
          className="
           w-full max-w-sm mx-auto
          lg:absolute lg:top-[-1%] lg:left-[5%] lg:w-[500px] lg:h-[500px]"
        />
        <img
          src="./CreativeDesign/illus-2.png"
          className=" w-full max-w-sm mx-auto
          lg:absolute lg:top-[10%] lg:left-[50%] lg:w-[600px] lg:h-[650px]"
        />
        <div className="lg:absolute lg:inset-0 lg:pointer-events-none lg:z-0 lg:top-[39%] sm:relative">
        <h4 className="text-sm text-gray-500">2025</h4>
        <h1 className="text-2xl font-medium">Ne.Bac</h1>
        <h1 className="text-2xl font-medium">Character Design</h1>
       </div>
      </div> 
      {/* EXTRA CONTENT */}
        <div className="lg:absolute lg:inset-0 lg:pointer-events-none lg:z-0
        sm:relative">
          <img
          src="./CreativeDesign/illus-3.png"
          className="w-full max-w-sm mx-auto
          lg:absolute lg:top-[50%] lg:left-[5%] lg:w-[400px] lg:h-[600px]"
        />
        <img
          src="./CreativeDesign/illus-4.png"
          className=" w-full max-w-sm mx-auto
          lg:absolute lg:top-[50%] lg:left-[55%] lg:w-[400px] lg:h-[600px]"
        />
          <div className="lg:absolute lg:inset-0 lg:pointer-events-none lg:z-0 lg:top-[89%] sm: relative">
        <h4 className="text-sm text-gray-500">2025</h4>
        <h1 className="text-2xl font-medium">Ne.Bac</h1>
        <h1 className="text-2xl font-medium">KeyChain Design</h1>
       </div>
      </div> 
       {/* EXTRA CONTENT */}
            <div className="lg:absolute lg:inset-0 lg:pointer-events-none lg:z-0
              sm:relative">
                      <img
                src="./CreativeDesign/illus-5.png"
                className=" w-full max-w-sm mx-auto
                lg:absolute lg:top-[97%] lg:left-[5%] lg:w-[400px] lg:h-[600px]"
              />
              <img
                src="./CreativeDesign/illus-6.png"
                className="  w-full max-w-sm mx-auto
                lg:absolute lg:top-[97%] lg:left-[55%] lg:w-[400px] lg:h-[600px]"
              />
                <div className="lg:absolute lg:inset-0 lg:pointer-events-none lg:z-0 lg:top-[140%] sm: relative">
              <h4 className="text-sm text-gray-500">2025</h4>
              <h1 className="text-2xl font-medium">Ne.Bac</h1>
              <h1 className="text-2xl font-medium">CustomArt Design</h1>
            </div>
          </div> 
        </div>
      </div>
     </div>
  );
}


