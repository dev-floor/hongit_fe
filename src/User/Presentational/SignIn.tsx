import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Segment, Select } from 'semantic-ui-react';

import 'css/SignIn.css';

const SignIn = (/* {}: 새로운 타입 */) => {
  const mailOptions = [
    { key: 'g', text: '@g.hongik.ac.kr', value: '@g.hongik.ac.kr' },
    { key: 'mail', text: '@mail.hongik.ac.kr', value: '@mail.hongik.ac.kr' },
  ];

  const stuOptions = [
    { key: 'senior', text: '졸업생', value: '졸업생' },
    { key: 'junior', text: '재학생', value: '재학생' },
  ];

  const [initialPwd, setInitialPwd] = useState<string>('');
  // const [pwdInputStart, setPwdInputState] = useState<boolean>(false);
  // const [pwdInputEnd, setPwdInputEndState] = useState<boolean>(false);
  const [checkPwd, setCheckPwd] = useState<string>('');
  const [chkPwdInputStart, setChkPwdState] = useState<boolean>(false);
  const [chkPwdInputEnd, setChkPwdEndState] = useState<boolean>(false);

  const [id, setId] = useState<string>('');
  const [pwd, setPwd] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [code, setCode] = useState<string>('');

  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header color="teal" as="h2" textAlign="center">
          회원가입
        </Header>
        <Form size="large">
          <Segment stacked>
            {id === '' ? (
              // 아이디 입력하기 전 초기 상태
              <div className="input-icons">
                <input
                  className="input-field"
                  type="text"
                  placeholder="아이디"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setId(e.target.value);
                  }}
                  onBlur={() => {
                    /* Api Call 날려야 함 */
                    console.log('mouse is out');
                  }}
                />
                <i className="check icon" style={{ color: 'lightgrey' }} />
              </div>
            ) : (
              // 사용가능한 아이디일 경우
              <div className="input-icons">
                <input
                  className="input-field"
                  type="text"
                  placeholder="아이디"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setId(e.target.value);
                  }}
                  onBlur={() => {
                    /* Api Call 날려야 함 */
                    console.log('mouse is out');
                  }}
                />
                <i className="check icon" style={{ color: 'teal' }} />
              </div>
            )}
            {id === '' ? (
              // 아이디 중복 체크 api call 결과가 <중복 없음> 일 경우
              <h6> </h6>
            ) : (
              // 아이디 중복 체크 api call 결과가 <중복 존재> 일 경우
              <h6 className="error-message">이미 사용중인 아이디입니다 🤔</h6>
            )}
            <div className="input-icons">
              <input
                className="input-field"
                placeholder="비밀번호"
                type="password"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  // setPwdInputState(true);
                  setInitialPwd(e.target.value);
                  setPwd(e.target.value);
                }}
              />
              <i className="check icon" style={{ color: 'lightgrey' }} />
            </div>
            {pwd.length < 6 || pwd.length > 16 ? (
              // 비밀번호 자릿수 조건을 만족하지 않는 경우
              <h6 className="error-message">
                비밀번호는 6자리 이상 15자리 이하여야 합니다 🤔
              </h6>
            ) : (
              // 비밀번호 자릿수 조건을 만족하는 경우
              <h6> </h6>
            )}
            {/* {pwdInputStart
                ? (initialPwd.length < 6 || initialPwd.length > 16) && (
                    <h6 className="error-message">
                      비밀번호는 6자리 이상 15자리 이하여야 합니다 🤔
                    </h6>
                  )
                : ''}
              {pwdInputEnd
                ? (initialPwd.length < 6 || initialPwd.length > 16) && (
                    <h6 className="error-message">
                      비밀번호는 6자리 이상 15자리 이하여야 합니다 🤔
                    </h6>
                  )
                : ''} */}
            <input
              placeholder="비밀번호 확인"
              type="password"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setChkPwdState(true);
                setCheckPwd(e.target.value);
              }}
              onBlur={() => {
                setChkPwdState(false);
                setChkPwdEndState(true);
              }}
            />
            {initialPwd === checkPwd && checkPwd.length > 0
              ? chkPwdInputStart && (
                  <h6 className="success-message">일치합니다 😃</h6>
                )
              : chkPwdInputStart && (
                  <h6 className="error-message">비밀번호가 같지 않습니다 🤔</h6>
                )}
            {chkPwdInputEnd && initialPwd !== checkPwd ? (
              <h6 className="error-message">비밀번호가 같지 않습니다 🤔</h6>
            ) : (
              <h6> </h6>
            )}
            <input
              placeholder="닉네임"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setNickname(e.target.value);
              }}
              onBlur={() => {
                /* Api Call 날려야 함 */
                console.log('mouse is out');
              }}
            />
            {nickname === '' ? (
              <h6> </h6>
            ) : (
              <h6 className="error-message">이미 사용중인 닉네임입니다 🤔</h6>
            )}
            <Form.Input fluid type="text" placeholder="학번" action>
              <input />
              <Select options={stuOptions} defaultValue="재학생" />
            </Form.Input>
            <Form.Input fluid type="text" placeholder="학교메일" action>
              <input />
              <Select options={mailOptions} defaultValue="@g.hongik.ac.kr" />
              <Button type="submit" color="teal">
                전송하기
              </Button>
            </Form.Input>
            {code === '' ? (
              <Form.Input
                icon="check"
                fluid
                placeholder="인증번호"
                style={{ color: 'grey' }}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setCode(e.target.value);
                }}
              />
            ) : (
              <Form.Input
                icon="check"
                fluid
                placeholder="인증번호"
                style={{ color: 'teal' }}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setCode(e.target.value);
                }}
              />
            )}
            {initialPwd === checkPwd &&
            initialPwd.length >= 6 &&
            initialPwd.length <= 15 ? (
              <Button color="teal" fluid size="large">
                회원가입
              </Button>
            ) : (
              <Button color="teal" fluid size="large" disabled>
                회원가입
              </Button>
            )}
          </Segment>
          <Link to="/" className="return-home">
            <span>
              이미 가입했어요!
              <br />
              홈으로
            </span>
          </Link>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default SignIn;
