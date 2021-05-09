import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import AuthorInfoContainer from '../container/AuthorInfoContainer';
import ArticleHeaderContainer from '../container/ArticleHeaderContainer';
import CommentContainer from '../container/CommentContainer';
import ArticleBodyContianer from '../container/ArticleBodyContainer';
import { MatchParams } from "../../interface/routerInterface"

const ArticleDetailContainer = ({
  match,
  history,
}: RouteComponentProps<MatchParams>) => {
  console.log(match, history);
  const { id } = match.params;

  return (
    <div className="ArticleDetail">
      <ArticleHeaderContainer />
      <ArticleBodyContianer />
      <AuthorInfoContainer />
      <CommentContainer />
    </div>
  );
};

export default ArticleDetailContainer;
