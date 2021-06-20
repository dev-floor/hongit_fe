import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { SideBarProps } from 'interface/ArgProps';
import 'css/Sidebar.css';


const SubMenu = ({ sideBarData }: SideBarProps) => {  
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);
  
  return (
    <div className="sub-menu">
      {sideBarData.map((category) => {
        <button className="sidebar-link" type="button" onClick={showSubnav}>{category.type}</button>
      })}
    </div>
  )
}

const Sidebar = ({ sideBarData }: SideBarProps) => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const [subNav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subNav);

  // const bigMaps = new Map<string,string>();
  // const maps = new Map<number, string>();
  // const smallMaps = new Map<number, string>();

  // sideBarData.map((bigCategory) => bigMaps.set(bigCategory.type.id, bigCategory.type.text));
  // sideBarData.map((category) => maps.set(category.id, category.type.text));
  // sideBarData.map((smallCategory) => smallMaps.set(smallCategory.id, smallCategory.title));

  // console.log(bigMaps);
  // console.log(maps);
  // console.log(smallMaps);

  // const tmp1:string[] = [];  
  // for(const item of Array.from(bigMaps)){
  //   tmp1.push(item[1]);
  // }
  // tmp1.reverse();
  // console.log(tmp1);

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
      <button type="button" onClick={showSidebar}>menu</button>
      <nav className={sidebar ? 'sidebar-menu-active' : 'sidebar-menu'}>
        <button className="big-menu-btn" type="button" onClick={showSubnav}>
          수업게시판
          <nav className={subNav ? 'subNav-active' : 'subNav'}>
            {courseBoard.map((course) => 
              <button className="small-menu-btn" type="button">{course.title}</button>
            )}
          </nav>
        </button>
        <button className="big-menu-btn" type="button" onClick={showSubnav}>
          질문게시판
          <nav className={subNav ? 'subNav-active' : 'subNav'}>
            {questionBoard.map((course) => 
              <button className="small-menu-btn" type="button">{course.title}</button>
            )}
          </nav>
        </button>
      </nav>
    </div>
  )
}

export default Sidebar;
