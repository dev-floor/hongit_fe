import React from 'react';
import { Link } from 'react-router-dom';
import { BoardDetailProp } from '../argumentsPropsInterface/BoardProps';

const BoardContentHeader = ({ boardDetailData }: BoardDetailProp) => {
  const temp = '';
  return (
    <div className="board-detail-header">
      <div className="board-name">{boardDetailData.name}</div>
      <div className="board-button-area">
        <button type="button">필터</button>
        <Link to='/write'><button type="button">글쓰기</button></Link>
      </div>
    </div>
  );
};

export default BoardContentHeader;
