import React from "react";

const Home = () => {
  return (
    <section className="home">
      <h1 className="home__title">
        My name is Alex and I am a Front-End Web Developer
      </h1>
      <div className="home__text">
        <p>
          I have a passion for coding and I love spending my free time
          developing
        </p>
        <p>beautiful static websites and functional React apps.</p>
      </div>
      <a
        href="https://www.linkedin.com/in/alexandre-steinhauslin/"
        className="home__button"
      >
        linkedin
      </a>
    </section>
  );
};

export default Home;
