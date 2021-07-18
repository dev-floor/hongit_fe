import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginContainer from 'User/Container/LoginContainer';
import SignInContainer from 'User/Container/SignInContainer';
import Main from './Main';

const Root = () => (
  <Switch>
    <Route path="/login" component={LoginContainer} exact />
    <Route path="/signin" component={SignInContainer} exact />
    <Route component={Main} />
  </Switch>
);

export default Root;
