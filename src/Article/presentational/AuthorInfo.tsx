import React from 'react';
import { ArticleProps } from 'interface/ArgProps';
import { AiFillGithub } from 'react-icons/ai';
import { SiNotion } from 'react-icons/si';

import { Profile } from 'svg';

const AuthorInfo = ({ data }: ArticleProps) => {
  const { anonymous, author } = { ...data };
  return (
    <div className="author-area">
      <div className="author-image-area">
        {author.image && !anonymous ? (
          <img className="author-image" src={author.image} alt="authorimage" />
        ) : (
          <Profile className="author-image-empty" />
        )}
      </div>
      <div className="author-info ">
        <div className="author-info-header">
          {anonymous ? (
            <div className="author-name"> 익명 </div>
          ) : (
            <div className="author-name"> {author.nickname} </div>
          )}
          <a href={author.github} target="_blank" rel="noreferrer">
            <AiFillGithub
              style={{ display: anonymous ? 'none' : 'block' }}
              className="link-image"
              size="20"
              color="black"
            />
          </a>
          <a href={author.blog} target="_blank" rel="noreferrer">
            <SiNotion
              style={{ display: anonymous ? 'none' : 'block' }}
              className="link-image"
              size="20"
              color="black"
            />
          </a>
        </div>
        {anonymous ? (
          <div className="author-description"> 익명입니다 </div>
        ) : (
          <div className="author-description"> {author.description} </div>
        )}
      </div>
    </div>
  );
};

export default AuthorInfo;
