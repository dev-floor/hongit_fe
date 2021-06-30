export interface AuthorInfo {
  name: string;
  image: string;
  github: string;
  blog: string;
  description: string;
}

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

export interface ArticleDetailApi {
  options: string[];
  title: string;
  anonymous: boolean;
  author: AuthorInfo;
  createdDate: string;
  content: string;
  hashtags: string[];
  favorites: number;
  wonders: number;
  clips: number;
}

export interface ArticleCommentApi {
  id: number;
  anonymous: boolean;
  author: AuthorInfo;
  content: string;
  favorites: number;
}

export interface ArticleCreateApi {
  options: string[];
  title: string;
  anonymous: boolean;
  content: string;
  hashtags: string[];
}

export interface ArticleListApi {
  id: number;
  options: string[];
  title: string;
  anonymous: boolean;
  author: {
    name: string;
  };
  createdDate: string;
  modifiedDate: string;
  content: string;
  favorites: number;
  wonders: number;
  clips: number;
}

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
  grade: {
    id: string;
    text: string;
  };
}

export interface FavoriteLectureApi {
  yearFilteredData: string[];
  finalFilteredData: BoardDetailApi[];
}
