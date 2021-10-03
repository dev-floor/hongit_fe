import React, { useState, useEffect } from 'react';

import { useRecoilValue, useSetRecoilState } from 'recoil';
import { grade, subjectName, selectedMyLectures } from 'Atoms/atom';

import { boardAPI, sidebarAPI } from 'api/api';
import { BoardDetailApi as AllLectureInfosApi } from 'api/ApiProps';
import MyLecture from '../presentational/MyLecture';

import 'css/myLecture.css';

const MyLectureContainer = () => {
  const [allLectureData, setAllLectureData] = useState<AllLectureInfosApi[]>(
    []
  );
  const [yearFilteredData, setYearFilteredData] = useState<string[]>([]);
  const [finalFilteredData, setFinalFilteredData] = useState<string[]>([]);

  const selectedGrade = useRecoilValue(grade);
  const selectedSubject = useRecoilValue(subjectName);
  const setMyLectures = useSetRecoilState(selectedMyLectures);

  const loadData = async () => {
    const totalLectureInfo = await boardAPI.getAllLectures();
    totalLectureInfo && setAllLectureData(totalLectureInfo);
  };

  const onAddMyLecture = (lectures: string[]) => {
    const selectedFavoriteLecture = allLectureData.filter((data) =>
      lectures.includes(data.title)
    );
    const selectedMyLectureIds = selectedFavoriteLecture.map((lec) => lec.id);
    setMyLectures(selectedFavoriteLecture);
    sidebarAPI.putMyLecture(selectedMyLectureIds);
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
    <section className="my-lecture-wrapper">
      <MyLecture
        yearFilteredData={yearFilteredData}
        finalFilteredData={finalFilteredData}
        onAddSiderBars={onAddMyLecture}
      />
    </section>
  );
};

export default MyLectureContainer;
