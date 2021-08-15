import React from 'react';
import { Link } from 'react-router-dom';
import { ProfileCommentApi } from 'api/ApiProps';
import { ProfileCommentProp } from 'interface/ArgProps';

import CalDiffTime from 'Commons/CalDiffTime'

import 'css/ProfileComment.css';

const Comment = (data: ProfileCommentApi) => {
  const { comment, articleId, articleTitle } = { ...data };

  return (
    <article className="profile-comment-area">
      <div className="profile-comment-info">
        {comment.anonymous ? (
          <div className="comment-author-name"> 익명 </div>
        ) : (
          <div className="comment-author-name"> {comment.authorName} </div>
        )}
        <div className="comment-time">{CalDiffTime(comment.modifiedAt)}</div>
      </div>
      <div className="comment-content"> {comment.content} </div>
      <Link to={`/article/${articleId}`} className="article-preview-link">
        <div className="article-title-link">{articleTitle}</div>
      </Link>
    </article>
  );
};

const ProfileComment = ({ commentList }: ProfileCommentProp) => (
  <div className="article-preview">
    <section className="article-preview-area">
      {commentList.map((comment) => (
       <Comment
          comment={comment.comment}
          articleId={comment.articleId}
          articleTitle={comment.articleTitle}
        />
      ))}
    </section>
  </div>
);

export default ProfileComment;
