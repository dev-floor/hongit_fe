import React from 'react';
import ArticleBody from '../presentational/ArticleBody';
import articleInfo from '../../data/articleInfo.json';
import '../css/ArticleBody.css';

const ArticleBodyContainer = () => (
  <ArticleBody
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

export default ArticleBodyContainer;
