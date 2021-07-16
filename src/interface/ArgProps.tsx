import React from 'react';
import {
  ArticleCommentApi,
  ArticleCreateApi,
  ArticleDetailApi,
  ArticleListApi,
  BoardDetailApi,
  SideBarDetailApi,
  AllLectureApi,
  BoardPreviewInfo,
  ArticlePreviewInfo,
} from 'api/ApiProps';

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
  onUpdateArticle: (id: string) => void;
  onDeleteArticle: (id: string) => void;
  articleData: ArticleDetailApi;
}

export interface ArticleListProps {
  articleListData: ArticleListApi[];
}

export interface BoardDetailProp {
  boardDetailData: BoardDetailApi;
}

export interface SideBarProps {
  sideBarData: SideBarDetailApi[];
}

export interface AllLectureMenuProp {
  allLectureData: AllLectureApi[];
}
export interface FavoriteLectureProps {
  yearFilteredData: string[];
  finalFilteredData: string[];
  onAddSiderBars: (lectures: string[]) => void;
}

export interface BoardPreviewProp {
  previewData: BoardPreviewInfo;
}

export interface ArticlePreviewProp {
  previewData: ArticlePreviewInfo;
}
