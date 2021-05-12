import React from 'react';
import ArticleHeader from '../presentational/ArticleHeader';
import { articleAPI } from '../../api/api';
import '../css/ArticleHeader.css';

const ArticleHeaderContainer = () => {
  // this is for api procedures.
  const articleData = articleAPI.get();

  const onUpdateArticle = () => {
    console.log('update btn clicked!');
    // 게시물 업데이트 기능을 여기에 구현하면 됩니다. (너무친절)
  };

  const onDeleteArticle = () => {
    console.log('delete btn clicked!');
    // 게시물 삭제 기능을 여기에 구현하면 됩니다. (너무친절)
  };

  return (
    <ArticleHeader
      onUpdateArticle={onUpdateArticle}
      onDeleteArticle={onDeleteArticle}
      articleData={articleData}
    />
  );
};

export default ArticleHeaderContainer;
