import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MicroFrontend from './MicroFrontend';
import './App.css';
import AppHeader from './AppHeader';

const { 
  REACT_APP_INAPP_HOST: inAppHost,
  REACT_APP_BROWSE_HOST: browseHost,
 } = process.env;

const InApp = ({ history }) => (
  <MicroFrontend history={history} host={inAppHost} name="InApp" />
);

const Browse = ({ history }) => (
  <MicroFrontend history={history} host={browseHost} name="Browse" />
);

class App extends Component {
  render() {
    return (
  <BrowserRouter>
      <React.Fragment>
        <AppHeader />
        <Switch>
          <Route exact path="/" component={InApp} />
          <Route exact path="/browse" component={Browse} />
        </Switch>
      </React.Fragment>
  </BrowserRouter>
    );
  }
}

export default App;
