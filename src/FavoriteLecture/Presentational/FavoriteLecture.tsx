import React, { useState, useEffect, SyntheticEvent } from 'react';

import { useRecoilState } from 'recoil';
import { grade, subjectName } from 'Atoms/atom';

import { Grid, Header, Divider, Button, Label, Icon } from 'semantic-ui-react';
import { FavoriteLectureProps } from '../../interface/ArgProps';

const FavortieLecture = ({
  yearFilteredData,
  finalFilteredData,
  onAddSiderBars,
}: FavoriteLectureProps) => {
  const [selectedGrade, setGrade] = useRecoilState(grade);
  const [selectedSubject, setSubject] = useRecoilState(subjectName);

  const [selectedProfessor, setProfProfessor] = useState<string>('');
  const [selectedCombination, setCombination] = useState<string[]>([]);

  const onClickYear = (e: React.MouseEvent<HTMLButtonElement>) => {
    const clickedYear = e.currentTarget.value;
    setGrade(clickedYear);
    e.currentTarget.classList.toggle('active');
  };

  const onClickSubject = (e: React.MouseEvent<HTMLButtonElement>) => {
    const clickedSubject = e.currentTarget.value;
    setSubject(clickedSubject);
    // e.currentTarget.classList.toggle('active');
  };

  const onClickProfessor = (e: React.MouseEvent<HTMLButtonElement>) => {
    const clickedProf = e.currentTarget.value;
    setProfProfessor(clickedProf);
  };

  const onRemoveFavTag = (e: SyntheticEvent) => {
    const clickedValue = e.currentTarget.parentElement?.textContent;
    console.log(e.currentTarget.parentElement?.textContent);
    setCombination(() =>
      selectedCombination.filter((combi) => combi !== clickedValue)
    );
  };

  const onRegisterFavorite = () => {
    onAddSiderBars(selectedCombination);
  };

  useEffect(() => {
    const addItem = `${selectedSubject} - ${selectedProfessor}`;
    console.log(addItem, selectedCombination);
    if (
      selectedSubject !== '' &&
      selectedProfessor !== '' &&
      !selectedCombination.includes(addItem)
    ) {
      setCombination([...selectedCombination, addItem]);
    }
    setProfProfessor('');
  }, [selectedProfessor]);

  return (
    <Grid container style={{ padding: '2em 0em' }}>
      <Grid.Row>
        <Grid.Column>
          <Header as="h1">즐겨찾기 등록</Header>
          <Divider />
          <Grid className="grid-tmp" columns={5}>
            <Grid.Column width={2} textAlign="center">
              <Button.Group labeled toggle vertical size="large">
                {selectedGrade.includes('1학년') ? (
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
                {selectedGrade.includes('2학년') ? (
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
                {selectedGrade.includes('3학년') ? (
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
                {selectedGrade.includes('4학년') ? (
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
            <Grid.Column width={3} textAlign="center">
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
            <Grid.Column centered width={2} textAlign="center">
              <Button.Group toggle vertical>
                {finalFilteredData.length === 0
                  ? ``
                  : finalFilteredData.map((data) => (
                      <Button value={data} onClick={onClickProfessor}>
                        {data}
                      </Button>
                    ))}
              </Button.Group>
            </Grid.Column>
            <Grid.Column centered width={4} textAlign="center">
              {selectedCombination.length === 0
                ? ``
                : selectedCombination.map((combi) => (
                    <Label style={{ margin: '0.5rem 0' }} tag value={combi}>
                      {combi}
                      <Icon name="delete" onClick={onRemoveFavTag} />
                    </Label>
                  ))}
            </Grid.Column>
            <Grid.Column centered width={2} textAlign="center">
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
