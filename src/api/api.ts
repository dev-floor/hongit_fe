import axios from 'axios';
import { ProfileCommentApi, CommentApi, ArticleCreateApi } from './ApiProps';

import articleListDummyData from '../data/ArticleListDummyData';
import commentListDummyData from '../data/CommentListDummyData';
import articleInfoDummyData from '../data/ArticleInfoDummyData';
import boardDetailDummyData from '../data/BoardDetailDummyData';
import homeDummyData from '../data/HomeDummyData';
import sidebarDummyData from '../data/SideBarDummyData';
import allLectureDummyData from '../data/AllLectureDummyData';
import profileUserDummyData from '../data/ProfileUserDummyData';
import profileCommentDummyData from '../data/ProfileCommentDummyData';

// const END_POINT = 'www.NotUsedYet.com';

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

export const putCommentRequest = async (url: string, data: CommentApi[]) => {
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
  get: () => {
    // const articleInfo = await getRequest(`${END_POINT}/articles/${articleId}`);
    const articleDetailResponse = articleInfoDummyData;
    return articleDetailResponse;
  },
  getByList: () => {
    // const articleByList = await getRequest(`${END_POINT}/articles`);
    const articleByListResponse = articleListDummyData;
    return articleByListResponse;
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
    console.log('========COMMENTS PUT API CALL======');
    console.log(data);
  },
};

export const boardAPI = {
  get: () => {
    const boardDetailResponse = boardDetailDummyData;
    return boardDetailResponse;
  },
};

export const sidebarAPI = {
  get: () => {
    const sideBarResponse = sidebarDummyData;
    return sideBarResponse;
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
