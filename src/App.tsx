import React from 'react';
import './App.css';

import ArticleBodyContainer from './Article/container/ArticleBodyContainer'
import AuthorInfoContainer  from './Article/container/AuthorInfoContainer'
import ArticleHeaderContainer from "./Article/container/ArticleHeaderContainer"

function App() {
  return (
    <div className="App">
      <ArticleHeaderContainer />
      <ArticleBodyContainer/>
      <AuthorInfoContainer/>
    </div>
  );
}

export default App;
 