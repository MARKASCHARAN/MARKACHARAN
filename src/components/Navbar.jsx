import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaHome, FaGraduationCap, FaCertificate } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// All navigation items in one array
const allNavItems = [
  { type: "page", path: "/", label: "Home", icon: FaHome },
  { type: "section", id: "about", label: "About" },
  { type: "section", id: "skills", label: "Skills" },
  { type: "section", id: "projects", label: "Projects" }, // Fixed projects
  { type: "section", id: "experience", label: "Experience" },
  // { type: "page", path: "/education", label: "Education", icon: FaGraduationCap },
  { type: "page", path: "/certifications", label: "Certifications", icon: FaCertificate }
];

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);  
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === "/";

  // Handle scroll detection and active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      if (isHomePage) {
        // Set active based on current page
        if (location.pathname === "/") {
          // Find active section on home page
          const sections = ["about", "skills", "projects", "experience"];
          let currentSection = "about";
          
          for (const sectionId of sections) {
            const element = document.getElementById(sectionId);
            if (element && window.scrollY + 100 >= element.offsetTop) {
              currentSection = sectionId;
            }
          }
          setActiveItem(currentSection);
        }
      } else {
        // Set active based on current page
        setActiveItem(location.pathname);
      }
    };

    handleScroll(); // Run once on mount
    if (isHomePage) {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage, location.pathname]);

  // Handle navigation clicks
  const handleNavClick = (item) => {
    setIsMenuOpen(false);
    
    if (item.type === "page") {
      // Navigate to different page
      navigate(item.path);
      setActiveItem(item.path);
    } else if (item.type === "section") {
      // Scroll to section
      if (isHomePage) {
        // Already on home page, just scroll
        const element = document.getElementById(item.id);
        if (element) {
          const offsetTop = element.offsetTop - 80; // Account for navbar height
          window.scrollTo({ 
            top: offsetTop, 
            behavior: "smooth" 
          });
        }
      } else {
        // Navigate to home page first, then scroll
        navigate("/");
        setActiveItem(item.id);
        setTimeout(() => {
          const element = document.getElementById(item.id);
          if (element) {
            const offsetTop = element.offsetTop - 80;
            window.scrollTo({ 
              top: offsetTop, 
              behavior: "smooth" 
            });
          }
        }, 100);
      }
    }
  };

  const showWelcomeToast = () => {
    toast.success("Welcome to MARKA SAI CHARAN's Portfolio!", {
      position: "top-center",
      style: {
        background: "#ffffff",
        color: "#1f2937",
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        fontWeight: "500"
      }
    });
  };

  // Check if item is active
  const isActive = (item) => {
    if (item.type === "page") {
      return location.pathname === item.path;
    } else {
      return isHomePage && activeItem === item.id;
    }
  };

  return (
    <>
      <motion.nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200" 
            : "bg-white/80 backdrop-blur-sm shadow-sm border-b border-gray-100"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          
          {/* Logo */}
          <motion.button
            onClick={showWelcomeToast}
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative">
              <div className="rounded-full bg-gradient-to-br from-gray-800 to-black w-10 h-10 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all">
                <span className="text-lg font-black text-white">MS</span>
              </div>
              <motion.div 
                className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <div className="hidden sm:block">
              <span className="font-black text-lg text-gray-900">MARKA SAI CHARAN</span>
            </div>
          </motion.button>

          {/* Desktop Navigation - Single Bar */}
          <div className="hidden lg:flex items-center gap-1 bg-gray-50 rounded-full p-1 border border-gray-200">
            {allNavItems.map((item, index) => (
              <motion.button
                key={item.type === "page" ? item.path : item.id}
                onClick={() => handleNavClick(item)}
                className={`relative flex items-center gap-2 px-3 py-2 rounded-full font-medium transition-all text-sm ${
                  isActive(item)
                    ? "bg-white text-gray-900 shadow-md"
                    : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.icon && <item.icon size={12} />}
                {item.label}
                
                {isActive(item) && (
                  <motion.div
                    layoutId="activeNavItem"
                    className="absolute inset-0 bg-white rounded-full shadow-md"
                    style={{ zIndex: -1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-200 shadow-lg"
            >
              <div className="px-4 py-6">
                <div className="grid grid-cols-2 gap-2">
                  {allNavItems.map((item, index) => (
                    <motion.button
                      key={item.type === "page" ? item.path : item.id}
                      onClick={() => handleNavClick(item)}
                      className={`flex items-center gap-2 px-3 py-3 rounded-xl font-medium transition-all text-sm ${
                        isActive(item)
                          ? "bg-gray-900 text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {item.icon && <item.icon size={16} />}
                      {item.label}
                    </motion.button>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-6 pt-4 border-t border-gray-200 text-center">
                  <p className="text-xs text-gray-500">
                    © 2025 Marka Sai Charan
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <ToastContainer 
        position="top-center"
        toastStyle={{
          background: "#ffffff",
          color: "#1f2937",
          border: "1px solid #e5e7eb",
          borderRadius: "12px",
          fontWeight: "500"
        }}
      />
    </>
  );
};

export default Navbar;