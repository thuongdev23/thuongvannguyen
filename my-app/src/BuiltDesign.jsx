import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function BuiltDesign() {
  const navigate = useNavigate();

  return (
    <div className=" bg-blue-300 relative px-4 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-10">
      {/* BACK ARROW */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-1 left-4 z-10 flex items-center gap-3 text-white hover:opacity-100"
      >
        <span className="w-11 h-11  flex items-center justify-center">
          ←
        </span>
      </button>
      {/* GRID */}
      <div className="grid grid-cols-1 gap-4
      sm:grid-cols-1 sm:gap-5
      lg:grid-cols-4 lg:grid-rows-4 lg:gap-6 lg:h-[calc(100vh-80px)]">
        {/* WKG*/}
        <motion.div
          layoutId="wkg-card"
          onClick={() => navigate("/wkg")}
          className="cursor-pointer rounded-[32px] bg-white p-6 row-span-2 flex flex-col"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <div className=" bg-white p-6 row-span-2 flex flex-col mt-auto">
            <h3 className="italic text-purple-500 font-thin">
              Cafe + Restaurant
            </h3>
          <h2 className=" text-xl text-purple-500 mt-auto">
            WKG
          </h2>
          </div>
        </motion.div>
          {/* CIWIDEY RESORT */}
          <motion.div
          layoutId="ciwidey-resort-card"
          onClick={() => navigate("/ciwidey-resort")}
          className="cursor-pointer rounded-[32px] bg-white p-6 row-span-2 col-span-2 flex flex-col"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <div className=" bg-white p-6 row-span-2 flex flex-col mt-auto">
            <h3 className="italic text-purple-500 font-thin">
              Resort
            </h3>
          <h2 className=" text-xl text-purple-500 mt-auto">
            Ciwidey
          </h2>
          </div>
        </motion.div>
        {/* IMAJI */}
          <motion.div
          layoutId="imaji-card"
          onClick={() => navigate("/imaji")}
          className="cursor-pointer rounded-[32px] bg-white p-6 row-span-2 flex flex-col"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
           <div className=" bg-white p-6 row-span-2 flex flex-col mt-auto">
            <h3 className="italic text-purple-500 font-thin">
              Cafe + Office
            </h3>
          <h2 className=" text-xl text-purple-500 mt-auto">
            Imaji
          </h2>
          </div>
        </motion.div>
          {/* ACADEMIC PROJECT */}
         <motion.div
          layoutId="wisata-card"
          onClick={() => navigate("/wisata")}
          className="rounded-[32px]  text-xl bg-white row-span-2 col-span-2 p-6 text-black flex flex-col"          
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
        <div className=" bg-white p-6 row-span-2 flex flex-col mt-auto">
            <h3 className="italic text-purple-500 font-thin">
            Tourist Area
            </h3>
          <h2 className=" text-xl text-purple-500 mt-auto">
            Wisata Pasir Gibug Brebes
          </h2>
          </div>
        </motion.div>
          {/* BUILT DESIGN  */}
         <motion.div
          layoutId="built-design-card"
          onClick={() => navigate("/built-design")}
          className="rounded-[32px]  text-xl bg-blue-300 row-span-2 p-6 text-black flex flex-col"          
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
        <h2 className=" text-xl text-purple-500 mt-auto">
            Built Design
        </h2>
        </motion.div>
          {/* KLINIK BENING*/}
         <motion.div
          layoutId="klinik-bening-card"
          onClick={() => navigate("/klinik-bening")}
          className="rounded-[32px] text-xl bg-white row-span-2 p-6 text-black flex flex-col"          
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
         <div className=" bg-white p-6 row-span-2 flex flex-col mt-auto">
            <h3 className="italic text-purple-500 font-thin">
              Facade
            </h3>
          <h2 className=" text-xl text-purple-500 mt-auto">
            Klinik Bening
          </h2>
          </div> 
        </motion.div>
      </div>    
    </div>
  );
}

