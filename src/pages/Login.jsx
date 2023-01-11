import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Carregar from './Carregar';
import { createUser } from '../services/userAPI';
import './Login.css';

export default class Login extends Component {
  state = {
    carregando: false,
  };

  handleClick = () => {
    const { value, history } = this.props;
    this.setState(
      { carregando: true },
      async () => {
        await createUser({ name: value });

        this.setState(
          { carregando: false },
          () => {
            history.push('/search');
          },
        );
      },
    );
  };

  render() {
    const { carregando } = this.state;
    const { buttonDisabled, value, handleChange } = this.props;

    return (
      <div data-testid="page-login" id="centralizar">
        {carregando ? (<Carregar />) : (
          <form action="" className="login-container">
            <label htmlFor="login-name-input">
              <h2>Login: </h2>
              <input
                className="cute-input pink"
                data-testid="login-name-input"
                name="name"
                value={ value }
                onChange={ handleChange }
              />
            </label>
            <p />
            <button
              className="cute-button pink"
              type="button"
              data-testid="login-submit-button"
              disabled={ buttonDisabled }
              onClick={ this.handleClick }
            >
              Entrar
            </button>
          </form>
        )}
      </div>
    );
  }
}

Login.propTypes = {
  handleChange: PropTypes.func.isRequired,
  buttonDisabled: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  value: PropTypes.string.isRequired,
};
