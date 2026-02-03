import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function OfficeBandung() {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-red-500 flex relative overflow-hidden">

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
          layoutId="office-bandung-card"
          className="bg-white rounded-[32px] p-6 h-full sticky top-16 flex flex-col"
        >
          <h2 className="font-semibold text-xl text-red-500 mt-auto">
           A1 Office Bandung
          </h2>
        </motion.div>
      </div>

      {/* LEFT SCROLLABLE CONTENT */}
          <div className="flex-1 overflow-y-auto px-16 py-16 ml-12">
                <div className="w-full">
            <img
              src="./Interior/a11.png"
              className="w-full h-auto object-cover rounded-xl"
              alt="Villa view 1"
            />
          </div>
          <div className="w-full">
          <img
              src="./Interior/a12.png"
              className="w-full h-auto object-cover rounded-xl"
              alt="Villa view 1"
            />
          </div>
              <div className="w-full">
          <img
              src="./Interior/a13.png"
              className="w-full h-auto object-cover rounded-xl"
              alt="Villa view 1"
            />
          </div>
          <div className="w-full">
          <img
              src="./Interior/a14.png"
              className="w-full h-auto object-cover rounded-xl"
              alt="Villa view 1"
            />
          </div>
        </div>
    </div>
  );
}
