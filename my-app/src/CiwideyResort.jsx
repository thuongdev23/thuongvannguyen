import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function CiwideyResort() {
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
          layoutId="ciwidey-resort-card"
          className="bg-white rounded-[32px] p-6 h-full sticky top-16 flex flex-col"
        >
          <div className=" bg-white p-6 row-span-2 flex flex-col mt-auto">
            <p className="text-purple-500 font-thin italic mb-48">
              A resort design with traditional mixed with an openness design approach that is located in West Java. Nevertheless, the design stay chic but doesn't forget the root of the culture.
            </p>
            <h3 className="italic text-purple-500 font-thin">
              Resort
            </h3>
          <h2 className=" text-xl text-purple-500 mt-auto">
            Ciwidey
          </h2>
          </div>
        </motion.div>
      </div>
      {/* LEFT SCROLLABLE CONTENT */}
      <div className="flex-1 overflow-y-auto px-16 py-16 ml-12">
           {/* TOP LARGE IMAGE */}
          <div className="w-full">
            <img
              src="./Ciwidey/ciwidey-1.png"
              className="w-full h-auto object-cover "
              alt="Villa view 1"
            />
          </div>

          {/* BOTTOM TWO IMAGES */}
          <div className="grid grid-cols-3 gap-0">
            <img
              src="./Ciwidey/ciwidey-2.png"
              className="w-full h-[425px] object-cover "
              alt="Villa view 2"
            />
            <img
              src="./Ciwidey/ciwidey-3.png"
              className="w-full h-[425px] object-cover "
              alt="Villa view 3"
            />
            <img
              src="./Ciwidey/ciwidey-4.png"
              className="w-full h-[425px] object-cover"
              alt="Villa view 3"
            />
          </div>
        </div>
    </div>
  );
}
