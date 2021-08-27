import React, { useEffect, useState } from 'react';
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
    // api 호출로 post 날리고
    articleAPI.postArticle(newArticle);
    console.log(newArticle);
    // 새롭게 등록된 게시물 id를 알수 있는지? 아래 원래는 push('/article/${newid}')
    history.push('/article/3');
  };

  const loadData = async () => {
    const articleData = await articleAPI.get(/* location.state.modifyArticleId */);
    setModifyTargetArticle(articleData);
  };

  useEffect(() => {
    if (location.state !== undefined) {
      loadData();
    }
  }, [location.state]);

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
