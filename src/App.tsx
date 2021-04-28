import React from 'react';
import './App.css';

import AuthorInfoContainer from './Article/container/AuthorInfoContainer';
import ArticleHeaderContainer from './Article/container/ArticleHeaderContainer';
import CommentContainer from './Article/container/CommentContainer';
import ArticleListContainer from "./ArticleList/container/ArticleListContainer"

function App() {
  return (
    <div className="App">
      <ArticleListContainer />
    </div>
  );
}

export default App;
