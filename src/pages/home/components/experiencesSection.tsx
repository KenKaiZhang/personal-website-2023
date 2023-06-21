import React, { useRef, useState } from "react";
import "../styles/experiencesSection.scss";
import experiences from "../../../files/experiences.json";
import { useInView } from "framer-motion";

const ExperiencesSection = () => {
  const [view, setView] = useState<number>(0);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const slideInDown = {
    opacity: isInView ? 1 : 0,
    transform: isInView ? "translateY(0)" : "translateY(-300%)",
    transition: "1s",
  };

  const handleClick = (e: any) => {
    setView(e.currentTarget.id);
  };

  return (
    <section className="experiences" ref={ref}>
      <div className="list">
        <div className="bar" />
        {experiences.map((exp, i) => {
          return (
            <button
              key={i}
              id={`${i}`}
              onClick={handleClick}
              style={{ ...slideInDown, transitionDelay: `${i / 2}s` }}
            >
              <h4>{exp.name}</h4>
              <h5>
                <i>{exp.duration}</i>
              </h5>
            </button>
          );
        })}
      </div>
      <div className="details">
        <h3>{experiences[view].role}</h3>
        <h5>{experiences[view].location}</h5>
        {experiences[view].summary.map((sum, i) => {
          return <li key={i}>{sum}</li>;
        })}
      </div>
    </section>
  );
};

export default ExperiencesSection;
