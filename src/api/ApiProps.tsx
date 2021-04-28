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

<<<<<<< HEAD
export interface ArticleCreateApi {
  options: string[];
  title: string;
  anonymous: boolean;
  content: string;
  hashtags: string[];
}

=======
>>>>>>> e217e31... feat(component): Update area, container component.
export interface ArticleListApi {
  id: number;
  options: string[];
  title: string;
  anonymous: boolean;
  author: {
<<<<<<< HEAD
    name: string;
=======
    name: string
>>>>>>> e217e31... feat(component): Update area, container component.
  };
  createdDate: string;
  modifiedDate: string;
  content: string;
  favorites: number;
  wonders: number;
  clips: number;
<<<<<<< HEAD
}
=======
}
>>>>>>> e217e31... feat(component): Update area, container component.
