import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import EducationPage from "./pages/EducationPage";
import CertificationsPage from "./pages/CertificationsPage";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loader"
              className="fixed inset-0 z-50 flex items-center justify-center bg-gray-50"
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center">
                {/* Your logo */}
                <motion.div
                  className="mb-6"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
                >
                  <div className="rounded-full bg-gradient-to-br from-gray-800 to-black w-20 h-20 flex items-center justify-center shadow-2xl mx-auto border-2 border-gray-700">
                    <span className="text-2xl font-black text-white">MS</span>
                  </div>
                </motion.div>

                {/* Spinning loader */}
                <motion.div
                  className="w-16 h-16 border-4 border-gray-200 border-t-gray-800 rounded-full mx-auto mb-4"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />

                {/* Loading text */}
                <motion.p
                  className="text-gray-800 font-medium"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  Loading Portfolio...
                </motion.p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <Navbar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/education" element={<EducationPage />} />
                <Route path="/certifications" element={<CertificationsPage />} />
              </Routes>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;