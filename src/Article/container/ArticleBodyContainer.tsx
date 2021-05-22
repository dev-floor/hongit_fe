import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { ArticleDetailApi } from 'api/ApiProps';
import { selectedArticleId } from './ArticleDetailContainer';
import { articleAPI } from '../../api/api';
import ArticleBody from '../presentational/ArticleBody';

const ArticleBodyContainer = () => {
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

  return (
    <ArticleBody
      options={articleData.options}
      title={articleData.title}
      anonymous={articleData.anonymous}
      createdDate={articleData.createdDate}
      author={articleData.author}
      content={articleData.content}
      hashtags={articleData.hashtags}
      favorites={articleData.favorites}
      wonders={articleData.wonders}
      clips={articleData.clips}
    />
  );
};

export default ArticleBodyContainer;
