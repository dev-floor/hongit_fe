import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SideBarProps } from 'interface/ArgProps';
import 'css/Sidebar.css';

const Sidebar = ({ sideBarData }: SideBarProps) => {
  const [subNav1, setSubNav1] = useState(false);
  const showSubNav1 = () => setSubNav1(!subNav1);
  const [subNav2, setSubNav2] = useState(false);
  const showSubNav2 = () => setSubNav2(!subNav2);
  
  const courseBoard = sideBarData.filter((board) => board.type.id === 'COURSE_BOARD');
  console.log(courseBoard);

  const questionBoard = sideBarData.filter((board) => board.type.id === 'QUESTION_BOARD');
  console.log(questionBoard);

  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/articleList">게시물 목록 조회</Link>
        </li>
        <li>
          <Link to="/write">게시물생성</Link>
        </li>
        <li>
          <Link to="/board">게시판</Link>
        </li>
      </ul>
      <nav className="sidebar">
        <button className="big-category-btn" type="button" id="1" onClick={showSubNav1}>
          <i className="chevron right icon"/>
          수업게시판
        </button>
          <nav className={subNav1 ? 'subNav-active' : 'subNav'}>
            {courseBoard.map((course) => 
              <Link to='/boards/{course.id}' className="small-category-btn">{course.title}</Link>
            )}
          </nav>
        <button className="big-category-btn" type="button" id="2" onClick={showSubNav2}>
          <i className="chevron right icon" />
          질문게시판
        </button>
          <nav className={subNav2 ? 'subNav-active' : 'subNav'}>
            {questionBoard.map((course) => 
              <Link to='/boards/{course.id}' className="small-category-btn">{course.title}</Link>
            )}
          </nav>
      </nav>
    </div>
  )
}

export default Sidebar;
