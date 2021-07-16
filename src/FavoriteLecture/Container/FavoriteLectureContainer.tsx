import React, { useState, useEffect } from 'react';

import { useRecoilValue, useSetRecoilState } from 'recoil';
import { grade, subjectName, selectedFavorites } from 'Atoms/atom';

import { allLectureAPI } from 'api/api';
import { AllLectureApi } from 'api/ApiProps';
import FavortieLecture from '../Presentational/FavoriteLecture';

const FavoriteLectureContainer = () => {
  const [allLectureData, setAllLectureData] = useState<AllLectureApi[]>(
    []
  );
  const [yearFilteredData, setYearFilteredData] = useState<string[]>([]);
  const [finalFilteredData, setFinalFilteredData] = useState<string[]>([]);

  const selectedGrade = useRecoilValue(grade);
  const selectedSubject = useRecoilValue(subjectName);
  const setFavorites = useSetRecoilState(selectedFavorites);

  const loadData = async () => {
    const totalLectureInfo = await allLectureAPI.get();
    setAllLectureData(totalLectureInfo);
  };

  const onAddSiderBars = (lectures: string[]) => {
    setFavorites(() =>
      allLectureData.filter((data) => lectures.includes(data.title))
    );
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    const lecturesSet = [] as string[];
    for (let i = 0; i < allLectureData.length; i += 1) {
      if (
        selectedGrade === allLectureData[i].grade.text &&
        !lecturesSet.includes(allLectureData[i].subject)
      ) {
        lecturesSet.push(allLectureData[i].subject);
      }
    }
    setYearFilteredData(lecturesSet);
  }, [selectedGrade, allLectureData]);

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
  }, [selectedSubject, allLectureData]);

  return (
    <FavortieLecture
      yearFilteredData={yearFilteredData}
      finalFilteredData={finalFilteredData}
      onAddSiderBars={onAddSiderBars}
    />
  );
};

export default FavoriteLectureContainer;
