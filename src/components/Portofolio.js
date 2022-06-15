import React from "react";
import { projects } from "../other_resources/data";
import ProjectCard from "./ProjectCard";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2 className="heading-secondary">Some of my most recent projects</h2>
      <div className="projects" id="projects">
        {projects.map((p) => (
          <ProjectCard item={p} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
