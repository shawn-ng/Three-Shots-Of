import axios from "axios";

// Base URL
const BaseURL = "https://www.thecocktaildb.com/api/json/v1/1/";

/* This is for the filtering api */

// Getting cocktail drinks by certain base ingredient e.g gin
export const filterByIngredient = (Ingredient) => {
  return axios.get(`${BaseURL}filter.php?i=${Ingredient}`);
};

// Getting cocktail drinks by letters
export const filterByLetters = (Letter) => {
  return axios.get(`${BaseURL}search.php?f=${Letter}`);
};

// Getting cocktail drinks by specific drinks e.g Bloody Mary
export const filterByAlcohol = (Drink) => {
  return axios.get(`${BaseURL}search.php?s=${Drink}`);
};

// Getting random cocktail
export const randomCocktail = () => {
  return axios.get(`${BaseURL}random.php`);
};

// Getting cocktail details by id
export const filterById = (id) => {
  return axios.get(`${BaseURL}lookup.php?i=${id}`);
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
