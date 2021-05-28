import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import Modal from 'Commons/Modal';
import { useHistory } from 'react-router';
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
  
  const [open, setOpen] = useState(false);
  
  const closeModal = () => {
    setOpen(false);
  };
  
  const onClickArticleDelete = () => setOpen(true);

  const history = useHistory();

  const onModalClickArticleDelete = () => {
    onDeleteArticle(articleId);
    history.push("/articleList");
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
            onClick={onClickArticleDelete}
          >
            삭제
          </button>
        </div>
      </section>
      <Modal
        open={open}
        close={closeModal}
        registerBtnStr="예"
        registerBtnFunc={onModalClickArticleDelete}
        cancleBtnStr="아니오"
        cancleBtnFunc={closeModal}
        header="게시글 삭제"
        info="해당 게시글을 정말 삭제하시겠습니까?"
      />
    </header>
  );
};

export default ArticleHeader;
