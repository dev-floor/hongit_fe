import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { SiNotion } from 'react-icons/si';
import { ArticleDetailApi } from '../../api/ApiProps';

const AuthorInfo = (dummyData: ArticleDetailApi) => {
  const { anonymous, author } = { ...dummyData };
  return (
    <div className="AuthorInfo">
      <div className="userImage">
        <img src={author.image} alt="UserImage" />
      </div>
      <div className="userInfo">
        <div className="userInfoHeader">
          {anonymous ? (
            <div className="userName"> 익명 </div>
          ) : (
            <div className="userName"> {author.name} </div>
          )}
          <a href={author.github} target="_blank" rel="noreferrer">
            <AiFillGithub
              style={{ display: anonymous ? 'none' : 'block' }}
              className="linkImage"
              size="25"
              color="black"
            />
          </a>
          <a href={author.blog} target="_blank" rel="noreferrer">
            <SiNotion
              style={{ display: anonymous ? 'none' : 'block' }}
              className="linkImage"
              size="25"
              color="black"
            />
          </a>
        </div>
        {anonymous ? (
          <div className="userDescription"> 익명입니다 </div>
        ) : (
          <div className="userDescription"> {author.description} </div>
        )}
      </div>
    </div>
  );
};

export default AuthorInfo;
