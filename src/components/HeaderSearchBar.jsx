import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ContextPrimary from '../context/ContextPrimary';
import {
  MAX_SEARCH_LENGTH_FL,
  FIRST_LETTER,
  INGREDIENTS,
  NAME,
  API_FOOD,
  API_DRINK,
} from '../services/NoMagicStuff';

export default function HeaderSearchBar() {
  const PRIMARY = useContext(ContextPrimary);
  const { currentPage } = useContext(ContextPrimary);
  const [searchInputText, setSearchInputText] = useState('');
  const [searchInputOption, setSearchInputOption] = useState('name');
  const [isLoading, setIsLoading] = useState(null);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const HISTORY = useHistory();
  console.log(isLoading && ' ' && error);

  const handleAPI = async (ops, mtd) => {
    let response;
    let result;
    try {
      setError(null);
      setIsLoading(true);
      console.log('page: ' && currentPage);
      if (PRIMARY.currentPage === 'bebidas') {
        response = await fetch(`${API_DRINK}${mtd}.php?${ops}=${searchInputText}`);
        result = await response.json();
      } else {
        response = await fetch(`${API_FOOD}${mtd}.php?${ops}=${searchInputText}`);
        result = await response.json();
      }
    } catch (erro) {
      result = null;
      setError(erro.message);
    } finally {
      setData(result);
      console.log(data);
      setIsLoading(false);
      PRIMARY.setFetchResponse(result);
      if (PRIMARY.currentPage === 'comidas') { PRIMARY.setMeals(result.meals); }
      if (PRIMARY.currentPage === 'bebidas') { PRIMARY.setDrinks(result.drinks); }
    }
  };

  useEffect(() => {
    if (PRIMARY.fetchResponse !== null) {
      switch (PRIMARY.currentPage) {
      case 'comidas':
        if (PRIMARY.fetchResponse.meals.length === MAX_SEARCH_LENGTH_FL) {
          const { idMeal } = PRIMARY.fetchResponse.meals[0];
          HISTORY.push(`/comidas/${idMeal}`);
        }
        break;
      case 'bebidas':
        if (PRIMARY.fetchResponse.drinks.length === MAX_SEARCH_LENGTH_FL) {
          const { idDrink } = PRIMARY.fetchResponse.drinks[0];
          HISTORY.push(`/bebidas/${idDrink}`);
        }
        break;
      default:
        break;
      }
    }
  }, [PRIMARY, HISTORY]);

  const handleClick = async (event) => {
    event.preventDefault();
    if (searchInputText.length > MAX_SEARCH_LENGTH_FL
        && searchInputOption === FIRST_LETTER) {
      global.alert('Sua busca deve conter somente 1 (um) caracter');
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
