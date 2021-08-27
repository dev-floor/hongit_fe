import React from 'react';
import {
  CommentApi,
  ArticleCreateApi,
  ArticleDetailApi,
  ArticleFeedDetailApi,
  BoardDetailApi,
  SideBarDetailApi,
  BoardPreviewInfo,
  ArticlePreviewInfo,
  HomeApi,
  ProfileUserApi,
  ProfileCommentApi,
  ArticleFeedApiPartial,
} from 'api/ApiProps';

export interface CommentAreaProps {
  onRegisterCreateComment: (newComment: CommentApi) => void;
  onRegisterUpdateComment: (newComment: CommentApi) => void;
  onRegisterDeleteComment: (deleteId: number) => void;
  onPressFavorite: (targetComment: CommentApi) => void;
  commentsListProps: CommentApi[];
}

export interface CommentProps {
  onRegisterUpdateComment: (newComment: CommentApi) => void;
  onClickUpdateComment: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClickDeleteComment: (e: React.MouseEvent<HTMLButtonElement>) => void;
  commentsProps: CommentApi;
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

export interface ArticleFeedProps {
  feedList: ArticleFeedDetailApi[];
}

export interface ProfileArticleFeedProps{
  feedList: ArticleFeedApiPartial[];
}
export interface BoardDetailProp {
  boardDetailData: BoardDetailApi;
}

export interface SideBarProps {
  sideBarData: SideBarDetailApi[];
  onModifyMyLectures: (e: any) => void;
}

export interface HongitMainProps {
  mainData: HomeApi;
}

export interface AllLectureMenuProp {
  allLectureData: BoardDetailApi[];
}

export interface MyLectureProps {
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

export interface ProfileUserProp {
  userData: ProfileUserApi;
}

export interface ProfileCommentProp {
  commentList: ProfileCommentApi[];
}
