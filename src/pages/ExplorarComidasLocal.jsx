import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ContextPrimary from '../context/ContextPrimary';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ExplorarComidasLocal() {
  const {
    areaList,
    meals,
    mealsFilteredByArea,
    mealsArray,
    selectedArea,
    setSelectedArea,
    isLoading,
  } = useContext(ContextPrimary);

  const useList = selectedArea === 'All' ? meals : mealsFilteredByArea;

  return (
    <>
      <Header headerTitle="Explorar Origem" />
      <select
        data-testid="explore-by-area-dropdown"
        onChange={ ({ target }) => { setSelectedArea(target.value); } }
        value={ selectedArea }
        name="select-area"
        id="select-area"
        className="area-select"
      >
        <option
          value="All"
          data-testid="All-option"
        >
          All
        </option>
        {
          areaList && areaList.map((area, index) => (
            <option
              key={ index }
              data-testid={ `${area.strArea}-option` }
              value={ area.strArea }
            >
              { area.strArea }
            </option>
          ))
        }
      </select>
      { mealsArray && (
        <div className="recipe-list">
          {
            !isLoading && useList.map((item, index) => (
              <div
                data-testid={ `${index}-recipe-card` }
                key={ index }
                className="food-card-list"
              >
                <Link
                  to={ `/comidas/${item.idMeal}` }
                >
                  <img
                    data-testid={ `${index}-card-img` }
                    alt={ item.strMeal }
                    src={ item.strMealThumb }
                    className="food-card-img"
                  />
                  <span
                    data-testid={ `${index}-card-name` }
                    className="food-card-name"
                  >
                    { item.strMeal }
                  </span>
                  <span
                    className="food-card-area"
                  >
                    { item.strArea }
                  </span>
                </Link>
              </div>
            ))
          }
        </div>
      )}
      <Footer />
    </>
  );
}
