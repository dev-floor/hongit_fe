const boardDetailDummyData = {
  id: 1,
  title: '알고리즘 / 정균락',
  professor: {
    name: '정균락',
    email: 'hello@world.com',
  },
  subject: '알고리즘',
  openingSemester: {
    year: '2021',
    semester: '1학기',
  },
  grade: '3학년',
  type: 'CLASS_BOARD',
  typeText: '수업 게시판',
  options: [
    {
      id: 'CLASS_ONE',
      type: 'COURSE_GROUP',
      text: '1분반',
      timetable: '월5화67',
    },
    {
      id: 'CLASS_TWO',
      type: 'COURSE_GROUP',
      text: '2분반',
      timetable: '수2목89',
    },
    {
      id: 'QUESTION',
      type: 'ARTICLE_KIND',
      text: '질문',
    },
    {
      id: 'SCHEDUAL',
      type: 'ARTICLE_KIND',
      text: '일정',
    },
  ],
};

export default boardDetailDummyData;
