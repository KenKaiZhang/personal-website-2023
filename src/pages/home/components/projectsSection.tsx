import React, { useRef, useState } from "react";
import "../styles/projectsSection.scss";
import projects from "../../../files/projects.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useInView } from "framer-motion";

interface ProjectCardProps {
  id: number;
  name: string | null;
  url: string | null;
  image: string | null;
  current: boolean;
  summary: string | null;
  center: number;
}

const ProjectCard = (props: ProjectCardProps) => {
  const { id, name, url, image, current, summary, center } = props;
  return (
    <div id={`${id}`} className={`project-card ${id === center ? "center" : ""}`}>
      <div className="background" style={{ backgroundImage: `url(${image})` }} />
      {current && <div className="current-badge">Current</div>}
      <h3>{name}</h3>
      <p>{summary}</p>
      {url !== null && (
        <a href={url} target="_blank" rel="noreferrer">
          Visit
        </a>
      )}
    </div>
  );
};

const ProjectsSection = () => {
  const [center, setCenter] = useState<number>(Math.floor(projects.length / 2));
  const [shift, setShift] = useState<number>(0);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const fadeIn = {
    opacity: isInView ? 1 : 0,
    transition: "1s",
  };

  const handleNavClick = (e: any) => {
    const direction: string = e.target.id;
    let shiftBy = 0;
    if (direction === "left") {
      shiftBy = 500;
    } else if (direction === "right") {
      shiftBy = -500;
    }

    setShift(shift + shiftBy);
    setCenter(direction === "left" ? center - 1 : center + 1);
  };

  return (
    <section className="projects" ref={ref} style={fadeIn}>
      <div className="navigation">
        <button id="left" onClick={handleNavClick} disabled={center <= 0}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button id="right" onClick={handleNavClick} disabled={center >= projects.length - 1}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <div className="carousel" style={{ transform: `translateX(${shift}px)` }}>
        {projects.map((project, i: number) => {
          return <ProjectCard key={i} id={i} {...project} center={center} />;
        })}
      </div>
    </section>
  );
};
export default ProjectsSection;
