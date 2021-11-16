import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import RecipeDoneCard from '../components/mini/RecipeDoneCard';

export default function ReceitasFeitas() {
  const [doneRecipes, setDoneRecipes] = useState();
  const [filterDone, setFilterDone] = useState('All');

  const handleFilter = (value) => {
    switch (value) {
    case 'comida':
      setFilterDone('comida');
      break;
    case 'bebida':
      setFilterDone('bebida');
      break;
    default:
      setFilterDone('All');
      break;
    }
  };

  useEffect(() => {
    const getMyLocalStorage = (JSON.parse(localStorage.getItem('doneRecipes')));
    console.log(getMyLocalStorage);
    if (getMyLocalStorage !== null) {
      if (filterDone === 'All') {
        setDoneRecipes(getMyLocalStorage);
        localStorage.setItem('doneFilteredRecipes', getMyLocalStorage);
      } else {
        setDoneRecipes((getMyLocalStorage)
          .filter((recipe) => recipe.type === filterDone));
        localStorage.setItem('doneFilteredRecipes',
          (getMyLocalStorage)
            .filter((recipe) => recipe.type === filterDone));
      }
    }
  }, [filterDone, setDoneRecipes]);

  return (
    <div>
      <Header headerTitle="Receitas Feitas" showSearchBar={ false } />
      <div className="category-bar">
        <button
          type="button"
          data-testid="filter-by-all-btn"
          value="All"
          onClick={ () => { handleFilter('All'); } }
          className="filter-recipes-button"
        >
          All
        </button>
        <button
          type="button"
          data-testid="filter-by-food-btn"
          value="comida"
          onClick={ () => { handleFilter('comida'); } }
          className="filter-recipes-button"
        >
          Comidas
        </button>

        <button
          type="button"
          data-testid="filter-by-drink-btn"
          value="bebida"
          onClick={ () => { handleFilter('bebida'); } }
          className="filter-recipes-button"
        >
          Bebidas
        </button>
      </div>
      <RecipeDoneCard
        recipes={ doneRecipes }
      />
    </div>
  );
}
