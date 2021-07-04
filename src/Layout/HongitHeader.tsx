import React from 'react';
import { Link } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';

import 'css/Layout.css';

const HongitHeader = () => (
  <div>
    <Segment inverted vertical style={{ padding: '2em' }}>
      <Link className="hongit-link" to="/">
        HONGIT
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
