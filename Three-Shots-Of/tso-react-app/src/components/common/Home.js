import React from "react";
import ListOfCat from "../sections/ListOfCat";

// A quick start button - Link to somewhere we dunno
// Instruction

const Home = () => {
  return (
    <section>
      <div>
        <div>
          <p>
            <span>🍸</span> 3 Shots Of ...
          </p>
          <p>
            <span>Instructions</span>
          </p>
          <br />
          <p>Some instructions here</p>
          <br />
          <button>Mood</button>
          <button>Base</button>
          <button>A-Z</button>
          <ListOfCat />
        </div>
      </div>
    </section>
  );
};

export default Home;
