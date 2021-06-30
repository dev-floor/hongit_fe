import React from 'react';
import { useSetRecoilState } from 'recoil';
import { schoolYear } from 'Atoms/atom';
import { FavoriteLectureApi } from 'api/ApiProps';
import { Grid, Header, Divider, Segment, Button } from 'semantic-ui-react';

const FavortieLecture = ({
  yearFilteredData,
  finalFilteredData,
}: FavoriteLectureApi) => {
  const setSchoolYear = useSetRecoilState(schoolYear);

  const onClickYear = (e: any) => {
    setSchoolYear(e.target.value);
    // e.target.classList.toggle('active')
  };

  return (
    <Grid container style={{ padding: '2em 0em' }}>
      <Grid.Row>
        <Grid.Column>
          <Header as="h1">즐겨찾기 등록</Header>
          <Divider />
          <Grid columns={4}>
            <Grid.Column>
              <Button.Group toggle vertical size="large">
                <Button
                  value="1학년"
                  inverted
                  color="red"
                  onClick={onClickYear}
                >
                  1학년
                </Button>
                <Button
                  value="2학년"
                  inverted
                  color="blue"
                  onClick={onClickYear}
                >
                  2학년
                </Button>
                <Button
                  value="3학년"
                  inverted
                  color="green"
                  onClick={onClickYear}
                >
                  3학년
                </Button>
                <Button
                  value="4학년"
                  inverted
                  color="purple"
                  onClick={onClickYear}
                >
                  4학년
                </Button>
              </Button.Group>
            </Grid.Column>
            <Grid.Column>
              <Button.Group vertical>
                {yearFilteredData.length === 0
                  ? ``
                  : yearFilteredData.map((data) => <Button>{data}</Button>)}
              </Button.Group>
            </Grid.Column>
            <Grid.Column>
              <Button.Group vertical>
                <Button>Test</Button>
              </Button.Group>
            </Grid.Column>
          </Grid>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default FavortieLecture;
