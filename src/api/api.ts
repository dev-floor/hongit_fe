import axios from 'axios';
import { ArticleCreateApi } from './ApiProps';

import articleByList from '../data/articleList.json';
import commentList from '../data/commentList.json';
import articleDetail from '../data/articleInfo.json';

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

export const postArticleRequest = async (url: string, data: ArticleCreateApi) => {
  try {
    const response = await axios.post(url, data);
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
    const articleDetailResponse = articleDetail;
    return articleDetailResponse;
  },
  getByList: () => {
    // const articleByList = await getRequest(`${END_POINT}/`);
    const articleByListResponse = articleByList;
    return articleByListResponse;
  },
  postArticle: (data: ArticleCreateApi) => {
    // const articlePost = await postRequest(`${END_POINT}/`, data);
    // 여기서 articleByList 를 수정할 수 있나??
    console.log(data);
  },
};

export const commentsAPI = {
  get: () => {
    // const commentList = await getRequest(`${END_POINT}/~`);
    const commentListResponse = commentList;
    return commentListResponse;
  },
};
