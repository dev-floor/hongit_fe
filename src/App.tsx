import React from 'react';
import './App.css';
import AuthorInfo  from './AuthorInfo'
import ArticleHeaderContainer from "./container/ArticleHeaderContainer"

function App() {
  return (
    <div className="App">
      <ArticleHeaderContainer />
      <AuthorInfo/>
    </div>
  );
}

export default App;
