import { motion } from "framer-motion";
import { FaDownload, FaEye } from "react-icons/fa";

const Skills = () => {
  const handleResumeView = () => {
    // Replace with your actual resume URL
    window.open('src/assets/MarkaSaiCharan.pdf', '_blank');
  };

  const handleResumeDownload = () => {
    // Replace with your actual resume file path
    const link = document.createElement('a');
    link.href = 'src/assets/MarkaSaiCharan.pdf';
    link.download = 'Marka_Sai_Charan_Resume.pdf';
    link.click();
  };

  return (
    <motion.section
      id="skills"
      className="rounded-3xl bg-white border border-gray-200 p-8 shadow-xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-black text-gray-900">
          🛠️ Technical Skills
        </h2>
        
        {/* Resume Button */}
        <motion.button
          onClick={handleResumeView}
          className="bg-gray-900 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-800 transition-all flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaEye size={14} /> Resume
        </motion.button>
      </div>

      <div className="space-y-4 text-gray-700">
        <div>
          <span className="font-bold text-gray-900">Languages:</span> 
          <span className="ml-2">JavaScript, Node.js, Python, Solidity</span>
        </div>
        
        <div>
          <span className="font-bold text-gray-900">Frameworks:</span> 
          <span className="ml-2">React.js, Web3.js, Ethers.js, Flask</span>
        </div>
        
        <div>
          <span className="font-bold text-gray-900">Databases:</span> 
          <span className="ml-2">MongoDB, SQL</span>
        </div>
        
        <div>
          <span className="font-bold text-gray-900">Cloud/Tools:</span> 
          <span className="ml-2">AWS, Git, VS Code, Linux, Postman, GitHub</span>
        </div>
      </div>

      {/* Simple Stats */}
      <div className="mt-6 bg-gray-50 rounded-2xl p-4 border border-gray-100">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-xl font-black text-gray-900">2+</div>
            <div className="text-xs text-gray-600">Years</div>
          </div>
          <div>
            <div className="text-xl font-black text-gray-900">15+</div>
            <div className="text-xs text-gray-600">Projects</div>
          </div>
          <div>
            <div className="text-xl font-black text-gray-900">10+</div>
            <div className="text-xs text-gray-600">Technologies</div>
          </div>
        </div>
      </div>

      {/* Resume Download Option */}
      <motion.div
        className="mt-4 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <button
          onClick={handleResumeDownload}
          className="text-gray-600 hover:text-gray-900 text-sm font-medium flex items-center gap-1 mx-auto transition-colors"
        >
          <FaDownload size={12} /> Download Resume
        </button>
      </motion.div>
    </motion.section>
  );
};

export default Skills;