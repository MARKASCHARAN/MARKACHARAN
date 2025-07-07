import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaSpotify, FaHeart, FaCode, FaRocket } from "react-icons/fa";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Add your email submission logic here
    console.log("Email submitted:", email);
    setEmailSent(true);
    setTimeout(() => {
      setEmailSent(false);
      setEmail("");
    }, 3000);
  };

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/MARKASCHARAN", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/marka-charan-0a4a9727a/", label: "LinkedIn" },
    { icon: FaTwitter, href: "https://x.com/charan_mar68075", label: "Twitter" },
    { icon: FaInstagram, href: "https://www.instagram.com/charan_marka?utm_source=qr&igsh=MTZwcHM1cjBuaWNqYw==", label: "Instagram" }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "/education" },
    { name: "Blog", href: "#blog" },
    
  ];

  const projectLinks = [
    { name: "SafeMeds AI", href: "https://www.safemedss.me/" },
    { name: "Coffee DApp", href: "https://github.com/MARKASCHARAN/my-dapp" },
    { name: "Chat App", href: "https://github.com/MARKASCHARAN/R-chat-app" },
    { name: "AI Diagnosis", href: "https://github.com/MARKASCHARAN/ai_diagnosis_expert_system" }
  ];

  return (
    <footer className="bg-white border-t border-gray-200 mt-8 sm:mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          
          {/* Freelancing Section */}
          <motion.div
            className="lg:col-span-1 order-1 lg:order-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-xl sm:text-2xl font-black text-gray-900 mb-3 sm:mb-4 flex items-center gap-2"
              whileHover={{ x: 5 }}
            >
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                💼
              </motion.span>
              <span className="leading-tight">Want to hire me as a freelancer?</span>
            </motion.h3>
            <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Let's discuss your project and bring your ideas to life with cutting-edge technology.
            </p>

            {/* WhatsApp Contact */}
            <motion.a
              href="https://wa.me/916281705898?text=Hi%20Marka!%20I'm%20interested%20in%20hiring%20you%20for%20a%20project.%20Let's%20discuss!" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-green-500 hover:bg-green-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all mb-4 shadow-lg w-full sm:w-auto text-sm sm:text-base"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp size={18} className="sm:hidden" />
              <FaWhatsapp size={20} className="hidden sm:block" />
              Chat on WhatsApp
            </motion.a>

            {/* Email Form */}
            <div>
              <p className="text-gray-600 mb-2 sm:mb-3 text-sm sm:text-base">
                Drop in your email ID and I will get back to you.
              </p>
              <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-2">
                <motion.input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all text-sm sm:text-base"
                  required
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.button
                  type="submit"
                  className="bg-gray-900 hover:bg-gray-800 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all text-sm sm:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={emailSent}
                >
                  {emailSent ? "✓ Sent!" : "Send"}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Links Section */}
          <motion.div
            className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8 lg:col-span-2 order-2 lg:order-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-gray-900 mb-3 sm:mb-4 text-base sm:text-lg">Quick Links</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {quickLinks.map((link, index) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.a
                      href={link.href}
                      className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2 py-1 text-sm sm:text-base"
                      whileHover={{ x: 5 }}
                    >
                      <span className="w-1 h-1 bg-gray-400 rounded-full flex-shrink-0"></span>
                      {link.name}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Featured Projects */}
            <div>
              <h4 className="font-bold text-gray-900 mb-3 sm:mb-4 text-base sm:text-lg">Featured Projects</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {projectLinks.map((project, index) => (
                  <motion.li 
                    key={project.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2 py-1 text-sm sm:text-base"
                      whileHover={{ x: 5 }}
                    >
                      <span className="w-1 h-1 bg-blue-500 rounded-full flex-shrink-0"></span>
                      <span className="truncate">{project.name}</span>
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Spotify Section with Embedded Player */}
<motion.div 
  className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 border border-gray-100 order-3"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.4 }}
  viewport={{ once: true }}
  whileHover={{ scale: 1.01 }}
>
  <div className="space-y-4">
    {/* Header */}
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 sm:gap-3">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FaSpotify className="text-green-500" size={20} />
          <FaSpotify className="text-green-500 hidden sm:block" size={24} />
        </motion.div>
        <div>
          <h4 className="font-bold text-gray-900 text-sm sm:text-base">My Coding Playlist</h4>
          <p className="text-gray-600 text-xs sm:text-sm">Beats that fuel my code</p>
        </div>
      </div>
      <motion.a
        href="https://open.spotify.com/playlist/6UkA2qMYUILJngSCNQzFMr?si=fe35994de92c4ae6"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-500 hover:text-green-600 transition-colors text-xs sm:text-sm font-medium flex items-center gap-1"
        whileHover={{ scale: 1.05 }}
      >
        <span>Open Spotify</span>
        <motion.span
          animate={{ x: [0, 3, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          →
        </motion.span>
      </motion.a>
    </div>

    {/* Embedded Player */}
    <div className="w-full">
      <iframe 
        src="https://open.spotify.com/embed/playlist/6UkA2qMYUILJngSCNQzFMr?utm_source=generator&theme=0" 
        width="100%" 
        height="152" 
        frameBorder="0" 
        allowFullScreen 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"
        className="rounded-lg shadow-sm"
      />
    </div>

    {/* Footer Info */}
    <motion.div 
      className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-gray-200"
      animate={{ opacity: [0.7, 1, 0.7] }}
      transition={{ duration: 3, repeat: Infinity }}
    >
      <span>🎵 Follow me on Spotify</span>
      <span>Updated: {new Date().toLocaleDateString()}</span>
    </motion.div>
  </div>
</motion.div>

        {/* Social Links */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 order-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2.5 sm:p-3 rounded-lg sm:rounded-xl transition-all"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <social.icon size={18} className="sm:hidden" />
              <social.icon size={20} className="hidden sm:block" />
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          className="text-center pt-6 sm:pt-8 border-t border-gray-200 order-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-gray-600 mb-3 sm:mb-4 flex items-center justify-center gap-1 sm:gap-2 flex-wrap text-sm sm:text-base"
            whileHover={{ scale: 1.02 }}
          >
            Made with 
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FaHeart className="text-red-500" size={14} />
              <FaHeart className="text-red-500 hidden sm:block" size={16} />
            </motion.span>
            and 
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FaCode className="text-blue-500" size={14} />
              <FaCode className="text-blue-500 hidden sm:block" size={16} />
            </motion.span>
            by Marka Sai Charan
          </motion.p>
          
          <motion.p 
            className="text-gray-500 text-xs sm:text-sm flex items-center justify-center gap-1 sm:gap-2 flex-wrap"
            whileHover={{ color: "#374151" }}
          >
            © 2025 • Built with React & Tailwind CSS 
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FaRocket className="text-gray-400" size={12} />
              <FaRocket className="text-gray-400 hidden sm:block" size={14} />
            </motion.span>
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;