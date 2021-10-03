import React, { useState, useEffect } from 'react';
import { boardAPI } from 'api/api';
import { SideBarDetailApi } from 'api/ApiProps';
import Sidebar from 'Layout/Presentational/Sidebar';

import 'css/Sidebar.css';

const SidebarContainer = () => {
  const [sidebarData, setSidebarData] = useState<SideBarDetailApi[]>([]);

  const loadData = async () => {
    const response = await boardAPI.getAll();
    if (response === undefined) {
      console.error('Error in getting user board infos');
    } else {
      setSidebarData(response);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="main">
      <section className="side-bar">
        <Sidebar sideBarData={sidebarData} />
      </section>
    </div>
  );
};

export default SidebarContainer;
