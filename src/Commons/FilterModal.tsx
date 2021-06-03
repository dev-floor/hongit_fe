import React, { useEffect } from 'react';
import { useSetRecoilState, useRecoilState } from 'recoil';
import {
  viewMode,
  viewSort,
  viewFilter,
} from '../ArticleList/presentational/ArticleList';

const FilterModal = (props: any) => {
  const { open, close, options } = props;
  const setViewMode = useSetRecoilState<string>(viewMode);
  const setViewSort = useSetRecoilState<string>(viewSort);
  const [viewFilterState, setViewFilterState] = useRecoilState<string[]>(
    viewFilter
  );

  const courseGroup = options.filter((op) => op.type === 'COURSE_GROUP');
  const articleKind = options.filter((op) => op.type === 'ARTICLE_KIND');

  const onClickViewMode = (e: React.MouseEvent<HTMLButtonElement>) => {
    setViewMode(() => e.currentTarget.value);
  };

  const onClickViewSort = (e: React.MouseEvent<HTMLButtonElement>) => {
    setViewSort(() => e.currentTarget.value);
  };

  const onClickViewFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (viewFilterState.includes(e.currentTarget.value)) {
      setViewFilterState(() =>
        viewFilterState.filter((filter) => filter !== e.currentTarget.value)
      );
    } else {
      setViewFilterState(() => [...viewFilterState, e.currentTarget.value]);
    }
  };

  return (
    <div className={open ? 'openFilterModal' : 'modal'}>
      {open && (
        <section className="article-list-filter">
          <h3>분반</h3>
          {courseGroup.map((course) => (
            <button
              className="option"
              type="button"
              value={course.text}
              onClick={onClickViewFilter}
            >
              {course.text}
            </button>
          ))}
          <h3>질문 유형</h3>
          {articleKind.map((kind) => (
            <button
              className="option"
              type="button"
              value={kind.text}
              onClick={onClickViewFilter}
            >
              {kind.text}
            </button>
          ))}
          <hr />
          <h3>뷰</h3>
          <button
            className="option"
            type="button"
            value="card"
            onClick={onClickViewMode}
          >
            카드 뷰
          </button>
          <button
            className="option"
            type="button"
            value="list"
            onClick={onClickViewMode}
          >
            리스트 뷰
          </button>
          <h3>정렬 방식</h3>
          <button
            className="option"
            type="button"
            value="seen"
            onClick={onClickViewSort}
          >
            조회수
          </button>
          <button
            className="option"
            type="button"
            value="favorite"
            onClick={onClickViewSort}
          >
            좋아요
          </button>
        </section>
      )}
    </div>
  );
};

export default FilterModal;
