import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import AuthorInfoContainer from '../container/AuthorInfoContainer';
import ArticleHeaderContainer from '../container/ArticleHeaderContainer';
import CommentContainer from '../container/CommentContainer';
import ArticleBodyContainer from '../container/ArticleBodyContainer';
import FloatingButton from './FloatingButton';

import 'css/Article.css'

const ArticleDetailContainer = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  console.log(id, history);
  return (
    <div className="article-detail">
      <div className="article-detail-left">
        <ArticleHeaderContainer />
        <hr/>
        <div className="article-detail-body">
          <ArticleBodyContainer />
          <AuthorInfoContainer />
        </div>
        <hr/>
        <div className="article-detail-comment">
          <CommentContainer />
        </div>
      </div>
      <div className ="vertical"> </div>
      <div className="article-detail-right">
        <FloatingButton />
      </div>
    </div>
  );
};

export default ArticleDetailContainer;
