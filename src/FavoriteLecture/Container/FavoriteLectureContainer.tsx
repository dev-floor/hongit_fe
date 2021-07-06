import React, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { schoolYear, subjectName } from 'Atoms/atom';
import { allLectureAPI } from 'api/api';
import { FavoriteLectureApi } from 'api/ApiProps';
import FavortieLecture from '../Presentational/FavoriteLecture';

const FavoriteLectureContainer = () => {
  const [allLectureData, setAllLectureData] = useState<FavoriteLectureApi[]>(
    []
  );
  const [yearFilteredData, setYearFilteredData] = useState<string[]>([]);
  const [subjectFilteredData, setSubjecFilteredData] = useState<string[]>([]);
  const [finalFilteredData, setFinalFilteredData] = useState<string[]>([]);

  const selectedSchoolYear = useRecoilValue(schoolYear);
  const selectedSubject = useRecoilValue(subjectName);

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
  }, [selectedSchoolYear, allLectureData]);

  useEffect(() => {
    const professorSet = [] as string[];
    for (let i = 0; i < allLectureData.length; i += 1) {
      if (
        selectedSubject === allLectureData[i].subject &&
        !professorSet.includes(allLectureData[i].professor.name)
      ) {
        professorSet.push(allLectureData[i].professor.name);
      }
    }
    setFinalFilteredData(professorSet);
  }, [selectedSubject]);

  return (
    <FavortieLecture
      yearFilteredData={yearFilteredData}
      finalFilteredData={finalFilteredData}
    />
  );
};

export default FavoriteLectureContainer;
