import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useRecoilValue, useResetRecoilState } from 'recoil';
import { selectedMyLectures, viewBanner } from 'Atoms/atom';

import { SideBarProps } from 'interface/ArgProps';
import 'css/Sidebar.css';

const Sidebar = ({ sideBarData }: SideBarProps) => {
  const [myLectureSubNav, setMyLectureSubNav] = useState(false);
  const showMyLectureSubNav = () => setMyLectureSubNav(!myLectureSubNav);

  const removeBanner = useResetRecoilState(viewBanner);
  const myLectures = useRecoilValue(selectedMyLectures);

  return (
    <nav className="sidebar">
      <Link
        to="/allLectureMenu"
        className="big-category-btn"
        type="button"
        onClick={removeBanner}
      >
        <i className="chevron right icon" />
        전체 수업게시판
      </Link>
      <button
        className="big-category-btn"
        type="button"
        onClick={showMyLectureSubNav}
      >
        <i
          className={
            myLectureSubNav ? 'chevron down icon' : 'chevron right icon'
          }
        />
        내 수업게시판
      </button>
      <nav className={myLectureSubNav ? 'subNav-active' : 'subNav'}>
        {myLectures.map((lecture) => (
          <Link
            to={`/board/${lecture.id}`}
            className="small-category-btn"
            onClick={removeBanner}
          >
            {lecture.title}
          </Link>
        ))}
        <Link
          to="/myLectureRegister"
          className="lecture-add-btn"
          type="button"
          onClick={removeBanner}
        >
          <i className="small plus icon" />내 수업 추가하기
        </Link>
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
