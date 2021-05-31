import React from 'react';
import { useParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { selectedArticleId } from 'Atoms/atom';
import AuthorInfoContainer from './AuthorInfoContainer';
import ArticleHeaderContainer from './ArticleHeaderContainer';
import CommentContainer from './CommentContainer';
import ArticleBodyContainer from './ArticleBodyContainer';
import FloatingButton from '../presentational/FloatingButton';
import 'css/Article.css';

const ArticleDetailContainer = () => {
  const { id } = useParams<{ id: string }>();
  const setSelectedArticleId = useSetRecoilState(selectedArticleId);
  setSelectedArticleId(id);
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
