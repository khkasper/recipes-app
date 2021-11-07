import React from 'react';
import Input from '../components/Input';

export default function Login() {
  return (
    <div>
      <Input
        id="email-input"
        name="email-input"
        type="text"
        placeholder="Digite seu melhor e-mail"
        // value={ value }
        // onChange={ handleChange }
        labelText="E-mail"
      />
      <Input
        id="password-input"
        name="password-input"
        type="password"
        placeholder="Digite seu melhor e-mail"
        // value={ value }
        labelText="Senha"
      />
    </div>
  );
}

// * O input de email deve possuir o atributo `data-testid="email-input"`;
// * O input de senha deve possuir o atributo `data-testid="password-input"`;
// * O botão "Entrar" deve possuir o atributo `data-testid="login-submit-btn"`.

// <input
// type={ type }
// id={ id }
// name={ name }
// data-testid={ id }
// placeholder={ placeholder }
// value={ value }
// onChange={ onchange }
// />
