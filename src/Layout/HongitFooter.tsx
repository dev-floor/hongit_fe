import React from 'react';
import { Container, Grid, Header, List, Segment } from 'semantic-ui-react';

const HongitFooter = () => (
  <Segment inverted vertical style={{ padding: '2em 0em' }}>
    <Container>
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Front-End" />
            <List link inverted>
              <List.Item as="a">현주 석기 다연</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Back-End" />
            <List link inverted>
              <List.Item as="a">준영 주원 준형</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header as="h4" inverted>
              CopyRight
            </Header>
            <p>© 2021 Hongit ver 0.0.1</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);

export default HongitFooter;
