import React from 'react';
import moment from 'moment';

import 'css/TglBtn.css';

export default function CalDiffTime(curTime: string) {
  const currentTime = moment();
  const diffTime = currentTime.diff(moment(curTime, moment.ISO_8601));

  const diffSeconds = moment.duration(diffTime).asSeconds();
  const diffMinutes = moment.duration(diffTime).asMinutes();
  const diffHours = moment.duration(diffTime).asHours();
  const diffDays = moment.duration(diffTime).asDays();

  let finalString: string;

  if (diffDays === 1) {
    finalString = '하루 전';
  } else if (diffDays > 3000) {
    finalString = '';
  } else if (diffDays > 1) {
    finalString = `${Math.ceil(diffDays)}일 전`;
  } else if (diffHours >= 1) {
    finalString = `${Math.ceil(diffHours)}시간 전`;
  } else if (diffMinutes >= 1) {
    finalString = `${Math.ceil(diffMinutes)}분 전`;
  } else if (diffSeconds > 4) {
    finalString = `${Math.ceil(diffSeconds)}초 전`;
  } else if (diffSeconds >= 0) {
    finalString = '방금 전';
  } else {
    console.warn(`calculateDiffTimeError: createdTime=${curTime}`);
    finalString = '알 수 없음';
  }

  return finalString;
}
