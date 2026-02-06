import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";

export default function AcademicProject() {
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
          
          {/* MAIN CONTENT */}
          <div className="mx-auto w-full max-w-xl">
            <h1 className="text-3xl font-semibold mb-8">
              LeetCode Journey 🚀
            </h1>

            <div className="space-y-6 text-gray-700 leading-[1.7]">
              <p>
                I use LeetCode as a daily training ground to strengthen
                my algorithmic thinking, problem decomposition, and
                pattern recognition.
              </p>

              <p>
                My approach focuses less on speed and more on deeply
                understanding core patterns that can be reused across
                different problems.
              </p>

              <p className="italic">
                “Solve less. Understand more.”
              </p>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              <StatCard label="Solved" value="87" />
              <StatCard label="Streak" value="14 days" />
              <StatCard label="Patterns" value="12+" />
            </div>

            {/* PATTERNS */}
            <div className="mt-10">
              <h2 className="text-sm uppercase text-gray-400 mb-4">
                Core Patterns Practiced
              </h2>

              <div className="flex flex-wrap gap-3">
                {[
                  "Dynamic Programming",
                  "Two Pointers",
                  "Binary Search",
                  "Stack",
                  "Hash Map",
                  "Sliding Window",
                  "Tree Traversal",
                  "Recursion",
                ].map((pattern) => (
                  <span
                    key={pattern}
                    className="px-4 py-2 bg-gray-100 rounded-full text-sm"
                  >
                    {pattern}
                  </span>
                ))}
              </div>
            </div>

            {/* LEETCODE LINK */}
            <a
              href="https://leetcode.com/YOUR_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 text-blue-400 hover:opacity-80"
            >
              <span className="w-6 h-6 rounded-full bg-blue-400 text-white flex items-center justify-center">
                ↗
              </span>
              VIEW LEETCODE PROFILE
            </a>
          </div>

          {/* BOTTOM NAV */}
          <div className="mx-auto w-full max-w-xl flex items-center justify-between text-gray-400 mt-16">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-3 hover:text-gray-600"
            >
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

        {/* RIGHT CONTENT */}
        <div className="col-span-2 flex flex-col gap-6 mt-40">
          <ProgressCard title="Easy" solved={42} />
          <ProgressCard title="Medium" solved={38} />
          <ProgressCard title="Hard" solved={7} />
        </div>
      </div>
    </motion.div>
  );
}

/* ---------- COMPONENTS ---------- */

function StatCard({ label, value }) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm text-center">
      <p className="text-2xl font-semibold">{value}</p>
      <p className="text-sm text-gray-500 mt-1">{label}</p>
    </div>
  );
}

function ProgressCard({ title, solved }) {
  const percentage = Math.min((solved / 50) * 100, 100);

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-500 mt-2">{solved} problems solved</p>

      <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
        <div
          className="bg-blue-400 h-2 rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
