import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { viewSort, viewFilter } from 'Atoms/atom';
import { BoardDetailProp } from 'interface/ArgProps';
import { RiEqualizerLine } from 'react-icons/ri';
import FilterModal from '../../Commons/FilterModal';
import 'css/FilterModal.css';

const BoardContentHeader = ({ boardDetailData }: BoardDetailProp) => {
  const { options } = { ...boardDetailData };

  const viewSortValue = useRecoilValue<string>(viewSort);
  const viewFilterState = useRecoilValue<string[]>(viewFilter);

  const [filterOpenState, setFilterOpenState] = useState<boolean>(false);

  const onOpenFilterModal = () => {
    setFilterOpenState(true);
  };

  const onCloseFilterModal = () => {
    setFilterOpenState(false);
  };

  return (
    <div className="board-detail-header">
      <div className="board-name">{boardDetailData.title}</div>
      <div className="board-button-area">
        {viewSortValue !== '' || viewFilterState.length > 0 ? (
          <RiEqualizerLine
            className="filter-btn activated"
            onClick={onOpenFilterModal}
          />
        ) : (
          <RiEqualizerLine className="filter-btn" onClick={onOpenFilterModal} />
        )}
        <Link to="/write">
          <button type="button">글쓰기</button>
        </Link>
      </div>
      <FilterModal
        open={filterOpenState}
        close={onCloseFilterModal}
        options={options}
      />
    </div>
  );
};

export default BoardContentHeader;
