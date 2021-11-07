import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ContextPrimary from './ContextPrimary';

function ProviderPrimary({ children }) {
  const [stateA, setStateA] = useState('A'); // lembrar de setar estados

  const contextValue = {
    stateA,
    setStateA,
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
