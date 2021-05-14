import React from 'react';
import { useHistory } from 'react-router-dom';
import ArticleHeader from '../presentational/ArticleHeader';
import { articleAPI } from '../../api/api';

const ArticleHeaderContainer = () => {
  const history = useHistory();
  // this is for api procedures.
  const articleData = articleAPI.get();

  const onUpdateArticle = () => {
    console.log('update btn clicked!');
    // article 정보
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
