import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface MatchParams {
  id: string;
}
const RouterTest = ({ match, history }: RouteComponentProps<MatchParams>) => {
  console.log(match);
  const { id } = match.params;
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
