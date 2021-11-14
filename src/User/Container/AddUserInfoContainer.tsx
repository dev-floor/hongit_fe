import { signupAPI } from 'api/api';
import { SignUpApi } from 'api/ApiProps';
import React from 'react';
import AddUserInfo from '../Presentational/AddUserInfo';

const AddUserInfoContainer = () => {
  const onRegisterUser = async (newUser: SignUpApi) => {
    signupAPI.registerNewUser(newUser);
  };

  return <AddUserInfo onRegisterUser={onRegisterUser} />;
};

export default AddUserInfoContainer;
