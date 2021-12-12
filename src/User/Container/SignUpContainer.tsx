import React from 'react';
import { signupAPI } from 'api/api';
import { SignUpApi, SignUpApiPartial } from 'api/ApiProps';
import SignUp from '../Presentational/SignUp';

const SignUpContainer = () => {
  // 아이디 input 에 아웃포커싱되면 동작.
  const onValidCheckUsername = async(username: string) => {
    console.log("onValidCheckUsername 함수 수행했다! ", username)
    const response = await signupAPI.getByUsername(username);
    console.log("onValidCheck 함수 결과", response)
    return response;
  };

  // 닉네임 input 에 아웃포커싱되면 동작.
  const onValidCheckNickName = async () => {
    const response = await signupAPI.getByNickname('lxxjn0');
    return response;
  };

  // 학번 input 에 아웃포커싱되면 동작.
  const onValidCheckClassOf = async () => {
    const response = await signupAPI.getByClassOf('B811123');
    return response;
  };

  const onRegisterUser = async (newUser: SignUpApi) => {
    signupAPI.registerNewUser(newUser);
  };

  return (
    <SignUp
      onValidCheckUsername={onValidCheckUsername}
      onValidCheckNickname={onValidCheckNickName}
      onValidCheckClassOf={onValidCheckClassOf}
      onRegisterUser={onRegisterUser}
    />
  );
};

export default SignUpContainer;
