import React, { useRef } from "react";

const Home = () => {
  const instructions = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();

    const ref = instructions;

    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <section className="hero is-fullheight-with-navbar ">
        <div className="hero-body">
          <div className="container">
            <p className="title has-text-centered">
              <span>🍸</span> WELCOME TO 3 SHOTS OF <span>🍸</span>
            </p>
            <div className="is-flex is-justify-content-center">
              <button className="button" onClick={handleClick}>
                See More
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="hero is-fullheight is-warning" ref={instructions}>
        <div className="hero-body">
          <div className="container box">
            <p className="title has-text-centered">
              <span>Instructions</span>
            </p>
            <br />
            <p className="has-text-centered">
              Tantalize your taste buds based on your mood, favourite alcohol,
              or that drink you had one time on holiday but can't fully remember
              the name of!
            </p>
            <p className="has-text-centered mt-4">
              Hover over 'Get started', and start your drinking journey with us!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
