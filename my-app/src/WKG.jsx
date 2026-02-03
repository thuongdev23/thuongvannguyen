import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function WKG() {
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
          layoutId="wkg-card"
          className="bg-white rounded-[32px] p-6 h-full sticky top-16 flex flex-col"
        >
          <div className=" bg-white p-6 row-span-2 flex flex-col mt-auto">
            <p className="text-purple-500 font-thin italic mb-44">A cafe located in Indramayu. The idea was to combine the magnificent landscape with a traditional buildings and a chic interior design.</p>
            <h3 className="italic text-purple-500 font-thin">
              Cafe + Restaurant
            </h3>
          <h2 className=" text-xl text-purple-500 mt-auto">
            WKG
          </h2>
          </div>
        </motion.div>
      </div>
      {/* LEFT SCROLLABLE CONTENT */}
      <div className="flex-1 overflow-y-auto px-16 py-16 ml-12">
          {/* <div className="flex flex-auto"> */}
         <div className="w-full">
      <img
        src="./BuiltDesign/wkg-1.jpg"
        className="w-full h-auto object-cover "
        alt="Villa view 1"
      />
    </div>
        {/* BOTTOM TWO IMAGES */}
          <div className="grid grid-cols-2 gap-0">
            <img
              src="./BuiltDesign/wkg-2.jpg"
              className="w-full h-auto object-cover"
              alt="Villa view 2"
            />
            <img
              src="./BuiltDesign/wkg-3.jpg"
              className="w-full h-auto object-cover "
              alt="Villa view 3"
            />
          </div>
          <div className="grid grid-cols-2 gap-0">
            <img
              src="./BuiltDesign/wkg-10.png"
              className="w-full h-auto object-cover "
              alt="Villa view 2"
            />
            <img
              src="./BuiltDesign/wkg-4.jpg"
              className="w-full h-auto object-cover "
              alt="Villa view 3"
            />
          </div>
          <div className="grid grid-cols-2 gap-0">
            <img
              src="./BuiltDesign/wkg-5.jpeg"
              className="w-full h-auto object-cover "
              alt="Villa view 2"
            />
            <img
              src="./BuiltDesign/wkg-6.jpg"
              className="w-full h-auto object-cover"
              alt="Villa view 3"
            />
          </div>
          <div className="grid grid-cols-2 gap-0">
            <img
              src="./BuiltDesign/wkg-7.jpg"
              className="w-full h-auto object-cover "
              alt="Villa view 2"
            />
            <img
              src="./BuiltDesign/wkg-8.png"
              className="w-full h-auto object-cover "
              alt="Villa view 3"
            />
          </div>
        </div>
    </div>
  );
}
