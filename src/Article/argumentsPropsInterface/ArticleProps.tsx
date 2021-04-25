import { ArticleCommentApi } from '../../api/ApiProps';

export interface CommentAreaProps {
  onRegisterComment: (newComment: ArticleCommentApi) => void;
  onPressFavorite: (targetComment: ArticleCommentApi) => void;
  commentsListProps: ArticleCommentApi[];
}
