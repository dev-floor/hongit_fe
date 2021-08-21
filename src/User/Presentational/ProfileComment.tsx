import React from 'react';
import { Link } from 'react-router-dom';
import { ProfileCommentApi } from 'api/ApiProps';
import { ProfileCommentProp } from 'interface/ArgProps';

import { Icon } from 'semantic-ui-react';
import CalDiffTime from 'Commons/CalDiffTime';

import 'css/ProfileComment.css';

const Comment = (data: ProfileCommentApi) => {
  const { comment, articleId, articleTitle } = { ...data };
  return (
    <article className="profile-comment-area">
      <div className="comment-time-info">
        <div className="author">{comment.authorName}</div>
        <time>{CalDiffTime(comment.modifiedAt)}</time>
      </div>
      <div className="comment-content"> {comment.content} </div>
      <Link to={`/article/${articleId}`} className="article-title-area">
        <Icon
          className="title-icon"
          name="caret right"
          style={{ color: 'crimson' }}
        />
        <div className="title-link">{articleTitle}</div>
      </Link>
    </article>
  );
};

const ProfileComment = ({ commentList }: ProfileCommentProp) => (
  <section className="comment-feed-area">
    {commentList.map((comment) => (
      <Comment
        comment={comment.comment}
        articleId={comment.articleId}
        articleTitle={comment.articleTitle}
      />
    ))}
  </section>
);

export default ProfileComment;
