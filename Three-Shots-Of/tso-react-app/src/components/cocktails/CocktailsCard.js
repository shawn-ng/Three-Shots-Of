import React from "react";

const CocktailCard = ({ strDrink, strDrinkThumb, idDrink }) => {
  return (
    <div className="column is-one-quarter" key={idDrink}>
      <div className="card">
        <a href={`/${strDrink}`}>
          <div className="card-image">
            <figure className="image">
              <img src={strDrinkThumb} alt={strDrink} />
            </figure>
          </div>
          <div className="card-header">
            <p className="card-header-title">{strDrink}</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default CocktailCard;
