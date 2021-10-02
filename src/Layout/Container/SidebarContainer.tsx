import React, { useState, useEffect } from 'react';
import { boardAPI } from 'api/api';
import { SideBarDetailApi } from 'api/ApiProps';
import Sidebar from 'Layout/Presentational/Sidebar';

import 'css/Sidebar.css';

const SidebarContainer = () => {
  const [sidebarData, setSidebarData] = useState<SideBarDetailApi[]>([]);

  const loadData = async () => {
    const response = await boardAPI.getList();
    setSidebarData(response);
  };

  const onModifyMyLectures = (e: any) => {
    console.log('Modify data here.');
    console.log(e.target.value);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="main">
      <section className="side-bar">
        <Sidebar
          sideBarData={sidebarData}
          onModifyMyLectures={onModifyMyLectures}
        />
      </section>
    </div>
  );
};

export default SidebarContainer;
