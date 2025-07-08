import { motion } from "framer-motion";
import { FaCertificate, FaCalendarAlt, FaArrowLeft, FaAward, FaExternalLinkAlt, FaFilter, FaSort, FaTrophy, FaGraduationCap, FaCode, FaCloud, FaNetworkWired, FaDatabase } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import supervisedImg from "../assets/Coursera-Supervised.jpg";
import pipelinesImg from "../assets/Coursera-MLPipelines.jpg";
import mdbImg from "../assets/MDBLearning.jpg";
import cnImg from "../assets/cn.jpg";
import jsImg from "../assets/Coursera-JS.jpg";
import postmanImg from "../assets/Postma.jpeg";
import ciscoImg from "../assets/CISCO_OS.jpg";


const CertificationsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("date");

  const certificates = [
    {
    title: "Programming with JavaScript",
    issuer: "META, Coursera",
    date: "August 2024",
    dateSort: "2024-08",
    description: "Comprehensive course on JavaScript programming with hands-on projects.",
    image: jsImg,
    category: "Frontend",
    level: "Intermediate",
    skills: ["JavaScript", "ES6+", "DOM Manipulation", "Async Programming"],
    credentialId: "META-JS-2024"
  },
  {
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "Stanford Online, DeepLearning.AI",
    date: "August 2024",
    dateSort: "2024-08",
    description: "In-depth course on regression and classification techniques with hands-on projects.",
    image: supervisedImg,
    category: "AI/ML",
    level: "Advanced",
    skills: ["Machine Learning", "Python", "Scikit-learn", "Data Analysis"],
    credentialId: "DL-ML-2024-001"
  },
  {
    title: "Machine Learning Pipelines with Azure ML Studio",
    issuer: "Coursera",
    date: "July 2024",
    dateSort: "2024-07",
    description: "Comprehensive course on building and managing machine learning pipelines using Azure ML Studio.",
    image: pipelinesImg,
    category: "AI/ML",
    level: "Intermediate",
    skills: ["Azure ML", "MLOps", "Cloud Computing", "Model Deployment"],
    credentialId: "COURSERA-AZ-2024"
  },
  {
    title: "MongoDB Node.js Developer Path",
    issuer: "MongoDB University",
    date: "October 2024",
    dateSort: "2024-10",
    description: "Building modern applications with Node.js, using MongoDB as your database.",
    image: mdbImg,
    category: "Backend",
    level: "Intermediate",
    skills: ["MongoDB", "Node.js", "Database Design", "CRUD Operations"],
    credentialId: "MDB-NODE-2024"
  },
  {
    title: "Computer Networks",
    issuer: "IIT Kanpur",
    date: "January 2025",
    dateSort: "2025-01",
    description: "This certification recognizes a computer network concepts and networking fundamentals.",
    image: cnImg,
    category: "Networking",
    level: "Advanced",
    skills: ["TCP/IP", "Network Security", "Routing", "Network Protocols"],
    credentialId: "IITK-CN-2025"
  },
  {
    title: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    date: "October 2024",
    dateSort: "2024-10",
    description: "This certification recognizes a foundational understanding of API concepts and the Postman platform.",
    image: postmanImg,
    category: "API",
    level: "Beginner",
    skills: ["API Testing", "REST APIs", "Postman", "API Documentation"],
    credentialId: "POSTMAN-API-2024"
  },
  {
    title: "CISCO Operating Systems",
    issuer: "CISCO",
    date: "January 2025",
    dateSort: "2025-01",
    description: "This certification recognizes a foundational understanding of Operating Systems.",
    image: ciscoImg,
    category: "Systems",
    level: "Intermediate",
    skills: ["Linux", "Windows", "Process Management", "Memory Management"],
    credentialId: "CISCO-OS-2025"
  }
];


  const categories = ["All", "AI/ML", "Backend", "Frontend", "Networking", "API", "Systems"];

  const getCategoryColor = (category) => {
    const colors = {
      "AI/ML": "bg-purple-100 text-purple-800 border-purple-200",
      "Backend": "bg-green-100 text-green-800 border-green-200",
      "Frontend": "bg-blue-100 text-blue-800 border-blue-200",
      "Networking": "bg-orange-100 text-orange-800 border-orange-200",
      "API": "bg-yellow-100 text-yellow-800 border-yellow-200",
      "Systems": "bg-red-100 text-red-800 border-red-200"
    };
    return colors[category] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  const getCategoryIcon = (category) => {
    const icons = {
      "AI/ML": FaCode,
      "Backend": FaDatabase,
      "Frontend": FaCode,
      "Networking": FaNetworkWired,
      "API": FaCloud,
      "Systems": FaGraduationCap
    };
    return icons[category] || FaCertificate;
  };

  const getLevelColor = (level) => {
    const colors = {
      "Beginner": "bg-green-50 text-green-700 border-green-200",
      "Intermediate": "bg-blue-50 text-blue-700 border-blue-200",
      "Advanced": "bg-purple-50 text-purple-700 border-purple-200"
    };
    return colors[level] || "bg-gray-50 text-gray-700 border-gray-200";
  };

  // Filter and sort certificates
  const filteredCertificates = certificates.filter(cert => 
    selectedCategory === "All" || cert.category === selectedCategory
  );

  const sortedCertificates = [...filteredCertificates].sort((a, b) => {
    if (sortBy === "date") {
      return new Date(b.dateSort) - new Date(a.dateSort);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    } else if (sortBy === "level") {
      const levelOrder = { "Beginner": 1, "Intermediate": 2, "Advanced": 3 };
      return levelOrder[b.level] - levelOrder[a.level];
    }
    return 0;
  });

  const totalPlatforms = [...new Set(certificates.map(cert => cert.issuer))].length;
  const averageLevel = certificates.filter(cert => cert.level === "Advanced").length;

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors font-medium hover:bg-white rounded-lg px-3 py-2"
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
          <motion.h1 
            className="text-5xl sm:text-6xl font-black text-gray-900 mb-4 flex items-center justify-center gap-4"
            whileHover={{ scale: 1.02 }}
          >
            
            Professional Certifications
          </motion.h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            My continuous learning journey and professional achievements across various technologies and platforms
          </p>
          <motion.div 
            className="mt-4 text-sm text-gray-500"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Last updated: July 2025 • {certificates.length} active certifications
          </motion.div>
        </motion.div>

        {/* Enhanced Stats */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <motion.div 
            className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg text-center"
            whileHover={{ scale: 1.02, y: -2 }}
          >
            <h3 className="text-3xl font-black text-gray-900">{certificates.length}</h3>
            <p className="text-gray-600 font-medium">Total Certifications</p>
          </motion.div>
          <motion.div 
            className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg text-center"
            whileHover={{ scale: 1.02, y: -2 }}
          >
            <h3 className="text-3xl font-black text-gray-900">{totalPlatforms}</h3>
            <p className="text-gray-600 font-medium">Learning Platforms</p>
          </motion.div>
          <motion.div 
            className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg text-center"
            whileHover={{ scale: 1.02, y: -2 }}
          >
            <h3 className="text-3xl font-black text-gray-900">{averageLevel}</h3>
            <p className="text-gray-600 font-medium">Advanced Level</p>
          </motion.div>
          <motion.div 
            className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg text-center"
            whileHover={{ scale: 1.02, y: -2 }}
          >
            <h3 className="text-3xl font-black text-gray-900">2023-25</h3>
            <p className="text-gray-600 font-medium">Active Period</p>
          </motion.div>
        </motion.div>

        {/* Filters and Sort */}
        <motion.div 
          className="bg-white rounded-2xl border border-gray-200 p-6 mb-8 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <FaFilter size={14} />
                Filter by:
              </span>
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-gray-900 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <FaSort size={14} />
                Sort by:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                <option value="date">Latest First</option>
                <option value="category">Category</option>
                <option value="level">Difficulty Level</option>
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Showing <span className="font-semibold">{sortedCertificates.length}</span> of <span className="font-semibold">{certificates.length}</span> certifications
              {selectedCategory !== "All" && (
                <span> in <span className="font-semibold">{selectedCategory}</span> category</span>
              )}
            </p>
          </div>
        </motion.div>

        {/* Enhanced Certificates Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {sortedCertificates.map((cert, index) => {
            const CategoryIcon = getCategoryIcon(cert.category);
            return (
              <motion.div
                key={cert.title}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-xl group relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
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

                {/* Certificate Image */}
                {cert.image && (
                  <motion.div 
                    className="relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                  >
                    <img
  src={cert.image}
  alt={cert.title}
  className="w-full h-full object-cover"
  loading="lazy"
/>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    {/* Floating Action Button */}
                    <motion.div 
                      className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ scale: 1.1 }}
                    >
                      <button className="bg-white/90 backdrop-blur-sm text-gray-700 p-2 rounded-full shadow-lg">
                        <FaExternalLinkAlt size={14} />
                      </button>
                    </motion.div>
                  </motion.div>
                )}

                <div className="p-6 relative z-10">
                  {/* Category and Level Badges */}
                  <div className="flex items-center justify-between mb-3">
                    <span className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold border ${getCategoryColor(cert.category)}`}>
                      <CategoryIcon size={10} />
                      {cert.category}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getLevelColor(cert.level)}`}>
                      {cert.level}
                    </span>
                  </div>

                  {/* Title */}
                  <motion.h3 
                    className="font-bold text-lg text-gray-900 mb-2 line-clamp-2 leading-tight"
                    whileHover={{ color: "#374151" }}
                  >
                    {cert.title}
                  </motion.h3>

                  {/* Issuer */}
                  <p className="text-gray-600 font-medium mb-2 flex items-center gap-2">
                    <FaCertificate className="text-blue-600" size={14} />
                    {cert.issuer}
                  </p>

                  {/* Date */}
                  <p className="text-gray-500 text-sm mb-3 flex items-center gap-2">
                    <FaCalendarAlt className="text-gray-400" size={12} />
                    {cert.date}
                  </p>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-gray-700 mb-2">Key Skills:</h4>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          className="bg-gray-50 text-gray-600 px-2 py-1 rounded text-xs font-medium border"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: skillIndex * 0.1 }}
                          whileHover={{ scale: 1.05, backgroundColor: "#f9fafb" }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                      {cert.skills.length > 3 && (
                        <span className="text-xs text-gray-500">
                          +{cert.skills.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Credential ID */}
                  <div className="pt-3 border-t border-gray-100">
                    <p className="text-xs text-gray-500">
                      Credential ID: <span className="font-mono font-medium">{cert.credentialId}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>



      </div>
    </div>
  );
};

export default CertificationsPage;