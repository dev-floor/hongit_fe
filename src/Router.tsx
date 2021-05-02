import React from 'react';
import { Link, Route } from 'react-router-dom';

import ArticleDetail from './Article/presentational/ArticleDetail';
import ArticleCreatePage from './Article/presentational/ArticleCreatePage';

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
          <Link to="/Detail">게시물조회</Link>
        </li>
        <li>
          <Link to="/Create">게시물생성</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" component={App} exact/>
      <Route path="/Detail" component={ArticleDetail} exact />
      <Route path="/Create" component={ArticleCreatePage} exact />
      <Route exact path="/Detail/:id" component={RouterTest} />
    </div>
  );
}

export default Router;
