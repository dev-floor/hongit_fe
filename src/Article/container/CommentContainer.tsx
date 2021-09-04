import React, { useState, useEffect, useCallback } from 'react';
import { commentsAPI } from 'api/api';
import { CommentApi } from 'api/ApiProps';
import { ArticleDetailID } from 'interface/ArgProps';
import CommentArea from '../presentational/CommentArea';

const CommentContainer = ({ articleId }: ArticleDetailID) => {
  const [comments, setComments] = useState<CommentApi[]>([]);

  const loadData = useCallback( async () => {
    console.log(articleId);
    // FIX ME
    const response = await commentsAPI.get(/* articleId */);
    setComments([...response]);
  },[articleId]);

  useEffect(() => {
    loadData();
  }, [loadData]);

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
