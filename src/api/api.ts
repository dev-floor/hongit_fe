import axios from 'axios';
import { CommentApi, ArticleCreateApi } from './ApiProps';
import homeDummyData from '../data/HomeDummyData';
import allLectureDummyData from '../data/AllLectureDummyData';

const API_URL = 'http://34.64.111.91:8080/api';
const ARTICLE_URL = API_URL.concat('/articles');
const BOARD_URL = API_URL.concat('/boards');
const COMMENT_URL = API_URL.concat('/comments');
const USER_URL = API_URL.concat('/users');

export const getRequest = async (url: string) => {
  try {
    const response = await axios.get(url);
    if (response.status === 404) {
      throw Error('There would be error in requesting.');
    }
    const result = response.data;
    return result;
  } catch (e) {
    console.error(e);
    return e;
  }
};

export const postArticleRequest = async (
  url: string,
  data: ArticleCreateApi
) => {
  try {
    const response = await axios.post(url, data);
    if (response.status === 404) {
      throw Error('There would be error in requesting.');
    }
    const result = response.data;
    return result;
  } catch (e) {
    console.error(e);
    return e;
  }
};

export const putRequest = async (url: string, data: any) => {
  try {
    const response = await axios.put(url, data);
    if (response.status === 404) {
      throw Error('There would be error in requesting.');
    }
    const result = response.data;
    return result;
  } catch (e) {
    console.error(e);
    return e;
  }
};

export const articleAPI = {
  getById: async (articleId: string) => {
    const res = await getRequest(`${ARTICLE_URL}/${articleId}`);
    return res;
  },
  getFeedByBoardId: async (boardId: string) => {
    const res = await getRequest(`${ARTICLE_URL}/?boardId=${boardId}`);
    return res;
  },
  getFeedByNickName: async (nickname: string) => {
    const res = await getRequest(`${ARTICLE_URL}?nickname=${nickname}`);
    return res;
  },
  postArticle: (data: ArticleCreateApi) => {
    // const articlePost = await postRequest(`${END_POINT}/`, data);
    console.log(data);
  },
  delete: (/* id: string */) => {
    // return axios.delete('articles/${id}')
    console.log('=====ARTICLE DELETE API CALL=====');
  },
};

export const commentsAPI = {
  getByArticleId: async (articleId: string) => {
    const res = await getRequest(`${COMMENT_URL}?articleId=${articleId}`);
    return res;
  },
  getByNickName: async (nickName: string) => {
    const res = await getRequest(`${COMMENT_URL}?nickname=${nickName}`);
    return res;
  },
  registerNewComment: async (newComment: CommentApi, articleID: string) => {
    const token = window.localStorage.getItem('token');

    try {
      await axios.post(
        `${API_URL}/comments`,
        {
          articleId: Number(articleID),
          anonymous: newComment.anonymous,
          content: newComment.content,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (e) {
      console.log(e);
    }
  },
  registerUpdateComment: async (updateComment: CommentApi) => {
    const token = window.localStorage.getItem('token');

    try {
      await axios.post(
        `${API_URL}/comments/${updateComment.id}`,
        {
          content: updateComment.content,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (e) {
      console.log(e);
    }
  },
  registerDeleteComment: async (deleteId: number) => {
    const token = window.localStorage.getItem('token');
    try {
      await axios.delete(`${API_URL}/comments/${deleteId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (e) {
      console.log(e);
    }
  },
};

export const boardAPI = {
  getList: async () => {
    const res = await getRequest(BOARD_URL);
    return res;
  },
  getById: async (boardId: string) => {
    const res = await getRequest(`${BOARD_URL}/${boardId}`);
    return res;
  },
};

export const lectureAPI = {
  getAll: () => {
    const allLectureResponse = allLectureDummyData;
    return allLectureResponse;
  },
  putMyLecture: (data: number[]) => {
    // const response = await putRequest(`${END_POINT}/boards/bookmarks`);
    console.log('========My Lecture PUT API CALL========');
    console.log(data);
  },
};

export const homeAPI = {
  get: () => {
    const homeResponse = homeDummyData;
    return homeResponse;
  },
};

export const profileUserAPI = {
  getByNickName: async (nickName: string) => {
    const res = await getRequest(`${USER_URL}?nickname=${nickName}`);
    return res;
  },
};
