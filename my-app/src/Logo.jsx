import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Logo() {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-yellow-500 flex relative overflow-hidden">
      {/* BACK */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-6 z-20 text-white text-2xl"
      >
        ←
      </button>
       {/* RIGHT STICKY CARD */}
      <div className="w-[320px] px-12 py-16">
        <motion.div
          layoutId="logo-card"
          className="bg-white rounded-[32px] p-6 h-full sticky top-16 flex flex-col"
        >
          <h2 className="font-semibold text-xl text-yellow-500 mt-auto">
            Logo
          </h2>
        </motion.div>
      </div>
      {/* LEFT SCROLLABLE CONTENT */}
      <div className="flex-1 overflow-y-auto px-16 py-16 ml-12">
        <div className="max-w-xl">

          <h4 className="text-sm">2025</h4>
          <h1 className="text-3xl font-semibold mt-2">Logo</h1>

          <p className="mt-4 italic">
            Logo design for Indonesian Student Organization in Türkiye
          </p>
          <img src="./Logo/logos-01.png" className="mt-10 w-[220px]" />
          <p className="mt-6 font-medium">M+N</p>
          <div className="flex gap-3 mt-6">
            <div className="w-6 h-6 bg-red-700 rounded" />
            <div className="w-6 h-6 bg-red-500 rounded" />
            <div className="w-6 h-6 bg-black rounded" />
          </div>
          <p className="mt-4 text-sm italic">
            Red and Black as Main Color<br />
            Different Department = Different Color
          </p>
          <div className="flex flex-auto">
            <div className="w-[200px] h-[200px]">
            <img src="./Logo/logos-04.png"  />
            </div>
             <div className="w-[200px] h-[200px]">
            <img src="./Logo/logos-05.png"  />
            </div>
             <div className="w-[200px] h-[200px]">
            <img src="./Logo/logos-06.png"  />
            </div>
             <div className="w-[200px] h-[200px]">
            <img src="./Logo/logos-07.png"  />
            </div>
             <div className="w-[200px] h-[200px]">
            <img src="./Logo/logos-08.png"  />
            </div>
             <div className="w-[200px] h-[200px]">
            <img src="./Logo/logos-09.png"  />
            </div>
          </div>
        </div>
        <div className="max-w-xl">
          <h4 className="text-sm">2024</h4>
          <h1 className="text-3xl font-semibold mt-2">Logo</h1>
          <p className="mt-4 italic">
            Logo mockup for vocational engineering school
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-[640px]">
            <img
              src="./CreativeDesign/logo-1.png"
              className="w-full aspect-square object-contain"
            />
            <img
              src="./CreativeDesign/logo-2.png"
              className="w-full aspect-square object-contain"
            />
            <img
              src="./CreativeDesign/logo-3.png"
              className="w-full aspect-square object-contain"
            />
            <img
              src="./CreativeDesign/logo-4.png"
              className="w-full aspect-square object-contain"
            />
            <img
              src="./CreativeDesign/logo-5.png"
              className="w-full aspect-square object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
