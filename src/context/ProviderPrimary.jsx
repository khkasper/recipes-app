import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ContextPrimary from './ContextPrimary';
import { API_FOOD_ALL, API_DRINK_ALL, TWELVE } from '../services/NoMagicStuff';

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

  useEffect(() => {
    async function getDrinksResults() {
      const response = await fetch(API_DRINK_ALL);
      const result = await response.json();
      console.log(result);
      setDrinks(result.drinks.slice(0, TWELVE));
      setDrinksArray(true);
    }
    async function getMealsResults() {
      const response = await fetch(API_FOOD_ALL);
      const result = await response.json();
      console.log(result);
      setMeals(result.meals.slice(0, TWELVE));
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
