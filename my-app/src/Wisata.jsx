import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Wisata() {
  const navigate = useNavigate();

  return (
    <div className=" bg-blue-300 px-12 py-10 relative">
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
      <div className="grid
                      grid-cols-1
                      gap-4

                      sm:grid-cols-2
                      sm:gap-5

                      lg:grid-cols-4
                      lg:gap-6 
                      lg:h-[calc(100vh-80px)]">
        {/* PLAZA  */}
        <motion.div
          layoutId="plaza-card"
          onClick={() => navigate("/plaza")}
          className="cursor-pointer rounded-[32px] bg-white p-6 row-span-2 flex flex-col"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className=" text-xl text-purple-500 mt-auto">
            Plaza
          </h2>
        </motion.div>
          {/* VILLA  */}
          <motion.div
          layoutId="villa-card"
          onClick={() => navigate("/villa")}
          className="cursor-pointer rounded-[32px] bg-white p-6 row-span-2 col-span-2 flex flex-col"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
         <div className=" bg-white p-6 row-span-2 flex flex-col mt-auto">
            <h2 className=" text-purple-500 text-xl ">
            Villa
            </h2>
          <h3 className=" text-purple-500 mt-auto font-thin italic">
            (for owner and family)
          </h3>
          </div>
        </motion.div>
            {/* SKYWALK */}
          <motion.div
          layoutId="skywalk-card"
          onClick={() => navigate("/skywalk")}
          className="cursor-pointer rounded-[32px] bg-white p-6 row-span-2 flex flex-col"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className=" text-xl text-purple-500 mt-auto">
            Skywalk
          </h2>
        </motion.div>
          {/* WISATA */}
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
          {/* C AMPHITHEATRE */}
         <motion.div
          layoutId="amphitheatre-card"
          onClick={() => navigate("/amphitheatre")}
          className="rounded-[32px]  text-xl bg-white row-span-2 p-6 text-black flex flex-col"          
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
        <h2 className="text-xl text-purple-500 mt-auto">
            Amphitheater
        </h2>
        </motion.div>
          {/* VILLA (2) */}
         <motion.div
          layoutId="villa2-card"
          onClick={() => navigate("/villa2")}
          className="rounded-[32px]  text-xl bg-white row-span-2  p-6 text-black flex flex-col"          
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
        <div className=" bg-white p-6 row-span-2 flex flex-col mt-auto">
            <h2 className=" text-purple-500 ">
            Villa (2)
            </h2>
          <h3 className=" text-xl text-purple-500 mt-auto font-thin italic">
            (for school's teachers and visitors)
          </h3>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

