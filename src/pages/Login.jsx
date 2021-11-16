import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import ContextPrimary from '../context/ContextPrimary';
import { setLCUser, setLCMealsToken, setLCCocktailsToken } from '../localStorage/initial';

export default function Login() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    loginDisabled,
    setLoginDisabled,
    setCurrentPage,
  } = useContext(ContextPrimary);

  const REGEX_EMAIL = /\S+@\S+\.\S+/;
  const MIN_PWD = 6;
  const history = useHistory();

  const loginValidation = () => {
    let setDisabled = false;
    setDisabled = !(REGEX_EMAIL.test(email) && password.length >= MIN_PWD);
    setLoginDisabled(setDisabled);
  };

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'email-input') {
      setEmail(value);
    }
    if (name === 'password-input') {
      setPassword(value);
    }
    loginValidation();
  };

  const routeChange = () => {
    const path = '/comidas';
    history.push(path);
  };

  const handleSubmit = () => {
    setLCUser(email);
    setLCMealsToken();
    setLCCocktailsToken();
    routeChange();
    setCurrentPage('comidas');
  };

  return (
    <div>
      <p className="mt-5">Preencha seus dados para efetuar login</p>
      <label htmlFor="email-input" className="form-label ah-input">
        E-mail
        <input
          type="text"
          id="email-input"
          name="email-input"
          data-testid="email-input"
          placeholder="Digite seu melhor e-mail"
          onChange={ handleChange }
          className="form-control"
        />
      </label>
      <label htmlFor="password-input" className="form-label ah-input">
        Senha
        <input
          type="password"
          id="password-input"
          name="password-input"
          data-testid="password-input"
          placeholder="Digite sua senha"
          onChange={ handleChange }
          className="form-control"
        />
      </label>
      <br />
      <p className="text-center">
        <button
          data-testid="login-submit-btn"
          type="button"
          disabled={ loginDisabled }
          onClick={ handleSubmit }
          className="btn-login"
        >
          Entrar
        </button>
      </p>
    </div>
  );
}
