import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContextPrimary from '../context/ContextPrimary';
import {
  API_FOOD,
  API_DRINK,
  API_FOOD_ALL,
  API_DRINK_ALL,
  TWELVE,
  ALT_2,
} from '../services/NoMagicStuff';

let response;
let result;

const CategoryFilter = ({ list }) => {
  const PRIMARY = useContext(ContextPrimary);
  const { selectedCategory, setSelectedCategory, setIsLoading, setData, setError,
  } = useContext(ContextPrimary);

  async function handleAPI(category) {
    if (selectedCategory === category || category === 'all') {
      await setSelectedCategory(null);
      category = null;
    } else {
      await setSelectedCategory(category);
    }

    try {
      setError(null);
      setIsLoading(true);
      if (PRIMARY.currentPage === 'bebidas') {
        if (category !== null) {
          response = await fetch(`${API_DRINK}filter.php?c=${category}`);
        } else {
          response = await fetch(API_DRINK_ALL);
        }
        result = await response.json();
        PRIMARY.setDrinks(result.drinks.slice(0, TWELVE));
      } else {
        if (category !== null) {
          response = await fetch(`${API_FOOD}filter.php?c=${category}`);
        } else {
          response = await fetch(API_FOOD_ALL);
        }
        result = await response.json();
        PRIMARY.setMeals(result.meals.slice(0, TWELVE));
        setData(result);
        PRIMARY.setFetchResponse(result);
        setIsLoading(false);
      }
    } catch (erro) {
      result = null;
      global.alert(ALT_2);
      setError(erro.message);
    }
  }
  return (
    <div className="category-bar">
      {
        list.map((item, index) => (
          <button
            data-testid={ `${item.strCategory}-category-filter` }
            key={ index }
            type="button"
            value={ item.strCategory }
            onClick={ (e) => handleAPI(e.target.value) }
            className="category-button"
          >
            { item.strCategory }
          </button>
        ))
      }
      <button
        data-testid="All-category-filter"
        type="button"
        value="all"
        onClick={ () => handleAPI('all') }
        className="category-button"
      >
        Todos
      </button>
    </div>
  );
};

CategoryFilter.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CategoryFilter;
