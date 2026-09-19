import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";

export default function BuiltDesignInter() {
  const navigate = useNavigate();

  return (
    <motion.div
      layoutId="about-card"
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="page-shell flex justify-center"
    >
       <div className="page-grid grid grid-cols-12 h-full w-full max-w-7xl">
        <div className="col-span-8 flex flex-col justify-between">
          <div className="mx-auto w-full max-w-xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-blue-500">
              Selected builds
            </p>
            <h1 className="text-3xl font-semibold mb-6">
              App Building
            </h1>

            <p className="mb-10 text-gray-600 leading-relaxed">
              A collection of applications I am currently building, refining,
              and preparing for real users.
            </p>

            <div className="space-y-5">
              <article className="rounded-3xl bg-white/60 p-6 shadow-sm">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="mb-2 text-sm font-medium text-blue-500">
                      01 / In progress
                    </p>
                    <h2 className="text-2xl font-semibold">
                      Bao Bao Wish List
                    </h2>
                  </div>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                    Live preview
                  </span>
                </div>

                <p className="mt-5 leading-relaxed text-gray-600">
                  A thoughtful wish-list experience for collecting, organizing,
                  and sharing things worth remembering.
                </p>

                <a
                  href="https://bao-bao-wish-list.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-3 text-blue-500 hover:opacity-75"
                >
                  Open app
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-300">
                    ↗
                  </span>
                </a>
              </article>
            </div>
          </div>

          <div className="mx-auto mt-16 flex w-full max-w-xl items-center justify-between text-gray-400">
            <button onClick={() => navigate(-1)} className="flex items-center gap-3 hover:text-gray-600">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300">
                ←
              </span>
            </button>
            <Link to="/social" className="flex items-center gap-3 hover:text-gray-600">
              <span className="text-sm">Social Media</span>
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300">
                →
              </span>
            </Link>
          </div>
        </div>

        <div className="col-span-2 mt-4 space-y-6">
          <InfoCard title="Focus" value="Product ideas · Web apps · UI/UX" />
          <InfoCard title="Status" value="Building and iterating" />
          <InfoCard title="Stack" value="React · Vite · Tailwind CSS" />
        </div>
      </div>
    </motion.div>
  );
}

function InfoCard({ title, value }) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      <p className="mb-1 text-sm text-gray-400">{title}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}
