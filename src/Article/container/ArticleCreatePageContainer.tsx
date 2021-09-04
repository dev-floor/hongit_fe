import React, { useEffect, useState, useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { articleAPI } from 'api/api';
import { ArticleCreateApi, OptionResponse } from 'api/ApiProps';
import ArticleCreatePage from '../presentational/ArticleCreatePage';

const ArticleCreatePageContainer = () => {
  const history = useHistory();
  const location = useLocation<{ modifyArticleId: string }>();
  const [modifyTargetArticle, setModifyTargetArticle] = useState({
    id: 0,
    options: [] as OptionResponse[],
    title: '',
    anonymous: true,
    author: {
      nickname: '',
      type: { id: '', text: '' },
      image: '',
      github: '',
      blog: '',
      description: '',
    },
    content: '',
    hashtags: [] as string[],
    favoriteCount: 0,
    wonderCount: 0,
    clipCount: 0,
    createdAt: '',
    modifiedAt: '',
  });

  const onRegisterArticle = (newArticle: ArticleCreateApi) => {
    // FIX ME
    articleAPI.postArticle(newArticle); // api 호출로 post 날리고
    console.log(newArticle);
    history.push('/article/1');
    // history.push('/article/${newid}'); // 새롭게 등록된 게시물 id를 알수 있는지?
  };

  const loadData = useCallback(async () => {
    if (location.state !== undefined) {
      const articleData = await articleAPI.getById(
        location.state.modifyArticleId
      );
      setModifyTargetArticle(articleData);
    }
  }, [location.state]);

  useEffect(() => {
    loadData();
  }, [loadData]);

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
