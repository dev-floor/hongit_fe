import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SideBarProps } from 'interface/ArgProps';
import 'css/Sidebar.css';

const Sidebar = ({ sideBarData }: SideBarProps) => {
  const [subNav1, setSubNav1] = useState(false);
  const showSubNav1 = () => setSubNav1(!subNav1);
  const [subNav2, setSubNav2] = useState(false);
  const showSubNav2 = () => setSubNav2(!subNav2);

  const courseBoard = sideBarData.filter(
    (board) => board.type.id === 'COURSE_BOARD'
  );
  console.log(courseBoard);

  const questionBoard = sideBarData.filter(
    (board) => board.type.id === 'QUESTION_BOARD'
  );
  console.log(questionBoard);

  return (
    <nav className="sidebar">
      <button className="big-category-btn" type="button" onClick={showSubNav1}>
        <i className="chevron right icon" />
        수업게시판
      </button>
      <nav className={subNav1 ? 'subNav-active' : 'subNav'}>
        {courseBoard.map((course) => (
          // <Link to="/boards/{course.id}" className="small-category-btn">
          <Link to="/board" className="small-category-btn">
            {course.title}
          </Link>
        ))}
      </nav>
      <button className="big-category-btn" type="button" onClick={showSubNav2}>
        <i className="chevron right icon" />
        질문게시판
      </button>
      <nav className={subNav2 ? 'subNav-active' : 'subNav'}>
        {questionBoard.map((course) => (
          // <Link to="/boards/{course.id}" className="small-category-btn">
          <Link to="/board" className="small-category-btn">
            {course.title}
          </Link>
        ))}
      </nav>
    </nav>
  );
};

export default Sidebar;
