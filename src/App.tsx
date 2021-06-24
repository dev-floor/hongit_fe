import React, { useState } from 'react';
import { sidebarAPI } from 'api/api';
import TglBtn from 'Commons/TglBtn';
import Sidebar from './Commons/Sidebar';

import 'css/TglBtn.css';

const App = () => {
  const sideBarData = sidebarAPI.get();

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  
  const tempstr = 'HOME입니다';

  const onUpdateSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log('Api 를 업데이트');
  };

  return (
    <div className="main">
      <section className={sidebar ? 'side-bar-active' : 'side-bar'}>
        <Sidebar sideBarData={sideBarData} />
      </section>
      <section className="content">
        <button className="menu-btn" type="button" onClick={showSidebar}>
          <i className="list icon"/>
        </button>
        {tempstr}
        <div className="btn-area">
          <TglBtn type="heart" count={10} handler={onUpdateSubmit} />
          <TglBtn type="wonder" count={20} handler={onUpdateSubmit} />
          <TglBtn type="scrap" count={30} handler={onUpdateSubmit} />
        </div>
        <div className="btn-area">
          <TglBtn type="wonder" count={70} handler={onUpdateSubmit} />
          <TglBtn type="heart" count={25} handler={onUpdateSubmit} />
          <TglBtn type="scrap" count={30} handler={onUpdateSubmit} />
        </div>
      </section>
    </div>
  );
};

export default App;
