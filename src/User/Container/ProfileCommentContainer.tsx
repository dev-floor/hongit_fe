import React, { useState, useEffect } from 'react';

import { profileCommentAPI } from 'api/api';
import { ProfileCommentApi } from 'api/ApiProps';

import ProfileComment from '../Presentational/ProfileComment';

const ProfileCommentContainer = () => {
  const [data, setFeedList] = useState<ProfileCommentApi[]>([]);

  const loadData = async () => {
    const response = await profileCommentAPI.get();
    setFeedList(response);
  };

  useEffect(() => {
    loadData();
  }, []);

  return <ProfileComment commentList={data} />;
};

export default ProfileCommentContainer;
