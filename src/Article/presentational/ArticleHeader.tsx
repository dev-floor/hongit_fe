import React, { useEffect, useState } from 'react';
import { ArticleHeaderProps } from '../argumentsPropsInterface/ArticleProps';

const ArticleHeader = ({
  onUpdateArticle,
  onDeleteArticle,
  articleData,
}: ArticleHeaderProps) => {
  const { /* id, */ options, title, anonymous, createdDate, author } = {
    ...articleData,
  };
  const createdTimeFormat = `${createdDate.slice(0, 4)}-${createdDate.slice(
    4,
    6
  )}-${createdDate.slice(6)}`;

  const tmpID = 10; // id가 더미데이터게 없어서 임시로 만듬.
  const [articleId, setArticleId] = useState(-1);

  const onClickArticleUpdate = () => {
    setArticleId(() => tmpID); // 원래는 setArticle(id);
  };

  useEffect(() => {
    onUpdateArticle(articleId);
  }, [onUpdateArticle, articleId]);

  return (
    <header className="article-header">
      <section className="option-area">
        {options.map((op) => (
          <span className="option">{op}</span>
        ))}
      </section>
      <h2 className="article-title">{title}</h2>
      <section className="article-header-bar">
        <div className="article-info-area">
          {anonymous ? <div>익명</div> : <div>{author.name}</div>}
          <time className="article-created-time">{createdTimeFormat}</time>
        </div>
        <div className="article-btn-area">
          <button
            type="button"
            className="articleheader-btn-update"
            onClick={onClickArticleUpdate}
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
      </section>
    </header>
  );
};

export default ArticleHeader;
