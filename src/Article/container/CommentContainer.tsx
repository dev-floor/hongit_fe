import React, { useState, useEffect, useCallback } from 'react';
import { commentsAPI } from 'api/api';
import { CommentApi } from 'api/ApiProps';
import { ArticleDetailID } from 'interface/ArgProps';
import CommentArea from '../presentational/CommentArea';

const CommentContainer = ({ articleId }: ArticleDetailID) => {
  const [comments, setComments] = useState<CommentApi[]>([]);

  const loadData = useCallback(async () => {
    console.log(articleId);
    // FIX ME
    const response = await commentsAPI.get(/* articleId */);
    setComments([...response]);
  }, [articleId]);

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

  const onRegisterCreateComment = async (newComment: CommentApi) => {
    commentsAPI.registerNewComment(newComment, articleId);
    setComments([...comments, newComment]);
  };

  const onRegisterUpdateComment = async (updateComment: CommentApi) => {
    commentsAPI.registerUpdateComment(updateComment);

    const modify = comments.map((comment) =>
      comment.id === updateComment.id
        ? { ...comment, content: updateComment.content }
        : comment
    );
    setComments(modify);
  };

  const onRegisterDeleteComment = async (deleteId: number) => {
    commentsAPI.registerDeleteComment(deleteId);
    setComments(comments.filter((comment) => comment.id !== deleteId));
  };

  useEffect(() => {
    commentsAPI.putComments(comments);
  }, [comments]);

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
