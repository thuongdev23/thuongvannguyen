import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Book() {
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
          <div className=" bg-white p-6 row-span-2 flex flex-col mt-auto">
          <h2 className=" text-xl text-yellow-500 mt-auto">
            Book
          </h2>
          </div>
        </motion.div>
      </div>

      {/* LEFT SCROLLABLE CONTENT */}
     <div className="flex-1 overflow-y-auto px-16 py-16 ml-12">
        <div
          className="
            grid
            grid-cols-1
            gap-8
            max-w-[1400px]
          "
        >
          {/* TOP LARGE IMAGE */}
          <div className="w-full">
            <img
              src="./CreativeDesign/book-1.png"
              className="w-full h-auto object-cover rounded-xl"
              alt="Villa view 1"
            />
          </div>

    {/* BOTTOM TWO IMAGES */}
            <div className="grid grid-cols-2 gap-8">
              <img
                src="./CreativeDesign/book-2.png"
                className="w-full h-auto object-cover rounded-xl"
                alt="Villa view 2"
              />

              <img
                src="./CreativeDesign/book-3.png"
                className="w-full h-auto object-cover rounded-xl"
                alt="Villa view 3"
              />
            </div>
          </div>
        </div>
    </div>
  );
}
