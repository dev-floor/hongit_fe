import React from 'react';
import AuthorInfo from '../presentational/AuthorInfo';
import data from '../../data/articleInfo.json';
import '../css/AuthorInfo.css';

const AuthorInfoContainer = () => {
  // this is for api procedures.
  const test = '';

  return (
    <AuthorInfo
      options={data.options}
      title={data.title}
      anonymous={data.anonymous}
      author={data.author}
      createdDate={data.createdDate}
      content={data.content}
      hashtags={data.hashtags}
      favorites={data.favorites}
      wonders={data.wonders}
      clips={data.clips}
    />
  );
};

export default AuthorInfoContainer;
