import React from 'react';
import ArticleCreatePage from '../presentational/ArticleCreatePage';
import { articleAPI } from '../../api/api';
import { ArticleCreateApi } from '../../api/ApiProps';

const ArticleCreatePageContainer = () => {
  const onRegisterArticle = (newArticle: ArticleCreateApi) => {
    // api 호출로 post 날리고
    articleAPI.postArticle(newArticle);
    // ArticleDetail 조회 페이지로 이동.

    console.log(newArticle);
  };

  return <ArticleCreatePage onRegisterArticle={onRegisterArticle} />;
};

export default ArticleCreatePageContainer;
