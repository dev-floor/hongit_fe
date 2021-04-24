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
    anonymous: boolean;
    author: AuthorInfo;
    content: string;
    favorites: number
export interface ArticleCreateApi {
    options: string[];
    title: string;
    anonymous: boolean;
    content: string;
    hashtags: string[];
}