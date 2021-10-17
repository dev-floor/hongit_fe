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
    nickname: '',
    type: { id: '-1', text: '' },
    image: '',
    github: '',
    blog: '',
    description: '',
  });

  const loadData = async () => {
    console.log(`fetching...========`);
    const response = await profileUserAPI.getByNickName('lxxjn0');
    console.log(response);
    setUserData(response);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      {userData === undefined || userData.type.id === '-1' ? (
        <div>Profile Loading...</div>
      ) : (
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
      )}
    </div>
  );
};

export default ProfileContainer;
