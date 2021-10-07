import React, { useState, useEffect } from 'react';
import { profileUserAPI } from 'api/api';
import { ProfileUserApi } from 'api/ApiProps';
import ProfileEdit from 'User/Presentational/ProfileEdit';
import 'css/Profile.css';

const ProfileEditContainer = () => {
  const [userData, setUserData] = useState<ProfileUserApi>({
    username: '',
    nickname: '',
    type: { id: '-1', text: '' },
    image: '',
    github: '',
    blog: '',
    description: '',
  });

  const loadData = async () => {
    const response = await profileUserAPI.getByNickName('lxxjn0');
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
            <ProfileEdit userData={userData} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileEditContainer;
