import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useRecoilValue, useResetRecoilState } from 'recoil';
import { selectedFavorites, viewBanner } from 'Atoms/atom';

import { SideBarProps } from 'interface/ArgProps';
import 'css/Sidebar.css';

const Sidebar = ({ sideBarData }: SideBarProps) => {
  const [allLectureSubNav, setallLectureSubNav] = useState(false);
  const [favLectureSubNav, setFavLectureSubNav] = useState(false);
  const showAllLectureSubNav = () => setallLectureSubNav(!allLectureSubNav);
  const showFavLectureSubNav = () => setFavLectureSubNav(!favLectureSubNav);

  const removeBanner = useResetRecoilState(viewBanner);

  /* 다연님께서 요청하신 주석 부분.
  const courseBoard = sideBarData.filter(
    (board) => board.type.id === 'COURSE_BOARD'
  );
  console.log(courseBoard);
  const otherBoards = sideBarData.filter(
    (board) => board.type.id !== 'COURSE_BOARD'
  );
  console.log(otherBoards);
  */

  const favoriteLectures = useRecoilValue(selectedFavorites);

  return (
    <nav className="sidebar">
      <button
        className="big-category-btn"
        type="button"
        onClick={showFavLectureSubNav}
      >
        <i
          className={
            favLectureSubNav ? 'chevron down icon' : 'chevron right icon'
          }
        />
        수업 즐겨찾기 게시판
      </button>
      <nav className={favLectureSubNav ? 'subNav-active' : 'subNav'}>
        <Link to="/favoriteRegister" className="favorite-add-btn">
          <button className="favorite-add-btn" type="button">
            즐겨찾기 추가
          </button>
        </Link>
        {favoriteLectures.map((lecture) => (
          <Link to={`/board/${lecture.id}`} className="small-category-btn">
            {lecture.title}
          </Link>
        ))}
      </nav>
      <button
        className="big-category-btn"
        type="button"
        onClick={showAllLectureSubNav}
      >
        <i
          className={
            allLectureSubNav ? 'chevron down icon' : 'chevron right icon'
          }
        />
        전체 수업게시판
      </button>
      <nav className={allLectureSubNav ? 'subNav-active' : 'subNav'}>
        {sideBarData
          .filter((board) => board.type.id === 'COURSE_BOARD')
          .map((course) => (
            <Link to="/board" className="small-category-btn" onClick={removeBanner}>
              {course.title}
            </Link>
          ))}
      </nav>
      {sideBarData
        .filter((board) => board.type.id !== 'COURSE_BOARD')
        .map((course) => (
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
