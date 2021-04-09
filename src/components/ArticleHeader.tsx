import React from "react"
import { ArticleDetailApi } from "../api/ApiProps";

const ArticleHeader = ({ 
    option, 
    title, 
    anonymous, 
    author, 
    createdDate
 }: ArticleDetailApi) => {
    const createdTimeFormat = `${createdDate.slice(0, 4)}-${createdDate.slice(4, 6)}-${createdDate.slice(6)}`;
    return (
        <header>
            <nav className = "articleOptionBlock">
                {option.map(op => (
                <span className = "articleOption">op</span>
                    ))}
            </nav>   
            <h2 className = "articleTitle">{title}</h2>
            <div className = "articleDetail">
                {anonymous ? (
                    <div>익명</div>
                ) : (
                    <div>{author.name}</div>
                )}
                <time className = "articleCreatedTime">{createdTimeFormat}</time>
            </div>
        </header>
    )
 }

export default ArticleHeader;