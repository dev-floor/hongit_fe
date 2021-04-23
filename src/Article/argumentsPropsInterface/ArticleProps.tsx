import { ArticleCreateApi } from "../../api/ApiProps"

export interface ArticleCreatePageProps {
    onRegisterArticle: (newArticle: ArticleCreateApi) => void;
}