import React from 'react';
import { Link } from 'react-router-dom';
import { ArticleFeedDetailApi } from 'api/ApiProps';
import { ArticleFeedProps } from 'interface/ArgProps';
import CalDiffTime from 'Commons/CalDiffTime';

import 'css/ProfileArticle.css';

const CardView = (article: ArticleFeedDetailApi) => {
  const {
    id,
    options,
    title,
    anonymous,
    authorName,
    content,
    favoriteCount,
    wonderCount,
    clipCount,
    createdAt,
    modifiedAt,
  } = { ...article };

   return (
    <article className="card-area">
      <section className="option-area">
        {options.map((op) => (
          <span className="option">{op.text}</span>
        ))}
      </section>
      <section className="title">{title}</section>
      <section className="info">
        <div className="author-time-info">
          {authorName}
          <time>{CalDiffTime(modifiedAt)}</time>
        </div>
      </section>
      <section className="content">{content}</section>
        <Link to={`/article/${id}`} className="link">
          Read more...
        </Link>
    </article>
  );
};

const ProfileArticle = ({ feedList }: ArticleFeedProps) => (
    <section className="article-feed-area">
      {feedList.map((article) => (
        <CardView
          id={article.id}
          options={article.options}
          title={article.title}
          anonymous={article.anonymous}
          authorName={article.authorName}
          content={article.content}
          favoriteCount={article.favoriteCount}
          wonderCount={article.wonderCount}
          clipCount={article.clipCount}
          createdAt={article.createdAt}
          modifiedAt={article.modifiedAt}
        />
      ))}
    </section>
);

export default ProfileArticle;
