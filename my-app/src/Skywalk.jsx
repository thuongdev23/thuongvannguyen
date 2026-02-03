import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Skywalk() {
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
          layoutId="skywalk-card"
          className="bg-white rounded-[32px] p-6 h-full sticky top-16 flex flex-col"
        >
          <div className=" bg-white p-6 row-span-2 flex flex-col mt-auto">
            <p className="text-purple-500 font-thin italic mb-44">A cafe located in Indramayu. The idea was to combine the magnificent landscape with a traditional buildings and a chic interior design.</p>
            <h3 className="italic text-purple-500 font-thin">
              {/* Cafe + Restaurant */}
            </h3>
          <h2 className=" text-xl text-purple-500 mt-auto">
            Villa
          </h2>
          </div>
        </motion.div>
      </div>
      {/* LEFT SCROLLABLE CONTENT */}
     <div className="flex-1 overflow-y-auto px-16 py-16 ml-12">
  <div className="max-w-xl">
    {/* TITLE */}
    <h4 className="text-sm text-purple-500">Project Document</h4>
    <h2 className="text-2xl font-semibold mt-2 text-purple-500">
      Skywalk
    </h2>
    {/* DESCRIPTION */}
    <p className="mt-4 italic text-purple-600">
      Full architectural documentation including concept, drawings,
      and visualizations.
    </p>
    {/* VIEW PDF CARD */}
    <a
      href="/Skywalk-pasir-glbug.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="
        mt-10
        block
        bg-white
        rounded-[32px]
        p-8
        hover:scale-[1.02]
        transition
        shadow-md
      "
    >
        <div className="flex items-center justify-between">
         <div>
                    <p className="text-lg font-medium text-purple-500">
                      View PDF
                    </p>
                    <p className="text-sm text-gray-400 mt-1">
                      Architectural Portfolio File
                    </p>
                  </div>

                  {/* ICON */}
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-500 text-xl">
                </div>
              </div>
            </a>
          </div>
        </div>
    </div>
  );
}
