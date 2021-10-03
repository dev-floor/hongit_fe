import React, { useState, useEffect } from 'react';

import { commentsAPI } from 'api/api';
import { ProfileCommentApi } from 'api/ApiProps';

import ProfileComment from '../Presentational/ProfileComment';

const ProfileCommentContainer = () => {
  const [data, setFeedList] = useState<ProfileCommentApi[]>([]);

  const loadData = async () => {
    // const response = await profileCommentAPI.getByDummy();
    const response = await commentsAPI.getByNickName('lxxjn0');
    setFeedList(response);
  };

  useEffect(() => {
    loadData();
  }, []);

  return <ProfileComment commentList={data} />;
};

export default ProfileCommentContainer;
