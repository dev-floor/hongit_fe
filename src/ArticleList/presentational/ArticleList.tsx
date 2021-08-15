import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { viewMode } from 'Atoms/atom';
import { ArticleFeedDetailApi } from 'api/ApiProps';
import { ArticleFeedProps } from 'interface/ArgProps';
import TglBtn from 'Commons/TglBtn';
import 'css/ArticleList.css';

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
    modifiedAt,
  } = { ...article };

  const createdTimeFormat = `${modifiedAt.slice(0, 4)}-${modifiedAt.slice(
    4,
    6
  )}-${modifiedAt.slice(6)}`;

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
          {anonymous ? `${authorName}` : `익명`}
          <time className="article-created-time">{createdTimeFormat}</time>
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

const ArticlePreviewList = (article: ArticleFeedDetailApi) => {
  const {
    id,
    options,
    title,
    anonymous,
    authorName,
    favoriteCount,
    wonderCount,
    clipCount,
    modifiedAt,
  } = { ...article };

  const createdTimeFormat = `${modifiedAt.slice(0, 4)}-${modifiedAt.slice(
    4,
    6
  )}-${modifiedAt.slice(6)}`;

  const onToggleFavorites = (e: React.FormEvent<HTMLFormElement>) => {
    console.log('List View Favorites Button Clicked - Api Call');
  };

  const onToggleWonder = (e: React.FormEvent<HTMLFormElement>) => {
    console.log('List View Wonder Button Clicked - Api Call');
  };

  const onToggleClips = (e: React.FormEvent<HTMLFormElement>) => {
    console.log('List View Clips Button Clicked - Api Call');
  };

  return (
    <article className="article-preview-detail">
      <section className="option-area">
        {options.map((op) => (
          <span className="option">{op}</span>
        ))}
      </section>
      <Link to={`/article/${id}`}>
        <section className="article-preview-title">{title}</section>
      </Link>
      <section className="article-preview-list-detail">
        <div className="article-preview-author-time">
          {anonymous ? `${authorName}` : `익명`}
          <time>{createdTimeFormat}</time>
        </div>
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

const ArticleListArea = ({ feedList }: ArticleFeedProps) => {
  const viewModeHistory = useRecoilValue<string>(viewMode);

  const [articleListTmp, setArticleListData] = useState<ArticleFeedDetailApi[]>(
    []
  );

  useEffect(() => {
    setArticleListData(feedList);
    console.log('!');
  }, [feedList]);

  return (
    <div className="article-preview">
      <section className="article-preview-area">
        {viewModeHistory === 'card'
          ? articleListTmp.map((article) => (
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
            ))
          : articleListTmp.map((article) => (
              <ArticlePreviewList
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
};

export default ArticleListArea;
