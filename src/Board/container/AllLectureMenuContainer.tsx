import React, { useState, useEffect } from 'react';

import { lectureAPI } from 'api/api';
import { BoardDetailApi as AllLectureDetailApi } from 'api/ApiProps';
import AllLectureMenu from '../presentational/AllLectureMenu';

const AllLectureMenuContainer = () => {
  const [allLectureData, setAllLectureData] = useState<AllLectureDetailApi[]>(
    []
  );

  const loadData = async () => {
    // FIX ME
    const totalLectureInfo = await lectureAPI.getAll();
    setAllLectureData(totalLectureInfo);
  };

  useEffect(() => {
    loadData();
  }, []);

  return <AllLectureMenu allLectureData={allLectureData} />;
};

export default AllLectureMenuContainer;
