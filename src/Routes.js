import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Comidas from './pages/Comidas';
import Bebidas from './pages/Bebidas';
import ComidasDetalhes from './pages/ComidasDetalhes';
import BebidasDetalhes from './pages/BebidasDetalhes';
import Explorar from './pages/Explorar';
import EmProgressoComidas from './pages/EmProgressoComidas';
import EmProgressoBebidas from './pages/EmProgressoBebidas';
import ExplorarBebidas from './pages/ExplorarBebidas';
import ExplorarComidas from './pages/ExplorarComidas';
import ExplorarBebidasIngredientes from './pages/ExplorarBebidasIngredientes';
import ExplorarComidasIngredientes from './pages/ExplorarComidasIngredientes';
import ExplorarComidasLocal from './pages/ExplorarComidasLocal';
import Perfil from './pages/Perfil';
import ReceitasFavoritas from './pages/ReceitasFavoritas';
import ReceitasFeitas from './pages/ReceitasFeitas';
import NotFound from './pages/NotFound';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/comidas" component={ Comidas } />
        <Route exact path="/bebidas" component={ Bebidas } />
        <Route exact path="/comidas/:id" component={ ComidasDetalhes } />
        <Route exact path="/bebidas/:id" component={ BebidasDetalhes } />
        <Route exact path="/comidas/:id/in-progress" component={ EmProgressoComidas } />
        <Route exact path="/bebidas/:id/in-progress" component={ EmProgressoBebidas } />
        <Route exact path="/explorar" component={ Explorar } />
        <Route exact path="/explorar/comidas" component={ ExplorarComidas } />
        <Route exact path="/explorar/bebidas" component={ ExplorarBebidas } />
        <Route
          exact
          path="/explorar/comidas/ingredientes"
          component={ ExplorarComidasIngredientes }
        />
        <Route
          exact
          path="/explorar/bebidas/ingredientes"
          component={ ExplorarBebidasIngredientes }
        />
        <Route exact path="/explorar/comidas/area" component={ ExplorarComidasLocal } />
        <Route exact path="/perfil" component={ Perfil } />
        <Route exact path="/receitas-feitas" component={ ReceitasFeitas } />
        <Route exact path="/receitas-favoritas" component={ ReceitasFavoritas } />
        <Route path="/" component={ Login } />
        <Route path="" component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}
