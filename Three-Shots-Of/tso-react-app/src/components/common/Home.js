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
      <section className="hero is-fullheight-with-navbar bg-img">
        <div className="hero-body hero-background">
          <div className="container">
            <div className="">
              <p className="title has-text-centered has-text-light shadow is-size-1">
                <span>🍸</span> WELCOME TO 3 SHOTS OF <span>🍸</span>
              </p>
            </div>
            <div className="is-flex is-justify-content-center mt-4">
              <button className="button" onClick={handleClick}>
                Instructions
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="hero is-fullheight is-dark" ref={instructions}>
        <div className="hero-body">
          <div className="container box">
            <p className="title has-text-centered has-text-black">
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
