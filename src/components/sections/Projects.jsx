import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Project 1 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
  <div className="relative overflow-hidden h-[20vh] lg:h-[30vh] rounded-xl mb-4" style={{ backgroundColor: "#13162D" }}>
    {/* Background image */}
    <img
      src="/bg.png"
      alt="Background"
      className="absolute top-0 left-0 w-full h-full object-cover z-0"
    />
    
    {/* Foreground image */}
    <img
      src="/rs.png"
      alt="Resume Matcher"
      className="absolute top-0 left-0 w-full h-full object-cover z-10"
    />
  </div>

  <h3 className="text-xl font-bold mb-2">Resume Matcher AI Tool</h3>
  <p className="text-gray-400 mb-4">
    AI-powered document analysis system using OpenAI embeddings and cosine similarity
    for optimized resume-job matching with PDF/DOCX processing.
  </p>

  <div className="flex flex-wrap gap-2 mb-4">
    {["React", "Python", "OpenAI API", "PyPDF2", "Vercel"].map((tech, key) => (
      <span
        key={key}
        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
      >
        {tech}
      </span>
    ))}
  </div>

  <div className="flex justify-between items-center">
    <a
      href="https://github.com/Yazaven/ResumeMatcher"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 hover:text-blue-300 transition-colors"
    >
      View Code →
    </a>
    <a
      href="https://resume-matcher-mocha.vercel.app"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 hover:text-blue-300 transition-colors ml-4"
    >
      Live Demo →
    </a>
  </div>
</div>

            {/* Project 2 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
  <div
    className="relative overflow-hidden h-[20vh] lg:h-[30vh] rounded-xl mb-4"
    style={{ backgroundColor: "#13162D" }}
  >
    {/* Background image */}
    <img
      src="/bg.png"
      alt="Background"
      className="absolute top-0 left-0 w-full h-full object-cover"
    />

    {/* Foreground image (TSP visual map) */}
    <img
      src="/map.png"
      alt="TSP Visualizer"
      className="relative z-10 h-full max-h-full w-auto object-contain mx-auto"
    />
  </div>

  <h3 className="text-xl font-bold mb-2">TSP Visualizer (tspvis.com)</h3>
  <p className="text-gray-400 mb-4">
    Open-source educational platform visualizing Traveling Salesman Problem algorithms
    with 450+ GitHub stars and Mapbox integration.
  </p>

  <div className="flex flex-wrap gap-2 mb-4">
    {["React", "Gatsby", "Mapbox", "Web Workers", "Material-UI"].map((tech, key) => (
      <span
        key={key}
        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
      >
        {tech}
      </span>
    ))}
  </div>

  <div className="flex justify-between items-center">
    <a
      href="https://github.com/jhackshaw/tspvis"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 hover:text-blue-300 transition-colors"
    >
      View Code →
    </a>
    <a
      href="https://tspvis.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 hover:text-blue-300 transition-colors ml-4"
    >
      Live Demo →
    </a>
  </div>
</div>

            {/* Project 3 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <div className="relative overflow-hidden h-[20vh] lg:h-[30vh] rounded-xl mb-4" style={{ backgroundColor: "#13162D" }}>
                <img
                  src="/bg.png"
                  alt="bg"
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <img
                  src="" 
                  alt="Project Management Suite"
                  className="relative z-10 h-full object-contain mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Project Management Suite</h3>
              <p className="text-gray-400 mb-4">
                AWS-powered collaboration platform with real-time task tracking,
                team management, and secure file storage.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "AWS", "PostgreSQL", "WebSocket"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Yazaven/Project-Manger"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Code →
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors ml-4"
                >
                  Live Demo →
                </a>
              </div>
            </div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
