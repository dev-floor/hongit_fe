interface AuthorInfo {
    name: string;
    image: string;
    github: string;
    blog: string;
    description: string;
}

export interface ArticleDetailApi {
    option: string[];
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