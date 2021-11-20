import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ContextPrimary from './ContextPrimary';
import {
  API_FOOD_ALL,
  API_DRINK_ALL,
  TWELVE,
  FIVE,
  CAT_DRINK,
  CAT_FOOD,
  LIST_ALL_DRINKS_INGREDIENTS,
  LIST_ALL_MEALS_INGREDIENTS,
  AREA_MEALS,
} from '../services/NoMagicStuff';
import {
  setLCFavoritesRecipes,
  setLCMealsToken,
  setLCCocktailsToken,
  setLCFilter,
  setLCFavoritesRecipesFiltered,
  setLCDoneRecipesFiltered,
} from '../localStorage/initial';

function setAreaFilteredMeals(result, area) {
  let resp;
  if (area === 'All') { resp = (result.slice(0, TWELVE)); } else {
    resp = (result.filter((meal) => meal.strArea === area).slice(0, TWELVE));
  }
  return resp;
}

function ProviderPrimary({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginDisabled, setLoginDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('');
  const [fetchResponse, setFetchResponse] = useState(null);
  const [meals, setMeals] = useState(null);
  const [drinks, setDrinks] = useState(null);
  const [allMeals, setAllMeals] = useState(null);
  const [allDrinks, setAllDrinks] = useState(null);
  const [mealsArray, setMealsArray] = useState(false);
  const [drinksArray, setDrinksArray] = useState(false);
  const [catList, setCatList] = useState([]);
  const [areaList, setAreaList] = useState([]);
  const [mealsCatList, setMealsCatList] = useState([]);
  const [drinksCatList, setDrinksCatList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [recomendation, setRecomendation] = useState(null);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [ingredient, setIngredient] = useState([]);
  const [doneRecipe, setDoneRecipe] = useState([]);
  const [doneRecipes, setDoneRecipes] = useState([]);
  const [filterDone, setFilterDone] = useState('All');
  const [mealsIngredients, setMealsIngredients] = useState([]);
  const [drinksIngredients, setDrinksIngredients] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [selectedDrinkIngredient, setSelectedDrinkIngredient] = useState(null);
  const [selectedMealIngredient, setSelectedMealIngredient] = useState(null);
  const [drinksFilteredByIngredient, setDrinksFilteredByIngredient] = useState([]);
  const [mealsFilteredByIngredient, setMealsFilteredByIngredient] = useState([]);
  const [selectedArea, setSelectedArea] = useState('All');
  const [mealsFilteredByArea, setMealsFilteredByArea] = useState([]);

  useEffect(() => {
    async function getDrinksResults() {
      const response = await fetch(API_DRINK_ALL);
      const result = await response.json();
      setAllDrinks(result.drinks);
      setDrinks(result.drinks.slice(0, TWELVE));
      const categories = await fetch(`${CAT_DRINK}`);
      const categoriesList = await categories.json();
      setDrinksCatList(categoriesList.drinks.slice(0, FIVE));
      setDrinksArray(true);
      const ingredientsList = await fetch(LIST_ALL_DRINKS_INGREDIENTS);
      const resultIngredients = await ingredientsList.json();
      setDrinksIngredients(resultIngredients.drinks.slice(0, TWELVE));
    }
    async function getMealsResults() {
      const response = await fetch(API_FOOD_ALL);
      const result = await response.json();
      setAllMeals(result.meals);
      setMeals(result.meals.slice(0, TWELVE));
      const categories = await fetch(`${CAT_FOOD}`);
      const categoriesList = await categories.json();
      setMealsCatList(categoriesList.meals.slice(0, FIVE));
      setMealsArray(true);
      const filteredMeals = setAreaFilteredMeals(result.meals, selectedArea);
      setMealsFilteredByArea(filteredMeals);
      const ingredientsList = await fetch(LIST_ALL_MEALS_INGREDIENTS);
      const resultIngredients = await ingredientsList.json();
      setMealsIngredients(resultIngredients.meals.slice(0, TWELVE));
    }
    async function getAreaList() {
      const response = await fetch(AREA_MEALS);
      const result = await response.json();
      setAreaList(result.meals);
    }
    setIsLoading(true);
    getDrinksResults();
    getMealsResults();
    getAreaList();
    setLCFavoritesRecipes();
    setLCMealsToken();
    setLCCocktailsToken();
    setLCFilter();
    setLCFavoritesRecipesFiltered();
    setLCDoneRecipesFiltered();
    setIsLoading(false);
  }, [selectedArea, selectedDrinkIngredient]);

  const contextValue = {
    email,
    setEmail,
    password,
    setPassword,
    loginDisabled,
    setLoginDisabled,
    isLoading,
    setIsLoading,
    currentPage,
    setCurrentPage,
    fetchResponse,
    setFetchResponse,
    meals,
    setMeals,
    allMeals,
    setAllMeals,
    allDrinks,
    setAllDrinks,
    drinks,
    setDrinks,
    mealsArray,
    setMealsArray,
    drinksArray,
    setDrinksArray,
    catList,
    setCatList,
    mealsCatList,
    setMealsCatList,
    drinksCatList,
    setDrinksCatList,
    selectedCategory,
    setSelectedCategory,
    recomendation,
    setRecomendation,
    data,
    setData,
    ingredient,
    setIngredient,
    error,
    setError,
    doneRecipe,
    setDoneRecipe,
    doneRecipes,
    setDoneRecipes,
    filterDone,
    setFilterDone,
    mealsIngredients,
    setMealsIngredients,
    drinksIngredients,
    setDrinksIngredients,
    favorites,
    setFavorites,
    selectedDrinkIngredient,
    setSelectedDrinkIngredient,
    selectedMealIngredient,
    setSelectedMealIngredient,
    drinksFilteredByIngredient,
    setDrinksFilteredByIngredient,
    mealsFilteredByIngredient,
    setMealsFilteredByIngredient,
    areaList,
    setAreaList,
    selectedArea,
    setSelectedArea,
    mealsFilteredByArea,
    setMealsFilteredByArea,
  };

  return (
    <ContextPrimary.Provider value={ contextValue }>
      { children }
    </ContextPrimary.Provider>
  );
}

const { oneOfType, arrayOf, node } = PropTypes;

ProviderPrimary.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default ProviderPrimary;
