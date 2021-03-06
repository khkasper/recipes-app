import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Perfil() {
  const emailUser = localStorage.getItem('user');
  const user = JSON.parse(emailUser);
  const HISTORY = useHistory();
  const clearLocalStorage = () => {
    localStorage.clear();
    const path = '/';
    HISTORY.push(path);
  };

  return (
    <>
      <Header headerTitle="Perfil" showSearchBar={ false } />
      {/* <h1 data-testid="page-title">Perfil</h1> */}
      <h2 data-testid="profile-email">
        {localStorage.getItem('user') === null ? '' : user.email }
      </h2>
      <Link to="/receitas-feitas">
        <button type="button" data-testid="profile-done-btn">Receitas Feitas</button>
      </Link>
      <Link to="/receitas-favoritas">
        <button
          type="button"
          data-testid="profile-favorite-btn"
        >
          Receitas Favoritas
        </button>
      </Link>
      <button
        type="button"
        data-testid="profile-logout-btn"
        onClick={ clearLocalStorage }
      >
        Sair
      </button>
      <Footer />
    </>
  );
}
