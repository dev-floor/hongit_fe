import React from 'react';
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
            <img
              style={{ display: anonymous ? 'none' : 'block' }}
              className="linkImage"
              src={author.image}
              alt={author.github}
            />
          </a>
          <a href={author.blog} target="_blank" rel="noreferrer">
            <img
              style={{ display: anonymous ? 'none' : 'block' }}
              className="linkImage"
              src={author.image}
              alt={author.blog}
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