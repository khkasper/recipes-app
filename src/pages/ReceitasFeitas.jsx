import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import RecipeDoneCard from '../components/mini/RecipeDoneCard';

// const filterRecipe = (recipe, typ) => {
//   const list = Object.values(recipe);
//   if ((list.includes(typ)) || (typ === 'All')) return true;
//   return false;
// };

export default function ReceitasFeitas() {
  // const { location } = useHistory();
  const [doneRecipes, setDoneRecipes] = useState(null);
  const [filterDone, setFilterDone] = useState('All');
  const [local, setLocal] = useState(null);

  useEffect(() => {
    const getMyLocalStorage = JSON.parse(localStorage.getItem('doneRecipes')) || [];
    if (getMyLocalStorage !== null) {
      const doneR = JSON.parse(localStorage.doneRecipes.doneRec);
      setDoneRecipes((doneR));
    }
  }, [setDoneRecipes]);

  useEffect(() => {
    if (local) {
      console.log(doneRecipes);
      if (filterDone === 'All') {
        setDoneRecipes(JSON.parse(localStorage.doneRecipes));
      } else {
        setDoneRecipes(JSON.parse(localStorage.doneRecipes)
          .filterDone((recipe) => recipe.type === filterDone));
      }
    }
  }, [local, filterDone, doneRecipes, setFilterDone, setLocal]);

  return (
    <div>
      <Header headerTitle="Receitas Feitas" showSearchBar={ false } />
      <div>
        <button
          type="button"
          data-testid="filter-by-all-btn"
          value="All"
          // onClick={ (e) => { filterRecipe(e.target.value); } }
        >
          All
        </button>
        <button
          type="button"
          data-testid="filter-by-food-btn"
          value="comida"
          // onClick={ (e) => { filterRecipe(e.target.value); } }
        >
          Comidas
        </button>

        <button
          type="button"
          data-testid="filter-by-drink-btn"
          value="bebida"
          // onClick={ (e) => { filterRecipe(e.target.value); } }
        >
          Bebidas
        </button>
      </div>
      <RecipeDoneCard recipes={ doneRecipes } />
    </div>
  );
}
