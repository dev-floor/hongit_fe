import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { boardAPI } from 'api/api';
import { BoardDetailApi, BoardOption } from 'api/ApiProps';
import ArticleCreatePageContainer from 'Article/container/ArticleCreatePageContainer';
import ArticleListContainer from 'ArticleList/container/ArticleListContainer';
import BoardContentHeader from '../presentational/BoardContentHeader';
import 'css/BoardDetail.css';

const BoardDetailContainer = () => {
  const [boardData, setboardData] = useState<BoardDetailApi>({
    id: 0,
    name: '',
    professorName: '',
    subjectName: '',
    boardTypeName: '',
    boardTypeText: '',
    dividedOptions: [] as BoardOption[],
    articleTypeOptions: [] as BoardOption[],
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
      <section className="side-bar"> side-bar </section>
      <section className="vertical"> </section>
      <section className="content">
        <header className="contents-header">
          <BoardContentHeader boardDetailData={boardData} />
        </header>
        <hr />
        <div className="article-area">
          <ArticleListContainer />
        </div>
      </section>
      <Route path="/board/write" component={ArticleCreatePageContainer} exact />
    </div>
  );
};

export default BoardDetailContainer;