const allLectureDummyData = [
  {
    id: 1,
    title: 'C프로그래밍 및 실습 - 박지헌',
    professor: {
      name: '박지헌',
      email: 'hello@world.com',
    },
    subject: 'C프로그래밍 및 실습',
    type: {
      id: 'COURSE_BOARD',
      text: '수업게시판',
    },
    grade: {
      id: 'FRESHMAN',
      text: '1학년',
    },
  },
  {
    id: 2,
    title: 'C프로그래밍 및 실습 - 김선일',
    professor: {
      name: '김선일',
      email: 'hello@world.com',
    },
    subject: 'C프로그래밍 및 실습',
    type: {
      id: 'COURSE_BOARD',
      text: '수업게시판',
    },
    grade: {
      id: 'FRESHMAN',
      text: '1학년',
    },
  },
  {
    id: 3,
    title: '객체지향 프로그래밍 - 김일도',
    professor: {
      name: '김일도',
      email: 'hello@world.com',
    },
    subject: '객체지향 프로그래밍',
    type: {
      id: 'COURSE_BOARD',
      text: '수업게시판',
    },
    grade: {
      id: 'SOPHOMORE',
      text: '2학년',
    },
  },
  {
    id: 4,
    title: '객체지향 프로그래밍 - 원유헌',
    professor: {
      name: '원유헌',
      email: 'hello@world.com',
    },
    subject: '객체지향 프로그래밍',
    type: {
      id: 'COURSE_BOARD',
      text: '수업게시판',
    },
    grade: {
      id: 'SOPHOMORE',
      text: '2학년',
    },
  },
  {
    id: 5,
    title: '자료구조 프로그래밍 - 송하윤',
    professor: {
      name: '송하윤',
      email: 'hello@world.com',
    },
    subject: '자료구조 프로그래밍',
    type: {
      id: 'COURSE_BOARD',
      text: '수업게시판',
    },
    grade: {
      id: 'SOPHOMORE',
      text: '2학년',
    },
  },
  {
    id: 6,
    title: '자료구조 프로그래밍 - 배성일',
    professor: {
      name: '배성일',
      email: 'hello@world.com',
    },
    subject: '자료구조 프로그래밍',
    type: {
      id: 'COURSE_BOARD',
      text: '수업게시판',
    },
    grade: {
      id: 'SOPHOMORE',
      text: '2학년',
    },
  },
  {
    id: 7,
    title: '수치해석 - 박지헌',
    professor: {
      name: '박지헌',
      email: 'hello@world.com',
    },
    subject: '수치해석',
    type: {
      id: 'COURSE_BOARD',
      text: '수업게시판',
    },
    grade: {
      id: 'SOPHOMORE',
      text: '2학년',
    },
  },
  {
    id: 8,
    title: '운영체제 - 김선일',
    professor: {
      name: '김선일',
      email: 'hello@world.com',
    },
    subject: '운영체제',
    type: {
      id: 'COURSE_BOARD',
      text: '수업게시판',
    },
    grade: {
      id: 'JUNIOR',
      text: '3학년',
    },
  },
  {
    id: 9,
    title: '운영체제 - 하란',
    professor: {
      name: '하란',
      email: 'hello@world.com',
    },
    subject: '운영체제',
    type: {
      id: 'COURSE_BOARD',
      text: '수업게시판',
    },
    grade: {
      id: 'JUNIOR',
      text: '3학년',
    },
  },
  {
    id: 10,
    title: '기초데이터베이스 - 윤영',
    professor: {
      name: '윤영',
      email: 'hello@world.com',
    },
    subject: '기초데이터베이스',
    type: {
      id: 'COURSE_BOARD',
      text: '수업게시판',
    },
    grade: {
      id: 'JUNIOR',
      text: '3학년',
    },
  },
  {
    id: 11,
    title: '기초데이터베이스 - 홍길동',
    professor: {
      name: '홍길동',
      email: 'hello@world.com',
    },
    subject: '기초데이터베이스',
    type: {
      id: 'COURSE_BOARD',
      text: '수업게시판',
    },
    grade: {
      id: 'JUNIOR',
      text: '3학년',
    },
  },
  {
    id: 12,
    title: '컴퓨터구조 - 박도순',
    professor: {
      name: '박도순',
      email: 'hello@world.com',
    },
    subject: '컴퓨터구조',
    type: {
      id: 'COURSE_BOARD',
      text: '수업게시판',
    },
    grade: {
      id: 'JUNIOR',
      text: '3학년',
    },
  },
  {
    id: 13,
    title: '어셈블리언어 및 실습 - 박도순',
    professor: {
      name: '박도순',
      email: 'hello@world.com',
    },
    subject: '어셈블리언어 및 실습',
    type: {
      id: 'COURSE_BOARD',
      text: '수업게시판',
    },
    grade: {
      id: 'JUNIOR',
      text: '3학년',
    },
  },
  {
    id: 14,
    title: '창직설계 - 김선일',
    professor: {
      name: '김선일',
      email: 'hello@world.com',
    },
    subject: '창직설계',
    type: {
      id: 'COURSE_BOARD',
      text: '수업게시판',
    },
    grade: {
      id: 'SENIOR',
      text: '4학년',
    },
  },
  {
    id: 15,
    title: '창직설계 - 권건우',
    professor: {
      name: '권건우',
      email: 'hello@world.com',
    },
    subject: '창직설계',
    type: {
      id: 'COURSE_BOARD',
      text: '수업게시판',
    },
    grade: {
      id: 'SENIOR',
      text: '4학년',
    },
  },
  {
    id: 16,
    title: '창직설계 - 하란',
    professor: {
      name: '하란',
      email: 'hello@world.com',
    },
    subject: '창직설계',
    type: {
      id: 'COURSE_BOARD',
      text: '수업게시판',
    },
    grade: {
      id: 'SENIOR',
      text: '4학년',
    },
  },
  {
    id: 17,
    title: '창직설계 - 정균락',
    professor: {
      name: '정균락',
      email: 'hello@world.com',
    },
    subject: '창직설계',
    type: {
      id: 'COURSE_BOARD',
      text: '수업게시판',
    },
    grade: {
      id: 'SENIOR',
      text: '4학년',
    },
  },
  {
    id: 18,
    title: '인공지능 - 권건우',
    professor: {
      name: '권건우',
      email: 'hello@world.com',
    },
    subject: '인공지능',
    type: {
      id: 'COURSE_BOARD',
      text: '수업게시판',
    },
    grade: {
      id: 'SENIOR',
      text: '4학년',
    },
  },
  {
    id: 19,
    title: '창직설계 - 윤영',
    professor: {
      name: '윤영',
      email: 'hello@world.com',
    },
    subject: '창직설계',
    type: {
      id: 'COURSE_BOARD',
      text: '수업게시판',
    },
    grade: {
      id: 'SENIOR',
      text: '4학년',
    },
  },
];

export default allLectureDummyData;
