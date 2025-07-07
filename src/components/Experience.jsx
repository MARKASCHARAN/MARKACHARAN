import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaGithub, FaCode, FaUsers, FaRocket, FaAward, FaLaptopCode } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    // {
    //   title: "Freelance Full-Stack Developer",
    //   company: "Self-Employed",
    //   location: "Remote",
    //   period: "Jan 2024 – Present",
    //   type: "Freelance",
    //   status: "current",
    //   achievements: [
    //     "Built 5+ full-stack web applications for clients across different industries",
    //     "Specialized in React.js, Node.js, and blockchain integration",
    //     "Delivered projects with 100% client satisfaction rate",
    //     "Generated ₹2+ lakhs in freelance revenue"
    //   ],
    //   technologies: ["React", "Node.js", "MongoDB", "Web3", "Solidity"]
    // },
    {
      title: "Open Source Contributor",
      company: "Hacktoberfest & GitHub Community",
      location: "Remote",
      period: "Sep 2024 – Nov 2024",
      type: "Open Source",
      status: "completed",
      achievements: [
        "Successfully completed Hacktoberfest 2024 with 4+ merged PRs",
        "Contributed to React.js and JavaScript open-source projects",
        "Fixed critical bugs and improved UI components in community repositories",
      ],
      technologies: ["React.js", "JavaScript", "Git", "GitHub"]
    },
    
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'current': return 'bg-green-100 text-green-800 border-green-200';
      case 'ongoing': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'completed': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'Freelance': return <FaLaptopCode className="text-green-600" size={16} />;
      case 'Open Source': return <FaGithub className="text-gray-800" size={16} />;
      case 'Project-based': return <FaRocket className="text-blue-600" size={16} />;
      case 'Self-Directed': return <FaCode className="text-purple-600" size={16} />;
      default: return <FaBriefcase className="text-gray-600" size={16} />;
    }
  };

  return (
    <motion.section 
      id="experience" 
      className="rounded-3xl bg-white border border-gray-200 p-8 shadow-xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ 
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        scale: 1.01
      }}
    >
      {/* Header */}
      <motion.h2 
        className="text-3xl font-black text-gray-900 mb-8 flex items-center gap-3"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        whileHover={{ x: 5 }}
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          💼
        </motion.div>
        Work Experience
      </motion.h2>

      {/* Experience Timeline */}
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.title}
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Timeline line */}
            {index < experiences.length - 1 && (
              <div className="absolute left-6 top-16 w-0.5 h-16 bg-gray-200" />
            )}

            <motion.div 
              className="bg-gray-50 border border-gray-200 rounded-2xl p-6 relative overflow-hidden"
              whileHover={{ scale: 1.02, x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
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

              <div className="relative z-10">
                {/* Header Row */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    {/* Position Title */}
                    <motion.h3 
                      className="font-bold text-xl text-gray-900 mb-2 flex items-center gap-3"
                      whileHover={{ color: "#374151" }}
                    >
                      {getTypeIcon(exp.type)}
                      {exp.title}
                    </motion.h3>

                    {/* Company & Location */}
                    <div className="flex flex-wrap items-center gap-4 mb-3">
                      <div className="flex items-center gap-2">
                        <FaBriefcase className="text-gray-600" size={14} />
                        <span className="text-gray-700 font-medium">{exp.company}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-red-500" size={14} />
                        <span className="text-gray-600">{exp.location}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <FaCalendarAlt className="text-blue-600" size={14} />
                        <span className="text-gray-600 font-medium">{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <motion.span 
                    className={`px-3 py-1 rounded-full text-xs font-bold border ${getStatusColor(exp.status)}`}
                    animate={exp.status === 'current' ? { scale: [1, 1.05, 1] } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {exp.status === 'current' && '🔥 '}
                    {exp.status.charAt(0).toUpperCase() + exp.status.slice(1)}
                  </motion.span>
                </div>

                {/* Achievements */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <FaAward className="text-yellow-600" size={14} />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <motion.li
                        key={achIndex}
                        className="flex items-start gap-3 text-gray-700"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * achIndex }}
                        whileHover={{ x: 5 }}
                      >
                        <span className="text-gray-400 mt-2">•</span>
                        <span className="leading-relaxed">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <FaCode className="text-blue-600" size={14} />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="bg-white text-gray-700 px-3 py-1 rounded-lg text-sm font-medium border border-gray-200 shadow-sm"
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
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

    
      {/* <motion.div 
        className="mt-8 pt-6 border-t border-gray-200"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.div 
            className="text-center bg-gray-50 rounded-xl p-4"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-black text-gray-900">2+</h3>
            <p className="text-gray-600 font-medium">Years Experience</p>
          </motion.div>
          
          <motion.div 
            className="text-center bg-gray-50 rounded-xl p-4"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-black text-gray-900">15+</h3>
            <p className="text-gray-600 font-medium">Projects Completed</p>
          </motion.div>
          
          <motion.div 
            className="text-center bg-gray-50 rounded-xl p-4"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-black text-gray-900">₹2L+</h3>
            <p className="text-gray-600 font-medium">Revenue Generated</p>
          </motion.div>
        </div>
      </motion.div> */}

      {/* Call to Action */}
      <motion.div 
        className="mt-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.0 }}
      >
        {/* <p className="text-gray-600 mb-4">
          Ready to collaborate on your next project?
        </p> */}
        {/* <motion.button
          className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 mx-auto"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaUsers size={16} />
          Let's Work Together
        </motion.button> */}
      </motion.div>
    </motion.section>
  );
};

export default Experience;