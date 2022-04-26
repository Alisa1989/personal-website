import React from "react";
import resume from "../other_resources/Alexandre Steinhauslin.pdf";

const Resume = () => {
    return(
        <section>
            <a href={resume} target="_blank" className="button resume_button">View Resume</a>
        </section>
    )
}

export default Resume;