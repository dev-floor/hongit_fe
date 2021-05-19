import React, { useState } from 'react';
import CommentArea from '../presentational/CommentArea';
import { ArticleCommentApi  } from '../../api/ApiProps';
import { CommentProps  } from '../argumentsPropsInterface/ArticleProps';
import { commentsAPI } from '../../api/api';

const CommentContainer = () => {
  const com = commentsAPI.get();
  const [comments, setComments] = useState(com);

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
