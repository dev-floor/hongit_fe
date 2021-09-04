import React, { useState, useEffect } from 'react';
import { profileUserAPI } from 'api/api';
import { ProfileUserApi } from 'api/ApiProps';
import { Tab } from 'semantic-ui-react';
import ProfileUser from 'User/Presentational/ProfileUser';
import ProfileArticleContainer from './ProfileArticleContainer';
import ProfileCommentContainer from './ProfileCommentContainer';
import 'css/Profile.css';

const panes = [
  {
    menuItem: '작성한 글',
    render: () => <ProfileArticleContainer />,
  },
  {
    menuItem: '작성한 댓글',
    render: () => <ProfileCommentContainer />,
  },
];

const ProfileContainer = () => {
  const [userData, setUserData] = useState<ProfileUserApi>({
    username: '',
    nickname: '',
    type: { id: '', text: '' },
    image: '',
    github: '',
    blog: '',
    description: '',
  });

  const loadData = async () => {
    // FIX ME
    const response = await profileUserAPI.get(/* boardId */);
    setUserData(response);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div className="userinfo">
        <ProfileUser userData={userData} />
      </div>
      <Tab
        className="tab"
        menu={{ secondary: true, pointing: true }}
        panes={panes}
      />
    </div>
  );
};

export default ProfileContainer;
