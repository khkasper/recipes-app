import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import RecipeDoneCard from '../components/mini/RecipeDoneCard';

export default function ReceitasFeitas() {
  const [doneRecipes, setDoneRecipes] = useState(null);
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
      } else {
        // console.log(filterDone);
        setDoneRecipes((getMyLocalStorage)
          .filter((recipe) => recipe.type === filterDone));
      }
    }
  }, [filterDone, setDoneRecipes]);

  // useEffect(() => {
  //   // console.log(doneRecipes);
  //   const getMyLocalStorage = JSON.parse(localStorage.getItem('doneRecipes'));
  //   if (getMyLocalStorage !== null) {
  //     const doneR = JSON.parse(localStorage.doneRecipes);
  //     setDoneRecipes((doneR));
  //   }
  //   if (filterDone === 'All') {
  //     setDoneRecipes(JSON.parse(localStorage.doneRecipes));
  //   } else {
  //     console.log(filterDone);
  //     setDoneRecipes(JSON.parse(localStorage.doneRecipes)
  //       .filterDone((recipe) => recipe.type === filterDone));
  //   }
  // }, [filterDone, doneRecipes, setFilterDone]);

  return (
    <div>
      <Header headerTitle="Receitas Feitas" showSearchBar={ false } />
      <div>
        <button
          type="button"
          data-testid="filter-by-all-btn"
          value="All"
          onClick={ () => { handleFilter('All'); } }
        >
          All
        </button>
        <button
          type="button"
          data-testid="filter-by-food-btn"
          value="comida"
          onClick={ () => { handleFilter('comida'); } }
        >
          Comidas
        </button>

        <button
          type="button"
          data-testid="filter-by-drink-btn"
          value="bebida"
          onClick={ () => { handleFilter('bebida'); } }
        >
          Bebidas
        </button>
      </div>
      <RecipeDoneCard recipes={ doneRecipes } />
    </div>
  );
}
