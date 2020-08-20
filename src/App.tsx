import React, { ReactElement, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Header from './components/Header';

export default function App(): ReactElement {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
      </BrowserRouter>
    </Fragment>
  );
}
