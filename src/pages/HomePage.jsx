import AboutAndFeatured from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import FooterMain from "../components/FooterMain";

const HomePage = () => {
  return (
    <main className="max-w-6xl mx-auto p-4 space-y-10 mt-20">
      <AboutAndFeatured />
      <Skills />
      <Projects />
      <Experience />
      <FooterMain />
    </main>
  );
};

export default HomePage;