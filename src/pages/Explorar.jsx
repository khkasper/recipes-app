import React from 'react';
import { Link } from 'react-router-dom';

export default function Explorar() {
  return (
    <div>
      <Link to="/comidas">
        <button type="button">
          Explorar Comidas
        </button>
      </Link>
      <Link to="/bebidas">
        <button type="button">
          Explorar Bebidas
        </button>
      </Link>
    </div>
  );
}
