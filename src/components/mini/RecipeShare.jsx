import React, { useState } from 'react';
import shareIcon from '../../images/shareIcon.svg';

// https://stackoverflow.com/questions/39501289/in-reactjs-how-to-copy-text-to-clipboard
const RecipeShare = () => {
  const [copySuccess, setCopySuccess] = useState('');
  const initialLink = window.location;
  const linkCopy = (initialLink.toString().replace('/in-progress', ''));

  const copyToClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(linkCopy);
      setCopySuccess('Link copiado!');
    } catch (err) {
      setCopySuccess('Puxa, não consegui copiar...');
    }
  };

  return (
    <button
      data-testid="share-btn"
      type="button"
      onClick={ () => copyToClipBoard() }
    >
      { copySuccess }
      <img src={ shareIcon } alt="share" />
    </button>
  );
};

export default RecipeShare;
