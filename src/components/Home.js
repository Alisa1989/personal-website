import React from "react";

const Home = () => {
  return (
    <section className="home">
      <div className="home__welcome-container">
        <div className="home__welcome">
          <h1 className="home__welcome--title">
            My name is Alex and I am a React Engineer
          </h1>
          <div className="home__welcome--text">
            <p>
              I have a passion for coding and I love spending my free time
              developing
            </p>
            <p>beautiful static websites and functional React apps.</p>
          </div>
        </div>
        <a
          href="https://www.linkedin.com/in/alexandre-steinhauslin/"
          className="button home__button"
        >
          linkedin
        </a>
      </div>
    </section>
  );
};

export default Home;
