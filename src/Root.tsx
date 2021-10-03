import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthEmailContainer from 'User/Container/AuthEmailContainer';
import LoginContainer from 'User/Container/LoginContainer';
import SignUpContainer from 'User/Container/SignUpContainer';
import AddUserInfoContainer from 'User/Container/AddUserInfoContainer';
import Main from './Main';

const Root = () => (
  <Switch>
    <Route path="/login" component={LoginContainer} exact />
    <Route path="/authemail" component={AuthEmailContainer} exact />
    <Route path="/signup" component={SignUpContainer} exact />
    <Route path="/adduserinfo" component={AddUserInfoContainer} exact />
    <Route component={Main} />
  </Switch>
);

export default Root;
