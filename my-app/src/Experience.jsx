import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";

export default function Experience() {
  const navigate = useNavigate();

  return (
    <motion.div
      layoutId="about-card"
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="min-h-screen bg-gray-200 px-16 py-12 flex justify-center"
    >
      <div className="grid grid-cols-12 gap-12 h-full w-full max-w-7xl">
        
        {/* LEFT CONTENT */}
        <div className="col-span-8 mt-32">
          <div className="mx-auto w-full max-w-xl">
            <h1 className="text-3xl font-semibold mb-4">
              Experience
            </h1>

            <p className="text-gray-600 mb-12 leading-relaxed">
              A snapshot of my professional journey across software
              development, remote work, and online education.
            </p>

            {/* TIMELINE */}
            <div className="space-y-14">

              <ExperienceItem
                role="Full Stack Web Developer (Freelance)"
                company="Remote"
                period="Mar 2025 – Present"
                points={[
                  "Developed a Diet Planning Website using ReactJS, Spring Boot, and PostgreSQL.",
                  "Built a USA-based food pre-order website with a mobile-friendly interface.",
                  "Integrated EmailJS for order confirmations and client-side messaging.",
                  "Continuously optimized performance and UI based on user feedback."
                ]}
                tech="ReactJS · Spring Boot · PostgreSQL · Tailwind CSS"
              />

              <ExperienceItem
                role="Frontend Web Developer (Freelance)"
                company="Remote"
                period="Nov 2025 – Jan 2026"
                points={[
                  "Designed and developed a responsive architect’s portfolio website.",
                  "Focused on UI/UX, smooth animations, and professional visual identity.",
                  "Helped clients present work more effectively to attract new projects."
                ]}
                tech="ReactJS · Tailwind CSS · Vite · UI/UX"
                link="https://rantifay.com/"
              />

              <ExperienceItem
                role="Online English Tutor (Part-Time)"
                company="KYNA English (Kyna Pte. Ltd.)"
                period="Jun 2025 – Present"
                points={[
                  "Teach English to children and students in an international setting.",
                  "Design interactive and engaging lessons for different learning levels.",
                  "Provide continuous feedback and track student progress."
                ]}
                tech="Communication · Remote Teaching · English Training"
              />

              <ExperienceItem
                role="Bachelor’s Degree in Computer Engineering"
                company="Eskisehir Technical University, Türkiye"
                period="Scholarship Holder"
                points={[
                  "Studied core computer engineering subjects with a focus on software development.",
                  "Built academic and practical projects involving full-stack web development."
                ]}
                tech="Computer Engineering · Software Development"
              />

            </div>

            {/* BOTTOM NAV */}
            <div className="flex items-center justify-between text-gray-400 mt-20">
              <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-3 hover:text-gray-600"
              >
                <span className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center">
                  ←
                </span>
              </button>

              <Link
                to="/projects"
                className="flex items-center gap-3 hover:text-gray-600"
              >
                <span className="text-sm">Projects</span>
                <span className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE (STATIC META) */}
        <div className="col-span-2 mt-32 space-y-6">
          <SideCard title="Location" value="Eskişehir, Türkiye" />
          <SideCard title="Languages" value="English · Turkish · Vietnamese" />
          <SideCard title="Focus" value="Web Development · UI/UX · Remote Work" />
        </div>
      </div>
    </motion.div>
  );
}

/* ---------- COMPONENTS ---------- */

function ExperienceItem({ role, company, period, points, tech, link }) {
  return (
    <div className="relative pl-6 border-l border-gray-300">
      <div className="absolute -left-[7px] top-1 w-3 h-3 bg-blue-400 rounded-full" />

      <h3 className="text-lg font-semibold">
        {role}
      </h3>

      <p className="text-sm text-gray-500 mb-3">
        {company} · {period}
      </p>

      <ul className="list-disc list-inside space-y-2 text-gray-700 mb-3">
        {points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>

      <p className="text-sm text-gray-500">
        {tech}
      </p>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-400 mt-2 inline-block"
        >
          View project →
        </a>
      )}
    </div>
  );
}

function SideCard({ title, value }) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm">
      <p className="text-sm text-gray-400 mb-1">{title}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}
