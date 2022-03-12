import React from "react";

const Portfolio = () => {
    return(
        <section className="portfolio">
            <h2>
                Some of my most recent projects
            </h2>
            <div className="projects" id="projects">
                <a className="projects__card" href="https://github.com/Alisa1989/team-builder/tree/alexandre-steinhauslin">
                    <div className="projects__card__text">
                        <h3>
                            React Form
                        </h3>
                        <p>
                            This is an example of Form management in React
                        </p>
                    </div>
                </a>
                <a className="projects__card" href="https://github.com/Alisa1989/React-Todo/tree/alexandre-steinhauslin">
                    <div className="projects__card__text">
                        <h3>
                            To-Do List
                        </h3>
                        <p>
                            This project demonstrates my ability to use the older technique of class components in
                            React.
                        </p>
                    </div>
                </a>
                <a className="projects__card"
                    href="https://github.com/Alisa1989/React-Github-User-Card/tree/alexandre-steinhauslin">
                    <div className="projects__card__text">
                        <h3>
                            Github Usercard
                        </h3>
                        <p>
                            Another example of the usage of class components and the React lifecycle.
                        </p>
                    </div>
                </a>
            </div>
        </section>
    )
}

export default Portfolio;