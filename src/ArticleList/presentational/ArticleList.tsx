import React, { useState } from 'react';
import { FaThumbsUp, FaTags } from "react-icons/fa";
import { ImWondering } from "react-icons/im";
import { ArticleListProps } from '../argumentsPropsInterface/ArticleListProps';
import { ArticleListApi } from '../../api/ApiProps';
import '../css/ArticleList.css';

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
    <article className="article-preview-card">
      <nav className="article-preview-option-block">
        {options.map((op) => (
          <span className="article-preview-option">{op}</span>
        ))}
      </nav>
      <h3 className="article-preview-title">{title}</h3>
      <div style={{ display: 'flex' }}>
        <div className="article-preview-author">
          {anonymous ? `${author.name}` : `익명`}
        </div>
        <div className="article-preview-time">{createdTimeFormat}</div>
      </div>
      <div className="article-preview-content">{content}</div>
      <div className="article-preview-card-detail">
        <a href="#none">Read more...</a>
        <div className="article-preview-response">
          <div className="article-preview-favorites"><FaThumbsUp />{favorites}</div>
          <div className="article-preview-wonder"><ImWondering />{wonders}</div>
          <div className="article-preview-clips"><FaTags />{clips}</div>
        </div>
      </div>
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
    <article className="article-preview-list">
      <nav className="article-preview-option-block">
        {options.map((op) => (
          <span className="article-preview-option">{op}</span>
        ))}
      </nav>
      <h3 className="article-preview-title">{title}</h3>
      <div className="article-preview-list-detail">
        <div className="article-preview-author">
          {anonymous ? `${author.name}` : `익명`}
        </div>
        <div className="article-preview-time">{createdTimeFormat}</div>
        <div className="article-preview-response">
          <div className="article-preview-favorites"><FaThumbsUp />{favorites}</div>
          <div className="article-preview-wonder"><ImWondering />{wonders}</div>
          <div className="article-preview-clips"><FaTags />{clips}</div>
        </div>
      </div>
    </article>
  );
};

const ArticleListArea = ({ articleListData }: ArticleListProps) => {
  const [viewMode, setViewMode] = useState('card');

  const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setViewMode(e.target.value);
  };

  return (
    <section className="article-preview-area">
      <title className="article-preview-boardname">수업게시판</title>
      <select className="article-view-mode-select" onChange={onChangeSelect}>
        <option value="card">카드 뷰</option>
        <option value="list">리스트 뷰</option>
      </select>
      {viewMode === 'card'
        ? articleListData.map((articlePreview) => (
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
        : articleListData.map((articlePreview) => (
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
  );
};

export default ArticleListArea;
