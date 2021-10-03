import axios from 'axios';
import { CommentApi, ArticleCreateApi, SideBarDetailApi } from './ApiProps';
import homeDummyData from '../data/HomeDummyData';

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
    if (response.status === 500) {
      throw Error('Internal Server Error :: 500 .');
    }
    console.log(response.status);
    const result = response.data;
    return result;
  } catch (e) {
    console.error(e);
    // return e;
    return undefined;
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

export const putRequest = async (url: string, data: any, headers: any) => {
  try {
    const response = await axios.put(url, data, headers);
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
  getAll: async (): Promise<SideBarDetailApi[] | undefined> => {
    const token = window.localStorage.getItem('token');
    try {
      const response = await axios.get(`${BOARD_URL}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { data } = response;
      console.log(data);
      return data;
    } catch (e) {
      console.log(e);
      return undefined;
    }
  },
  getAllLectures: async () => {
    try {
      const res = await getRequest(`${BOARD_URL}/?type=COURSE_BOARD`);
      return res;
    } catch (e) {
      console.log(e);
      return undefined;
    }
  },
  putMyLecture: async (data: number[]) => {
    // const response = await putRequest(`${END_POINT}/boards/bookmarks`);
    console.log('========My Lecture PUT API CALL========');
    console.log(data);
    const token = window.localStorage.getItem('token');
    try {
      const response = await putRequest(`${BOARD_URL}/bookmarks`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  },
  getById: async (boardId: string) => {
    const res = await getRequest(`${BOARD_URL}/${boardId}`);
    return res;
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
