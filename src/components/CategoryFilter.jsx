import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ list }) => (
  <div>
    {
      list.map((item, index) => (
        <button
          data-testid={ `${item.strCategory}-category-filter` }
          key={ index }
          type="button"
        >
          { item.strCategory }
        </button>
      ))
    }
  </div>
);

CategoryFilter.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CategoryFilter;
