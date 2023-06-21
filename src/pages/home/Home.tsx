import React, { useEffect, useState } from "react";
import "./Home.scss";
import IntroSection from "./components/introSection";
import ProjectsSection from "./components/projectsSection";
import SkillsSection from "./components/skillsSection";
import ExperiencesSection from "./components/experiencesSection";
import ConnectSection from "./components/connectSection";
import { AnimatePresence } from "framer-motion";
import Loader from "../../Loader";

const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    loading
      ? document.querySelector("#root")?.classList.add("loading")
      : document.querySelector("#root")?.classList.remove("loading");
  }, [loading]);
  return (
    <div className="page">
      <AnimatePresence>
        {loading ? (
          <div>
            <Loader set={setLoading} />
          </div>
        ) : (
          <React.Fragment>
            <IntroSection />
            <ProjectsSection />
            <SkillsSection />
            <ExperiencesSection />
            <ConnectSection />
          </React.Fragment>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
