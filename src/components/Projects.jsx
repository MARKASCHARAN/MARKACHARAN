import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaStar } from "react-icons/fa";

// Import your images from the assets folder
import chatImg from "../assets/core-chat-features.webp"; // Update with actual image path
import nftImg from "../assets/imag.jpeg";
import coffeeImg from "../assets/coffe.jpeg";
import experImg from "../assets/prescription-placeholder.webp";
import tarc from "../assets/Trac.png"; // Example image, update with actual image path
import tarcss from "../assets/1739855105363.jpeg"

const projects = [
  {
    title: "Modern Job Search, Elegantly Designed UI",
    description: "Full-stack job search platform UI frontend.",
    techStack: ["Reactjs", "Tailwind CSS", "JavaScript", "Ui Design", "Component Library"],
    image: tarc,
    link: "https://track-sy.vercel.app/",
    status: "completed",
  },
  {
    title: "Real-Time Chat App",
    description: "Full-stack messaging app with WebSocket connections and real-time communication features.",
    techStack: ["WebSockets", "Node.js", "JavaScript", "API"],
    image: chatImg,
    link: "https://github.com/MARKASCHARAN/R-chat-app",
    status: "completed",
  },
  {
    title: "NFT Minting Platform",
    description: "Decentralized NFT minting platform with smart contract integration on KRNL OS.",
    techStack: ["React", "Solidity", "ethers.js", "Ethereum"],
    image: nftImg,
    link: "https://github.com/MARKASCHARAN/nft-minting-platform", // Update with actual link
    status: "updating",
  },
  {
    title: "Coffee DApp",
    description: "Blockchain-based coffee shop with Ethereum smart contracts and Web3 integration.",
    techStack: ["React", "Solidity", "ethers.js", "Web3"],
    image: coffeeImg,
    link: "https://github.com/MARKASCHARAN/my-dapp",
    status: "completed",
  },
  {
    title: "AI Medical Diagnosis",
    description: "Symbolic AI expert system for intelligent medical diagnosis and healthcare applications.",
    techStack: ["Flask", "Python", "AI/ML", "Expert Systems"],
    image: experImg,
    link: "https://github.com/MARKASCHARAN/ai_diagnosis_expert_system",
    status: "completed",
  },
  {
    title: "AI-Powered Crypto Market Insights",
    description: "Crypto markets move fast—tweets or whale trades can flip everything.",
    techStack: ["Flask", "Blockchain", "Web3", "Sentiment Analysis"],
    image: tarcss,
    link: "https://github.com/MARKASCHARAN",
    status: "completed",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-50"> {/* ✅ Added id="projects" */}
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl font-black text-gray-900 mb-4 flex items-center justify-center gap-3"
            whileHover={{ scale: 1.02 }}
          >
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              🚀
            </motion.span>
            Featured Projects
          </motion.h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A showcase of my work in AI, blockchain, and full-stack development.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col relative overflow-hidden">
                
                {/* Background Pattern */}
                <motion.div 
                  className="absolute inset-0 opacity-[0.02] bg-gradient-to-br from-gray-900 via-transparent to-gray-900"
                  animate={{ 
                    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] 
                  }}
                  transition={{ 
                    duration: 20, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                />

                <div className="relative z-10 h-full flex flex-col">
                  {/* Status Badge */}
                  {project.status === 'updating' && (
                    <motion.div 
                      className="mb-4"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 w-fit border border-yellow-200">
                        🔄 Still Updating
                      </span>
                    </motion.div>
                  )}

                  {project.status === 'completed' && (
                    <motion.div 
                      className="mb-4"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 w-fit border border-green-200">
                        ✅ Completed
                      </span>
                    </motion.div>
                  )}

                  {/* Image */}
                  <motion.div 
                    className="mb-6 overflow-hidden rounded-2xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover border border-gray-100"
                      loading="lazy"
                    />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <motion.h3 
                      className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors"
                      whileHover={{ x: 3 }}
                    >
                      {project.title}
                    </motion.h3>

                    <p className="text-gray-600 mb-4 leading-relaxed flex-1">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm font-medium border border-gray-200"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: techIndex * 0.05 }}
                            whileHover={{ 
                              scale: 1.05, 
                              backgroundColor: "#f3f4f6",
                              y: -2
                            }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <motion.a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="mt-auto"
                    >
                      <motion.button 
                        className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 group shadow-lg"
                        whileHover={{ y: -1 }}
                      >
                        {project.link.includes('github') ? (
                          <>
                            <FaGithub size={16} /> 
                            View Code
                          </>
                        ) : (
                          <>
                            <FaExternalLinkAlt size={14} /> 
                            View Project
                          </>
                        )}
                        <motion.span
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </motion.button>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-xl">
            <motion.h3 
              className="text-2xl font-bold text-gray-900 mb-4"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              🤝 Interested in collaborating?
            </motion.h3>
            <p className="text-gray-600 mb-6">
              Check out more projects on my GitHub or get in touch for freelance opportunities.
            </p>
            <motion.a
              href="https://github.com/MARKASCHARAN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub size={16} />
              View All Projects
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                ⚡
              </motion.span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;