import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import ArticleCreatePage from '../presentational/ArticleCreatePage';
import { articleAPI } from '../../api/api';
import { ArticleCreateApi } from '../../api/ApiProps';

interface MatchParams {
  id: string;
}

const ArticleCreatePageContainer = ({ match, history }: RouteComponentProps<MatchParams>) => {
  const onRegisterArticle = (newArticle: ArticleCreateApi) => {
    // api 호출로 post 날리고
    articleAPI.postArticle(newArticle);
    // ArticleDetail 조회 페이지로 이동.
    history.goBack();
    console.log(newArticle);
  };

  return <ArticleCreatePage onRegisterArticle={onRegisterArticle} history = {history} />;
};

export default ArticleCreatePageContainer;
