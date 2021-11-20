import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { DRINK_RANDOM } from '../services/NoMagicStuff';

export default function ExplorarBebidas() {
  const HISTORY = useHistory();
  const fetchApiRandomDrinks = async () => {
    const response = await fetch(DRINK_RANDOM);
    const request = await response.json();
    const idRandom = request.drinks[0].idDrink;
    HISTORY.push(`/bebidas/${idRandom}`);
  };

  return (
    <>
      <Header headerTitle="Explorar Bebidas" showSearchBar={ false } />
      <Link to="/explorar/bebidas/ingredientes">
        <button
          type="button"
          data-testid="explore-by-ingredient"
          className="button-explore"
        >
          Por Ingredientes
        </button>
      </Link>
      <button
        type="button"
        data-testid="explore-surprise"
        onClick={ fetchApiRandomDrinks }
        className="button-explore"
      >
        Me Surpreenda!
      </button>
      <Footer />
    </>
  );
}
