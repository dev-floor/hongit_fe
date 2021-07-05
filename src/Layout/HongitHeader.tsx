import React from 'react';
import { Link } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';
import 'css/Layout.css';

const HongitHeader = () => (
  <div>
    <Segment
      className="header-bar"
      inverted
      vertical
      style={{ padding: '2em' }}
    >
      <Link className="hongit-link" to="/">
        HONGIT
      </Link>
      <Link className="login-link" to="/login">
        로그인
      </Link>
    </Segment>
    <Segment
      inverted
      vertical
      style={{ padding: '14em 0em', background: 'crimson' }}
    />
  </div>
);

export default HongitHeader;
