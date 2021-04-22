import React from 'react';
import './App.css';
import AuthorInfo  from './Article/container/AuthorInfo'
import ArticleHeaderContainer from "./Article/container/ArticleHeaderContainer"
import ArticleBodyContainer  from './Article/container/ArticleBodyContainer'
import AuthorInfoContainer  from './Article/container/AuthorInfoContainer'

function App() {
  return (
    <div className="App">
      <ArticleHeaderContainer />
      <ArticleBodyContainer />
      <AuthorInfoContainer/>
    </div>
  );
}

export default App;
 