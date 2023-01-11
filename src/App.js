import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';

class App extends React.Component {
  state = {
    nome: '',
    disabled: true,
  };

  handleChangeButton = ({ target: { value } }) => {
    this.setState({ nome: value }, this.handleValidation);
  };

  handleValidation = () => {
    const { nome } = this.state;
    const tamanhoMin = nome.length > 2;
    this.setState({ disabled: !tamanhoMin });
  };

  render() {
    const { nome, disabled } = this.state;
    return (
      <BrowserRouter>
        <Route
          exact
          path="/"
          render={ (props) => (
            <Login
              { ...props }
              handleChange={ this.handleChangeButton }
              value={ nome }
              buttonDisabled={ disabled }
            />
          ) }
        />
        <Route path="/search" component={ Search } />
        <Route path="/album/:id" component={ Album } />
        <Route path="/favorites" component={ Favorites } />
        <Route path="/profile" component={ Profile } />
        <Route path="/profile/edit" component={ ProfileEdit } />
        <Route component={ NotFound } />
      </BrowserRouter>
    );
  }
}

// iniciando
export default App;
