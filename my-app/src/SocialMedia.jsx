import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";

export default function SocialMedia() {
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
              Social Media & Content Creation
            </h1>

            <p className="text-gray-600 mb-12 leading-relaxed">
              I create content at the intersection of technology, learning,
              digital life, and everyday productivity — focusing on clarity,
              usefulness, and human-centered storytelling.
            </p>

            {/* CONTENT SECTIONS */}
            <div className="space-y-14">

              <ContentSection
                platform="TikTok"
                handle="@yourhandle"
                focus={[
                  "Short educational tech content",
                  "Learning journeys & problem-solving",
                  "Digital productivity & daily systems",
                ]}
                style="Fast-paced, visual, concise storytelling"
                link="https://www.tiktok.com/@thuongvivu23?_r=1&_t=ZS-93ighXUvpVF"
              />

              <ContentSection
                platform="Instagram"
                handle="@yourhandle"
                focus={[
                  "Visual storytelling",
                  "Study / work routines",
                  "Design-driven posts & reels",
                ]}
                style="Minimal, aesthetic, narrative-based"
                link="https://www.instagram.com/thuongvivu?igsh=aTFmdTF5OXJsbmk4&utm_source=qr"
              />

              <ContentSection
                platform="YouTube (Short-form / Planned)"
                handle="Channel in progress"
                focus={[
                  "Explainers & learning reflections",
                  "Tech & career growth content",
                  "Longer-form breakdowns",
                ]}
                style="Clear explanations, calm pacing"
                link="https://www.youtube.com/@thuongvivu"
              />

              <ContentSection
                platform="Content Themes"
                focus={[
                  "Learning in public",
                  "Technology & everyday life",
                  "Remote work & digital tools",
                  "Personal growth & systems",
                ]}
                style="Human, reflective, practical"
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
                to="/experience"
                className="flex items-center gap-3 hover:text-gray-600"
              >
                <span className="text-sm">Experience</span>
                <span className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE META */}
        <div className="col-span-2 mt-32 space-y-6">
          <SideCard title="Content Style" value="Educational · Minimal · Human" />
          <SideCard title="Languages" value="English · Vietnamese · Turkish" />
          <SideCard title="Focus" value="Tech · Learning · Digital Life" />
        </div>
      </div>
    </motion.div>
  );
}

/* ---------- COMPONENTS ---------- */

function ContentSection({ platform, handle, focus, style, link }) {
  return (
    <div className="relative pl-6 border-l border-gray-300">
      <div className="absolute -left-[7px] top-1 w-3 h-3 bg-blue-400 rounded-full" />

      <h3 className="text-lg font-semibold">
        {platform}
      </h3>

      {handle && (
        <p className="text-sm text-gray-500 mb-3">
          {handle}
        </p>
      )}

      <ul className="list-disc list-inside space-y-2 text-gray-700 mb-3">
        {focus.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <p className="text-sm text-gray-500">
        Content style: {style}
      </p>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-400 mt-2 inline-block"
        >
          View profile →
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
