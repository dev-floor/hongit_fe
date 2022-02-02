import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { boardDetailOptions } from 'Atoms/atom';
import { boardAPI } from 'api/api';
import { BoardDetailApi } from 'api/ApiProps';
import ArticleListContainer from 'ArticleList/container/ArticleListContainer';
import BoardContentHeader from '../presentational/BoardContentHeader';

import 'css/BoardDetail.css';

const BoardDetailContainer = () => {
  const { id } = useParams<{ id: string }>();
  const [boardData, setboardData] = useState<BoardDetailApi>({
    id: -1,
    title: '',
    professor: {
      name: '',
      email: '',
    },
    subject: '',
    type: {
      id: '',
      text: '',
    },
    grade: {
      id: '',
      text: '',
    },
    options: [],
  });
  const setBoardDetailOption = useSetRecoilState(boardDetailOptions);

  const loadData = useCallback(async () => {
    const response = await boardAPI.getById(id);
    if (response === undefined) {
      console.error('Error in getting user board infos');
    } else {
      setboardData(response);
      setBoardDetailOption(response.options);
    }
  }, [id, setBoardDetailOption]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <div>
      {boardData === undefined || boardData.id === -1 ? (
        <div>Board Loading...</div>
      ) : (
        <div className="board-detail">
          <section className="content">
            <header className="contents-header">
              <BoardContentHeader boardDetailData={boardData} />
            </header>
            <hr />
            <div className="article-area">
              <ArticleListContainer id={id} />
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default BoardDetailContainer;
