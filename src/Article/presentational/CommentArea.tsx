
import React, { useState } from "react"
import { AiOutlineHeart } from "react-icons/ai";
import { CommentAreaProps } from "../argumentsPropsInterface/ArticleProps"
import { ArticleCommentApi } from "../../api/ApiProps";
import "../css/CommentArea.css"

const Comment = ( dummyData: ArticleCommentApi ) => {
    const { anonymous, author, content, favorites } = {...dummyData}
    return (
        <div className="Comment">
            <div className="authorInfo">
                <div className="authorInfoHeader">
                    { anonymous ? (
                        <div className = "authorName"> 익명 </div>  
                    ) : ( 
                        <div className = "authorName"> {author.name} </div>  
                    )}
                </div>  
                <div className = "contents"> {content} </div> 
                <div className = "iconContainer"><AiOutlineHeart size="14"/>{favorites}</div>
            </div>
        </div>
    )
}
const CommentArea = ({onRegisterComment, onPressFavorite, commentsListProps}: CommentAreaProps) => {
    const [newComment, setNewComment] = useState({
        anonymous: true,
        author: {
            name: "",
            image: "",
            github: "",
            blog: "",
            description: ""
        },
        content: "",
        favorites: 0
    });

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewComment({
            anonymous: true,
            author: {
                name: "",
                image: "",
                github: "",
                blog: "",
                description: ""
            },
            content: e.target.value,
            favorites: 0
        });
    }

    const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onRegisterComment(newComment);
    }
    
    return (
        <div className = "CommentArea">
            <div className = "numCommentArea">댓글 수 {commentsListProps.length}</div>
            <hr className = "horizontalLine"/>
            <form className = "inputArea" onSubmit={onHandleSubmit}>
                <input className ="inputBox" type="text" placeholder="댓글을 입력하세요..." onChange = {onChange}/>
                <button className = "btnSubmit" type='submit'>등록</button>
            </form>
            <div>
                {commentsListProps.map((comment) => (
                    <Comment 
                        anonymous = {comment.anonymous}
                        author = {comment.author} 
                        content = {comment.content} 
                        favorites = {comment.favorites}
                    />))
                }
            </div>
        </div>
    )
}

export default CommentArea;
