import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function StudentHouse() {
  const [zoomImg, setZoomImg] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-gray-200 flex relative overflow-hidden">

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
          layoutId="student-house-card"
          className="bg-white rounded-[32px] p-6 h-full sticky top-16 flex flex-col"
        >
          <h2 className=" text-xl text-black mt-auto">
            Student Tiny House City
          </h2>
        </motion.div>
      </div>
      {/* LEFT SCROLLABLE CONTENT */}
      <div className="flex-1 overflow-y-auto px-16 py-16 ml-12">
            <div className="w-[700px] h-[700px]">
            <img src="/student-house.png" 
             className="cursor-zoom-in"
            onClick={() => setZoomImg("/student-house.png")}
            alt="" />
            </div>
        </div>
      {zoomImg && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
          onClick={() => setZoomImg(null)}
        >
          {/* CLOSE BUTTON */}
          <button
            className="absolute top-6 right-6 text-white text-3xl"
            onClick={() => setZoomImg(null)}
          >
            ✕
          </button>

          {/* IMAGE */}
          <img
            src={zoomImg}
            className="
              max-w-[90vw]
              max-h-[90vh]
              object-contain
              cursor-zoom-out
            "
            alt=""
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}    
    </div>
  );
}
