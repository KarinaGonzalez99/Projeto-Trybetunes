import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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

  handleChangeButtonn = ({ target: { value } }) => {
    this.setState({ nome: value }, this.handleValidationn);
  };

  handleValidationn = () => {
    const { nome } = this.state;
    const tamanhoMin = nome.length > 1;
    this.setState({ disabled: !tamanhoMin });
  };

  render() {
    const { nome, disabled } = this.state;
    return (
      <BrowserRouter>
        <Switch>
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

          <Route
            path="/search"
            render={ (props) => (
              <Search
                { ...props }
                handleChange={ this.handleChangeButtonn }
                value={ nome }
                buttonDisabled={ disabled }
              />) }
          />

          <Route path="/album/:id" component={ Album } />
          <Route path="/favorites" component={ Favorites } />
          <Route exact path="/profile" component={ Profile } />
          <Route exact path="/profile/edit" component={ ProfileEdit } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </BrowserRouter>
    );
  }
}

// iniciando
export default App;
