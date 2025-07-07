import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaTrophy, FaArrowLeft, FaBookOpen, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const EducationPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Back Button */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors font-medium"
          >
            <FaArrowLeft size={16} />
            Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-black text-gray-900 mb-4">
            Education Background
          </h1>
          <p className="text-gray-600 text-lg">
            My academic journey and educational achievements
          </p>
        </motion.div>

        {/* Education Section */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div 
            className="bg-white border border-gray-200 rounded-3xl p-8 shadow-xl"
            whileHover={{ 
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              scale: 1.01
            }}
          >
            <div className="bg-gray-50 border-l-4 border-gray-800 rounded-2xl p-8 relative overflow-hidden">
              {/* University Name */}
              <motion.h3 
                className="font-bold text-3xl text-gray-900 mb-4 flex items-center gap-3"
                whileHover={{ x: 3 }}
              >
                <FaGraduationCap className="text-gray-700" size={28} />
                Parul University
              </motion.h3>

              {/* Location */}
              <div className="flex items-center gap-2 mb-4">
                <FaMapMarkerAlt className="text-red-500" size={16} />
                <span className="text-gray-600 font-medium text-lg">Vadodara, Gujarat, India</span>
              </div>

              {/* Degree */}
              <p className="text-gray-700 font-semibold text-xl mb-6">
                Bachelor of Technology in Computer Science Engineering
              </p>

              {/* Duration and GPA */}
              <div className="flex flex-wrap gap-4 items-center mb-6">
                <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-3 border border-gray-200 shadow-sm">
                  <FaCalendarAlt className="text-blue-600" size={16} />
                  <span className="font-medium text-gray-700">
                    July 2023 – May 2027
                  </span>
                </div>

                <motion.div 
                  className="flex items-center gap-2 bg-gradient-to-r from-gray-800 to-black rounded-lg px-4 py-3 text-white shadow-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaTrophy className="text-yellow-400" size={16} />
                  <span className="font-bold">
                    CGPA: 7.49
                  </span>
                </motion.div>

                <motion.div 
                  className="flex items-center gap-2 bg-green-100 rounded-lg px-4 py-3 border border-green-200"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.span 
                    className="w-3 h-3 bg-green-500 rounded-full"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.7, 1]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <span className="font-medium text-green-700">
                    Currently Pursuing
                  </span>
                </motion.div>
              </div>

              {/* Academic Progress */}
              <div className="pt-4 border-t border-gray-200 mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium text-gray-600">Academic Progress</span>
                  <span className="font-bold text-gray-800">Year 2 of 4</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <motion.div 
                    className="bg-gradient-to-r from-gray-700 to-gray-900 h-3 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "50%" }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                  />
                </div>
                <p className="text-sm text-gray-500 mt-2">Expected graduation: May 2027</p>
              </div>

              {/* Key Subjects */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <FaBookOpen className="text-blue-600" size={16} />
                    Core Subjects
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "Data Structures & Algorithms",
                      "Computer Networks",
                      "Operating Systems",
                      "Database Management Systems",
                      "Software Engineering"
                    ].map((subject, index) => (
                      <motion.li 
                        key={subject}
                        className="flex items-center gap-2 text-gray-700"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        {subject}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <FaUser className="text-green-600" size={16} />
                    Achievements
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "Dean's List (Semester 2)",
                      "1st Runner-up in Hackathon",
                      "Active in Tech Communities",
                      "Open Source Contributor",
                      "Multiple Certifications"
                    ].map((achievement, index) => (
                      <motion.li 
                        key={achievement}
                        className="flex items-center gap-2 text-gray-700"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Navigation to Certifications */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Professional Certifications
            </h3>
            <p className="text-gray-600 mb-6">
              Explore my professional certifications and continuous learning journey
            </p>
            <Link
              to="/certifications"
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-xl font-semibold transition-all"
            >
              View Certifications
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EducationPage;