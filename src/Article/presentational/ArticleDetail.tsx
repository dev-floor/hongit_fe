import React from 'react';

import AuthorInfoContainer from '../container/AuthorInfoContainer';
import ArticleHeaderContainer from '../container/ArticleHeaderContainer';
import CommentContainer from '../container/CommentContainer';

function ArticleDetail() {
  return (
    <div className="ArticleDetail">
      <ArticleHeaderContainer />
      <AuthorInfoContainer />
      <CommentContainer />
    </div>
  );
}

export default ArticleDetail;
