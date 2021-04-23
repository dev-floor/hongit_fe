import React, { useState } from "react";
import { ArticleCreateApi } from "../../api/ApiProps"

interface ArticleCreatePageProps {
    onRegisterArticle: (newArticle: ArticleCreateApi) => void;
}

const ArticleCreatePage = ({onRegisterArticle}: ArticleCreatePageProps) => {
    const [newTitle, setNewTitle] = useState("");
    const [newHashtags, setNewHashtags] = useState([] as string[]);
    const [newContent, setNewContent] = useState("");
    const [newArticle, setNewArticle] = useState({
        options: [],
        title: "",
        anonymous: true,
        content: "",
        hashtags: [] as string[]
    })

    const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.target.value)
    }

    const onChangeHashtags = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputHashtags = e.target.value;
        if(inputHashtags.includes(",")) {
            const modifiedHashTags = inputHashtags.split(",");
            setNewHashtags([...modifiedHashTags]);
        } else {
            setNewHashtags(hashtag => hashtag.concat(inputHashtags));
        }
    }

    const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewContent(e.target.value);
    }

    const onSubmit = () => {
        const $anonymous = document.querySelector(".article-create-anonymous") as HTMLInputElement;
        setNewArticle({
            options: [],
            title: newTitle,
            anonymous: $anonymous.checked,
            content: newContent,
            hashtags: newHashtags
        })
        onRegisterArticle(newArticle);
    }

    return (
        <form className = "article-create-form">
            <input className = "article-create-title" type = "text" placeholder = "제목을 입력하세요..." onChange = {onChangeTitle}/>
            <input className = "article-create-anonymous" type = "checkbox" name = "anonymous" value = "anonymous" checked/>익명
            <input className = "article-create-hashtag" type = "text" placeholder = "해시태그를 쉼표를 기준으로 입력하세요..." onChange = {onChangeHashtags} />
            <textarea className = "article-create-content" placeholder = "내용을 입력해주세요..." onChange = {onChangeContent} />
            <button className = "article-create-cancel-btn" type = "button">취소</button>
            <button className = "article-create-register-btn" type = "submit" onSubmit = {onSubmit}>등록</button>
        </form>
    )
}

export default ArticleCreatePage;