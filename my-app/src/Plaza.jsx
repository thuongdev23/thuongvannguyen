import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Plaza() {
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
          layoutId="plaza-card"
          className="bg-white rounded-[32px] p-6 h-full sticky top-16 flex flex-col"
        >
          <div className=" bg-white p-6 row-span-2 flex flex-col mt-auto">
            <p className="text-purple-500 font-thin italic mb-44">A cafe located in Indramayu. The idea was to combine the magnificent landscape with a traditional buildings and a chic interior design.</p>
            <h3 className="italic text-purple-500 font-thin">
              Cafe + Restaurant
            </h3>
          <h2 className=" text-xl text-purple-500 mt-auto">
            Plaza
          </h2>
          </div>
        </motion.div>
      </div>
      {/* LEFT SCROLLABLE CONTENT */}
      <div className="flex-1 overflow-y-auto px-16 py-16 ml-12">
        <div className="max-w-4xl">

          {/* VIDEO WRAPPER */}
          <div className="relative w-full aspect-video rounded-[32px] overflow-hidden shadow-lg">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/MMH9U-MoGHc"
              title="Plaza Project Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
}
