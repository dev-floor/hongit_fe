import React from 'react';
import { useRecoilState } from 'recoil';
import { schoolYear } from 'Atoms/atom';
import { FavoriteLectureApi } from 'api/ApiProps';
import { Grid, Header, Divider, Button } from 'semantic-ui-react';

const FavortieLecture = ({
  yearFilteredData,
  finalFilteredData,
}: FavoriteLectureApi) => {
  const [selectedSchoolYear, setSchoolYear] = useRecoilState(schoolYear);

  const onClickYear = (e: any) => {
    const clickedYear = e.target.value as string;
    if (selectedSchoolYear.includes(clickedYear)) {
      setSchoolYear(selectedSchoolYear.filter((year) => year !== clickedYear));
    } else {
      setSchoolYear([...selectedSchoolYear, clickedYear]);
    }
    e.target.classList.toggle('active');
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
                {selectedSchoolYear.includes('1학년') ? (
                  <Button value="1학년" color="red" onClick={onClickYear}>
                    1학년
                  </Button>
                ) : (
                  <Button
                    value="1학년"
                    inverted
                    color="red"
                    onClick={onClickYear}
                  >
                    1학년
                  </Button>
                )}
                {selectedSchoolYear.includes('2학년') ? (
                  <Button value="2학년" color="blue" onClick={onClickYear}>
                    2학년
                  </Button>
                ) : (
                  <Button
                    value="2학년"
                    inverted
                    color="blue"
                    onClick={onClickYear}
                  >
                    2학년
                  </Button>
                )}
                {selectedSchoolYear.includes('3학년') ? (
                  <Button value="3학년" color="green" onClick={onClickYear}>
                    3학년
                  </Button>
                ) : (
                  <Button
                    value="3학년"
                    inverted
                    color="green"
                    onClick={onClickYear}
                  >
                    3학년
                  </Button>
                )}
                {selectedSchoolYear.includes('4학년') ? (
                  <Button value="4학년" color="purple" onClick={onClickYear}>
                    4학년
                  </Button>
                ) : (
                  <Button
                    value="4학년"
                    inverted
                    color="purple"
                    onClick={onClickYear}
                  >
                    4학년
                  </Button>
                )}
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
