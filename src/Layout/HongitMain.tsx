import React, { useEffect } from 'react';
import { isFullSize } from 'Atoms/atom';
import { useSetRecoilState } from 'recoil';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Segment,
} from 'semantic-ui-react';

const HongitMain = () => {
  const setFullSize = useSetRecoilState(isFullSize);

  useEffect(() => {
    setFullSize(false);
  }, []);

  return (
    <div>
      <Segment style={{ padding: '0em' }} vertical>
        <Grid celled="internally" columns="equal" stackable>
          <Grid.Row textAlign="center">
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as="h3" style={{ fontSize: '2em' }}>
                What a Company
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                That is what they all say about us
              </p>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as="h3" style={{ fontSize: '2em' }}>
                I shouldnt have gone with their competitor.
              </Header>
              <p style={{ fontSize: '1.33em' }}>hello hello Grid test</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment style={{ padding: '8em 0em' }} vertical>
        <Container text>
          <Header as="h3" style={{ fontSize: '3em' }}>
            Hello Hello Hongit Main Page!
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            Instead of focusing on content creation and hard work, we have
            learned how to master the art of doing nothing by providing massive
            amounts of whitespace and generic content that can seem massive,
            monolithic and worth your attention
          </p>
          <Button as="a" size="large">
            Read More
          </Button>
          <Divider
            as="h4"
            className="header"
            horizontal
            style={{ margin: '3em 0em', textTransform: 'uppercase' }}
          >
            <a href="/">Case Studies</a>
          </Divider>
          <Header as="h3" style={{ fontSize: '2em' }}>
            Did We Tell You About Our Bananas?
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            Yes I know you probably disregarded the earlier boasts as
            non-sequitur filler content, but its really true. It took years of
            gene splicing and combinatory DNA research, but our bananas can
            really dance.
          </p>
          <Button as="a" size="large">
            Button Test
          </Button>
        </Container>
      </Segment>
      <Segment style={{ padding: '3em 0em' }} vertical>
        <Container text>
          <Header as="h3" style={{ fontSize: '2em' }}>
            Hongit Main Layout
          </Header>
          <p style={{ fontSize: '1.23em' }}>
            Instead of focusing on content creation and hard work, we have
            learned Yes I know you probably disregarded the earlier boasts as
            non-sequitur how to master th 홍잇 메인화면 레이아웃 테스트
          </p>
          <Button as="a" size="large">
            Read More
          </Button>
        </Container>
      </Segment>
    </div>
  );
};

export default HongitMain;
