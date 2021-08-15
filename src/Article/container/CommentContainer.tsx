import React, { useState, useEffect } from 'react';
import { commentsAPI } from 'api/api';
import { CommentApi } from 'api/ApiProps';
import CommentArea from '../presentational/CommentArea';

const CommentContainer = () => {
  const [comments, setComments] = useState<CommentApi[]>([]);

  const loadData = async () => {
    const response = await commentsAPI.get(/* articleId */);
    setComments([...response]);
  };

  useEffect(() => {
    loadData();
  }, []);

  const onPressFavorite = (targetComment: CommentApi) => {
    setComments((commentList) =>
      commentList.map((comment, index) =>
        comment === targetComment
          ? { ...comment, favorites: comment.favoriteCount + 1 }
          : comment
      )
    );
  };

  const onRegisterCreateComment = (newComment: CommentApi) => {
    setComments([...comments, newComment]);
  };

  const onRegisterUpdateComment = (updateComment: CommentApi) => {
    const modify = comments.map((comment) =>
      comment.id === updateComment.id
        ? { ...comment, content: updateComment.content }
        : comment
    );
    setComments(modify);
  };

  useEffect(() => {
    commentsAPI.putComments(comments);
  }, [comments]);

  const onRegisterDeleteComment = (deleteId: number) => {
    setComments(comments.filter((comment) => comment.id !== deleteId));
  };

  return (
    <CommentArea
      onRegisterCreateComment={onRegisterCreateComment}
      onRegisterUpdateComment={onRegisterUpdateComment}
      onRegisterDeleteComment={onRegisterDeleteComment}
      onPressFavorite={onPressFavorite}
      commentsListProps={comments}
    />
  );
};

export default CommentContainer;
