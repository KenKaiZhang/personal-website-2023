import React from "react";
import "../styles/quickInfo.scss";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const QuickInfo = () => {
  return (
    <div className="info">
      <a href="mailto:ckzhang2674@gmail.com">ckzhang2674@gmail.com</a>
      <div className="line" />
      <a className="github" href="https://github.com/KenKaiZhang" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  );
};

export default QuickInfo;
