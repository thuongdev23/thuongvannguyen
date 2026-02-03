import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function MeetingHall() {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-red-500 flex relative overflow-hidden">

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
          layoutId="meeting-hall-card"
          className="bg-white rounded-[32px] p-6 h-full sticky top-16 flex flex-col"
        >
          <h3 className="font-thin text-red-500 italic">A hall and living room designed for client who is into
          gallant aesthetic. The design was made with
          elegant but also bold image in mind. 
          </h3>
          <h2 className="font-semibold text-xl text-red-500 mt-auto">
            Meeting Hall (PUPR Bandung)
          </h2>
        </motion.div>
      </div>
      {/* LEFT SCROLLABLE CONTENT */}
      <div className="flex-1 overflow-y-auto px-16 py-16 ml-12">
         {/* TOP LARGE IMAGE */}
          <div className="w-full">
            <img
              src="./Interior/meeting-1.jpg"
              className="w-full h-auto object-cover "
              alt="Villa view 1"
            />
          </div>
           <div className="w-full">
            <img
              src="./Interior/meeting-2.jpg"
              className="w-full h-auto object-cover "
              alt="Villa view 1"
            />
          </div>
           <div className="w-full">
            <img
              src="./Interior/meeting-3.jpg"
              className="w-full h-auto object-cover "
              alt="Villa view 1"
            />
          </div>
           <div className="w-full">
            <img
              src="./Interior/meeting-4.png"
              className="w-full h-auto object-cover "
              alt="Villa view 1"
            />
          </div>
           <div className="w-full">
            <img
              src="./Interior/meeting-5.png"
              className="w-full h-auto object-cover "
              alt="Villa view 1"
            />
          </div>
          {/* BOTTOM TWO IMAGES */}
          <div className="grid grid-cols-2 gap-0">
            <img
              src="./Interior/meeting-6.png"
              className="w-full h-auto "
              alt="Villa view 2"
            />
            <img
              src="./Interior/meeting-7.png"
              className="w-full h-auto"
              alt="Villa view 3"
            />
          </div>
        </div>
    </div>
  );
}
