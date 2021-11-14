import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import RecipeFavoriteCard from '../components/mini/RecipeFavoriteCard';

export default function ReceitasFavoritas() {
  const [favoriteRecipes, setFavoriteRecipes] = useState();
  const [filterFavorites, setFilterFavorites] = useState('All');

  const handleFilter = (value) => {
    switch (value) {
    case 'comida':
      setFilterFavorites('comida');
      break;
    case 'bebida':
      setFilterFavorites('bebida');
      break;
    default:
      setFilterFavorites('All');
      break;
    }
  };

  useEffect(() => {
    const getMyLocalStorage = (JSON.parse(localStorage.getItem('favoriteRecipes')));
    if (getMyLocalStorage !== null) {
      if (filterFavorites === 'All') {
        setFavoriteRecipes(getMyLocalStorage);
        localStorage.setItem('favFilteredRecipes', getMyLocalStorage);
      } else {
        setFavoriteRecipes((getMyLocalStorage)
          .filter((recipe) => recipe.type === filterFavorites));
        localStorage.setItem('favFilteredRecipes',
          (getMyLocalStorage)
            .filter((recipe) => recipe.type === filterFavorites));
      }
    }
  }, [filterFavorites, setFavoriteRecipes]);

  return (
    <div>
      <Header headerTitle="Receitas Favoritas" showSearchBar={ false } />
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
      <RecipeFavoriteCard
        recipes={ favoriteRecipes }
      />
    </div>
  );
}
