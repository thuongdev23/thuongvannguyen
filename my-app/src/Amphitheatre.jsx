import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Amphitheatre() {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-blue-200 flex relative overflow-hidden">

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
          <div className=" bg-white p-6 row-span-2 flex flex-col mt-auto">
          <h2 className=" text-xl text-purple-500 mt-auto">
            Amphitheatre
          </h2>
          </div>
        </motion.div>
      </div>
      {/* LEFT SCROLLABLE CONTENT */}
        <div className="flex-1 overflow-y-auto px-16 py-16 ml-4">
          <div className="w-full">
            <img
              src="./BuiltDesign/amphi-2.png"
              className="w-full h-auto object-cover rounded-xl"
              alt="Villa view 1"
            />
          </div>
          <div className="w-full">
          <img
              src="./BuiltDesign/amphi-1.png"
              className="w-full h-auto object-cover rounded-xl"
              alt="Villa view 1"
            />
          </div>
        </div>
    </div>
  );
}
