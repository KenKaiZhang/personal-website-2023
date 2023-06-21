import React from "react";
import "../styles/NavigationBar.scss";

const Navigationbar = () => {
  return (
    <div className="navigation-bar">
      <a href="/experiences">Experiences</a>
      <a href="/projects">Projects</a>
      <a href="/skills">Skills</a>
      <a href="/blog">Blog</a>
      <a href="/">Home</a>
    </div>
  );
};

export default Navigationbar;
