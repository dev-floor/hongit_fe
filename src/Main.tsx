import React from 'react';
import { Route } from 'react-router-dom';
import ArticleDetailContainer from 'Article/container/ArticleDetailContainer';
import ArticleCreatePageContainer from 'Article/container/ArticleCreatePageContainer';
import ArticleListContainer from 'ArticleList/container/ArticleListContainer';
import BoardDetailContainer from 'Board/container/BoardDetailContainer';
import SidebarContainer from 'Layout/Container/SidebarContainer';
import AllLectureMenuContainer from 'Board/container/AllLectureMenuContainer';
import MyLectureContainer from 'Board/container/MyLectureContainer';
import HongitMainContainer from 'Layout/Container/HongitMainContainer';
import HongitHeader from 'Layout/Presentational/HongitHeader';
import HongitFooter from 'Layout/Presentational/HongitFooter';
import 'css/Main.css';

const Main = () => (
  <div>
    <HongitHeader />
    <div className="total-main">
      <div className="side-contents">
        <SidebarContainer />
      </div>
      <section className="vertical"> </section>
      <div className="total-contents">
        <Route path="/" component={HongitMainContainer} exact />
        <Route path="/detail" component={ArticleDetailContainer} exact />
        <Route path="/articleList" component={ArticleListContainer} exact />
        <Route path="/article/:id" component={ArticleDetailContainer} exact />
        <Route path="/write" component={ArticleCreatePageContainer} exact />
        <Route path="/board" component={BoardDetailContainer} exact />
        <Route
          path="/allLectureMenu"
          component={AllLectureMenuContainer}
          exact
        />
        <Route path="/myLectureRegister" component={MyLectureContainer} exact />
        <Route path="/board/9" render={() => <h1>질문게시판</h1>} />
        <Route path="/board/10" render={() => <h1>커뮤니티게시판</h1>} />
        <Route path="/board/11" render={() => <h1>구인게시판</h1>} />
        <Route path="/board/12" render={() => <h1>채용게시판</h1>} />
      </div>
    </div>
    <HongitFooter />
  </div>
);

export default Main;
