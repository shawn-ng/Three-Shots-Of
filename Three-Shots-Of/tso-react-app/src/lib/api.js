import axios from "axios";

// make a function that take multiple endpoints and take multiple input ( or default input )
// mood function

// Base URL
const BaseURL = "https://www.thecocktaildb.com/api/json/v1/1/";

/* This is for the filtering api */

// Getting cocktail drinks by certain base ingridient e.g gin
export const filterByIngredient = (Ingridient) => {
  return axios.get(`${BaseURL}filter.php?i=${Ingridient}`);
};

// Getting cocktail drinks by letters
export const filterByLetters = (Letter) => {
  return axios.get(`${BaseURL}search.php?f=${Letter}`);
};

// Getting cocktail drinks by specific drinks e.g Bloody Mary
export const filterByAlcohol = (Drink) => {
  return axios.get(`${BaseURL}search.php?s=${Drink}`);
};

//Getting random cocktail
export const randomCocktail = () => {
  return axios.get(`${BaseURL}random.php`);
};

/* This is for the option purposes */

// Getting list of ingredient type available
export const listofIngredients = () => {
  return axios.get(`${BaseURL}list.php?i=list`);
};

// Getting list of Category type available
export const listofCategories = () => {
  return axios.get(`${BaseURL}list.php?c=list`);
};
