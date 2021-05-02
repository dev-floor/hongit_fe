import React from 'react';

import AuthorInfoContainer from '../container/AuthorInfoContainer';
import ArticleHeaderContainer from '../container/ArticleHeaderContainer';
import CommentContainer from '../container/CommentContainer';
import ArticleBodyContianer from '../container/ArticleBodyContainer';

function ArticleDetail() {
  return (
    <div className="ArticleDetail">
      <ArticleHeaderContainer />
      <ArticleBodyContianer />
      <AuthorInfoContainer />
      <CommentContainer />
    </div>
  );
}

export default ArticleDetail;
