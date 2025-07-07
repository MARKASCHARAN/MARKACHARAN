import { motion } from "framer-motion";
import { FaCheckCircle, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import hackathonImg from "../assets/profile.jpg";

export default function FeaturedProject() {
  return (
    <motion.section
      className="rounded-3xl bg-gradient-to-br from-black via-gray-900 to-black p-8 shadow-xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <motion.img
          src={hackathonImg}
          alt="SafeMeds Project"
          className="w-full md:w-80 h-48 object-cover rounded-2xl border-2 border-white/20 shadow-2xl"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        
        <div className="flex-1 text-center md:text-left">
          <div className="flex flex-wrap items-center gap-2 mb-3 justify-center md:justify-start">
            <span className="bg-emerald-500 text-black px-3 py-1 rounded-full font-bold text-xs flex items-center gap-1">
              <FaCheckCircle size={12} /> 1st Runner-Up
            </span>
            <span className="bg-white/10 text-white px-3 py-1 rounded-full font-semibold text-xs">₹75,000 Prize</span>
            <span className="bg-white/10 text-white/80 px-3 py-1 rounded-full font-medium text-xs">120+ teams</span>
          </div>
          
          <h2 className="text-3xl font-black text-white mb-3">
            🏆 SafeMeds
          </h2>
          
          <p className="text-gray-300 text-lg mb-4 leading-relaxed">
            AI healthcare platform preventing drug interactions. 
            <span className="text-white font-semibold"> Solo build in 36 hours</span> using LLaMA3-8B + React.
          </p>
          
          <div className="bg-white/5 rounded-xl p-3 mb-4 border border-white/10">
            <div className="text-sm text-gray-300">
              <span className="text-emerald-400 font-semibold">Impact:</span> Real-time medical decision support • 
              <span className="text-emerald-400 font-semibold"> Goal:</span> Save lives through AI-powered healthcare
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <button className="bg-white text-black px-4 py-2 rounded-xl font-semibold text-sm hover:bg-gray-200 transition-colors flex items-center gap-2">
              <FaGithub size={14} /> View Code
            </button>
            <button className="bg-white/10 text-white px-4 py-2 rounded-xl font-semibold text-sm hover:bg-white/20 transition-colors flex items-center gap-2">
              <FaExternalLinkAlt size={12} /> Live Demo
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}