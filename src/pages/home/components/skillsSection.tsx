import React, { useRef } from "react";
import "../styles/skillsSection.scss";
import { useInView } from "framer-motion";

interface SkillProps {
  name: string;
}

const Skill = (props: SkillProps) => {
  const { name } = props;
  return (
    <button className="skill">
      <a href="/skills">
        <h5>{name}</h5>
      </a>
    </button>
  );
};

const SkillsSection = () => {
  const languages = ["JavaScript", "Python", "C"];
  const concpets = ["Fullstack", "Scripting", "Databases"];
  const tools = ["Git", "React", "SQL"];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const slideUp = {
    opacity: isInView ? 1 : 0,
    transform: isInView ? "translateY(0)" : "translateY(100%)",
    transition: "1s",
  };

  return (
    <section className="skills-section" ref={ref}>
      <div className="background" />
      <h3>Here are some of my skills...</h3>
      <ul style={slideUp}>
        <li className="language">
          <h4>Languages</h4>
          <div className="skills">
            {languages.map((language, i) => {
              return <Skill key={i} name={language} />;
            })}
          </div>
        </li>
        <li className="topics">
          <h4>Topics</h4>
          <div className="skills">
            {concpets.map((concept, i) => {
              return <Skill key={i} name={concept} />;
            })}
          </div>
        </li>
        <li className="tools">
          <h4>Tools</h4>
          <div className="skills">
            {tools.map((tool, i) => {
              return <Skill key={i} name={tool} />;
            })}
          </div>
        </li>
      </ul>
      <a id="goto" href="/skills">
        Learn more
      </a>
    </section>
  );
};

export default SkillsSection;
