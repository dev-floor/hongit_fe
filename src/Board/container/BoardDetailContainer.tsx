import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';

import ArticleCreatePageContainer from '../../Article/container/ArticleCreatePageContainer';
import ArticleListContainer from '../../ArticleList/container/ArticleListContainer';
import BoardContentHeader from '../presentational/BoardContentHeader';
import { boardAPI } from '../../api/api';
import { BoardDetailApi, BoardOption } from '../../api/ApiProps';

import 'css/BoardDetail.css';

const BoardDetailContainer = () => {
  const [boardData, setboardData] = useState<BoardDetailApi>({
    id:0,
    name:'',
    professorName:'',
    subjectName:'',
    boardTypeName:'',
    boardTypeText:'',
    dividedOptions:[] as BoardOption[],
    articleTypeOptions:[] as BoardOption[],
  });

  const loadData = async () => {
    const response = await boardAPI.get(/* boardId */);
    setboardData(response);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="board-detail">
      <div className="side-bar"> side-bar </div>
      <div className="vertical"> </div>
      <div className="content">
        <div className="contents-header">
          <BoardContentHeader boardDetailData={boardData} />
        </div>
        <hr />
        <div>
      {boardData.dividedOptions.map((option) => (
          <button className="hashtag" type="button">
            {option.text}
          </button>
        ))}
  {boardData.articleTypeOptions.map((option) => (
          <button className="hashtag" type="button">
            {option.text}
          </button>
        ))}
      </div>
        <div className="article-area">
          <ArticleListContainer/>
        </div>
      </div>
      <Route path="/board/write" component={ArticleCreatePageContainer} exact />
    </div>
  );
};

export default BoardDetailContainer;
