import React from 'react';
import ArticleListContainer from '../../ArticleList/container/ArticleListContainer';
import BoardContentHeader from '../presentational/BoardContentHeader';
import { boardAPI } from '../../api/api';

import 'css/BoardDetail.css';

const BoardDetailContainer = () => {
  const datas = boardAPI.get();
  return (
    <div className="board-detail">
      <div className="side-bar"> side-bar 영역 </div>
      <div className="vertical"> </div>
      <div className="content">
        <div className="contents-header">
          <BoardContentHeader boardDetailData={datas} />
        </div>
        <hr />
        <div className="article-area">
          <ArticleListContainer />
        </div>
      </div>
    </div>
  );
};

export default BoardDetailContainer;
