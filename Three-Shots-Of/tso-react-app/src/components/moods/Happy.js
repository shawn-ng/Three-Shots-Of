import React from "react";

import { DrinksonMood } from "../../lib/moodDict";
import { filterByAlcohol } from "../../lib/api";
import CocktailCard from "../cocktails/CocktailsCard";

const Happy = () => {
  const [state, setState] = React.useState({
    "pisco sour": null,
    "planters punch": null,
    collins: null,
    caipirinha: null,
    negroni: null,
  });

  const fetchingDrinkAPI = async () => {
    // return Promise.all(
    //   DrinksonMood.good.map(async (drink) => {
    //     try {
    //       const res = await filterByAlcohol(drink);
    //       if (res.data.drinks) {
    //         setState({ ...state, [drink]: res.data.drinks });
    //       }
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   })
    // );
    const res = await filterByAlcohol("pisco sour");
    const res2 = await filterByAlcohol("planters punch");
    const res3 = await filterByAlcohol("collins");
    const res4 = await filterByAlcohol("caipirinha");
    const res5 = await filterByAlcohol("negroni");
    setState({
      ...state,
      "pisco sour": res.data.drinks,
      "planters punch": res2.data.drinks,
      collins: res3.data.drinks,
      caipirinha: res4.data.drinks,
      negroni: res5.data.drinks,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    window.location.reload(false);
  };

  React.useEffect(() => {
    fetchingDrinkAPI();
  }, []);

  if (state.negroni) {
    const newArray = [
      ...state["pisco sour"],
      ...state["planters punch"],
      ...state.caipirinha,
      ...state.collins,
      ...state.negroni,
    ];
    console.log(newArray.sort(() => 0.5 - Math.random()));

    // const start = Math.floor(Math.random() * 9);
    // const end = Math.floor(Math.random() * 12);

    // if (Math.abs(start-end) > 3)

    return (
      <section className="section is-fullheight-with-navbar">
        <div className="title">
          <p className="tite has-text-centered">I'm Feeling Awesome 😎</p>
        </div>
        <div className="container">
          <div className="columns">
            {newArray
              ? newArray
                  .sort(() => 0.5 - Math.random())
                  .slice(0, 4)
                  .map((drink) => {
                    return (
                      <CocktailCard
                        strDrink={drink.strDrink}
                        strDrinkThumb={drink.strDrinkThumb}
                      />
                    );
                  })
              : console.log("state error")}
          </div>
        </div>
        <div className="field mt-4 is-flex is-justify-content-center">
          <button className="button is-warning" onClick={handleClick}>
            Shuffle
          </button>
        </div>
      </section>
    );
  } else {
    return <p>loading...</p>;
  }
};

export default Happy;
