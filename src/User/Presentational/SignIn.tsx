import React, { useState, useEffect } from 'react';
import { isFullSize } from 'Atoms/atom';
import { useSetRecoilState } from 'recoil';
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
  Select,
  Label,
} from 'semantic-ui-react';

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
  const [pwdInputStart, setPwdInputState] = useState<boolean>(false);
  const [checkPwd, setCheckPwd] = useState<string>('');
  const [chkPwdInputStart, setChkPwdState] = useState<boolean>(false);

  // const [isFull, setFullSize] = useRecoilState(isFullSize);
  const setFullSize = useSetRecoilState(isFullSize);

  useEffect(() => {
    setFullSize(true);
  }, []);

  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header color="teal" as="h2" textAlign="center">
          회원가입
        </Header>
        <Form size="large">
          <Segment stacked>
            <Form.Input fluid placeholder="아이디" />
            <Form.Field>
              <Form.Input
                fluid
                placeholder="비밀번호"
                type="password"
                onChange={(e) => {
                  setPwdInputState(true);
                  setInitialPwd(e.target.value);
                }}
                onBlur={() => setPwdInputState(false)}
              />
              {pwdInputStart
                ? (initialPwd.length < 6 || initialPwd.length > 15) && (
                    <Label basic color="red" pointing>
                      비밀번호는 6자리 이상 15자리 이하이여야 합니다.
                    </Label>
                  )
                : ``}
            </Form.Field>
            <Form.Field>
              <Form.Input
                success
                fluid
                placeholder="비밀번호 확인"
                type="password"
                onChange={(e) => {
                  setChkPwdState(true);
                  setCheckPwd(e.target.value);
                }}
                onBlur={() => setPwdInputState(false)}
              />
              {initialPwd === checkPwd && checkPwd.length > 0
                ? chkPwdInputStart && (
                    <Label basic color="green" pointing>
                      일치합니다. 😃
                    </Label>
                  )
                : chkPwdInputStart && (
                    <Label basic color="red" pointing>
                      비밀번호가 같지 않습니다. 🤔
                    </Label>
                  )}
            </Form.Field>
            <Form.Input fluid placeholder="닉네임" />
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
            <Form.Input fluid placeholder="인증번호" />
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
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default SignIn;
