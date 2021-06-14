import React, { useEffect } from 'react';

import 'css/ArticleOptionModal.css';

const ArticleOptionModal = (props: any) => {
  const { open, close, options } = props;

  const courseGroup = options.filter((op) => op.type.id === 'COURSE_GROUP');
  const articleKind = options.filter((op) => op.type.id === 'ARTICLE_KIND');

  return (
    <div className={open ? 'openArticleOptionModal modal' : 'modal'}>
      {open && (
        <section className="article-write-option-section">
          <h3 className="article-create-option-modal-title">
            옵션을 선택해주세요
          </h3>
          <header className="course-group">분반</header>
          {courseGroup.map((course) => (
            <button type="button">{course.text}</button>
          ))}
          <hr />
          <header className="article-kind">질문 유형</header>
          {articleKind.map((kind) => (
            <button type="button">{kind.text}</button>
          ))}
          <button type="button" className="btn-submit" onClick={close}>
            적용
          </button>
        </section>
      )}
    </div>
  );
};

export default ArticleOptionModal;
