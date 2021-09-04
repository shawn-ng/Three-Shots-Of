import React from "react";
import { useParams } from "react-router-dom";
import { filterByAlcohol } from "../../lib/api";
import { ingredientsArray } from "../../lib/stringDict";

const CocktailPage = () => {
  const { drink } = useParams();
  const [state, setState] = React.useState();

  const fetchingSpecificDrink = async () => {
    try {
      const res = await filterByAlcohol(drink);
      setState(res.data.drinks[0]);
    } catch (err) {
      console.error(err);
    }
  };

  React.useEffect(() => {
    fetchingSpecificDrink();
  }, []);

  return (
    <section className="section is-fullheight">
      <div className="container">
        {state ? (
          <>
            <p className="title has-text-centered">{drink}</p>
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
              </div>
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
};

export default CocktailPage;
