import React from 'react';
import { Route } from 'react-router-dom';
import ArticleDetailContainer from './Article/container/ArticleDetailContainer';
import ArticleCreatePageContainer from './Article/container/ArticleCreatePageContainer';
import ArticleListContainer from './ArticleList/container/ArticleListContainer';
import BoardDetailContainer from './Board/container/BoardDetailContainer';
import SidebarContainer from './Layout/SidebarContainer';
import HongitMain from './Layout/HongitMain';
import HongitHeader from './Layout/HongitHeader';
import HongitFooter from './Layout/HongitFooter';

import 'css/Router.css';

const Router = () => (
  <div>
    <HongitHeader />
    <div className="total-main">
      <div className="side-contents">
        <SidebarContainer />
      </div>
      <section className="vertical"> </section>
      <div className="total-contents">
        <Route path="/" component={HongitMain} exact />
        <Route path="/detail" component={ArticleDetailContainer} exact />
        <Route path="/articleList" component={ArticleListContainer} exact />
        <Route path="/article/:id" component={ArticleDetailContainer} exact />
        <Route path="/write" component={ArticleCreatePageContainer} exact />
        <Route path="/board" component={BoardDetailContainer} exact />
      </div>
    </div>
    <HongitFooter />
  </div>
);

export default Router;
