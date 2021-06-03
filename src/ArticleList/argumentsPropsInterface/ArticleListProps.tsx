import { ArticleListApi, BoardDetailApi } from '../../api/ApiProps';

export interface ArticleListProps {
  articleListData: ArticleListApi[];
  boardDetailData: BoardDetailApi;
}
