import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { viewBanner } from 'Atoms/atom';
import { Segment } from 'semantic-ui-react';

import 'css/Layout.css';

const HongitHeader = () => {
  const banner = useRecoilValue(viewBanner);

  return (
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
      {banner && (
        <Segment
          inverted
          vertical
          style={{ padding: '14em 0em', background: 'crimson' }}
        />
      )}
    </div>
  );
};

export default HongitHeader;
