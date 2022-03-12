import React from "react";
import resume from "../other_resources/Alexandre Steinhauslin.pdf";

const Resume = () => {
    return(
        <section className="resume" id="resume">
            <embed className="pdf-container" src={resume} type="application/pdf" width="auto"
                height="auto"/>
        </section>
    )
}

export default Resume;