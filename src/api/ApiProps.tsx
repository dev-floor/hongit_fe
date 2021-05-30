export interface AuthorInfo {
  name: string;
  image: string;
  github: string;
  blog: string;
  description: string;
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
  name: string;
  professorName: string;
  subjectName: string;
  boardTypeName: string;
  boardTypeText: string;
  dividedOptions: BoardOption[];
  articleTypeOptions: BoardOption[];
}
