import React, { useState, useEffect } from 'react';
import Header from '../components/Header';

export default function ReceitasFeitas() {
  const [doneRecipes, setDoneRecipes] = useState(null);
  const [filterDone, setFilterDone] = useState('all');
  const [local, setLocal] = useState(null);
  useEffect(() => {
    if (localStorage.doneRecipes) {
      setLocal(JSON.parse(localStorage.doneRecipes));
    }
  }, []);

  useEffect(() => {
    if (local) {
      console.log(doneRecipes);
      if (filterDone === 'all') {
        setDoneRecipes(JSON.parse(localStorage.doneRecipes));
      } else {
        setDoneRecipes(JSON.parse(localStorage.doneRecipes)
          .filterDone((recipe) => recipe.type === filterDone));
      }
    }
  }, [local, filterDone, doneRecipes]);

  return (
    <div>
      <Header headerTitle="Receitas Feitas" showSearchBar={ false } />
      <button
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ () => { setFilterDone('all'); } }
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
        onClick={ () => { setFilterDone('comida'); } }
      >
        Comidas
      </button>

      <button
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ () => { setFilterDone('bebida'); } }
      >
        Bebidas
      </button>
    </div>
  );
}
