import React from 'react';
import { Link } from 'react-router-dom';
import { ArticleFeedDetailApi } from 'api/ApiProps';
import { ArticleFeedProps } from 'interface/ArgProps';
import TglBtn from 'Commons/TglBtn';
import CalDiffTime from 'Commons/CalDiffTime';

import 'css/ProfileArticle.css';

const ArticlePreviewCard = (article: ArticleFeedDetailApi) => {
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

  const onToggleFavorites = (e: React.FormEvent<HTMLFormElement>) => {
    console.log('Card View Favorites Button Clicked - Api Call');
  };

  const onToggleWonder = (e: React.FormEvent<HTMLFormElement>) => {
    console.log('Card View Wonder Button Clicked - Api Call');
  };

  const onToggleClips = (e: React.FormEvent<HTMLFormElement>) => {
    console.log('Card View Clips Button Clicked - Api Call');
  };

  return (
    <article className="article-preview-detail">
      <section className="option-area">
        {options.map((op) => (
          <span className="option">{op.text}</span>
        ))}
      </section>
      <section className="article-preview-title">{title}</section>
      <section className="article-preview-bar">
        <div className="article-preview-author">
          {anonymous ? `익명` : `${authorName}`}
          <time className="article-created-time">
            {CalDiffTime(modifiedAt)}
          </time>
        </div>
      </section>
      <section className="article-preview-content">{content}</section>
      <section className="article-preview-card-detail">
        <Link to={`/article/${id}`} className="article-preview-link">
          Read more...
        </Link>
        <div className="article-preview-response">
          <TglBtn
            type="heart"
            count={favoriteCount}
            handler={onToggleFavorites}
          />
          <TglBtn type="wonder" count={wonderCount} handler={onToggleWonder} />
          <TglBtn type="scrap" count={clipCount} handler={onToggleClips} />
        </div>
      </section>
    </article>
  );
};

const ProfileArticle = ({ feedList }: ArticleFeedProps) => (
  <div className="article-preview">
    <section className="article-preview-area">
      {feedList.map((article) => (
        <ArticlePreviewCard
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
  </div>
);

export default ProfileArticle;
