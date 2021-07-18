import React, { useState, useEffect, SyntheticEvent } from 'react';

import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import { grade, subjectName, selectedFavorites } from 'Atoms/atom';

import { Grid, Header, Divider, Button, Label, Icon } from 'semantic-ui-react';
import { FavoriteLectureProps } from 'interface/ArgProps';

import 'css/favoriteLecture.css';

const FavortieLecture = ({
  yearFilteredData,
  finalFilteredData,
  onAddSiderBars,
}: FavoriteLectureProps) => {
  const setGrade = useSetRecoilState(grade);
  const [selectedSubject, setSubject] = useRecoilState(subjectName);
  const alreadyFavoritesSidebar = useRecoilValue(selectedFavorites);

  const [selectedProfessor, setProfProfessor] = useState<string>('');
  const [selectedCombination, setCombination] = useState<string[]>([]);

  const onClickYear = (e: React.MouseEvent<HTMLButtonElement>) => {
    const clickedYear = e.currentTarget.value;
    setGrade(clickedYear);
  };

  const onClickSubject = (e: React.MouseEvent<HTMLButtonElement>) => {
    const clickedSubject = e.currentTarget.value;
    setSubject(clickedSubject);
  };

  const onClickProfessor = (e: React.MouseEvent<HTMLButtonElement>) => {
    const clickedProf = e.currentTarget.value;
    setProfProfessor(clickedProf);
  };

  const onRemoveFavTag = (e: SyntheticEvent) => {
    const clickedValue = e.currentTarget.parentElement?.textContent;
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
  }, [selectedProfessor, selectedCombination, selectedSubject]);

  useEffect(() => {
    if (alreadyFavoritesSidebar.length > 0) {
      setCombination(() =>
        alreadyFavoritesSidebar.map((favLecture) => `${favLecture.title}`)
      );
    }
  }, [alreadyFavoritesSidebar]);

  return (
    <Grid container style={{ padding: '2em 0em' }}>
      <Grid.Row>
        <Grid.Column>
          <Header as="h1">즐겨찾기 등록</Header>
          <Divider />
          <Grid className="grid-tmp" columns={5}>
            <Grid.Column width={2} textAlign="center">
              <Button.Group
                className="fav-btn-group"
                labeled
                toggle
                vertical
                size="large"
              >
                <Button
                  value="1학년"
                  className="fav-grade"
                  onClick={onClickYear}
                >
                  1학년
                </Button>
                <Button
                  value="2학년"
                  className="fav-grade"
                  onClick={onClickYear}
                >
                  2학년
                </Button>
                <Button
                  value="3학년"
                  className="fav-grade"
                  onClick={onClickYear}
                >
                  3학년
                </Button>
                <Button
                  value="4학년"
                  className="fav-grade"
                  onClick={onClickYear}
                >
                  4학년
                </Button>
              </Button.Group>
            </Grid.Column>
            <Grid.Column width={3} textAlign="center">
              <Button.Group className="fav-btn-group" vertical>
                {yearFilteredData.length === 0
                  ? ``
                  : yearFilteredData.map((data) => (
                    <Button
                      className="fav-subject"
                      value={data}
                      onClick={onClickSubject}
                    >
                      {data}
                    </Button>
                  ))}
              </Button.Group>
            </Grid.Column>
            <Grid.Column centered width={2} textAlign="center">
              <Button.Group className="fav-btn-group" toggle vertical>
                {finalFilteredData.length === 0
                  ? ``
                  : finalFilteredData.map((data) => (
                    <Button
                      className="fav-professor"
                      value={data}
                      onClick={onClickProfessor}
                    >
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
                <Button
                  style={{ backgroundColor: 'slategray', color: 'white' }}
                  disabled
                >
                  추가
                </Button>
              ) : (
                <Button
                  style={{ backgroundColor: 'black', color: 'white' }}
                  onClick={onRegisterFavorite}
                >
                  추가
                </Button>
              )}
            </Grid.Column>
          </Grid>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default FavortieLecture;
