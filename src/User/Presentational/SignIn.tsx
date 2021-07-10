import React, { useEffect } from 'react';
import { isFullSize } from 'Atoms/atom';
import { useSetRecoilState } from 'recoil';
import { Button, Form, Grid, Header, Segment, Select } from 'semantic-ui-react';

const SignIn = (/* {}: 새로운 타입 */) => {
  const mailOptions = [
    { key: 'g', text: '@g.hongik.ac.kr', value: '@g.hongik.ac.kr' },
    { key: 'mail', text: '@mail.hongik.ac.kr', value: '@mail.hongik.ac.kr' },
  ];

  const stuOptions = [
    { key: 'senior', text: '졸업생', value: '졸업생' },
    { key: 'junior', text: '재학생', value: '재학생' },
  ];

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
            <Form.Input fluid placeholder="비밀번호" type="password" />
            <Form.Input fluid placeholder="비밀번호 확인" type="password" />
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
            <Button color="teal" fluid size="large">
              회원가입
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default SignIn;
