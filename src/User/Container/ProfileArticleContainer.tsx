import React, { useState, useEffect } from 'react';

import { articleAPI } from 'api/api';
import { ArticleFeedDetailApi } from 'api/ApiProps';

import ProfileArticle from '../Presentational/ProfileArticle';

const ProfileArticleContainer = () => {
  const [feedListData, setFeedList] = useState<ArticleFeedDetailApi[]>([]);

  const loadData = async () => {
    const response = await articleAPI.getFeedByNickName('pjh', 1, 10);
    setFeedList(response);
  };

  useEffect(() => {
    loadData();
  }, []);

  return <ProfileArticle feedList={feedListData} />;
};

export default ProfileArticleContainer;
