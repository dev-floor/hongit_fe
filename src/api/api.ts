import axios from 'axios';
import { CommentApi, ArticleCreateApi, SignUpApi } from './ApiProps';
import commentListDummyData from '../data/CommentListDummyData';
import boardDetailDummyData from '../data/BoardDetailDummyData';
import homeDummyData from '../data/HomeDummyData';
import sidebarDummyData from '../data/SideBarDummyData';
import allLectureDummyData from '../data/AllLectureDummyData';
import profileUserDummyData from '../data/ProfileUserDummyData';
import profileCommentDummyData from '../data/ProfileCommentDummyData';

const API_URL = 'http://34.64.111.91:8080/api';
const ARTICLE_URL = API_URL.concat('/articles');
const BOARD_URL = API_URL.concat('/boards');
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

export const postRequest = async (
  url: string,
  data: ArticleCreateApi | SignUpApi
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
    console.log(`feed:: ${boardId}`);
    const res = await getRequest(`${ARTICLE_URL}/?boardId=${boardId}`);
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
  get: () => {
    // const commentList = await getRequest(`${END_POINT}/~`);
    const commentListResponse = commentListDummyData;
    return commentListResponse;
  },
  putComments: (data: CommentApi[]) => {
    // const commentPuts = await putRequest(`${END_POINT}/`, data);
    console.log('========COMMENTS PUT API CALL========');
  },
};

export const boardAPI = {
  get: () => {
    const boardDetailResponse = boardDetailDummyData;
    return boardDetailResponse;
  },
  getList: async () => {
    const res = await getRequest(BOARD_URL);
    return res;
  },
  getById: async (boardId: string) => {
    const res = await getRequest(`${BOARD_URL}/${boardId}`);
    return res;
  },
};

export const sidebarAPI = {
  get: () => {
    const sideBarResponse = sidebarDummyData;
    return sideBarResponse;
  },

  putMyLecture: (data: number[]) => {
    // const response = await putRequest(`${END_POINT}/boards/bookmarks`);
    console.log('========My Lecture PUT API CALL========');
    console.log(data);
  },
};

export const allLectureAPI = {
  get: () => {
    const allLectureResponse = allLectureDummyData;
    return allLectureResponse;
  },
};

export const homeAPI = {
  get: () => {
    const homeResponse = homeDummyData;
    return homeResponse;
  },
};

export const profileUserAPI = {
  get: () => {
    const profileUserResponse = profileUserDummyData;
    return profileUserResponse;
  },
};

export const profileCommentAPI = {
  get: () => {
    const profileCommentResponse = profileCommentDummyData;
    return profileCommentResponse;
  },
};
