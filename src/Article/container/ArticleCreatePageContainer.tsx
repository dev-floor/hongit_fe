import React from 'react';
import { useHistory } from 'react-router-dom';
import ArticleCreatePage from '../presentational/ArticleCreatePage';
import { articleAPI } from '../../api/api';
import { ArticleCreateApi } from '../../api/ApiProps';

const ArticleCreatePageContainer = () => {
  const history = useHistory();
  const onRegisterArticle = (newArticle: ArticleCreateApi) => {
    if (newArticle.title !== '') {
      // api 호출로 post 날리고
      articleAPI.postArticle(newArticle);
      history.push('/Detail');
    }
  };

  return <ArticleCreatePage onRegisterArticle={onRegisterArticle} />;
};

export default ArticleCreatePageContainer;
