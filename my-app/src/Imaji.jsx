import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Imaji() {
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
          layoutId="imaji-card"
          className="bg-white rounded-[32px] p-6 h-full sticky top-16 flex flex-col"
        >
            <div className=" bg-white p-6 row-span-2 flex flex-col mt-auto">
            <p className="text-purple-500 font-thin italic mb-96">A re-purpose of a house to now cafe and office for a client in Medan, Indonesia. </p>
            <h3 className="italic text-purple-500 font-thin">
              Cafe + Office
            </h3>
          <h2 className=" text-xl text-purple-500 mt-auto">
            Imaji
          </h2>
          </div>
        </motion.div>
      </div>
      {/* LEFT SCROLLABLE CONTENT */}
      <div className="flex-1 overflow-y-auto px-16 py-16 ml-12">
          {/* <div className="flex flex-auto"> */}
            <div className="w-full">
              <img
                src="./Imaji/imaji-1.jpg"
                className="w-full h-auto object-cover "
                alt="Villa view 1"
              />
            </div>

            {/* BOTTOM TWO IMAGES */}
            <div className="grid grid-cols-2 gap-0">
              <img
                src="./Imaji/imaji-2.jpg"
                className="w-full h-auto object-cover"
                alt="Villa view 2"
              />
              <img
                src="./Imaji/imaji-3.jpg"
                className="w-full h-auto object-cover "
                alt="Villa view 3"
              />
            </div>
            <div className="grid grid-cols-2 gap-0">
              <img
                src="./Imaji/imaji-4.jpg"
                className="w-full h-auto object-cover "
                alt="Villa view 2"
              />
              <img
                src="./Imaji/imaji-5.jpg"
                className="w-full h-auto object-cover "
                alt="Villa view 3"
              />
            </div>
            <div className="grid grid-cols-2 gap-0">
              <img
                src="./Imaji/imaji-6.jpg"
                className="w-full h-auto object-cover "
                alt="Villa view 2"
              />
              <img
                src="./Imaji/imaji-7.jpg"
                className="w-full h-auto object-cover"
                alt="Villa view 3"
              />
            </div>
            <div className="grid grid-cols-2 gap-0">
              <img
                src="./Imaji/imaji-8.jpg"
                className="w-full h-auto object-cover "
                alt="Villa view 2"
              />
              <img
                src="./Imaji/imaji-9.jpg"
                className="w-full h-auto object-cover "
                alt="Villa view 3"
              />
            </div>
        </div>
    </div>
  );
}
