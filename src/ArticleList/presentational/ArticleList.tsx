import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { viewMode } from 'Atoms/atom';
import { ArticleListApi } from 'api/ApiProps';
import { ArticleListProps } from 'interface/ArgProps';
import { FaThumbsUp, FaTags } from 'react-icons/fa';
import { ImWondering } from 'react-icons/im';
import 'css/ArticleList.css';

const ArticlePreviewCard = (articlePreview: ArticleListApi) => {
  const {
    id,
    options,
    title,
    anonymous,
    author,
    createdDate,
    content,
    favorites,
    wonders,
    clips,
  } = { ...articlePreview };
  const createdTimeFormat = `${createdDate.slice(0, 4)}-${createdDate.slice(
    4,
    6
  )}-${createdDate.slice(6)}`;
  return (
    <article className="article-preview-detail">
      <section className="option-area">
        {options.map((op) => (
          <span className="option">{op}</span>
        ))}
      </section>
      <section className="article-preview-title">{title}</section>
      <section className="article-preview-bar">
        <div className="article-preview-author">
          {anonymous ? `${author.name}` : `익명`}
          <time className="article-created-time">{createdTimeFormat}</time>
        </div>
      </section>
      <section className="article-preview-content">{content}</section>
      <section className="article-preview-card-detail">
        <Link to={`/article/${id}`}>Read more...</Link>
        <div className="article-preview-response">
          <div className="article-preview-favorites">
            <FaThumbsUp />
            {favorites}
          </div>
          <div className="article-preview-wonder">
            <ImWondering />
            {wonders}
          </div>
          <div className="article-preview-clips">
            <FaTags />
            {clips}
          </div>
        </div>
      </section>
    </article>
  );
};

const ArticlePreviewList = (articlePreview: ArticleListApi) => {
  const {
    id,
    options,
    title,
    anonymous,
    author,
    createdDate,
    favorites,
    wonders,
    clips,
  } = { ...articlePreview };
  const createdTimeFormat = `${createdDate.slice(0, 4)}-${createdDate.slice(
    4,
    6
  )}-${createdDate.slice(6)}`;
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
        <div className="article-preview-author">
          {anonymous ? `${author.name}` : `익명`}
        </div>
        <time className="article-created-time">{createdTimeFormat}</time>
        <div className="article-preview-response">
          <div className="article-preview-favorites">
            <FaThumbsUp />
            {favorites}
          </div>
          <div className="article-preview-wonder">
            <ImWondering />
            {wonders}
          </div>
          <div className="article-preview-clips">
            <FaTags />
            {clips}
          </div>
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
                author={articlePreview.author}
                createdDate={articlePreview.createdDate}
                modifiedDate={articlePreview.modifiedDate}
                content={articlePreview.content}
                favorites={articlePreview.favorites}
                wonders={articlePreview.wonders}
                clips={articlePreview.clips}
              />
            ))
          : articleListTmp.map((articlePreview) => (
              <ArticlePreviewList
                id={articlePreview.id}
                options={articlePreview.options}
                title={articlePreview.title}
                anonymous={articlePreview.anonymous}
                author={articlePreview.author}
                createdDate={articlePreview.createdDate}
                modifiedDate={articlePreview.modifiedDate}
                content={articlePreview.content}
                favorites={articlePreview.favorites}
                wonders={articlePreview.wonders}
                clips={articlePreview.clips}
              />
            ))}
      </section>
    </div>
  );
};

export default ArticleListArea;
