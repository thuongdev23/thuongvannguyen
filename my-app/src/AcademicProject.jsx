import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function AcademicProject() {
  const navigate = useNavigate();

  return (
    <div className=" bg-gray-200 px-12 py-10 relative">
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
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6 lg:h-[calc(100vh-80px)]">
        {/* Virtual Museum: Tan Soek Ho  */}
        <motion.div
          layoutId="museum-card"
          onClick={() => navigate("/")}
          className="cursor-pointer rounded-[32px] bg-white p-6 row-span-2 col-span-2 flex flex-col"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className=" text-xl text-black mt-auto">
            Virtual Museum: Tan Soek Ho 
          </h2>
        </motion.div>
        {/* STUDENT TINY HOUSE CITY */}
          <motion.div
          layoutId="student-house-card"
          onClick={() => navigate("/student-house")}
          className="cursor-pointer rounded-[32px] bg-white p-6 row-span-4 col-span-2 flex flex-col"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className=" text-xl text-black mt-auto">
            Student Tiny House City
          </h2>
        </motion.div>
        {/* Re-imagining Uluönder */}
          <motion.div
          layoutId="uluonder-card"
          onClick={() => navigate("/uluonder")}
          className="cursor-pointer rounded-[32px] bg-white p-6 row-span-2 flex flex-col"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className=" text-xl text-black mt-auto">
            Re-imagining Uluönder
          </h2>
        </motion.div>
          {/* ACADEMIC PROJECT */}
         <motion.div
          layoutId="academic-card"
          onClick={() => navigate("/academic")}
          className="rounded-[32px] text-xl bg-gray-200 row-span-2 p-6 text-black mt-auto"          
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          Academic<br />Project
        </motion.div>
      </div>
    </div>
  );
}

