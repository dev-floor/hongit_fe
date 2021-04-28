import React, { useState } from "react";
import { ArticleListProps } from "../argumentsPropsInterface/ArticleListProps";
import { ArticleListApi } from "../../api/ApiProps"

const ArticlePreviewCard = (articlePreview: ArticleListApi) => {
        const {id, options, title, anonymous, author, createdDate, content, favorites, wonders, clips} = {...articlePreview}
        return(
            <div>
                {id},{options}
            </div>
        )
}

const ArticlePreviewList = (articlePreview: ArticleListApi) => (
        <h3>
            2
        </h3>
    )

const ArticleListArea = ({articleListData}: ArticleListProps) => {
    const [viewMode, setViewMode] = useState("card");

    const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setViewMode(e.target.value);
    }

    return(
        <article>
            <select className="article-view-mode-select" onChange = {onChangeSelect}>
                <option value="card">카드 뷰</option>
                <option value="list">리스트 뷰</option>
            </select>
            <div className = "article-area">
                {viewMode === "card" ? (
                    articleListData.map(articlePreview => (
                        <ArticlePreviewCard
                            id = {articlePreview.id}
                            options = {articlePreview.options}
                            title = {articlePreview.title}
                            anonymous = {articlePreview.anonymous}
                            author = {articlePreview.author}
                            createdDate = {articlePreview.createdDate}
                            modifiedDate = {articlePreview.modifiedDate}
                            content = {articlePreview.content}
                            favorites = {articlePreview.favorites}
                            wonders = {articlePreview.wonders}
                            clips = {articlePreview.clips}
                        />
                    ))
                ) : (
                    articleListData.map(articlePreview => (
                        <ArticlePreviewList
                            id = {articlePreview.id}
                            options = {articlePreview.options}
                            title = {articlePreview.title}
                            anonymous = {articlePreview.anonymous}
                            author = {articlePreview.author}
                            createdDate = {articlePreview.createdDate}
                            modifiedDate = {articlePreview.modifiedDate}
                            content = {articlePreview.content}
                            favorites = {articlePreview.favorites}
                            wonders = {articlePreview.wonders}
                            clips = {articlePreview.clips}
                        />
                    ))
                )}
            </div>
        </article>
    )
}

export default ArticleListArea;