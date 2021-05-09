import React from 'react';
import { ArticleDetailApi } from '../../api/ApiProps';

const ArticleHeader = (dummyData: ArticleDetailApi) => {
  const { options, title, anonymous, createdDate, author } = { ...dummyData };
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
    </header>
  );
};

export default ArticleHeader;
