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

  return (
    <SignUp
    /* onValidCheckID = {onValidCheckID}
       onValidCheckNickName = {onValidCheckNickName}
       onValidCheckClassOf = {onValidCheckClassOf} */
    />
  );
};

export default SignUpContainer;
