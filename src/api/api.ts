import axios from 'axios';

<<<<<<< HEAD
import articleByList from '../data/articleList.json';
import commentList from '../data/commentList.json';
import articleDetail from '../data/articleInfo.json';

=======
>>>>>>> e217e31... feat(component): Update area, container component.
const END_POINT = 'www.NotUsedYet.com';

export const getRequest = async (url: string) => {
  try {
    const response = await axios.get(url);
    if (response.status === 404) {
      throw Error('There would be error in requesting.');
    }
    const result = await response.data;
    return result;
  } catch (e) {
    console.error(e);
    return e;
  }
};

export const articleAPI = {
  get: () => {
    // const articleDetail = await getRequest(`${END_POINT}/`);
<<<<<<< HEAD
    const articleDetailResponse = articleDetail;
    return articleDetailResponse;
  },
  getByList: () => {
    // const articleByList = await getRequest(`${END_POINT}/`);
    const articleByListResponse = articleByList;
    return articleByListResponse;
=======
    const articleDetail = {
      options: ['알고리즘 분석', '정균락', '1분반'],
      title: '오늘 수업에서 이분탐색 관련',
      anonymous: false,
      author: {
        name: '이현주',
        image: '../logo.svg',
        github: 'https://naver.com',
        blog: 'https://naver.com',
        description:
          '오늘 3시 수업 알고리즘 수업시간에 균락찡이 말씀하신 부분 질문있습니다. 어쩌구저쩌구',
      },
      createdDate: '20200411',
      content: '',
      hashtags: ['#먼말', '#개어렵'],
      favorites: 1,
      wonders: 1,
      clips: 1,
    };

    return articleDetail;
  },
  getByList: () => {
    // const articleByList = await getRequest(`${END_POINT}/`);
    const articleByList = [
      {
        id: 1,
        options: ['하란', '알고리즘 분석', '2분반'],
        title: '아니 과제 무슨 이따구임',
        anonymous: true,
        author: {
          name: '',
        },
        createdDate: '20210420',
        modifiedDate: '',
        content: '과제 개 헬 그자체아닌가욤? 아니 무슨 손코딩을 해오래',
        favorites: 39,
        wonders: 1,
        clips: 1,
      },
      {
        id: 2,
        options: ['김선일', '운영체제', '1분반'],
        title: '파일 시스템 과제 관련 질문해봅니다!',
        anonymous: false,
        author: {
          name: '홍석기',
        },
        createdDate: '20201103',
        modifiedDate: '',
        content: '저만 어렵나요 이과제년?',
        favorites: 2,
        wonders: 0,
        clips: 1,
      },
    ];
    return articleByList;
>>>>>>> e217e31... feat(component): Update area, container component.
  },
};

export const commentsAPI = {
  get: () => {
    // const commentList = await getRequest(`${END_POINT}/~`);
<<<<<<< HEAD
    const commentListResponse = commentList;
    return commentListResponse;
=======
    const commentList = [
      {
        anonymous: false,
        author: {
          name: '현주',
          image: 'https://hello.com',
          github: 'lxxjn0',
          blog: 'https://ell.com',
          description: '',
        },
        content: '정말 유익한 글이였습니다!',
        favorites: 2,
      },
      {
        anonymous: true,
        author: {
          name: 'hello',
          image: 'https://hello.com',
          github: 'lxxjn0',
          blog: 'https://ell.com',
          description: '',
        },
        content: '싫어요.',
        favorites: 1,
      },
      {
        anonymous: false,
        author: {
          name: '다연',
          image: 'https://hello.com',
          github: 'lxxjn0',
          blog: 'https://ell.com',
          description: '',
        },
        content: '최고에요!',
        favorites: 10,
      },
    ];
    return commentList;
>>>>>>> e217e31... feat(component): Update area, container component.
  },
};
