import { useEffect, useState } from "react";
import HeroSectionPage from "./components/HeroSectionPage";
import IntroSectionPage from "./components/IntroSectionPage";
import { motion } from "framer-motion";

function App() {
  const [introVisibility, setIntroVisibility] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroVisibility(false);
    }, 1500);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <motion.div
        className="intro-section"
        initial={{ y: 440, opacity: 1 }}
        animate={{ y: introVisibility ? 0 : -440, opacity: introVisibility ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        style={{ display: introVisibility ? "block" : "none" }}
      >
       <IntroSectionPage />
      </motion.div>

      <motion.div
        className="hero-section"
        initial={{ y: 440, opacity: 0 }}
        animate={{ y: introVisibility ? 440 : 0, opacity: introVisibility ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        style={{ display: introVisibility ? "none" : "block" }}
      >
        <HeroSectionPage/>
      </motion.div>
    </>
  );
}

export default App;