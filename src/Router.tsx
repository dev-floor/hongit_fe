import React from 'react';
import { Route } from 'react-router-dom';
import { sidebarAPI } from 'api/api';
import FloatingButton from 'Commons/FloatingButton';
import ArticleDetailContainer from './Article/container/ArticleDetailContainer';
import ArticleCreatePageContainer from './Article/container/ArticleCreatePageContainer';
import ArticleListContainer from './ArticleList/container/ArticleListContainer';
import BoardDetailContainer from './Board/container/BoardDetailContainer';
import Sidebar from './Commons/Sidebar';
import App from './App';

import 'css/Router.css';

// import 'css/BoardDetail.css';
const Router = () => {
  const sideBarData = sidebarAPI.get();

  return (
    <div className="main">
      <section className="side-bar">
        <Sidebar sideBarData={sideBarData} />
      </section>
      <div className="vertical" />
      <section className="content">
        <Route path="/" component={App} exact />
        <Route path="/detail" component={ArticleDetailContainer} exact />
        <Route path="/articleList" component={ArticleListContainer} exact />
        <Route path="/article/:id" component={ArticleDetailContainer} exact />
        <Route path="/write" component={ArticleCreatePageContainer} exact />
        <Route path="/board" component={BoardDetailContainer} exact />
      </section>
      <FloatingButton />
    </div>
  );
};

export default Router;
