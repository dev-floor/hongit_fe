import React from 'react';
import { BoardDetailProp } from '../argumentsPropsInterface/BoardProps';

const BoardContentHeader = ({ boardDetailData }: BoardDetailProp) => {
  const temp = '';
  return (
    <div className="board-detail-header">
      <div className="board-name">{boardDetailData.name}</div>
      <div className="board-button-area">
        <button type="button">필터</button>
        <button type="button">글쓰기</button>
      </div>
    </div>
  );
};

export default BoardContentHeader;
