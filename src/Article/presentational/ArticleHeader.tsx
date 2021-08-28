import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useRecoilValue } from 'recoil';
import { selectedArticleId } from 'Atoms/atom';
import { ArticleHeaderProps } from 'interface/ArgProps';
import Modal from 'Commons/Modal';
import { v4 as uuidv4 } from 'uuid';

const ArticleHeader = ({
  onUpdateArticle,
  onDeleteArticle,
  articleData,
}: ArticleHeaderProps) => {
  const { options, title, anonymous, author, createdAt } = {
    ...articleData,
  };
  const createdTimeFormat = `${createdAt.slice(0, 4)}-${createdAt.slice(
    4,
    6
  )}-${createdAt.slice(6)}`;

  const articleId = useRecoilValue(selectedArticleId);
  // const setArticleSelectedOptions = useSetRecoilState(articleCreateSelectedOptions);
  // setArticleSelectedOptions(options);
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
    history.push('/articleList');
  };

  return (
    <header className="article-header">
      <section className="option-area">
        {options.map((op, index) => (
          <span key={uuidv4()} className="option">
            {op.text}
          </span>
        ))}
      </section>
      <h2 className="article-title">{title}</h2>
      <section className="article-header-bar">
        <div className="article-info-area">
          {anonymous ? <div>익명</div> : <div>{author.nickname}</div>}
          <time className="article-created-time">{createdTimeFormat}</time>
        </div>
        <div className="article-btn-area">
          <button
            type="button"
            className="articleheader-btn-update default-btn"
            onClick={onClickArticleUpdate}
          >
            수정
          </button>
          <button
            type="button"
            className="articleheader-btn-delete default-btn"
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
        cancelBtnStr="아니오"
        cancelBtnFunc={closeModal}
        header="게시글 삭제"
        info="해당 게시글을 정말 삭제하시겠습니까?"
      />
    </header>
  );
};

export default ArticleHeader;
