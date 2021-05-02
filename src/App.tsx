import React from 'react';
import './App.css';
import { RouteComponentProps } from 'react-router-dom';

<<<<<<< HEAD
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
=======
const App = ({ match }: RouteComponentProps) => {
  console.log(match);
  return (
    <div className="big-text">
      <p> Home </p>
>>>>>>> 378fd6a (React Router Test)
    </div>
  );
};

export default App;
