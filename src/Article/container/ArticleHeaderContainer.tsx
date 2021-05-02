import React from 'react';
import ArticleHeader from '../presentational/ArticleHeader';
import { articleAPI } from '../../api/api';
import '../css/ArticleHeader.css';

const ArticleHeaderContainer = () => {
  // this is for api procedures.
  const articleData = articleAPI.get();

  return (
    <ArticleHeader
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

export default ArticleHeaderContainer;