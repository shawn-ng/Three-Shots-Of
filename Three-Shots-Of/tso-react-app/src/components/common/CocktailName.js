import React from 'react';
import { useParams, useHistory } from 'react-router';

import { filterByAlcohol } from '../../lib/api';
import CocktailCard from '../cocktails/CocktailsCard';

const Links = ({ array }) => {
  return array.map((item) => {
    return (
      <li key={item.strDrink}>
        <a href={`/cocktailName/${item.strDrink}`} className={item.strDrink}>
          {item.strDrink}
        </a>
      </li>
    );
  });
};

const CocktailName = () => {
  const { drink = 'Mojito' } = useParams();
  const history = useHistory();

  const [state, setState] = React.useState();
  const [drinks, setDrinks] = React.useState();
  const [search, setSearch] = React.useState('');

  const fetchingListofCocktails = async () => {
    try {
      const res = await filterByAlcohol();
      setState(res.data.drinks);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchingfilterbyCocktail = async () => {
    try {
      const res = await filterByAlcohol(drink);
      setDrinks(res.data.drinks);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/cocktailname/${search}`);
    window.location.reload(false);
  };

  React.useEffect(() => {
    fetchingListofCocktails();
    fetchingfilterbyCocktail();
  }, []);

  return (
    <section className="section">
      <div className="container is-flex">
        <div className="dropdown is-flex-direction-column">
          <div>
            <aside className="menu">
              <input
                className="input"
                type="text"
                placeholder="Search..."
                value={search}
                onChange={handleChange}
              />

              <button
                className="button is-fullwidth mt-2 is-danger"
                onClick={handleSubmit}
              >
                Find
              </button>

              <p className="menu-label">Cocktails</p>
              <ul className="menu-list">
                {state ? <Links array={state} /> : null}
              </ul>
            </aside>
          </div>
        </div>
        <div className="columns is-multiline ml-5">
          {drinks
            ? drinks.map((drink) => {
                return (
                  <CocktailCard
                    strDrink={drink.strDrink}
                    strDrinkThumb={drink.strDrinkThumb}
                    key={drink.idDrink}
                  />
                );
              })
            : null}
        </div>
      </div>
    </section>
  );
};

export default CocktailName;
