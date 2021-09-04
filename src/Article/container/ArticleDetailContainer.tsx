import React from 'react';
import { useParams } from 'react-router-dom';

import FloatingButton from 'Commons/FloatingButton';
import AuthorInfoContainer from './AuthorInfoContainer';
import ArticleHeaderContainer from './ArticleHeaderContainer';
import CommentContainer from './CommentContainer';
import ArticleBodyContainer from './ArticleBodyContainer';
import 'css/Article.css';

const ArticleDetailContainer = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="article-detail">
      <section className="article-detail-left">
        <ArticleHeaderContainer articleId={id} />
        <hr />
        <section className="article-detail-body">
          <ArticleBodyContainer articleId={id} />
          <AuthorInfoContainer articleId={id} />
        </section>
        <hr />
        <section className="article-detail-comment">
          <CommentContainer articleId={id} />
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
