import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

interface MatchParams {
  id: string;
}
const RouterTest = () => {
  const { id } = useParams();
  const history = useHistory();
  console.log(id);

  const goBack = () => {
    history.goBack();
  };

  return (
    <div>
      <h2>{id}번째 댓글을 눌렀습니다</h2>
      <button type="button" onClick={goBack}>
        뒤로가기
      </button>
    </div>
  );
};

export default RouterTest;
