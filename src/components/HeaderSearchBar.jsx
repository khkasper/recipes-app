import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ContextPrimary from '../context/ContextPrimary';
import {
  MAX_SEARCH_LENGTH_FL,
  FIRST_LETTER,
  INGREDIENTS,
  NAME,
  API_FOOD,
  API_DRINK,
  TWELVE,
  ALT_1,
  ALT_2,
} from '../services/NoMagicStuff';

export default function HeaderSearchBar() {
  const PRIMARY = useContext(ContextPrimary);
  const [searchInputText, setSearchInputText] = useState('');
  const [searchInputOption, setSearchInputOption] = useState('name');
  const [isLoading, setIsLoading] = useState(null);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const { setDrinksArray, setMealsArray } = useContext(ContextPrimary);
  const HISTORY = useHistory();
  console.log(isLoading && data && error);

  let response;
  let result;

  const handleAPI = async (ops, mtd) => {
    try {
      setError(null);
      setIsLoading(true);
      if (PRIMARY.currentPage === 'bebidas') {
        response = await fetch(`${API_DRINK}${mtd}.php?${ops}=${searchInputText}`);
        result = await response.json();
        PRIMARY.setDrinks(result.drinks.slice(0, TWELVE));

        if (result.drinks.length > 1) {
          setDrinksArray(true);
        } else {
          const { idDrink } = result.drinks[0];
          HISTORY.push(`/bebidas/${idDrink}`);
        }
      } else {
        response = await fetch(`${API_FOOD}${mtd}.php?${ops}=${searchInputText}`);
        result = await response.json();
        PRIMARY.setMeals(result.meals.slice(0, TWELVE));
        if (result.meals.length > 1) {
          setMealsArray(true);
        } else {
          const { idMeal } = result.meals[0];
          HISTORY.push(`/comidas/${idMeal}`);
        }
      }
      setData(result);
      PRIMARY.setFetchResponse(result);
      setIsLoading(false);
    } catch (erro) {
      result = null;
      global.alert(ALT_2);
      setError(erro.message);
    }
  };

  const handleClick = async (event) => {
    event.preventDefault();
    if (searchInputText.length > MAX_SEARCH_LENGTH_FL
        && searchInputOption === FIRST_LETTER) {
      global.alert(ALT_1);
    } else {
      switch (searchInputOption) {
      case INGREDIENTS:
        handleAPI('i', 'filter');
        break;
      case NAME:
        await handleAPI('s', 'search');
        break;
      case FIRST_LETTER:
        handleAPI('f', 'search');
        break;
      default:
        return null;
      }
    }
  };

  return (
    <form
      className="search-Bar"
      onSubmit={ (event) => handleClick(event) }
    >
      <label htmlFor="search-input" className="label-search-bar-text">
        Comece a digitar:
        <input
          type="text"
          id="search-input"
          data-testid="search-input"
          placeholder="Pesquise aqui uma receita sensacional"
          onChange={ (e) => setSearchInputText(e.target.value) }
        />
      </label>
      <br />
      <label htmlFor="ingredients" className="label-search-bar">
        Ingredientes
        <input
          type="radio"
          id="ingredients"
          value={ INGREDIENTS }
          data-testid="ingredient-search-radio"
          name="option"
          onClick={ () => setSearchInputOption(INGREDIENTS) }
        />
      </label>
      <label htmlFor="name" className="label-search-bar">
        Nome
        <input
          type="radio"
          id="name"
          value={ NAME }
          checked="true"
          data-testid="name-search-radio"
          name="option"
          onClick={ () => setSearchInputOption(NAME) }
        />
      </label>
      <label htmlFor="first-letter" className="label-search-bar">
        Primeira Letra
        <input
          type="radio"
          id="first-letter"
          value={ FIRST_LETTER }
          data-testid="first-letter-search-radio"
          name="option"
          onClick={ () => setSearchInputOption(FIRST_LETTER) }
        />
      </label>
      <br />
      <button
        type="submit"
        data-testid="exec-search-btn"
      >
        Buscar
      </button>
    </form>
  );
}
