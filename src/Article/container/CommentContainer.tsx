import React, { useState } from "react";
import CommentArea from "../presentational/Comment"
import { ArticleCommentApi } from "../../api/ApiProps"
import dummyData from "../../data/commentsInfo.json"

const CommentContainer = () => {
    const [comments, setComments] = useState(dummyData);

    const onPressFavorite = (targetComment: ArticleCommentApi) => {
        setComments(comments => comments.map(comment =>
            comment === targetComment ? {...comment, favorites: comment.favorites + 1} : comment
        ))
    }

    const onRegisterComment = (newComment: ArticleCommentApi) => {
        setComments([
            ...comments,
            newComment
        ])
    }

    return <CommentArea onRegisterComment = {onRegisterComment} onPressFavorite = {onPressFavorite} />
}

export default CommentContainer;