import React from 'react';

import SignIn from '../Presentational/SignIn';

const SignInContainer = () => {
  // 아이디 input 에 아웃포커싱되면 동작.
  const validCheckID = () => {};

  // 하단 함수는 닉네임 중복검사 안한다면 제거 부탁드립니다 🎈
  const validCheckNickName = () => {};

  const registerUser = (/* User 객체 */) => {
    // user 객체 POST(?) 로 등록.
  };

  return (
    <SignIn
    /* validCheckID = {validCheckID}
       validCheckNickName = {validCheckNickName}
    registerUser = {registerUser} */
    />
  );
};

export default SignInContainer;
