import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FOOD_RANDOM } from '../services/NoMagicStuff';

export default function ExplorarComidas() {
  const HISTORY = useHistory();
  const fetchApiRandomFoods = async () => {
    const response = await fetch(FOOD_RANDOM);
    const request = await response.json();
    const idRandom = request.meals[0].idMeal;
    HISTORY.push(`/comidas/${idRandom}`);
  };

  return (
    <>
      <Header headerTitle="Explorar Comidas" showSearchBar={ false } />
      <Link to="/explorar/comidas/ingredientes">
        <button
          type="button"
          data-testid="explore-by-ingredient"
          className="button-explore"
        >
          Por Ingredientes
        </button>
      </Link>
      <Link to="/explorar/comidas/area">
        <button
          type="button"
          data-testid="explore-by-area"
          className="button-explore"
        >
          Por Local de Origem
        </button>
      </Link>
      <button
        type="button"
        data-testid="explore-surprise"
        onClick={ fetchApiRandomFoods }
        className="button-explore"
      >
        Me Surpreenda!
      </button>
      <Footer />
    </>
  );
}
