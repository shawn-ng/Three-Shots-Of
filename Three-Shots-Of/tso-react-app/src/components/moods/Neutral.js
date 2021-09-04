import React from "react";
import { randomCocktail } from "../../lib/api";
import Modal from "react-modal";
import { ingredientsArray } from "../../lib/stringDict";

const Neutral = () => {
  const [state, setState] = React.useState();
  const [modlaIsOpen, setModalIsOpen] = React.useState(false);
  const [comment, setComment] = React.useState("");

  const fetchingRandomDrinkApi = async () => {
    try {
      const res = await randomCocktail();
      console.log(res.data.drinks[0]);
      setState(res.data.drinks[0]);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = (e) => {
    setState(null);
    fetchingRandomDrinkApi();
  };

  const handleComment = (e) => {
    if (e.target.id === "bad") {
      setModalIsOpen(true);
      setComment("bad");
    } else {
      setModalIsOpen(true);
      setComment("good");
    }
  };

  const setModalIsOpentoFalse = () => {
    setModalIsOpen(false);
  };

  const spintItAgain = () => {
    setState(null);
    setModalIsOpen(false);
    fetchingRandomDrinkApi();
  };

  return (
    <section className="section">
      <div className="container">
        <div className="field is-flex is-justify-content-center mb-5">
          <button className="button is-success" onClick={handleClick}>
            Let's Spin It
          </button>
        </div>
      </div>
      <div className="container">
        {state ? (
          <>
            <p className="title has-text-centered">{state.strDrink}</p>
            <hr />
            <div className="columns">
              <div className="column is-half">
                <figure className="image">
                  <img src={state.strDrinkThumb} alt={state.strDrink} />
                </figure>
              </div>
              <div className="column is-half">
                <div>
                  <p className="is-size-4">Ingredients</p>
                  <br />
                  <ul>
                    {ingredientsArray.map((key) => {
                      return (
                        <li>
                          <p className="mt-3">{state[key]}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <hr />
                <div>
                  <p className="is-size-4">Instructions</p>
                  <br />
                  <p>{state.strInstructions}</p>
                </div>
                <div className="mt-4">
                  <button
                    className="button is-warning"
                    id="good"
                    onClick={handleComment}
                  >
                    👍🏽
                  </button>
                  <button
                    className="button ml-3 is-danger"
                    id="bad"
                    onClick={handleComment}
                  >
                    👎
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
      <div className="modal">
        <div className="modal-content">
          <Modal isOpen={modlaIsOpen} width="500">
            <div className="is-flex is-justify-content-space-between">
              <div>
                <button className="button is-warning" onClick={spintItAgain}>
                  Spin It Again !
                </button>
              </div>
              <div>
                <button
                  className="button is-danger"
                  onClick={setModalIsOpentoFalse}
                >
                  X
                </button>
              </div>
            </div>
            <hr />
            {comment === "bad" ? (
              <>
                <div className="is-flex is-justify-content-center">
                  <img
                    src="https://media.giphy.com/media/26uf1EUQzKKGcIhJS/giphy.gif"
                    alt="stewie angry"
                    width="400"
                  />
                </div>
                <hr />
                <div>
                  <p className="has-text-centered title mt-6">
                    You sure you dont like it drunky ? 😏 I'm watching you...
                  </p>
                  <br />
                  <p className="has-text-centered title">
                    Then Spin It Again !
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="is-flex is-justify-content-center">
                  <img
                    src="https://media.giphy.com/media/5mlXCTjRtf9N6/giphy.gif"
                    alt="stewie angry"
                    width="400"
                  />
                </div>
                <hr />
                <div>
                  <p className="title has-text-centered mt-6">
                    What are you waiting for! GO NOW
                  </p>
                </div>
              </>
            )}
          </Modal>
        </div>
      </div>
    </section>
  );
};

export default Neutral;
