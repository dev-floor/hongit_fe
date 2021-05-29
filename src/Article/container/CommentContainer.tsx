import React, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { selectedArticleId } from './ArticleDetailContainer';
import CommentArea from '../presentational/CommentArea';
import { ArticleCommentApi } from '../../api/ApiProps';
import { CommentProps } from '../argumentsPropsInterface/ArticleProps';
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
      commentList.map((comment) =>
        comment === targetComment
          ? { ...comment, favorites: comment.favorites + 1 }
          : comment
      )
    );
  };

  const onRegisterComment = (newComment: ArticleCommentApi) => {
    setComments([...comments, newComment]);
  };

  return (
    <CommentArea
      onRegisterComment={onRegisterComment}
      onPressFavorite={onPressFavorite}
      commentsListProps={comments}
    />
  );
};

export default CommentContainer;
