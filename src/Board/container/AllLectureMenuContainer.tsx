import React, { useState, useEffect } from 'react';

import { allLectureAPI } from 'api/api';
import { AllLectureApi } from 'api/ApiProps';
import AllLectureMenu from '../presentational/AllLectureMenu';

const AllLectureMenuContainer = () => {
  const [allLectureData, setAllLectureData] = useState<AllLectureApi[]>(
    []
  );

  const loadData = async () => {
    const totalLectureInfo = await allLectureAPI.get();
    setAllLectureData(totalLectureInfo);
  };

  useEffect(() => {
    loadData();
  }, []);

  return(
    <AllLectureMenu allLectureData={allLectureData}/>
  )
}

export default AllLectureMenuContainer;
