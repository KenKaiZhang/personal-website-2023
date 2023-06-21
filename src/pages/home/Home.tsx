import "./Home.scss";
import IntroSection from "./components/introSection";
import ProjectsSection from "./components/projectsSection";
import SkillsSection from "./components/skillsSection";
import ExperiencesSection from "./components/experiencesSection";
import ConnectSection from "./components/connectSection";
import QuickInfo from "./components/quickInfo";

const Home = () => {
  return (
    <div className="page">
      <IntroSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperiencesSection />
      <ConnectSection />
      <QuickInfo />
    </div>
  );
};

export default Home;
