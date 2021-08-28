import React from 'react';
import { Link } from 'react-router-dom';
import { AllLectureMenuProp } from 'interface/ArgProps';
import { Grid } from 'semantic-ui-react';

import { v4 as uuidv4 } from 'uuid';
import 'css/AllLectureMenu.css';

const AllLectureMenu = ({ allLectureData }: AllLectureMenuProp) => (
  <Grid textAlign="center" columns={4}>
    <Grid.Row>
      <Grid.Column>
        <h3 className="ui block header">1학년</h3>
        {allLectureData
          .filter((lecture) => lecture.grade.id === 'FRESHMAN')
          .map((freshman) => (
            <Link
              key={uuidv4()}
              to={`/board/${freshman.id}`}
              className="lecture"
              type="button"
            >
              {freshman.title}
            </Link>
          ))}
      </Grid.Column>
      <Grid.Column>
        <h3 className="ui block header">2학년</h3>
        {allLectureData
          .filter((lecture) => lecture.grade.id === 'SOPHOMORE')
          .map((sophomore) => (
            <Link
              key={uuidv4()}
              to={`/board/${sophomore.id}`}
              className="lecture"
              type="button"
            >
              {sophomore.title}
            </Link>
          ))}
      </Grid.Column>
      <Grid.Column className="column">
        <h3 className="ui block header">3학년</h3>
        {allLectureData
          .filter((lecture) => lecture.grade.id === 'JUNIOR')
          .map((junior) => (
            <Link
              key={uuidv4()}
              to={`/board/${junior.id}`}
              className="lecture"
              type="button"
            >
              {junior.title}
            </Link>
          ))}
      </Grid.Column>
      <Grid.Column>
        <h3 className="ui block header">4학년</h3>
        {allLectureData
          .filter((lecture) => lecture.grade.id === 'SENIOR')
          .map((senior) => (
            <Link
              key={uuidv4()}
              to={`/board/${senior.id}`}
              className="lecture"
              type="button"
            >
              {senior.title}
            </Link>
          ))}
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default AllLectureMenu;
