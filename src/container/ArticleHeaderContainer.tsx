import React from "react";
import ArticleHeader from "../presentational/ArticleHeader";
import { ArticleDetailApi } from "../api/ApiProps"

const dumpData :ArticleDetailApi = {
    option: ["one", "two"],
    title: "This is Test Data.",
    anonymous: true,
    author: {
        name: "홍석기",
        image: "?!",
        github: "https://github.com/Derek-94",
        blog: "https://github.com/Derek-94",
        description: "테스트 중인 홍석기~"
    },
    createdDate: "20200408",
    content: "leiwsjdioqwdnllllsidwn",
    hashtags: ["#첫", "#테스트", "#중이당"],
    favorites: 4,
    wonders: 2,
    clips: 4
}

const ArticleHeaderContainer = () => {
    const test = "";

    return (
        <ArticleHeader 
            option = {dumpData.option}
            title = {dumpData.title}
            anonymous = {dumpData.anonymous}
            createdDate = {dumpData.createdDate}
            author = {dumpData.author}
            content = {dumpData.content}
            hashtags = {dumpData.hashtags}
            favorites = {dumpData.favorites}
            wonders = {dumpData.wonders}
            clips = {dumpData.clips}
        />
    )
}

export default ArticleHeaderContainer;