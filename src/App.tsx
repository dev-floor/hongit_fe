import React from 'react';
import './App.css';

import AuthorInfoContainer  from './Article/container/AuthorInfoContainer'
import ArticleHeaderContainer from "./Article/container/ArticleHeaderContainer"
import ArticleCreatePage from "./Article/presentational/ArticleCreatePage"

function App() {
  return (
    <div className="App">
      <ArticleHeaderContainer />
      <AuthorInfoContainer/>
    </div>
  );
}

export default App;
 