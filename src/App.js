import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes';
import ProviderPrimary from './context/ProviderPrimary';

function App() {
  const [currentPage, setCurrentPage] = useState('login');
  return (
    <ProviderPrimary value={ { currentPage, setCurrentPage } }>
      <Routes />
    </ProviderPrimary>
  );
}

export default App;
