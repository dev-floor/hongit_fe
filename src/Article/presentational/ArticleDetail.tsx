import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import AuthorInfoContainer from '../container/AuthorInfoContainer';
import ArticleHeaderContainer from '../container/ArticleHeaderContainer';
import CommentContainer from '../container/CommentContainer';
import ArticleBodyContainer from '../container/ArticleBodyContainer';
import FloatingButton from './FloatingButton';
import '../css/FloatingButton.css';

const ArticleDetailContainer = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  console.log(id, history);
  return (
    <div className="articleDetail">
      <div className="articleDetailLeft">
        <ArticleHeaderContainer />
        <ArticleBodyContainer />
        <AuthorInfoContainer />
        <CommentContainer />
      </div>
      <FloatingButton />
    </div>
  );
};

export default ArticleDetailContainer;
