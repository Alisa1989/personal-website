import React from "react";
import { projects } from "../data";
import ProjectCard from "./ProjectCard";

const Portfolio = () => {
  return (
    <section className="projects">
      <h2>Some of my most recent projects</h2>
      <div className="projects" id="projects">
        {projects.map((p) => (
          <ProjectCard item={p} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
