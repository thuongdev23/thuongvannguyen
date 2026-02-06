import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function AboutMe() {
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
  <div className="mx-auto w-full max-w-xl">
    <h1 className="text-3xl font-semibold mb-8">
      Hi, I’m Thuong Nguyen!
    </h1>

    <div className="space-y-6 text-gray-700 leading-[1.7]">
      <p>
        Full Stack Developer with hands-on experience in building responsive web applications using ReactJS, Spring Boot, PostgreSQL,
and Tailwind CSS. Experienced in freelance and academic projects, delivering user-focused, performance-optimized solutions. Strong
interest in modern web technologies, UI/UX optimization, and b ackend development. Additionally experienced in online English
tutoring, demonstrating strong communication and teaching skills in international environments.
      </p>

      <p>
        I currently working as a freelance for my own web development. Besides that I am also
        an online English tutor. 
      </p>

      <p>
        Language lover: Vietnamese, English, Turkish, Spanish.
      </p>

      <p className="italic">
        Care to talk with any of these languages with a glass of coffee?
      </p>
    </div>

    {/* CONNECT */}
    <button   className="mt-10 inline-flex items-center gap-3 text-blue-400 hover:opacity-80">
      <span className="w-6 h-6 rounded-full bg-blue-400 text-white flex items-center justify-center">
        +
      </span>
      CONNECT WITH ME
    </button>
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
          <FramedImage src="/avatar-1.jpg" />
          <FramedImage src="/avatar-1.jpg" />
          <FramedImage src="/avatar-1.jpg" />
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
