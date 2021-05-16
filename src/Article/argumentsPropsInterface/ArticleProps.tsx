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
}

export interface ArticleHeaderProps {
  onUpdateArticle: () => void;
  onDeleteArticle: () => void;
  articleData: ArticleDetailApi;
}
