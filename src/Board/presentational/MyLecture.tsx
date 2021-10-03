import React, { useState, useEffect, SyntheticEvent } from 'react';

import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import { grade, subjectName, selectedMyLectures } from 'Atoms/atom';

import { v4 as uuidv4 } from 'uuid';
import { Grid, Header, Divider, Button, Label, Icon } from 'semantic-ui-react';
import { MyLectureProps } from '../../interface/ArgProps';

import 'css/myLecture.css';

const MyLecture = ({
  yearFilteredData,
  finalFilteredData,
  onAddSiderBars,
}: MyLectureProps) => {
  const setGrade = useSetRecoilState(grade);
  const [selectedSubject, setSubject] = useRecoilState(subjectName);
  const alreadyInSidebar = useRecoilValue(selectedMyLectures);

  const [selectedProfessor, setProfProfessor] = useState<string>('');
  const [selectedCombination, setCombination] = useState<string[]>(
    alreadyInSidebar.map((lec) => lec.title)
  );

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

  const onRemoveMyTag = (e: SyntheticEvent) => {
    const clickedValue = e.currentTarget.parentElement?.textContent;
    setCombination(() =>
      selectedCombination.filter((combi) => combi !== clickedValue)
    );
  };

  const onRegisterMyLecture = () => {
    onAddSiderBars(selectedCombination);
  };

  useEffect(() => {
    const addItem = `${selectedSubject} - ${selectedProfessor}`;
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
    if (alreadyInSidebar.length > 0) {
      setCombination(() =>
        alreadyInSidebar?.map((myLecture) => `${myLecture.title}`)
      );
    }
  }, [alreadyInSidebar]);

  return (
    <Grid container style={{ padding: '2em 0em' }}>
      <Grid.Row>
        <Grid.Column>
          <header className="my-lecture-header">
            <Header as="h1">즐겨찾기 등록</Header>
            <section>
              <Button
                style={{
                  backgroundColor: '#ed678c',
                  color: 'white',
                }}
                onClick={() => setCombination(() => [])}
              >
                모두 삭제
              </Button>
              <Button
                style={{ backgroundColor: 'black', color: 'white' }}
                onClick={onRegisterMyLecture}
              >
                저장
              </Button>
            </section>
          </header>
          <Divider />
          <Grid columns={4} divided>
            <Grid.Column textAlign="center">
              <Button.Group
                className="btn-group"
                labeled
                toggle
                vertical
                size="large"
                fluid
              >
                <Button value="1학년" className="grade" onClick={onClickYear}>
                  1학년
                </Button>
                <Button value="2학년" className="grade" onClick={onClickYear}>
                  2학년
                </Button>
                <Button value="3학년" className="grade" onClick={onClickYear}>
                  3학년
                </Button>
                <Button value="4학년" className="grade" onClick={onClickYear}>
                  4학년
                </Button>
              </Button.Group>
            </Grid.Column>
            <Grid.Column textAlign="center">
              <Button.Group className="btn-group" vertical fluid>
                {yearFilteredData.length === 0
                  ? ``
                  : yearFilteredData?.map((data) => (
                      <Button
                        key={uuidv4()}
                        className="subject"
                        value={data}
                        onClick={onClickSubject}
                      >
                        {data}
                      </Button>
                    ))}
              </Button.Group>
            </Grid.Column>
            <Grid.Column centered="true" textAlign="center">
              <Button.Group className="btn-group" toggle vertical fluid>
                {finalFilteredData.length === 0
                  ? ``
                  : finalFilteredData?.map((data) => (
                      <Button
                        key={uuidv4()}
                        className="professor"
                        value={data}
                        onClick={onClickProfessor}
                      >
                        {data}
                      </Button>
                    ))}
              </Button.Group>
            </Grid.Column>
            <Grid.Column centered="true" textAlign="center">
              <section className="selected-my-lectures">
                <header className="selected-my-lectures-title">
                  <Icon name="star" style={{ color: 'crimson' }} />
                  선택한 내 수업 목록
                </header>
                {selectedCombination.length === 0
                  ? ``
                  : selectedCombination?.map((combi) => (
                      <Label
                        key={uuidv4()}
                        style={{ margin: '0.5rem 0', width: '85%' }}
                        tag
                        value={combi}
                      >
                        {combi}
                        <Icon name="delete" onClick={onRemoveMyTag} />
                      </Label>
                    ))}
              </section>
            </Grid.Column>
          </Grid>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default MyLecture;
