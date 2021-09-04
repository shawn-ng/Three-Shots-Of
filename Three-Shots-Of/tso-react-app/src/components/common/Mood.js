import React from 'react';
import { useHistory } from 'react-router';

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
          <button
            onClick={handleClick}
            className="button is-danger"
            id="neutral"
          >
            🙂
          </button>
<<<<<<< HEAD
          {/* <section>
      <div>
        <div>
          <p>
            <span>😊😔</span> Select your mood
          </p>
          <br />
          <button>Good</button>
          <button>Neutral</button>
          <button>Bad</button> */}
=======
          <button onClick={handleClick} className="button is-danger" id="sad">
            😞
          </button>
>>>>>>> d244248019e40a179bf3437bfe41620818ce59e9
        </div>
      </div>
    </section>
  );
};

export default Mood;
