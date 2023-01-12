import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Carregar from '../pages/Carregar';

class Header extends React.Component {
  state = {
    id: {},
    carregando: true,
  };

  componentDidMount() {
    this.setState(
      { carregando: true },
      async () => {
        const request = await getUser();
        this.setState({
          id: request,
          carregando: false,
        });
      },
    );
  }

  render() {
    const { carregando, id } = this.state;

    return (
      <header data-testid="header-component">

        <ul>
          <li><Link data-testid="link-to-search" to="/search">Search</Link></li>
          <li><Link data-testid="link-to-favorites" to="/favorites">Favorites</Link></li>
          <li><Link data-testid="link-to-profile" to="/profile">Profile</Link></li>
        </ul>

        <div data-testid="header-user-name">{id.name }</div>

        <h1>{carregando && <Carregar />}</h1>
      </header>
    );
  }
}

export default Header;
