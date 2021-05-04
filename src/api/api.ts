import axios from 'axios';

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
};

export const commentsAPI = {
  get: () => {
    // const commentList = await getRequest(`${END_POINT}/~`);
    const commentListResponse = commentList;
    return commentListResponse;
  },
};
