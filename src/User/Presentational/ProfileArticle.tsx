import React from 'react';
import { Link } from 'react-router-dom';
import { ArticleFeedApiPartial } from 'api/ApiProps';
import { ProfileArticleFeedProps } from 'interface/ArgProps';
import CalDiffTime from 'Commons/CalDiffTime';

import 'css/ProfileArticle.css';

const CardView = (article: ArticleFeedApiPartial) => {
  const { id, options, title, authorName, content, modifiedAt } = {
    ...article,
  };

  return (
    <article className="card-area">
      <section className="option-area">
        {options?.map((op) => (
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

const ProfileArticle = ({ feedList }: ProfileArticleFeedProps) => (
  <section className="article-feed-area">
    {feedList && feedList.length === 0 ? (
      <div className="empty-msg">작성한 게시글이 없습니다.</div>
    ) : (
      <div>
        {feedList?.map((article) => (
          <CardView
            id={article.id}
            options={article.options}
            title={article.title}
            authorName={article.authorName}
            content={article.content}
            modifiedAt={article.modifiedAt}
          />
        ))}
      </div>
    )}
  </section>
);

export default ProfileArticle;
