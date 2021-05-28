import React from 'react';
import {
  ArticleCommentApi,
  ArticleCreateApi,
  ArticleDetailApi,
} from '../../api/ApiProps';

export interface CommentAreaProps {
  onRegisterComment: (newComment: ArticleCommentApi) => void;
  onPressFavorite: (targetComment: ArticleCommentApi) => void;
  commentsListProps: ArticleCommentApi[];
}
export interface CommentProps {
  onUpdateComment: () => void;
  onDeleteComment: () => void;
  commentsProps: ArticleCommentApi;
}

export interface ArticleCreatePageProps {
  onRegisterArticle: (newArticle: ArticleCreateApi) => void;
  modifiyTargetArticle?: ArticleDetailApi;
}

export interface ArticleHeaderProps {
  onUpdateArticle: (id: string) => void;
  onDeleteArticle: (id: string) => void;
  articleData: ArticleDetailApi;
}
