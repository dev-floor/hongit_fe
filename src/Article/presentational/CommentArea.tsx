import React from "react"
import { AiOutlineHeart } from "react-icons/ai";
import { ArticleDetailApi } from "../../api/ApiProps";
import data2 from "../../data/commentList.json"
import data from "../../data/articleInfo.json"
import "../css/CommentArea.css"

const Comment = ( dummyData: ArticleDetailApi ) => {
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
                <div className = "contents"> {author.description} </div> 
                <div className = "iconContainer"><AiOutlineHeart size="14"/>{favorites}</div>
            </div>
        </div>
    )
}


const CommentArea = () => {
    const temp = ""
    return (
    <div className = "CommentArea" >
        <div className = "numCommentArea">댓글 수 {data2.length}</div>
        <hr className = "horizontalLine"/>
        <form className = "inputArea" onSubmit={(e) => {
            alert("쨘!");
            e.preventDefault();
        }}>
            <input className ="inputBox" type="text" placeholder="댓글을 입력하세요..." />
            <button className = "btnSubmit" type='submit'>등록</button>
        </form>
        <div>
            <Comment 
                options = {data.options}
                title = {data.title}
                anonymous = {data.anonymous}
                author = {data.author} 
                createdDate = {data.createdDate}
                content = {data.content} 
                hashtags = {data.hashtags}
                favorites = {data.favorites}
                wonders = {data.wonders}
                clips = {data.clips}
            />
            <Comment 
                options = {data.options}
                title = {data.title}
                anonymous = {data.anonymous}
                author = {data.author} 
                createdDate = {data.createdDate}
                content = {data.content} 
                hashtags = {data.hashtags}
                favorites = {data.favorites}
                wonders = {data.wonders}
                clips = {data.clips}
            /> 
      </div>
    </div>
    )
}


// const CommentArea = () => {
//     const {anonymous, author} = {...data}
//     return (
//         <div className = "CommentArea" >
//             <input value="sample" />
//            { data2.map((com) => { 
//         <Comment 
//             options = {data.options}
//             title = {data.title}
//             anonymous = {data.anonymous}
//             author = {data.author} 
//             createdDate = {data.createdDate}
//             content = {data.content} 
//             hashtags = {data.hashtags}
//             favorites = {data.favorites}
//             wonders = {data.wonders}
//             clips = {data.clips}
//         />})}
//       </div>
//     )
// }

export default CommentArea;
