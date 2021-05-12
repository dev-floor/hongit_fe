import React from 'react';
import { ArticleHeaderProps } from '../argumentsPropsInterface/ArticleProps';

const ArticleHeader = ({
  onUpdateArticle,
  onDeleteArticle,
  articleData,
}: ArticleHeaderProps) => {
  const { options, title, anonymous, createdDate, author } = { ...articleData };
  const createdTimeFormat = `${createdDate.slice(0, 4)}-${createdDate.slice(
    4,
    6
  )}-${createdDate.slice(6)}`;
  return (
     <header className="article-header">
      <section className="option-area">
        {options.map((op) => (
          <span className="option">{op}</span>
        ))}
      </section>
      <h2 className="article-title">{title}</h2>
      <section className="article-detail">
        {anonymous ? <div>익명</div> : <div>{author.name}</div>}
        <time className="article-created-time">{createdTimeFormat}</time>
      </section>
      <div className="articleheader-btns">
        <button
          type="button"
          className="articleheader-btn-update"
          onClick={onUpdateArticle}
        >
          수정
        </button>
        <button
          type="button"
          className="articleheader-btn-delete"
          onClick={onDeleteArticle}
        >
          삭제
        </button>
      </div>
    </header>
  );
};

export default ArticleHeader;
