import React from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from 'semantic-ui-react';

import 'css/Layout.css';

const Login = () => (
  <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as="h1" color="teal" textAlign="center">
        HONGIT
      </Header>
      <Form size="large">
        <Segment stacked>
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="아이디"
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="비밀번호"
            type="password"
          />
          <Button color="teal" fluid size="large">
            Login
          </Button>
        </Segment>
      </Form>
      <Message color="teal">
        <a href="/SignIn">회원가입</a>
      </Message>
    </Grid.Column>
  </Grid>
);

export default Login;
