import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Projects() {
  const navigate = useNavigate();

  return (
    <motion.div
      layoutId="about-card"
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="min-h-screen bg-gray-200 px-16 py-12 flex justify-center"
    >
       <div className="grid grid-cols-12 gap-12 h-full w-full max-w-7xl">
        {/* LEFT CONTENT */}
       <div className="col-span-8 flex flex-col justify-between mt-40">
  {/* CENTERED TEXT BLOCK */}
 <div className="mx-auto w-full max-w-xl space-y-12">

  <h1 className="text-3xl font-semibold">
   Projects
  </h1>

  {/* PROJECT 1 */}
  <div className="space-y-3">
    <h2 className="text-xl font-medium">
      USA Girls Food Ordering Website
    </h2>

    <p className="text-gray-700 leading-[1.7]">
      A responsive pre-order food website built to improve customer ordering
      experience with a clean, mobile-friendly interface and email-based
      order confirmation.
    </p>

    <p className="text-sm text-gray-500">
      ReactJS · Tailwind CSS · EmailJS · JavaScript
    </p>

    <a
      href="https://pre-order-website.vercel.app/"
      target="_blank"
      className="inline-flex items-center gap-2 text-blue-400 hover:opacity-80"
    >
      View Project →
    </a>
  </div>

  {/* PROJECT 2 */}
  <div className="space-y-3">
    <h2 className="text-xl font-medium">
      Diet Planning Website
    </h2>

    <p className="text-gray-700 leading-[1.7]">
      A full-stack meal planning web application that generates weekly diet
      plans based on calorie intake and nutritional goals.
    </p>

    <p className="text-sm text-gray-500">
      Spring Boot · ReactJS · PostgreSQL · Tailwind CSS
    </p>
  </div>

  {/* PROJECT 3 */}
  <div className="space-y-3">
    <h2 className="text-xl font-medium">
      Architect Portfolio Website
    </h2>

    <p className="text-gray-700 leading-[1.7]">
      A UI/UX-focused personal portfolio website designed to help an architect
      present projects professionally and attract new opportunities.
    </p>

    <p className="text-sm text-gray-500">
      ReactJS · Tailwind CSS · Vite · Framer Motion
    </p>

    <a
      href="https://rantifay.com/"
      target="_blank"
      className="inline-flex items-center gap-2 text-blue-400 hover:opacity-80"
    >
      Visit Website →
    </a>
  </div>

</div>


        {/* BOTTOM NAV */}
        <div  className="mx-auto w-full max-w-xl flex items-center justify-between text-gray-400 mt-16">
            <button onClick={() => navigate(-1)} className="flex items-center gap-3 hover:text-gray-600">
              <span className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center mt-10">
                ←
              </span>
            </button>

            <div className="flex items-center gap-3 hover:text-gray-600 cursor-pointer mt-10">
              <Link to="/creative">
              <span className="text-sm">Creative Design</span>
            
              <span className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center">
                →
              </span>
              </Link>
            
            </div>
          </div>
        </div>
        {/* RIGHT IMAGES */}
        <div className="col-span-2 flex flex-col gap-6">
          <FramedImage src="./CreativeDesign/img-.jpeg" />
          <FramedImage src="./CreativeDesign/img-.jpeg" />
          <FramedImage src="./CreativeDesign/img-.jpeg" />
        </div>
      </div>
    </motion.div>
  );
}
/* FRAMED IMAGE */
    function FramedImage({ src }) {
      return (
        <div className="bg-gray-100 rounded-2xl p-3 h-[30%]">
          <div className="rounded-xl overflow-hidden h-full">
            <img
              src={src}
              alt="Ranti Fay"
              className="w-[150px] h-[200px] object-cover"
            />
          </div>
        </div>
  );
}
