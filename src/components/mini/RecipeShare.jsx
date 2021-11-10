import React, { useState } from 'react';
import shareIcon from '../../images/shareIcon.svg';

// https://stackoverflow.com/questions/39501289/in-reactjs-how-to-copy-text-to-clipboard
const RecipeShare = () => {
  const [copySuccess, setCopySuccess] = useState('');
  const copyToClipBoard = async (copyMe) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess('Link copiado!');
    } catch (err) {
      setCopySuccess('Puxa, não consegui copiar...');
    }
  };

  return (
    <button
      data-testid="share-btn"
      type="button"
      onClick={ () => copyToClipBoard(window.location) }
    >
      { copySuccess }
      <img src={ shareIcon } alt="share" />
    </button>
  );
};

export default RecipeShare;
