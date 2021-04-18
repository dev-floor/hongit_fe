import React from 'react';
import './App.css';

import AuthorInfoContainer  from './Article/container/AuthorInfoContainer'
import ArticleHeaderContainer from "./Article/container/ArticleHeaderContainer"
import CommentArea from "./Article/presentational/CommentArea"

function App() {
  return (
    <div className="App">
      <ArticleHeaderContainer />
      <AuthorInfoContainer/>
      <CommentArea/>
    </div>
  );
}

export default App;
 