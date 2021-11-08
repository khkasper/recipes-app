import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Explorar() {
  return (
    <div>
      <Header headerTitle="Explorar" showSearchBar={ false } />
      <Link to="/comidas">
        <button type="button">
          Explorar Comidas
        </button>
      </Link>
      <Link to="/bebidas">
        <button type="button">
          Explorar Bebidas
        </button>
      </Link>
      <Footer />
    </div>
  );
}
