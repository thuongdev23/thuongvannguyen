import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function SarangSalang() {

const navigate = useNavigate();
const [zoomImg, setZoomImg] = useState(null);
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
          layoutId="sarang-salang-card"
          className="bg-white rounded-[32px] p-6 h-full sticky top-16 flex flex-col"
        >
           <div className=" flex flex-col mt-auto">
          <h3 className="text-gray-300 text-xl mt-auto font-thin italic">
            UMS Archi Competition
            Favorite Winner 
          </h3>
           <h3 className="text-gray-300 text-xl mt-auto font-thin italic">
            Favorite Winner 
          </h3>
          <h2 className=" text-xl text-gray-300 mt-auto">
            Sarang Salang
          </h2>
          </div>
        </motion.div>
      </div>
      {/* LEFT SCROLLABLE CONTENT */}
      <div className="flex-1 overflow-y-auto px-16 py-16 ml-12">
          <div className="w-[700px] h-[700px]">
            <img
            src="./Competition/sarang-1.jpg"
            className="cursor-zoom-in"
            onClick={() => setZoomImg("./Competition/sarang-1.jpg")}
            alt=""
          />
            </div>
            <div className="w-[700px] h-[700px]">
            <img src="./Competition/sarang-2.jpg" 
            className="cursor-zoom-in"
            onClick={() => setZoomImg("./Competition/sarang-2.jpg")}
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
