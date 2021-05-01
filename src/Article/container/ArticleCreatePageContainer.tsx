import React from "react";
import ArticleCreatePage from "../presentational/ArticleCreatePage";

const ArticleCreatePageContainer = () => {
    const onRegisterArticle = (newArticle: any) => {
        // api 호출로 post 날리고
        // ArticleDetail 조회 페이지로 이동.
        console.log(newArticle)
    }

    return (
        <ArticleCreatePage 
            onRegisterArticle = {onRegisterArticle}
        />
    )
}

export default ArticleCreatePageContainer;
