import React, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';

import { selectedArticleId } from './ArticleDetailContainer';
import CommentArea from '../presentational/CommentArea';

import { ArticleCommentApi } from '../../api/ApiProps';
import { commentsAPI } from '../../api/api';

const CommentContainer = () => {
  const articleId = useRecoilValue(selectedArticleId);
  const [comments, setComments] = useState<ArticleCommentApi[]>([]);

  const loadData = async () => {
    const response = await commentsAPI.get(/* articleId */);
    setComments([...response]);
  };

  useEffect(() => {
    loadData();
  }, []);

  const onPressFavorite = (targetComment: ArticleCommentApi) => {
    setComments((commentList) =>
      commentList.map((comment, index) =>
        comment === targetComment
          ? { ...comment, favorites: comment.favorites + 1 }
          : comment
      )
    );
  };

  const onRegisterCreateComment = (newComment: ArticleCommentApi) => {
    setComments([...comments, newComment]);
  };

  const onRegisterUpdateComment = (updateComment: ArticleCommentApi) => {
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
