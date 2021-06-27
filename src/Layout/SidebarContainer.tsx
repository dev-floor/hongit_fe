import React, { useState, useEffect } from 'react';
import { sidebarAPI } from 'api/api';
import { SideBarDetailApi } from 'api/ApiProps';
import Sidebar from 'Layout/Sidebar';

import 'css/Sidebar.css';

const SidebarContainer = () => {
  const [sidebarData, setSidebarData] = useState<SideBarDetailApi[]>([]);

  const loadData = async () => {
    const response = await sidebarAPI.get(/* sidebar */);
    setSidebarData(response);
  };

  useEffect(() => {
    loadData();
  }, []);

  // const [showSidebar, setShowSidebar] = useState(false);
  // const sideBarShowState = () => setShowSidebar(!showSidebar);

  return (
    <div className="main">
      {/* <section className={showSidebar ? 'side-bar-active' : 'side-bar'}> */}
      <section className="side-bar-active">
        <Sidebar sideBarData={sidebarData} />
      </section>
      {/* <section className="content">
        <button className="menu-btn" type="button" onClick={sideBarShowState}>
          <i className="list icon" />
        </button>
      </section> */}
    </div>
  );
};

export default SidebarContainer;
