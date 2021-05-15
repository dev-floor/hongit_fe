import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import ArticleCreatePage from '../presentational/ArticleCreatePage';
import { articleAPI } from '../../api/api';
import { ArticleCreateApi } from '../../api/ApiProps';

const ArticleCreatePageContainer = () => {
  const history = useHistory();
  const location = useLocation<{ modifyArticleId: number }>();
  const [modifyTargetArticle, setModifyTargetArticle] = useState({
    options: [] as string[],
    title: '',
    anonymous: true,
    author: {
      name: '',
      image: '',
      github: '',
      blog: '',
      description: '',
    },
    createdDate: '',
    content: '',
    hashtags: [] as string[],
    favorites: 0,
    wonders: 0,
    clips: 0,
  });

  const onRegisterArticle = (newArticle: ArticleCreateApi) => {
    if (newArticle.title !== '') {
      // api 호출로 post 날리고
      articleAPI.postArticle(newArticle);
      console.log(newArticle);
      history.push('/Detail');
    }
  };

  useEffect(() => {
    if (location.state !== undefined) {
      // api 호출. location.state.modifyArticleId의 값에 해당하는 article 정보 불러야한다.
      const articleData = articleAPI.get();
      setModifyTargetArticle(articleData);
    }
  });

  return location.state === undefined ? (
    <ArticleCreatePage onRegisterArticle={onRegisterArticle} />
  ) : (
    <ArticleCreatePage
      onRegisterArticle={onRegisterArticle}
      modifiyTargetArticle={modifyTargetArticle}
    />
  );
};

export default ArticleCreatePageContainer;
