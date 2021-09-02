import React from "react";

// A quick start button - Link to somewhere we dunno
// Instruction

const Mood = () => {
  return (
    <section>
      <div>
        <div>
          <p>
            <span>😊😔</span> Select your mood
          </p>
          <br />
          <button>Good</button>
          <button>Neutral</button>
          <button>Bad</button>
        </div>
      </div>
    </section>
  );
};

export default Mood;
