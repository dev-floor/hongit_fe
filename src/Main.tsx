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
import ProfileContainer from 'User/Container/ProfileContainer';
import PasswordEditContainer from 'User/Container/PasswordEditContainer';
import ProfileEditContainer from 'User/Container/ProfileEditContainer';
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
        <Route path="/profile" component={ProfileContainer} exact />
        <Route path="/profileEdit" component={ProfileEditContainer} exact />
        <Route path="/detail" component={ArticleDetailContainer} exact />
        <Route path="/articleList" component={ArticleListContainer} exact />
        <Route path="/article/:id" component={ArticleDetailContainer} exact />
        <Route path="/write" component={ArticleCreatePageContainer} exact />
        <Route path="/board/:id" component={BoardDetailContainer} exact />
        <Route
          path="/allLectureMenu"
          component={AllLectureMenuContainer}
          exact
        />
        <Route path="/myLectureRegister" component={MyLectureContainer} exact />
        <Route path="/passwordEdit" component={PasswordEditContainer} exact />
      </div>
    </div>
    <HongitFooter />
  </div>
);

export default Main;
