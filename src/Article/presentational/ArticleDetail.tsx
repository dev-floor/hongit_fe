import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import AuthorInfoContainer from '../container/AuthorInfoContainer';
import ArticleHeaderContainer from '../container/ArticleHeaderContainer';
import CommentContainer from '../container/CommentContainer';
import ArticleBodyContainer from '../container/ArticleBodyContainer';
import FloatingButton from './FloatingButton';

import 'css/Article.css';

const ArticleDetailContainer = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  return (
    <div className="article-detail">
      <section className="article-detail-left">
        <ArticleHeaderContainer />
        <hr />
        <section className="article-detail-body">
          <ArticleBodyContainer />
          <AuthorInfoContainer />
        </section>
        <hr />
        <section className="article-detail-comment">
          <CommentContainer />
        </section>
      </section>
      <section className="vertical"> </section>
      <section className="article-detail-right">
        <FloatingButton />
      </section>
    </div>
  );
};

export default ArticleDetailContainer;
