import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaLinkedin, FaGithub, FaCheckCircle, FaGithub as FaGithubBtn, FaExternalLinkAlt, FaCopy, FaBriefcase, FaHandshake } from "react-icons/fa";
import { useState } from "react";
import profileImg from "../assets/profile.jpg";
import hackathonImg from "../assets/Screenshot 2025-07-08 at 2.55.43 AM.png";

export default function AboutAndFeatured() {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText("markascharan@gmail.com");
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = "markascharan@gmail.com";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* DOMINANT - About Section (2/3 width) */}
      <motion.section
        id="about"
        className="lg:col-span-2 rounded-3xl bg-white border border-gray-200 p-8 shadow-2xl flex flex-col md:flex-row items-center gap-6 relative overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        viewport={{ once: true }}
        whileHover={{ 
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          scale: 1.01
        }}
      >
        {/* Animated Background Pattern */}
        <motion.div 
          className="absolute inset-0 opacity-[0.03] bg-gradient-to-br from-gray-900 via-transparent to-gray-900"
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] 
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
        
        {/* Profile Section */}
        <div className="flex flex-col items-center gap-4">
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black rounded-full blur-md opacity-20"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <img
              src={profileImg}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-gray-800 shadow-2xl object-cover relative z-10"
            />
            <motion.div
              className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center"
              animate={{ 
                scale: [1, 1.2, 1],
                boxShadow: ["0 0 0 0px rgba(34, 197, 94, 0.4)", "0 0 0 10px rgba(34, 197, 94, 0)", "0 0 0 0px rgba(34, 197, 94, 0)"]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-white text-xs">✓</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="flex-1 text-center md:text-left space-y-4">
          <div>
            <motion.h1
              className="text-4xl font-black text-gray-900 mb-2 tracking-tight"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              whileHover={{ x: 5 }}
            >
              MARKA SAI CHARAN
            </motion.h1>
            <motion.h2
  className="text-lg font-bold text-gray-500 mb-4"
  initial={{ opacity: 0, x: -20 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ delay: 0.3, duration: 0.6 }}
>
  <motion.span
    animate={{ 
      color: [
        "#374151", 
        "#6b7280", 
        "#4b5563", 
        "#374151"
      ]
    }}
    transition={{ duration: 3, repeat: Infinity }}
    className="font-bold"
  >
    Full-Stack & Web3 Developer
  </motion.span>
</motion.h2>
          </div>

          {/* Contact Links with continuous animations */}
          <motion.div
            className="flex flex-wrap justify-center md:justify-start gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {/* Location */}
            <motion.div
              className="bg-gray-50 rounded-lg px-3 py-2 border border-gray-100 hover:shadow-md transition-all group flex items-center gap-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <motion.div
                animate={{ y: [0, -1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FaMapMarkerAlt className="text-red-500" size={12} />
              </motion.div>
              <span className="text-xs text-gray-600 font-medium">
                Vadodara
              </span>
            </motion.div>

            {/* Email with Copy - Continuous pulse */}
            <motion.button
              onClick={handleEmailClick}
              className="bg-gray-50 rounded-lg px-3 py-2 border border-gray-100 hover:shadow-md transition-all group flex items-center gap-2 cursor-pointer relative"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                boxShadow: [
                  "0 0 0 0px rgba(59, 130, 246, 0.2)",
                  "0 0 0 4px rgba(59, 130, 246, 0)",
                  "0 0 0 0px rgba(59, 130, 246, 0.2)"
                ]
              }}
              style={{ animationDuration: "3s", animationIterationCount: "infinite" }}
            >
              {emailCopied ? (
                <>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-green-600"
                  >
                    ✓
                  </motion.div>
                  <span className="text-xs text-green-600 font-medium">
                    Copied!
                  </span>
                </>
              ) : (
                <>
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <FaEnvelope className="text-black" size={12} />
                  </motion.div>
                  <span className="text-xs text-black font-medium">
                    Email
                  </span>
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <FaCopy className="text-blue-500" size={10} />
                  </motion.div>
                </>
              )}
            </motion.button>

            {/* LinkedIn - Continuous bounce */}
            <motion.a
              href="https://www.linkedin.com/in/marka-charan-0a4a9727a/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 rounded-lg px-3 py-2 border border-gray-100 hover:shadow-md transition-all group flex items-center gap-2 cursor-pointer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                boxShadow: [
                  "0 0 0 0px rgba(14, 165, 233, 0.2)",
                  "0 0 0 4px rgba(14, 165, 233, 0)",
                  "0 0 0 0px rgba(14, 165, 233, 0.2)"
                ]
              }}
              style={{ 
                animationDuration: "3s", 
                animationIterationCount: "infinite",
                animationDelay: "1s"
              }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <FaLinkedin className="text-black" size={12} />
              </motion.div>
              <span className="text-xs text-black font-medium">
                LinkedIn
              </span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-xs"
              >
                🔗
              </motion.span>
            </motion.a>

            {/* GitHub - Continuous spin */}
            <motion.a
              href="https://github.com/MARKASCHARAN"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 rounded-lg px-3 py-2 border border-gray-100 hover:shadow-md transition-all group flex items-center gap-2 cursor-pointer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                boxShadow: [
                  "0 0 0 0px rgba(75, 85, 99, 0.2)",
                  "0 0 0 4px rgba(75, 85, 99, 0)",
                  "0 0 0 0px rgba(75, 85, 99, 0.2)"
                ]
              }}
              style={{ 
                animationDuration: "3s", 
                animationIterationCount: "infinite",
                animationDelay: "2s"
              }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <FaGithub className="text-gray-700" size={12} />
              </motion.div>
              <span className="text-xs text-gray-700 font-medium">
                GitHub 
              </span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="text-xs"
              >
                ⭐
              </motion.span>
            </motion.a>
          </motion.div>

          {/* Description - Updated for freelance */}
          <motion.p
  className="text-gray-700 text-base leading-relaxed"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5, duration: 0.6 }}
  whileHover={{ x: 3 }}
>
  <span className="font-semibold text-gray-900">Looking for a software internship</span> where I can ship fast, learn from builders, and contribute to impactful products. I work with React.js, explore LLMs, and build in the Web3 space.
</motion.p>



          {/* NEW - Simple Freelance Services */}
          <motion.div
            className="bg-gray-50 rounded-xl p-4 border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            whileHover={{ scale: 1.01 }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <FaBriefcase className="text-gray-700" size={14} />
                </motion.div>
                <span className="font-bold text-gray-900 text-sm">Open for Freelance</span>
              </div>
              <motion.span
                className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                AVAILABLE
              </motion.span>
            </div>
            
            <div className="text-xs text-gray-600 space-y-1">
              <div>• Full-Stack Development •  Web3 & Blockchain </div>
              <div>• Web3 & Blockchain </div>
            </div>
            
            <motion.div
              className="mt-3 pt-3 border-t border-gray-200 flex items-center justify-between"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center gap-2">
                <FaHandshake className="text-gray-600" size={12} />
                <span className="text-xs text-gray-600 font-medium">Let's work together</span>
              </div>
              
              <motion.button
                onClick={handleEmailClick}
                className="bg-gray-900 text-white px-3 py-1 rounded-lg font-semibold text-xs hover:bg-gray-800 transition-all flex items-center gap-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope size={10} /> Contact
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Current Status with breathing animation */}
          <motion.div
  className="bg-gradient-to-r from-gray-800 to-black rounded-xl p-4 text-white relative overflow-hidden"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.7, duration: 0.6 }}
  whileHover={{ scale: 1.02 }}
>
  <motion.div
    className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-900 opacity-50"
    animate={{ x: ["-100%", "100%"] }}
    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
  />
  <div className="relative z-10">
    <div className="flex items-center gap-2 mb-2">
      <motion.span 
        className="w-2 h-2 bg-green-400 rounded-full"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [1, 0.7, 1]
        }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      <span className="font-bold text-sm">Currently building</span>
    </div>
    <p className="text-sm text-gray-200">
      NFT minting DApp with KernelOS optimization, and next-gen Web3 infra.
    </p>
  </div>
</motion.div>

        </div>
      </motion.section>

      {/* NON-DOMINANT - Featured Project (1/3 width) */}
      <motion.section
        className="rounded-3xl bg-gradient-to-br from-black via-gray-900 to-black p-6 shadow-xl relative overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02, y: -5 }}
      >
        {/* Subtle glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-blue-500/5"
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        
        <div className="space-y-4 relative z-10">
          <motion.img
            src={hackathonImg}
            alt="SafeMeds Project"
            className="w-full h-32 object-cover rounded-xl border-2 border-white/20 shadow-xl"
            whileHover={{ scale: 1.03, rotate: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          
          <div className="text-center">
            <motion.div 
              className="flex justify-center gap-1 mb-2"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
            >
              <motion.span 
                className="bg-emerald-500 text-black px-2 py-1 rounded-full font-bold text-xs flex items-center gap-1"
                animate={{ 
                  boxShadow: [
                    "0 0 0 0px rgba(16, 185, 129, 0.4)",
                    "0 0 0 6px rgba(16, 185, 129, 0)",
                    "0 0 0 0px rgba(16, 185, 129, 0)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FaCheckCircle size={10} /> 1st Runner-Up
              </motion.span>
              <motion.span 
                className="bg-white/10 text-white px-2 py-1 rounded-full font-semibold text-xs"
                whileHover={{ scale: 1.05 }}
              >
                ₹75k
              </motion.span>
              <motion.span 
                className="bg-white/10 text-red-500 px-2 py-1 rounded-full font-semibold text-xs"
                whileHover={{ scale: 1.05 }}
              >
                120+ teams
              </motion.span>
            </motion.div>
            
            <motion.h3 
              className="text-xl font-black text-white mb-2"
              animate={{ 
                textShadow: [
                  "0 0 0px rgba(255, 255, 255, 0)",
                  "0 0 10px rgba(255, 255, 255, 0.2)",
                  "0 0 0px rgba(255, 255, 255, 0)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              🏆 SafeMeds
            </motion.h3>
            
            <motion.p 
              className="text-gray-300 text-sm mb-3 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              AI healthcare platform preventing drug interactions. Built in 36 hours.
            </motion.p>
            
            <motion.div 
  className="flex gap-2 justify-center"
  initial={{ opacity: 0, y: 10 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.8 }}
>
  <motion.a
    href="https://github.com/MARKASCHARAN/SafeMeds"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white text-black px-3 py-1 rounded-lg font-semibold text-xs hover:bg-gray-200 transition-colors flex items-center gap-1"
    whileHover={{ scale: 1.05, y: -1 }}
    whileTap={{ scale: 0.95 }}
  >
    <FaGithubBtn size={25} /> Code
  </motion.a>
  
  <motion.a
    href="https://www.safemedss.me/"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white/10 text-white px-3 py-1 rounded-lg font-semibold text-xs hover:bg-white/20 transition-colors flex items-center gap-1"
    whileHover={{ scale: 1.05, y: -1 }}
    whileTap={{ scale: 0.95 }}
  >
    <FaExternalLinkAlt size={25} /> Demo
  </motion.a>
</motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}