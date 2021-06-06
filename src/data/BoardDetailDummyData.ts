const boardDetailDummyData = {
  id: 1,
  title: '알고리즘 - 정균락',
  professor: {
    name: '정균락',
    email: 'hello@world.com',
  },
  subject: '알고리즘',
  type: {
    id: 'COURSE_BOARD',
    text: '수업게시판',
  },
  grade: {
    id: 'SENIOR',
    text: '4학년',
  },
  options: [
    {
      id: 1,
      text: '1분반/월2수34',
      type: {
        id: 'COURSE_GROUP',
        text: '분반',
      },
    },
    {
      id: 2,
      text: '2분반/월3수67',
      type: {
        id: 'COURSE_GROUP',
        text: '분반',
      },
    },
    {
      id: 3,
      text: '질문',
      type: {
        id: 'ARTICLE_KIND',
        text: '게시글 종류',
      },
    },
    {
      id: 4,
      text: '일정',
      type: {
        id: 'ARTICLE_KIND',
        text: '게시글 종류',
      },
    },
  ],
};

export default boardDetailDummyData;
