import React from 'react';
import AuthorInfo from '../presentational/AuthorInfo';
import { articleAPI } from '../../api/api';
import '../css/AuthorInfo.css';

const AuthorInfoContainer = () => {
  // this is for api procedures.
  const articleData = articleAPI.get();

  return (
    <AuthorInfo
      options={articleData.options}
      title={articleData.title}
      anonymous={articleData.anonymous}
      author={articleData.author}
      createdDate={articleData.createdDate}
      content={articleData.content}
      hashtags={articleData.hashtags}
      favorites={articleData.favorites}
      wonders={articleData.wonders}
      clips={articleData.clips}
    />
  );
};

export default AuthorInfoContainer;
