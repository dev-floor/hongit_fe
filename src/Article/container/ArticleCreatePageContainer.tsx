import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import ArticleCreatePage from '../presentational/ArticleCreatePage';
import { articleAPI } from '../../api/api';
import { ArticleCreateApi } from '../../api/ApiProps';

const ArticleCreatePageContainer = () => {
  const history = useHistory();
  const location = useLocation<{ modifyArticleId: string }>();
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
    // api 호출로 post 날리고
    articleAPI.postArticle(newArticle);

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
