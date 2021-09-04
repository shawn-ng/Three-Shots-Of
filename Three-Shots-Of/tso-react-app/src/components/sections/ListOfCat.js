// This is a option bar for category

import React from "react";

import { listofCategories } from "../../lib/api.js";

const Option = ({ item }) => {
  return <option className={item.strCategory}>{item.strCategory}</option>;
};

const ListOfCat = () => {
  const [state, setState] = React.useState({
    categories: null,
  });

  const fetchingCategories = async () => {
    try {
      const res = await listofCategories();
      console.log(res.data);
      setState({ categories: res.data.drinks });
    } catch (err) {
      console.error(err);
    }
  };

  React.useEffect(() => {
    fetchingCategories();
  }, []);

  return (
    <>
      <div className="select">
        <select>
          <option>default</option>
          {/* {state.categories[0] ? (
            state.categories[0].map((category) => <Option item={category} />)
          ) : (
            <option>Loading</option>
          )} */}
          {state.categories &&
            state.categories.map((category) => <Option item={category} />)}
        </select>
      </div>
    </>
  );
};

export default ListOfCat;
