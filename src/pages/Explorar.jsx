import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Explorar() {
  return (
    <div>
      <Header headerTitle="Explorar" showSearchBar={ false } />
      <div className="button-explore-div">
        <Link to="/explorar/comidas">
          <button
            data-testid="explore-food"
            type="button"
            className="button-explore"

          >
            Explorar Comidas
          </button>
        </Link>
        <Link to="/explorar/bebidas">
          <button
            data-testid="explore-drinks"
            type="button"
            className="button-explore"
          >
            Explorar Bebidas
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
