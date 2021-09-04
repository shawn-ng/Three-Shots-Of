import React from "react";
import { useHistory } from "react-router";

const Mood = () => {
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    const mood = e.target.id;
    history.push(`/mood/${mood}`);
  };

  return (
    <section className="hero is-fullheight-with-navbar">
      <div className="hero-body is-flex is-justify-content-center">
        <div className="buttons are-medium box">
          <button onClick={handleClick} className="button is-danger" id="happy">
            😄
          </button>
          <button onClick={handleClick} className="button is-danger" id="sad">
            😞
          </button>
          <button
            onClick={handleClick}
            className="button is-danger"
            id="neutral"
          >
            🙂
          </button>
        </div>
      </div>
    </section>
  );
};

export default Mood;
