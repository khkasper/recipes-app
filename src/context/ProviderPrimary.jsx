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
} from '../services/NoMagicStuff';

function ProviderPrimary({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginDisabled, setLoginDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('');
  const [fetchResponse, setFetchResponse] = useState(null);
  const [meals, setMeals] = useState(null);
  const [drinks, setDrinks] = useState(null);
  const [mealsArray, setMealsArray] = useState(false);
  const [drinksArray, setDrinksArray] = useState(false);
  const [catList, setCatList] = useState([]);
  const [mealsCatList, setMealsCatList] = useState([]);
  const [drinksCatList, setDrinksCatList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    async function getDrinksResults() {
      const catName = 'drinks';
      const response = await fetch(API_DRINK_ALL);
      const result = await response.json();
      console.log(result);
      setDrinks(result.drinks.slice(0, TWELVE));
      const categories = await fetch(`${CAT_DRINK}`);
      const categoriesList = await categories.json();
      console.log(categoriesList, catName);
      setDrinksCatList(categoriesList.drinks.slice(0, FIVE));
      setDrinksArray(true);
    }
    async function getMealsResults() {
      const catName = 'meals';
      const response = await fetch(API_FOOD_ALL);
      const result = await response.json();
      console.log(result);
      setMeals(result.meals.slice(0, TWELVE));
      const categories = await fetch(`${CAT_FOOD}`);
      const categoriesList = await categories.json();
      console.log(categoriesList, catName);
      setMealsCatList(categoriesList.meals.slice(0, FIVE));
      setMealsArray(true);
    }
    getDrinksResults();
    getMealsResults();
  }, []);

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
