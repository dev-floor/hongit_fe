import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useResetRecoilState } from 'recoil';
import { viewBanner } from 'Atoms/atom';
import { SideBarProps } from 'interface/ArgProps';
import 'css/Sidebar.css';

const Sidebar = ({ sideBarData }: SideBarProps) => {
  const [subNav, setSubNav] = useState(false);
  const showSubNav = () => setSubNav(!subNav);

  const removeBanner = useResetRecoilState(viewBanner);

  const courseBoard = sideBarData.filter(
    (board) => board.type.id === 'COURSE_BOARD'
  );
  console.log(courseBoard);
  const otherBoards = sideBarData.filter(
    (board) => board.type.id !== 'COURSE_BOARD'
  );
  console.log(otherBoards);

  return (
    <nav className="sidebar">
      <Link to="/" className="big-category-btn" type="button">
        메인화면가기
      </Link>
      <button className="big-category-btn" type="button">
        즐겨찾기 추가
      </button>
      <button className="big-category-btn" type="button" onClick={showSubNav}>
        <i className={subNav ? 'chevron down icon' : 'chevron right icon'} />
        수업게시판
      </button>
      <nav className={subNav ? 'subNav-active' : 'subNav'}>
        {courseBoard.map((course) => (
          // <Link to={`/board/${course.id}`} className="small-category-btn">
          <Link
            to="/board"
            className="small-category-btn"
            onClick={removeBanner}
          >
            {course.title}
          </Link>
        ))}
      </nav>
      {otherBoards.map((course) => (
        <Link
          to={`/board/${course.id}`}
          className="big-category-btn"
          type="button"
          onClick={removeBanner}
        >
          <i className="chevron right icon" />
          {course.type.text}
        </Link>
      ))}
    </nav>
  );
};

export default Sidebar;
