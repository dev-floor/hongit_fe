import React, { useState, useEffect } from 'react';
import { sidebarAPI } from 'api/api';
import { SideBarDetailApi } from 'api/ApiProps';
import TglBtn from 'Commons/TglBtn';
import Sidebar from 'Commons/Sidebar';

import 'css/TglBtn.css';
import 'css/Sidebar.css';

const App = () => {
  const [sidebarData, setSidebarData] = useState<SideBarDetailApi[]>([]);

  const loadData = async () => {
    const response = await sidebarAPI.get(/* sidebar */);
    setSidebarData(response);
  };

  useEffect(() => {
    loadData();
  }, []);

  const [showSidebar, setShowSidebar] = useState(false);
  const sideBarShowState = () => setShowSidebar(!showSidebar);

  const tempstr = 'HOME입니다';

  const onUpdateSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log('Api 를 업데이트');
  };

  return (
    <div className="main">
      <section className={showSidebar ? 'side-bar-active' : 'side-bar'}>
        <Sidebar sideBarData={sidebarData} />
      </section>
      <section className="content">
        <button className="menu-btn" type="button" onClick={sideBarShowState}>
          <i className="list icon" />
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
