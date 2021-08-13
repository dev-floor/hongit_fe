import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { viewMode } from 'Atoms/atom';
import { ArticleListApi, ArticleListApiPartial } from 'api/ApiProps';
import { ArticleListProps } from 'interface/ArgProps';
import TglBtn from 'Commons/TglBtn';
import 'css/ArticleList.css';

const ArticlePreviewCard = (articlePreview: ArticleListApiPartial) => {
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
  } = { ...articlePreview };

  const createdTimeFormat =
    createdAt === modifiedAt
      ? `${createdAt?.slice(0, 4)}-${createdAt?.slice(5, 7)}-${createdAt?.slice(
          7,
          9
        )}`
      : `${modifiedAt?.slice(0, 4)}-${modifiedAt?.slice(
          5,
          7
        )}-${modifiedAt?.slice(7, 9)}`;

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
        {options?.map((op) => (
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

const ArticlePreviewList = (articlePreview: ArticleListApiPartial) => {
  const {
    id,
    options,
    title,
    anonymous,
    authorName,
    favoriteCount,
    wonderCount,
    clipCount,
    createdAt,
    modifiedAt,
  } = { ...articlePreview };

  const createdTimeFormat =
    createdAt === modifiedAt
      ? `${createdAt?.slice(0, 4)}-${createdAt?.slice(5, 7)}-${createdAt?.slice(
          7,
          9
        )}`
      : `${modifiedAt?.slice(0, 4)}-${modifiedAt?.slice(
          5,
          7
        )}-${modifiedAt?.slice(7, 9)}`;

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
        {options?.map((op) => (
          <span className="option">{op.text}</span>
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

const ArticleListArea = ({ articleListData }: ArticleListProps) => {
  const viewModeHistory = useRecoilValue<string>(viewMode);

  const [articleListTmp, setArticleListData] = useState<ArticleListApi[]>([]);

  useEffect(() => {
    setArticleListData(articleListData);
    console.log('!');
  }, [articleListData]);

  return (
    <div className="article-preview">
      <section className="article-preview-area">
        {viewModeHistory === 'card'
          ? articleListTmp.map((articlePreview) => (
              <ArticlePreviewCard
                id={articlePreview.id}
                options={articlePreview.options}
                title={articlePreview.title}
                anonymous={articlePreview.anonymous}
                authorName={articlePreview.authorName}
                content={articlePreview.content}
                favoriteCount={articlePreview.favoriteCount}
                wonderCount={articlePreview.wonderCount}
                clipCount={articlePreview.clipCount}
                createdAt={articlePreview.createdAt}
                modifiedAt={articlePreview.modifiedAt}
              />
            ))
          : articleListTmp.map((articlePreview) => (
              <ArticlePreviewList
                id={articlePreview.id}
                options={articlePreview.options}
                title={articlePreview.title}
                anonymous={articlePreview.anonymous}
                authorName={articlePreview.authorName}
                favoriteCount={articlePreview.favoriteCount}
                wonderCount={articlePreview.wonderCount}
                clipCount={articlePreview.clipCount}
                createdAt={articlePreview.createdAt}
                modifiedAt={articlePreview.modifiedAt}
              />
            ))}
      </section>
    </div>
  );
};

export default ArticleListArea;
