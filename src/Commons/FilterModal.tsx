import React from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { viewMode, viewSort, viewFilter, applyFilterFlag } from 'Atoms/atom';

import 'css/FilterModal.css';

const FilterModal = (props: any) => {
  const { open, close, options } = props;

  const [viewModeValue, setViewMode] = useRecoilState<string>(viewMode);
  const [viewSortValue, setViewSort] = useRecoilState<string>(viewSort);
  const [viewFilterState, setViewFilterState] = useRecoilState<string[]>(
    viewFilter
  );
  const setApplyFilterFlag = useSetRecoilState(applyFilterFlag);

  const courseGroup = options.filter((op) => op.type.id === 'COURSE_GROUP');
  const articleKind = options.filter((op) => op.type.id === 'ARTICLE_KIND');

  const onClickViewMode = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.classList.toggle('selected');
    if (e.currentTarget.previousSibling?.nodeName === 'BUTTON') {
      (e.currentTarget.previousSibling as HTMLElement).classList.remove(
        'selected'
      );
    } else {
      (e.currentTarget.nextSibling as HTMLElement).classList.remove('selected');
    }
    setViewMode(() => e.currentTarget.value);
  };

  const onClickViewSort = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.classList.toggle('selected');
    setViewSort(() => e.currentTarget.value);
  };

  const onClickViewFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.classList.toggle('selected');
    if (viewFilterState.includes(e.currentTarget.value)) {
      setViewFilterState(() =>
        viewFilterState.filter((filter) => filter !== e.currentTarget.value)
      );
    } else {
      setViewFilterState(() => [...viewFilterState, e.currentTarget.value]);
    }
  };

  const onCompleteFilterSetting = () => {
    console.log('setting completed.');
    console.log(viewSortValue, viewFilterState);
    setApplyFilterFlag(true);
    close();
  };

  return (
    <div className={open ? 'openFilterModal modal' : 'modal'}>
      {open && (
        <section className="filter-modal-section">
          <header className="filter-option">분반</header>
          <section>
            {courseGroup.map((course) =>
              viewFilterState.includes(course.text) ? (
                <button
                  className="selected"
                  type="button"
                  value={course.text}
                  onClick={onClickViewFilter}
                >
                  {course.text}
                </button>
              ) : (
                <button
                  className=""
                  type="button"
                  value={course.text}
                  onClick={onClickViewFilter}
                >
                  {course.text}
                </button>
              )
            )}
          </section>
          <header className="filter-option">질문 유형</header>
          <section>
            {articleKind.map((kind) =>
              viewFilterState.includes(kind.text) ? (
                <button
                  className="selected"
                  type="button"
                  value={kind.text}
                  onClick={onClickViewFilter}
                >
                  {kind.text}
                </button>
              ) : (
                <button
                  className=""
                  type="button"
                  value={kind.text}
                  onClick={onClickViewFilter}
                >
                  {kind.text}
                </button>
              )
            )}
          </section>
          <hr />
          <header className="filter-option">뷰</header>
          <section>
            {viewModeValue === 'card' ? (
              <button
                className="selected"
                type="button"
                value="card"
                onClick={onClickViewMode}
              >
                카드 뷰
              </button>
            ) : (
              <button
                className=""
                type="button"
                value="card"
                onClick={onClickViewMode}
              >
                카드 뷰
              </button>
            )}
            {viewModeValue === 'list' ? (
              <button
                className="selected"
                type="button"
                value="list"
                onClick={onClickViewMode}
              >
                리스트 뷰
              </button>
            ) : (
              <button
                className=""
                type="button"
                value="list"
                onClick={onClickViewMode}
              >
                리스트 뷰
              </button>
            )}
          </section>
          <header className="filter-option">정렬 방식</header>
          <section>
            {viewSortValue === 'seen' ? (
              <button
                className="selected"
                type="button"
                value="seen"
                onClick={onClickViewSort}
              >
                조회수
              </button>
            ) : (
              <button
                className=""
                type="button"
                value="seen"
                onClick={onClickViewSort}
              >
                조회수
              </button>
            )}
            {viewSortValue === 'favorite' ? (
              <button
                className="selected"
                type="button"
                value="favorite"
                onClick={onClickViewSort}
              >
                좋아요
              </button>
            ) : (
              <button
                className=""
                type="button"
                value="favorite"
                onClick={onClickViewSort}
              >
                좋아요
              </button>
            )}
            <button
              className="btn-submit"
              type="button"
              onClick={onCompleteFilterSetting}
            >
              적용
            </button>
          </section>
        </section>
      )}
    </div>
  );
};

export default FilterModal;
