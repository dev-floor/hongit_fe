import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight, FiChevronDown } from 'react-icons/fi';
import { SideBarProps } from 'interface/ArgProps';
import { SideBarDetailApi } from '../../api/ApiProps';

const SubMenu = (menu: SideBarDetailApi) => {
  const { title } = {...menu};
  
  // const uniqueTitle = new Set(title);
  
  return (
    <div className="sub-menu">
      <FiChevronRight size="20"/>
      <Link to='/boards/{id}'>{title}</Link>
    </div>
  )
}

const Sidebar = ({ sideBarData }: SideBarProps) => {
  const [subMenu, setSubMenu] = useState(false);

  const showSubMenu = () => setSubMenu(!subMenu);

  return (
  <div className="menu" /* onClick={typeText && showSubMenu} */>
    <div>
      {sideBarData.map((category) => (
          <h3>{category.typeText}</h3>
      ))}
      {sideBarData.map((subCategory) => (
        <SubMenu 
          id={subCategory.id} 
          title={subCategory.title} 
          grade={subCategory.grade}
          type={subCategory.type}
          typeText={subCategory.typeText}
        />
      ))}
    </div>
  </div> 
  )
}

export default Sidebar;
