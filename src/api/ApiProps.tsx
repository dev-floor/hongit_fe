/* ----- Common InterFace ----- */
export interface ProfessorResponse {
  name: string;
  email: string;
}
export interface BaseEnumResponse {
  id: string;
  text: string;
}
export interface OptionResponse {
  id: number;
  text: string;
  type: BaseEnumResponse;
}
export interface AuthorInfo {
  nickname: string;
  type: BaseEnumResponse;
  image: string;
  github: string;
  blog: string;
  description: string;
}

/* ----- Article ----- */
export interface ArticleDetailApi {
  id: number;
  options: OptionResponse[];
  title: string;
  anonymous: boolean;
  author: AuthorInfo;
  content: string;
  hashtags: string[];
  favoriteCount: number;
  wonderCount: number;
  clipCount: number;
  createdAt: string;
  modifiedAt: string;
}

export interface ArticleFeedDetailApi {
  id: number;
  options: OptionResponse[];
  title: string;
  anonymous: boolean;
  authorName: string;
  content: string;
  favoriteCount: number;
  wonderCount: number;
  clipCount: number;
  createdAt: string;
  modifiedAt: string;
}

export type ArticleFeedApiPartial = Partial<ArticleFeedDetailApi>;

export interface CommentApi {
  id: number;
  authorName: string;
  anonymous: boolean;
  content: string;
  favoriteCount: number;
  createdAt: string;
  modifiedAt: string;
}

export interface ArticleCreateApi {
  options: string[];
  title: string;
  anonymous: boolean;
  content: string;
  hashtags: string[];
}

/* ----- Home ----- */
export interface ArticlePreviewInfo {
  articleId: number;
  title: string;
  favoriteCount: number;
  wonderCount: number;
  clipCount: number;
  createdAt: string;
  modifiedAt: string;
}

export interface BoardPreviewInfo {
  boardId: number;
  title: string;
  articles: ArticlePreviewInfo[];
}

export interface HomeApi {
  totalFavorite: BoardPreviewInfo;
  qnaRecent: BoardPreviewInfo;
  totalViews: BoardPreviewInfo;
  community: BoardPreviewInfo;
  gathering: BoardPreviewInfo;
  recruit: BoardPreviewInfo;
}

/* ----- Board ----- */
export interface BoardOption {
  name: string;
  text: string;
}

export interface BoardDetailApi {
  id: number;
  title: string;
  professor: ProfessorResponse;
  subject: string;
  type: BaseEnumResponse;
  grade: BaseEnumResponse;
  options: OptionResponse[];
}

export interface SideBarDetailApi {
  id: number;
  title: string;
  type: {
    id: string;
    text: string;
  };
}

export interface AllLectureDetailApi {
  id: number;
  title: string;
  professor: ProfessorResponse;
  subject: string;
  type: BaseEnumResponse;
  grade: BaseEnumResponse;
}

/* ----- Profile ----- */
export interface ProfileUserApi {
  username: string;
  nickname: string;
  type: BaseEnumResponse;
  image: string;
  github: string;
  blog: string;
  description: string;
}
export interface ProfileCommentApi {
  comment: CommentApi;
  articleId: number;
  articleTitle: string;
}
