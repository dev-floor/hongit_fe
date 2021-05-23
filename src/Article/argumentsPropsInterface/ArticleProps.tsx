import React from 'react';
import {
  ArticleCommentApi,
  ArticleCreateApi,
  ArticleDetailApi,
} from '../../api/ApiProps';

export interface CommentAreaProps {
  onRegisterCreateComment: (newComment: ArticleCommentApi) => void;
  onRegisterUpdateComment: (newComment: ArticleCommentApi) => void;
  onRegisterDeleteComment: (deleteId: number) => void;
  onPressFavorite: (targetComment: ArticleCommentApi) => void;
  commentsListProps: ArticleCommentApi[];
}
export interface CommentProps {
  onRegisterUpdateComment: (newComment: ArticleCommentApi) => void;
  onClickUpdateComment: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClickDeleteComment: (e: React.MouseEvent<HTMLButtonElement>) => void;
  commentsProps: ArticleCommentApi;
}

export interface ArticleCreatePageProps {
  onRegisterArticle: (newArticle: ArticleCreateApi) => void;
  modifiyTargetArticle?: ArticleDetailApi;
}

export interface ArticleHeaderProps {
  onUpdateArticle: (id : string) => void;
  onDeleteArticle: (id : string) => void;
  articleData: ArticleDetailApi;
}
