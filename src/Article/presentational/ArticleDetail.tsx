import React from 'react';

import AuthorInfoContainer from '../container/AuthorInfoContainer';
import ArticleHeaderContainer from '../container/ArticleHeaderContainer';
import CommentContainer from '../container/CommentContainer';
import ArticleBodyContainer from '../container/ArticleBodyContainer';

import FloatingButton from './FloatingButton';
import '../css/FloatingButton.css';

function ArticleDetail() {
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
}

export default ArticleDetail;
