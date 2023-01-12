import React from 'react';
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
        <div data-testid="header-user-name">{id.name }</div>
        <h3>{carregando && <Carregar />}</h3>
      </header>
    );
  }
}

export default Header;
