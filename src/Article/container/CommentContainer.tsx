import React, { useState, useEffect, useCallback } from 'react';
import { API_URL, commentsAPI } from 'api/api';
import { CommentApi } from 'api/ApiProps';
import { ArticleDetailID } from 'interface/ArgProps';
import axios from 'axios';
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
    const token = window.localStorage.getItem('token');
    await axios.post(
      `${API_URL}/comments`,
      {
        articleId,
        anonymous: newComment.anonymous,
        content: newComment.content,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setComments([...comments, newComment]);
  };

  const onRegisterUpdateComment = async (updateComment: CommentApi) => {
    const token = window.localStorage.getItem('token');
    await axios.post(
      `${API_URL}/comments/${updateComment.id}`,
      {
        content: updateComment.content,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const modify = comments.map((comment) =>
      comment.id === updateComment.id
        ? { ...comment, content: updateComment.content }
        : comment
    );
    setComments(modify);
  };

  const onRegisterDeleteComment = async (deleteId: number) => {
    const token = window.localStorage.getItem('token');
    await axios.delete(
      `${API_URL}/comments/${deleteId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
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
