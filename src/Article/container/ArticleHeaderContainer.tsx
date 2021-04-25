import React from 'react';
import ArticleHeader from '../presentational/ArticleHeader';
import articleInfo from '../../data/articleInfo.json';
import '../css/ArticleHeader.css';

const ArticleHeaderContainer = () => {
  // this is for api procedures.
  const test = '';

  return (
    <ArticleHeader
      options={articleInfo.options}
      title={articleInfo.title}
      anonymous={articleInfo.anonymous}
      createdDate={articleInfo.createdDate}
      author={articleInfo.author}
      content={articleInfo.content}
      hashtags={articleInfo.hashtags}
      favorites={articleInfo.favorites}
      wonders={articleInfo.wonders}
      clips={articleInfo.clips}
    />
  );
};

export default ArticleHeaderContainer;
