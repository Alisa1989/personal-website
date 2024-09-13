import React from "react";
import resume from "../../other_resources/Alexandre Steinhauslin.pdf";

const Resume = () => {
    return(
        <section id="resume">
            <a href={resume} target="_blank" rel="noreferrer" className="button resume_button">View Resume</a>
        </section>
    )
}

export default Resume;