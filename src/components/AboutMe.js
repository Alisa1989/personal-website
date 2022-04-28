import React from "react";

import Florence from "../img/Firenze.jpg";
import SF from "../img/SF.jpg";
import CodeLove from "../img/codeLove.jpg";

const AboutMe = () => {
  return (
    <section className="about">
      <h2>About Me</h2>
      <div className="grid_container">
        <div className="grid_item text--1">
          <p>
            I was born and raised in Florence, Italy in a three-language family
            which allowed me to be open to different cultures and perspectives.
            In 2016 I moved to the San Francisco bay area and was able to
            assimilate to the country and culture with ease. My experience in
            the diverse fields of service, legal, and tech are an example of my
            plasticity and my ability to adopt and implement new technologies.
          </p>
        </div>
        <img
          src={CodeLove}
          alt="heart shaped computer bits"
          className="grid_item photo--1"
        />
        <img
          src={SF}
          alt="San Francisco's Golden Gate"
          className="grid_item photo--2"
        />
        <div className="grid_item text--2">
          <p>
            It always has been important for me to have clear goals in order to
            progress as effectively as possible. I apply this principle also in
            my work, always striving for captivating and responsive user
            interface, scalable and maintainable code, and a general curiosity
            in learning new tools to make these goals easier to achieve.
            Starting so many projects independently has taught me excellent
            time-management skills which are essential for a achieving goals.
          </p>
        </div>
        <div className="grid_item text--3">
          <p>
            As much as I’ve enjoyed independent projects, working in a
            collaborative setting has taught me that no matter your skills and
            abilities it will always be necessary to join forces with other
            people to exchange expertise in order to deliver the best possible
            product. This is why I believe interpersonal skills are just as
            important as hard skills. My experience working across multiple
            industries, and on varying projects in college, gave me the ability
            to know what an organization’s strengths are and how to adapt to
            it’s vulnerabilities.
          </p>
        </div>
        <div className="grid_photo_container">

        <img
          src={Florence}
          alt="Florence's Duomo in Italy"
          className="grid_item photo--3"
          />
          </div>
      </div>
    </section>
  );
};

export default AboutMe;
