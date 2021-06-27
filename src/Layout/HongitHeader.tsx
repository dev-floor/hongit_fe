import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Header, List, Segment } from 'semantic-ui-react';

const HongitHeader = () => (
  <div>
    <Segment inverted vertical style={{ padding: '1em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={1}>
              <Header inverted as="h4" content="HongIt" />
              <List className="header-list" link stackable inverted>
                <List.Item>
                  <Link to="/">Main</Link>
                </List.Item>
                <List.Item>
                  <Link to="/board">Board</Link>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
    <Segment
      inverted
      vertical
      style={{ padding: '14em 0em', background: 'yellowgreen' }}
    >
      <Container />
    </Segment>
  </div>
);

export default HongitHeader;
