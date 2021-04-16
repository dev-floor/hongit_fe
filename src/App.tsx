import React from 'react';
import './App.css';
import AuthorInfo  from './Article/presentational/AuthorInfo'
import ArticleHeaderContainer from "./Article/container/ArticleHeaderContainer"
import ArticleBodyContainer from './Article/container/ArticleBodyContainer'

function App() {
  return (
    <div className="App">
      <ArticleHeaderContainer />
      <ArticleBodyContainer/>
      <AuthorInfo/>
    </div>
  );
}

export default App;
 