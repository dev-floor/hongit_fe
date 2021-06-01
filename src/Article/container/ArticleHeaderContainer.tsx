import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useRecoilValue } from 'recoil';

import { articleAPI } from '../../api/api';
import { ArticleDetailApi } from 'api/ApiProps';

import { selectedArticleId } from './ArticleDetailContainer';
import ArticleHeader from '../presentational/ArticleHeader';

const ArticleHeaderContainer = () => {
  const history = useHistory();
  const articleId = useRecoilValue(selectedArticleId);
  const [articleData, setArticleData] = useState<ArticleDetailApi>({
    options: [''],
    title: '',
    anonymous: false,
    author: {
      name: '',
      image: '',
      github: '',
      blog: '',
      description: '',
    },
    createdDate: '',
    content: '',
    hashtags: [''],
    favorites: 0,
    wonders: 0,
    clips: 0,
  });

  const loadData = async () => {
    const response = await articleAPI.get(/* articleId */);
    setArticleData(response);
  };

  useEffect(() => {
    loadData();
  }, []);

  const onUpdateArticle = (id: string) => {
    history.push({
      pathname: '/write',
      state: { modifyArticleId: id },
    });
  };

  const onDeleteArticle = (id: string) => articleAPI.delete(/* id */);
       
  return (
    <ArticleHeader
      onUpdateArticle={onUpdateArticle}
      onDeleteArticle={onDeleteArticle}
      articleData={articleData}
    />
  );
};

export default ArticleHeaderContainer;
