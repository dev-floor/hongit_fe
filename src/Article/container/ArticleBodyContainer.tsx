import React from 'react';
import { articleAPI } from '../../api/api';
import ArticleBody from '../presentational/ArticleBody';
import articleInfoDummyData from '../../data/ArticleInfoDummyData';
import '../css/ArticleBody.css';

const ArticleBodyContainer = () => {
  const articleData = articleAPI.get();

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
