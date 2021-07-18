import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from 'semantic-ui-react';
import 'css/User.css';

const Login = () => (
  <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header textAlign="center">
        <div>
          <div className="hong">HONG</div>
          <div className="it">IT</div>
        </div>
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
        <a href="/signin">회원가입</a>
      </Message>
      <Link to="/">홈으로</Link>
    </Grid.Column>
  </Grid>
);

export default Login;
