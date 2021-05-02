import React from 'react';
import './App.css';

import AuthorInfoContainer from './Article/container/AuthorInfoContainer';
import ArticleBodyContainer from './Article/container/ArticleBodyContainer';
import ArticleHeaderContainer from './Article/container/ArticleHeaderContainer';
import CommentContainer from './Article/container/CommentContainer';
import ArticleCreatePage from './Article/presentational/ArticleCreatePage';

function App() {
  return (
    <div className="App">
      <ArticleHeaderContainer />
      <ArticleBodyContainer />
      <AuthorInfoContainer/>
      <CommentContainer/> 
      <ArticleCreatePage />
    </div>
  );
}

export default App;
 