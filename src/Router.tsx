import React from 'react';
import { Link, Route } from 'react-router-dom';


import ArticleDetailContainer from './Article/presentational/ArticleDetail';
import ArticleCreatePage from './Article/presentational/ArticleCreatePage';
import ArticleListContainer from './ArticleList/container/ArticleListContainer';

import './Router.css';
import RouterTest from './RouterTest';
import App from './App';

function Router() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/articleList">게시물 목록 조회</Link>
        </li>
        <li>
          <Link to="/write">게시물생성</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" component={App} exact />
      <Route path="/Detail" component={ArticleDetail} exact />
      <Route path="/write" component={ArticleCreatePageContainer} exact />
      <Route exact path="/Detail/:id" component={RouterTest} />
    </div>
  );
}

export default Router;
