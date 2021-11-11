import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../../images/shareIcon.svg';
import { CURRENT_PAGE } from '../../services/NoMagicStuff';

// https://stackoverflow.com/questions/39501289/in-reactjs-how-to-copy-text-to-clipboard
const RecipeShare = ({ cat, id, i }) => {
  const [copySuccess, setCopySuccess] = useState('');
  const initialLink = window.location;
  const currentPage = CURRENT_PAGE();
  let linkCopy = (initialLink.toString().replace('/in-progress', ''));
  let datatestid = 'share-btn';
  if (currentPage === ('receitas-favoritas' || 'receitas-feitas')) {
    datatestid = i.concat('-horizontal-share-btn');
    linkCopy = linkCopy.replace(currentPage, `${cat}/${id}`);
  }

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
      type="button"
      onClick={ () => copyToClipBoard() }
    >
      { copySuccess }
      <img
        src={ shareIcon }
        alt="share"
        data-testid={ datatestid }
      />
    </button>
  );
};

RecipeShare.propTypes = {
  cat: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  i: PropTypes.number.isRequired,
};

export default RecipeShare;
