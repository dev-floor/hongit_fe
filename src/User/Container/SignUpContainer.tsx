import { postArticleRequest } from 'api/api';
import React from 'react';
import SignUp from '../Presentational/SignUp';

const SignUpContainer = () => {
  // 아이디 input 에 아웃포커싱되면 동작.
  const onValidCheckID = () => {};

  // 닉네임 input 에 아웃포커싱되면 동작.
  const onValidCheckNickName = () => {};

  // 학번 input 에 아웃포커싱되면 동작.
  const onValidCheckClassOf = () => {};

  // 인증한 메일을 불러오는 api (?)

  // 최종 회원가입 버튼
  const onRegisterUser = async (/* User 객체 */) => {
    // const response = await postRequest
  };

  return (
    <SignUp
    /* onValidCheckID = {onValidCheckID}
       onValidCheckNickName = {onValidCheckNickName}
       onValidCheckClassOf = {onValidCheckClassOf}
       onRegisterUser = {onRegisterUser} */
    />
  );
};

export default SignUpContainer;
