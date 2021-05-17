import React from 'react';
import { useRecoilValue } from 'recoil';
import { selectedArticleId } from '../container/ArticleDetailContainer';
import { ArticleHeaderProps } from '../argumentsPropsInterface/ArticleProps';

const ArticleHeader = ({
  onUpdateArticle,
  onDeleteArticle,
  articleData,
}: ArticleHeaderProps) => {
  const { options, title, anonymous, createdDate, author } = {
    ...articleData,
  };
  const createdTimeFormat = `${createdDate.slice(0, 4)}-${createdDate.slice(
    4,
    6
  )}-${createdDate.slice(6)}`;

  const articleId = useRecoilValue(selectedArticleId);
  const onClickArticleUpdate = () => {
    onUpdateArticle(articleId);
  };

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
