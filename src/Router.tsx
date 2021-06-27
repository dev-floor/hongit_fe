import React from 'react';
import { Route } from 'react-router-dom';
import ArticleDetailContainer from './Article/container/ArticleDetailContainer';
import ArticleCreatePageContainer from './Article/container/ArticleCreatePageContainer';
import ArticleListContainer from './ArticleList/container/ArticleListContainer';
import BoardDetailContainer from './Board/container/BoardDetailContainer';
import App from './App';

const Router = () => (
  <div>
    <Route path="/" component={App} exact />
    <Route path="/detail" component={ArticleDetailContainer} exact />
    <Route path="/articleList" component={ArticleListContainer} exact />
    <Route path="/article/:id" component={ArticleDetailContainer} exact />
    <Route path="/write" component={ArticleCreatePageContainer} exact />
    <Route path="/board" component={BoardDetailContainer} exact />
  </div>
);

export default Router;
