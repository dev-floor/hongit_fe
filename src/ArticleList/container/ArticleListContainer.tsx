import React from "react";
import { articleAPI } from "../../api/api";
import ArticleListArea from "../presentational/ArticleList"

const ArticleListContainer = () => {
    const articleListData = articleAPI.getByList();

    return <ArticleListArea articleListData = {articleListData} />
}

export default ArticleListContainer;