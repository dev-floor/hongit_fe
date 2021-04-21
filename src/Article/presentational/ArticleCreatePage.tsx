import React, { useState } from "react";

interface ArticleCreatePageProps {
    onRegisterArticle: () => void;
}

const ArticleCreatePage = ({onRegisterArticle}: ArticleCreatePageProps) => {
    const [title, setTitle] = useState("");

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    const onSubmit = () => {
        onRegisterArticle();
    }

    return (
        <form className = "article-create-form">
            <input className = "article-create-title" type = "text" placeholder = "제목을 입력하세요..." onChange = {onChange}/>
            <input type = "checkbox" name = "anonymous" value = "anonymous" checked/>익명
            <input className = "article-create-hashtag" type = "text" placeholder = "해시태그를 쉼표를 기준으로 입력하세요..." />
            <textarea className = "article-create-content" placeholder = "내용을 입력해주세요..." />
            <button className = "article-create-cancel-btn" type = "button">취소</button>
            <button className = "article-create-register-btn" type = "submit" onSubmit = {onSubmit}>등록</button>
        </form>
    )
}

export default ArticleCreatePage;