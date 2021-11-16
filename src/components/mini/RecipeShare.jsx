import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../../images/shareIcon.svg';
import { CURRENT_PAGE } from '../../services/NoMagicStuff';

// https://stackoverflow.com/questions/39501289/in-reactjs-how-to-copy-text-to-clipboard
const RecipeShare = ({ cat, id, i }) => {
  const [copySuccess, setCopySuccess] = useState('');
  const [copyClass, setCopyClass] = useState('copy-fail');
  const initialLink = window.location;
  const currentPage = CURRENT_PAGE();
  let linkCopy = (initialLink.toString().replace('/in-progress', ''));
  let datatestid = 'share-btn';
  if ((currentPage === 'receitas-favoritas') || (currentPage === 'receitas-feitas')) {
    datatestid = `${i}-horizontal-share-btn`;
    linkCopy = linkCopy.replace(currentPage, `${cat}/${id}`);
  }

  const copyToClipBoard = async () => {
    try {
      await window.navigator.clipboard.writeText(linkCopy);
      setCopySuccess('Link copiado!');
      setCopyClass('copy-ok');
    } catch (err) {
      setCopySuccess('Puxa, não consegui copiar...');
      setCopyClass('copy-fail');
    }
  };

  return (
    <button
      type="button"
      onClick={ () => copyToClipBoard() }
      className="share-button"
    >
      <span className={ copyClass }>
        { copySuccess }
      </span>
      <img
        src={ shareIcon }
        alt="share"
        data-testid={ datatestid }
        className={ `share-button-img ${copyClass}` }
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
