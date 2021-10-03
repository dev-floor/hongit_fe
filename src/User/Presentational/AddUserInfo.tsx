import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Modal from 'Commons/Modal';
import { Grid, Header, Form, Segment, Input, Button } from 'semantic-ui-react';

import 'css/SignIn.css';

const AddUserInfo = () => {
  // 프로필사진, 깃헙주소, 블로그주소
  const [githubAddress, setGithubAddress] = useState<string>('');
  const [blogAddress, setBlogAddress] = useState<string>('');

  const [open, setOpen] = useState(false);

  const completeSignUp = () => setOpen(true);

  const closeModal = () => {
    setOpen(false);
  };

  const history = useHistory();
  const goHome = () => {
    history.push('./');
  };

  return (
    <div>
      <Grid
        textAlign="center"
        style={{ height: '100vh' }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header color="teal" as="h2" textAlign="center">
            STEP 3
          </Header>
          <Header color="grey" as="h5" textAlign="center">
            아래 정보들은 가입 완료 후 나중에 설정이 가능합니다.
          </Header>
          <Form size="large">
            <Segment stacked>
              {githubAddress.length === 0 ? (
                <Form.Input
                  className="input-field"
                  type="text"
                  placeholder="Github Address"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setGithubAddress(e.target.value);
                  }}
                  icon={<i className="default check icon" />}
                />
              ) : (
                <Form.Input
                  className="input-field"
                  type="text"
                  placeholder="Github Address"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setGithubAddress(e.target.value);
                  }}
                  icon={<i className="on check icon" />}
                />
              )}
              {blogAddress.length === 0 ? (
                <Form.Input
                  className="input-field"
                  type="text"
                  placeholder="Blog Address"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setBlogAddress(e.target.value);
                  }}
                  icon={<i className="default check icon" />}
                />
              ) : (
                <Form.Input
                  className="input-field"
                  type="text"
                  placeholder="Blog Address"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setBlogAddress(e.target.value);
                  }}
                  icon={<i className="on check icon" />}
                />
              )}
              {githubAddress !== '' || blogAddress !== '' ? (
                <Form.Button
                  color="teal"
                  fluid
                  size="large"
                  onClick={completeSignUp}
                >
                  <Link to="/" style={{ color: 'white' }}>
                    회원가입 완료
                  </Link>
                </Form.Button>
              ) : (
                <Form.Button color="teal" fluid size="large" disabled>
                  <Link to="/" style={{ color: 'lightgray' }}>
                    회원가입 완료
                  </Link>
                </Form.Button>
              )}
              <Form.Button
                color="teal"
                fluid
                size="large"
                onClick={completeSignUp}
              >
                <Link to="/" style={{ color: 'white' }}>
                  건너뛰기
                </Link>
              </Form.Button>
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
      <Modal
        open={open}
        close={closeModal}
        registerBtnStr="홈으로!"
        registerBtnFunc={goHome}
        cancelBtnStr="가기!"
        cancelBtnFunc={goHome}
        header="회원가입 완료"
        info="회원가입이 완료되었습니다😆"
      />
    </div>
  );
};

export default AddUserInfo;
