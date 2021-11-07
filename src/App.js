import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes';
import ProviderPrimary from './context/ProviderPrimary';

function App() {
  return (
    <ProviderPrimary>
      <Routes />
    </ProviderPrimary>
  );
}

export default App;
