import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import ContextPrimary from '../context/ContextPrimary';

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
    const user = {
      email,
    };
    localStorage.setItem('mealsToken', '1');
    localStorage.setItem('cocktailsToken', '1');
    localStorage.setItem('user', JSON.stringify(user));
    routeChange();
    setCurrentPage('comidas');
  };

  return (
    <div>
      <label htmlFor="email-input" className="">
        <input
          type="text"
          id="email-input"
          name="email-input"
          data-testid="email-input"
          placeholder="Digite seu melhor e-mail"
          onChange={ handleChange }
        />
        E-mail
      </label>
      <label htmlFor="password-input" className="">
        <input
          type="password"
          id="password-input"
          name="password-input"
          data-testid="password-input"
          placeholder="Digite sua senha"
          onChange={ handleChange }
        />
        Senha
      </label>
      <button
        data-testid="login-submit-btn"
        type="button"
        disabled={ loginDisabled }
        onClick={ handleSubmit }
      >
        Entrar
      </button>
    </div>
  );
}
