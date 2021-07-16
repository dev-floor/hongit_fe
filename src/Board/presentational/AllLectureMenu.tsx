import React from 'react'
import { Link } from 'react-router-dom';
import { AllLectureMenuProp } from 'interface/ArgProps';
import { Grid, Menu } from 'semantic-ui-react'

import 'css/AllLectureMenu.css';

const AllLectureMenu = ({allLectureData}: AllLectureMenuProp) => (
  <Grid textAlign='center' columns={4}>
    <Grid.Row>
      <Grid.Column>
        <Menu fluid vertical>
          <div className="grade">1학년</div>
        </Menu>
        <div className="ui divider"/>
        {allLectureData
          .filter((lecture) => lecture.grade.id ==="FRESHMAN")
          .map((freshman) => (
            <Link to={`/board/${freshman.id}`} className="lecture" type="button">
              {freshman.title}
            </Link>
        ))}
      </Grid.Column>
      <Grid.Column>
        <h3 className="ui dividing header">2학년</h3>        
        {allLectureData
          .filter((lecture) => lecture.grade.id ==="SOPHOMORE")
          .map((sophomore) => (
            <Menu.Item className="lecture">{sophomore.title}</Menu.Item>
        ))}
      </Grid.Column>
      <Grid.Column>
          <h3 className="ui block header">3학년</h3>
        <Menu fluid vertical>
          {allLectureData
            .filter((lecture) => lecture.grade.id ==="JUNIOR")
            .map((junior) => (
              <Menu.Item className="lecture">{junior.title}</Menu.Item>
            ))}
        </Menu>
      </Grid.Column>
      <Grid.Column>
          <h3 className="ui block header">4학년</h3>
          {allLectureData
            .filter((lecture) => lecture.grade.id ==="SENIOR")
            .map((senior) => (
              <Menu.Item className="lecture">{senior.title}</Menu.Item>
            ))}
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default AllLectureMenu;