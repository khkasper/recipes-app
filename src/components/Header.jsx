import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import HeaderSearchBar from './HeaderSearchBar';

const Header = (props) => {
  const { headerTitle, showSearchBar } = props;
  const [searchBar, setSearchBar] = useState(false);
  return (
    <div className="top-header">
      <Link
        to="/perfil"
      >
        <img
          data-testid="profile-top-btn"
          src={ profileIcon }
          alt="profileIcon"
        />
      </Link>
      <h1 data-testid="page-title">{ headerTitle }</h1>
      { showSearchBar && (
        <button
          type="button"
          data-testid="search-top-btn"
          onClick={ () => setSearchBar(!searchBar) }
          src={ searchIcon }
          alt="searchIcon"
        >
          <img
            src={ searchIcon }
            alt="searchIcon"
          />
        </button>) }
      { searchBar && <HeaderSearchBar /> }
    </div>
  );
};

Header.propTypes = {
  headerTitle: PropTypes.string.isRequired,
  showSearchBar: PropTypes.bool,
};

Header.defaultProps = { showSearchBar: true };

export default Header;
