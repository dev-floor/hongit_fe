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
      <nav className="article-option-block">
        {options.map((op) => (
          <span className="article-option">{op}</span>
        ))}
      </nav>
      <h2 className="article-title">{title}</h2>
      <div className="article-detail">
        {anonymous ? <div>익명</div> : <div>{author.name}</div>}
        <time className="article-created-time">{createdTimeFormat}</time>
      </div>
      <div className="articleheader-btns">
        <button
          type="button"
          className="articleheade-btn-update"
          onClick={onUpdateArticle}
        >
          수정
        </button>
        <button
          type="button"
          className="articleheade-btn-delete"
          onClick={onDeleteArticle}
        >
          삭제
        </button>
      </div>
    </header>
  );
};

export default ArticleHeader;
