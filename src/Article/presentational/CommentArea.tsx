import React, { useState } from "react"
import { AiOutlineHeart } from "react-icons/ai";
import { ArticleCommentApi, AuthorInfo } from "../../api/ApiProps";
import data2 from "../../data/commentList.json"
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

interface TestCase {
    onRegisterComment: (newComment: ArticleCommentApi) => void, 
    onPressFavorite: (targetComment: ArticleCommentApi) => void,
    commentsProps: ArticleCommentApi[]
}

const CommentArea = ({onRegisterComment, onPressFavorite, commentsProps}: TestCase) => {
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
            <div className = "numCommentArea">댓글 수 {data2.length}</div>
            <hr className = "horizontalLine"/>
            <form className = "inputArea" onSubmit={onHandleSubmit}>
                <input className ="inputBox" type="text" placeholder="댓글을 입력하세요..." onChange = {onChange}/>
                <button className = "btnSubmit" type='submit'>등록</button>
            </form>
            <div>
                {commentsProps.map((com) => (
                    <Comment 
                        anonymous = {com.anonymous}
                        author = {com.author} 
                        content = {com.content} 
                        favorites = {com.favorites}
                    />))
                }
            </div>
        </div>
    )
}

export default CommentArea;
