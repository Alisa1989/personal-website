import React from "react";
import { projects } from "../data";

const Portfolio = () => {
    return(
        <section className="portfolio">
            <h2>
                Some of my most recent projects
            </h2>
            {projects.map(p => (
                <div className="projects" id="projects">
                <a className="projects__card" href={p.link}>
                    <div className="projects__card__text">
                        <h3>
                            {p.title}
                        </h3>
                        <p>
                            {p.description}
                        </p>
                    </div>
                </a>
            </div>
            ))}
        </section>
    )
}

export default Portfolio;