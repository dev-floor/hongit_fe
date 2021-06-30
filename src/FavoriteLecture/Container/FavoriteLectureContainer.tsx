import React, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { schoolYear } from 'Atoms/atom';
import { allLectureAPI } from 'api/api';
import { BoardDetailApi } from 'api/ApiProps';
import FavortieLecture from '../Presentational/FavoriteLecture';

const FavoriteLectureContainer = () => {
  const [allLectureData, setAllLectureData] = useState<BoardDetailApi[]>([]);
  const [yearFilteredData, setYearFilteredData] = useState<string[]>([]);
  const [finalFilteredData, setFinalFilteredData] = useState<BoardDetailApi[]>(
    []
  );
  const selectedSchoolYear = useRecoilValue(schoolYear);

  const loadData = async () => {
    const totalLectureInfo = await allLectureAPI.get();
    setAllLectureData(totalLectureInfo);
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    const lecturesSet = [] as string[];
    for (let i = 0; i < allLectureData.length; i += 1) {
      if (
        selectedSchoolYear === allLectureData[i].grade.text &&
        !lecturesSet.includes(allLectureData[i].subject)
      ) {
        lecturesSet.push(allLectureData[i].subject);
      }
    }
    setYearFilteredData(lecturesSet);
  }, [selectedSchoolYear]);

  return (
    <FavortieLecture
      yearFilteredData={yearFilteredData}
      finalFilteredData={finalFilteredData}
    />
  );
};

export default FavoriteLectureContainer;
