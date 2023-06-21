import React, { useRef } from "react";
import { useInView } from "framer-motion";
import "../styles/introSection.scss";

const IntroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const slideInLeft = {
    left: isInView ? 0 : "-400px",
    opacity: isInView ? 1 : 0,
    transition: "1s",
  };

  const slideInRight = {
    right: isInView ? "2rem" : "-400px",
    opacity: isInView ? 1 : 0,
    transition: "1s",
  };

  return (
    <section className="intro" ref={ref}>
      <div className="name" style={slideInLeft}>
        <h3>Hi I'm</h3>
        <h1>Chen Kai Zhang</h1>
      </div>
      <a
        style={slideInRight}
        className="resume-button"
        href="/pdf/resume2023.pdf"
        download="chenkaizhang_2023_resume.pdf"
      >
        <h4>Get Resume</h4>
      </a>
    </section>
  );
};
export default IntroSection;
