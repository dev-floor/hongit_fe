import React from 'react';
import { articleCreateSelectedOptions } from 'Atoms/atom';

import 'css/ArticleOptionModal.css';
import { useRecoilState } from 'recoil';

const ArticleOptionModal = (props: any) => {
  const { open, close, options } = props;

  const [selectedOptions, setSelectedOptions] = useRecoilState(
    articleCreateSelectedOptions
  );

  const courseGroup = options.filter((op) => op.type.id === 'COURSE_GROUP');
  const articleKind = options.filter((op) => op.type.id === 'ARTICLE_KIND');

  const onClickOptions = (e: React.MouseEvent<HTMLButtonElement>) => {
    const clickedOptionValue = e.currentTarget.value;
    e.currentTarget.classList.toggle('selected');
    if (selectedOptions.includes(clickedOptionValue)) {
      setSelectedOptions(() =>
        selectedOptions.filter((op) => op !== clickedOptionValue)
      );
    } else {
      setSelectedOptions([...selectedOptions, clickedOptionValue]);
    }
  };

  const onCompleteOptionSetting = () => {
    console.log(selectedOptions);
    close();
  };

  return (
    <div className={open ? 'openArticleOptionModal modal' : 'modal'}>
      {open && (
        <section className="article-write-option-section">
          <h3 className="article-create-option-modal-title">
            옵션을 선택해주세요
          </h3>
          <header className="course-group">분반</header>
          {courseGroup.map((course) =>
            selectedOptions.includes(course.text) ? (
              <button
                className="selected"
                type="button"
                value={course.text}
                onClick={onClickOptions}
              >
                {course.text}
              </button>
            ) : (
              <button
                className=""
                type="button"
                value={course.text}
                onClick={onClickOptions}
              >
                {course.text}
              </button>
            )
          )}
          <hr />
          <header className="article-kind">질문 유형</header>
          {articleKind.map((kind) =>
            selectedOptions.includes(kind.text) ? (
              <button
                className="selected"
                type="button"
                value={kind.text}
                onClick={onClickOptions}
              >
                {kind.text}
              </button>
            ) : (
              <button
                className=""
                type="button"
                value={kind.text}
                onClick={onClickOptions}
              >
                {kind.text}
              </button>
            )
          )}
          <button
            type="button"
            className="btn-submit"
            onClick={onCompleteOptionSetting}
          >
            적용
          </button>
        </section>
      )}
    </div>
  );
};

export default ArticleOptionModal;
