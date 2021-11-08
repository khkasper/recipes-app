import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ContextPrimary from './ContextPrimary';

function ProviderPrimary({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginDisabled, setLoginDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('');
  const [fetchResponse, setFetchResponse] = useState(null);
  const [meals, setMeals] = useState(null);
  const [drinks, setDrinks] = useState(null);
  const [isArray, setIsArray] = useState(false);

  const contextValue = {
    email,
    setEmail,
    password,
    setPassword,
    loginDisabled,
    setLoginDisabled,
    isLoading,
    setIsLoading,
    currentPage,
    setCurrentPage,
    fetchResponse,
    setFetchResponse,
    meals,
    setMeals,
    drinks,
    setDrinks,
    isArray,
    setIsArray,
  };

  return (
    <ContextPrimary.Provider value={ contextValue }>
      { children }
    </ContextPrimary.Provider>
  );
}

const { oneOfType, arrayOf, node } = PropTypes;

ProviderPrimary.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default ProviderPrimary;
