import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function BuiltDesignInter() {
  const navigate = useNavigate();

  return (
    <div className=" bg-red-500 px-12 py-10 relative">
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
        {/* CUCIIN MAMI  */}
        <motion.div
          layoutId="cuciin-mami-card"
          onClick={() => navigate("/cuciin-mami")}
          className="cursor-pointer rounded-[32px] bg-white p-6 row-span-2 flex flex-col"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-xl text-red-500 mt-auto">
            Cuciin Mami
          </h2>
        </motion.div>
          {/* A1 OFFICE BANDUNG  */}
          <motion.div
          layoutId="office-bandung-card"
          onClick={() => navigate("/office-bandung")}
          className="cursor-pointer rounded-[32px] bg-white p-6 row-span-2 col-span-2 flex flex-col"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className=" text-xl text-red-500 mt-auto">
            A1 Office Bandung
          </h2>
        </motion.div>
            {/* BUILT DESIGN (INTERIOR ) */}
          <motion.div
          layoutId="built-design-inter-card"
          onClick={() => navigate("/built-design-inter")}
          className="cursor-pointer rounded-[32px] bg-red-500 p-6 row-span-2 flex flex-col"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className=" text-xl text-white-500 mt-auto">
             Built Design (Interior Architecture) 
          </h2>
        </motion.div>
          {/* MEETING HALL */}
         <motion.div
          layoutId="meeting-hall-card"
          onClick={() => navigate("/meeting-hall")}
          className="rounded-[32px]  text-xl bg-white row-span-2 col-span-2 p-6 text-black flex flex-col"          
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
        <h2 className=" text-xl text-red-500 mt-auto">
            Meeting Hall (PUPR Bandung)     </h2>
        </motion.div>
          {/* C PLANNER OFFICE  */}
         <motion.div
          layoutId="planner-office-card"
          onClick={() => navigate("/planner-office")}
          className="rounded-[32px]  text-xl bg-gray-200 row-span-2 p-6 text-black flex flex-col"          
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
        <h2 className=" text-xl text-red-500 mt-auto">
            C-Planner Office
        </h2>
        </motion.div>
          {/* HOUSE+ GARGAGE WORKSHOP */}
         <motion.div
          layoutId="house-gargage-workshop-card"
          onClick={() => navigate("/house-gargage-workshop")}
          className="rounded-[32px] text-xl bg-white row-span-2  p-6 text-black flex flex-col"          
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
        <h2 className=" text-xl text-red-500 mt-auto">
            House+Garage Workshop
        </h2>
        </motion.div>
      </div>
    </div>
  );
}

