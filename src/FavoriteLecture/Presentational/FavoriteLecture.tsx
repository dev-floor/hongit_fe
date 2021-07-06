import React, { useState, useEffect, SyntheticEvent } from 'react';
import { useRecoilState } from 'recoil';
import { schoolYear, subjectName } from 'Atoms/atom';
import { Grid, Header, Divider, Button, Label, Icon } from 'semantic-ui-react';
import { FavoriteLectureProps } from '../../interface/ArgProps';

import './FavoriteLecture.css';

const FavortieLecture = ({
  yearFilteredData,
  finalFilteredData,
}: FavoriteLectureProps) => {
  const [selectedSchoolYear, setSchoolYear] = useRecoilState(schoolYear);
  const [selectedSubject, setSubject] = useRecoilState(subjectName);

  const [selectedProf, setProf] = useState<string>('');
  const [selectedCombination, setCombination] = useState<string[]>([]);

  const onClickYear = (e: React.MouseEvent<HTMLButtonElement>) => {
    const clickedYear = e.currentTarget.value;
    setSchoolYear(clickedYear);
    e.currentTarget.classList.toggle('active');
  };

  const onClickSubject = (e: React.MouseEvent<HTMLButtonElement>) => {
    const clickedSubject = e.currentTarget.value;
    setSubject(clickedSubject);
    e.currentTarget.classList.toggle('active');
  };

  const onClickProfessor = (e: React.MouseEvent<HTMLButtonElement>) => {
    setProf(e.currentTarget.value);
  };

  const onRemove = (e: SyntheticEvent) => {
    const clickedValue = e.currentTarget.parentElement?.textContent;
    console.log(e.currentTarget.parentElement?.textContent);
    setCombination(() =>
      selectedCombination.filter((combi) => combi !== clickedValue)
    );
  };

  const onRegisterFavorite = () => {};

  useEffect(() => {
    const addItem = `${selectedSubject} - ${selectedProf}`;
    if (selectedSubject !== '' && selectedProf !== '') {
      setCombination([...selectedCombination, addItem]);
    }
  }, [selectedProf]);

  return (
    <Grid container style={{ padding: '2em 0em' }}>
      <Grid.Row>
        <Grid.Column>
          <Header as="h1">즐겨찾기 등록</Header>
          <Divider />
          <Grid columns={5}>
            <Grid.Column centered width={2}>
              <Button.Group className="fav-btns" toggle vertical size="large">
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
            <Grid.Column centered width={5}>
              <Button.Group vertical>
                {yearFilteredData.length === 0
                  ? ``
                  : yearFilteredData.map((data) => (
                      <Button value={data} onClick={onClickSubject}>
                        {data}
                      </Button>
                    ))}
              </Button.Group>
            </Grid.Column>
            <Grid.Column centered width={2}>
              <Button.Group vertical>
                {finalFilteredData.length === 0
                  ? ``
                  : finalFilteredData.map((data) => (
                      <Button value={data} onClick={onClickProfessor}>
                        {data}
                      </Button>
                    ))}
              </Button.Group>
            </Grid.Column>
            <Grid.Column>
              {selectedCombination.length === 0
                ? ``
                : selectedCombination.map((combi) => (
                    <Label value={combi}>
                      {combi}
                      <Icon name="delete" onClick={onRemove} />
                    </Label>
                  ))}
            </Grid.Column>
            <Grid.Column>
              {selectedCombination.length === 0 ? (
                <Button disabled>추가</Button>
              ) : (
                <Button onClick={onRegisterFavorite}>추가</Button>
              )}
            </Grid.Column>
          </Grid>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default FavortieLecture;
