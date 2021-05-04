import React from 'react';
<<<<<<< HEAD
import { RouteComponentProps } from 'react-router-dom';
=======
>>>>>>> ac57c5badb2ca50f8aa50f5ad2a7e6983ded1bdb
import ArticleCreatePage from '../presentational/ArticleCreatePage';
import { articleAPI } from '../../api/api';
import { ArticleCreateApi } from '../../api/ApiProps';

<<<<<<< HEAD
interface MatchParams {
  id: string;
}

const ArticleCreatePageContainer = ({ match, history }: RouteComponentProps<MatchParams>) => {
=======
const ArticleCreatePageContainer = () => {
>>>>>>> ac57c5badb2ca50f8aa50f5ad2a7e6983ded1bdb
  const onRegisterArticle = (newArticle: ArticleCreateApi) => {
    // api 호출로 post 날리고
    articleAPI.postArticle(newArticle);
    // ArticleDetail 조회 페이지로 이동.
<<<<<<< HEAD
    history.goBack();
    console.log(newArticle);
  };

  return <ArticleCreatePage onRegisterArticle={onRegisterArticle} history = {history} />;
=======

    console.log(newArticle);
  };

  return <ArticleCreatePage onRegisterArticle={onRegisterArticle} />;
>>>>>>> ac57c5badb2ca50f8aa50f5ad2a7e6983ded1bdb
};

export default ArticleCreatePageContainer;
