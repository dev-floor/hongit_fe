import React from 'react';
import './App.css';
import AuthorInfo  from './Article/container/AuthorInfo'
import ArticleHeaderContainer from "./Article/container/ArticleHeaderContainer"

function App() {
  return (
    <div className="App">
      <ArticleHeaderContainer />
      <AuthorInfo/>
    </div>
  );
}

export default App;
 