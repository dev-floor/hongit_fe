import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
  Select,
  Input,
} from 'semantic-ui-react';

import 'css/SignIn.css';

const SignUp = () => {
  const stuOptions = [
    { key: 'senior', text: '졸업생', value: '졸업생' },
    { key: 'junior', text: '재학생', value: '재학생' },
  ];

  const [username, setUsername] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [pwd, setPwd] = useState<string>('');
  const [checkPwd, setCheckPwd] = useState<string>('');
  const [classOf, setClassOf] = useState<string>('');
  // fix된 메일을 불러올 것이므로 수정 후 지워야함
  const [email, setEmail] = useState<string>('');

  const history = useHistory();
  const onClickNextStep = () => {
    history.push({
      pathname: '/adduserinfo',
      state: { username, nickname, pwd, checkPwd, classOf, email },
    });
  };

  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header color="teal" as="h2" textAlign="center">
          STEP 2
        </Header>
        <Form size="large">
          <Segment stacked>
            {username === '' ? (
              // 아이디 입력하기 전 초기 상태
              <Input
                className="input-field"
                type="text"
                placeholder="아이디"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setUsername(e.target.value);
                }}
                onBlur={() => {
                  /* Api Call 날려야 함 */
                  console.log('mouse is out');
                }}
                icon={<i className="default check icon" />}
              />
            ) : (
              // 사용가능한 아이디일 경우
              <Input
                className="input-field"
                type="text"
                placeholder="아이디"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setUsername(e.target.value);
                }}
                onBlur={() => {
                  /* Api Call 날려야 함 */
                  console.log('mouse is out');
                }}
                icon={<i className="on check icon" />}
              />
            )}
            {username === '' ? (
              // 아이디 중복 체크 api call 결과가 <중복 없음> 일 경우
              <h6> </h6>
            ) : (
              // 아이디 중복 체크 api call 결과가 <중복 존재> 일 경우
              <h6 className="error-message">이미 사용중인 아이디입니다 🤔</h6>
            )}
            {nickname === '' ? (
              <Input
                className="input-field"
                placeholder="닉네임"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setNickname(e.target.value);
                }}
                onBlur={() => {
                  /* Api Call 날려야 함 */
                  console.log('mouse is out');
                }}
                icon={<i className="default check icon" />}
              />
            ) : (
              <Input
                className="input-field"
                placeholder="닉네임"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setNickname(e.target.value);
                }}
                onBlur={() => {
                  /* Api Call 날려야 함 */
                  console.log('mouse is out');
                }}
                icon={<i className="on check icon" />}
              />
            )}
            {nickname === '' ? (
              <h6> </h6>
            ) : (
              <h6 className="error-message">이미 사용중인 닉네임입니다 🤔</h6>
            )}
            {pwd.length < 6 || pwd.length > 15 ? (
              // 비밀번호 자릿수 조건을 만족하지 않을 경우
              <Input
                className="input-field"
                placeholder="비밀번호"
                type="password"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setPwd(e.target.value);
                }}
                icon={<i className="default check icon" />}
              />
            ) : (
              // 비밀번호 자릿수 조건을 만족할 경우
              <Input
                className="input-field"
                placeholder="비밀번호"
                type="password"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setPwd(e.target.value);
                }}
                icon={<i className="on check icon" />}
              />
            )}
            {pwd.length < 6 || pwd.length > 15 ? (
              // 비밀번호 자릿수 조건을 만족하지 않을 경우
              <h6 className="error-message">
                비밀번호는 6자리 이상 15자리 이하여야 합니다 🤔
              </h6>
            ) : (
              // 비밀번호 자릿수 조건을 만족할 경우
              <h6> </h6>
            )}
            {checkPwd.length === 0 || pwd !== checkPwd ? (
              <Input
                className="input-field"
                placeholder="비밀번호 확인"
                type="password"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setCheckPwd(e.target.value);
                }}
                icon={<i className="default check icon" />}
              />
            ) : (
              <Input
                className="input-field"
                placeholder="비밀번호 확인"
                type="password"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setCheckPwd(e.target.value);
                }}
                icon={<i className="on check icon" />}
              />
            )}
            {pwd !== checkPwd ? (
              <h6 className="error-message">비밀번호가 같지 않습니다 🤔</h6>
            ) : (
              <h6> </h6>
            )}
            <Input
              fluid
              type="text"
              placeholder="학번"
              action
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setClassOf(e.target.value);
              }}
            >
              <input />
              <Select options={stuOptions} defaultValue="재학생" />
            </Input>
            {classOf === '' ? (
              <h6> </h6>
            ) : (
              <h6 className="error-message">이미 사용중인 학번입니다 🤔</h6>
            )}
            <Form.Input
              fluid
              type="text"
              placeholder="//인증된 메일 넣어두기//"
              icon={<i className="on check icon" />}
            />
            {username !== '' ? (
              <Button color="teal" fluid size="large" onClick={onClickNextStep}>
                다음 단계로
              </Button>
            ) : (
              <Button color="teal" fluid size="large" disabled>
                다음 단계로
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
          <br />
          <Link to="/adduserinfo" className="return-home">
            <span>프로필 추가하기 페이지로 가기</span>
          </Link>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default SignUp;
