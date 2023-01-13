import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

export default class Search extends Component {
  render() {
    const { buttonDisabled, value, handleChange } = this.props;
    return (
      <div data-testid="page-search">
        <Header />
        <form>
          <input
            type="text"
            data-testid="search-artist-input"
            name="nome"
            value={ value }
            onChange={ handleChange }
          />
          <button
            data-testid="search-artist-button"
            type="button"
            disabled={ buttonDisabled }
          >
            Pesquisar
          </button>
        </form>
      </div>
    );
  }
}

Search.propTypes = {
  handleChange: PropTypes.func.isRequired,
  buttonDisabled: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};