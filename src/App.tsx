import React from 'react';
import './App.css';

import AuthorInfoContainer  from './Article/container/AuthorInfoContainer'
import ArticleHeaderContainer from "./Article/container/ArticleHeaderContainer"
import CommentContainer from "./Article/container/CommentContainer"

function App() {
  return (
    <div className="App">
      <ArticleHeaderContainer />
      <AuthorInfoContainer/>
      <CommentContainer/>

    </div>
  );
}

export default App;
 