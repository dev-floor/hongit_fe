import { ArticleCommentApi } from '../../api/ApiProps';
import { ArticleCreateApi } from '../../api/ApiProps';

export interface CommentAreaProps {
  onRegisterComment: (newComment: ArticleCommentApi) => void;
  onPressFavorite: (targetComment: ArticleCommentApi) => void;
  commentsListProps: ArticleCommentApi[];
}
export interface ArticleCreatePageProps {
  onRegisterArticle: (newArticle: ArticleCreateApi) => void;
}
