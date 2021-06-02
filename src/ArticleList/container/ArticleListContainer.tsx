import React from 'react';
import { articleAPI } from 'api/api';
import ArticleListArea from '../presentational/ArticleList';

const ArticleListContainer = () => {
  const articleListData = articleAPI.getByList(); // 여기에 BoardId를 전달하여 List를 받아오고
  return <ArticleListArea articleListData={articleListData} />;
};

export default ArticleListContainer;
