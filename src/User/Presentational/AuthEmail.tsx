import React, { useState } from 'react';
import {
  Grid,
  Header,
  Form,
  Segment,
  Button,
  Select,
  Message,
  Icon,
} from 'semantic-ui-react';

const AuthEmail = () => {
  const [mail, setMail] = useState<string>('');
  const mailOptions = [
    { key: 'g', text: '@g.hongik.ac.kr', value: '@g.hongik.ac.kr' },
    { key: 'mail', text: '@mail.hongik.ac.kr', value: '@mail.hongik.ac.kr' },
  ];

  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header color="teal" as="h2" textAlign="center">
          STEP 1
        </Header>
        <Form size="large">
          <Segment stacked>
            <Form.Input
              fluid
              type="text"
              placeholder="학교메일"
              action
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setMail(e.target.value);
              }}
            >
              <input />
              <Select options={mailOptions} defaultValue="@g.hongik.ac.kr" />
              {mail.length === 0 ? (
                <Button disabled type="submit" color="teal">
                  메일인증
                </Button>
              ) : (
                <Button type="submit" color="teal">
                  메일인증
                </Button>
              )}
            </Form.Input>
          </Segment>
        </Form>
        <Message attached="bottom" color="teal">
          😮이미 가입했어요!&nbsp;<a href="/login">로그인 하러가기</a>&nbsp;
          <br />
          &nbsp;<a href="/signup">회원가입 이어서</a>&nbsp;
          <br />
          &nbsp;<a href="/">홈으로</a>&nbsp;
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default AuthEmail;
