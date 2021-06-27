import React from 'react';
import { ArticleDetailApi } from 'api/ApiProps';
import TglBtn from 'Commons/TglBtn';
import 'css/Article.css';

const ArticleBody = (dummyData: ArticleDetailApi) => {
  const { content, hashtags, favorites, wonders, clips } = { ...dummyData };

  const onToggleFavorites = (e: React.FormEvent<HTMLFormElement>) => {
    console.log('Card View Favorites Button Clicked - Api Call');
  };

  const onToggleWonder = (e: React.FormEvent<HTMLFormElement>) => {
    console.log('Card View Wonder Button Clicked - Api Call');
  };

  const onToggleClips = (e: React.FormEvent<HTMLFormElement>) => {
    console.log('Card View Clips Button Clicked - Api Call');
  };

  return (
    <div>
      <section className="article-content">{content}</section>
      <img className="article-image" src={content} alt="첨부된 이미지 파일" />

      <section className="article-descriptions">
        <div className="hashtag-area">
          {hashtags.map((tags) => (
            <button className="hashtag" type="button">
              {tags}
            </button>
          ))}
        </div>
        <div className="tglbtn-area">
          <TglBtn type="heart" count={favorites} handler={onToggleFavorites} />
          <TglBtn type="wonder" count={wonders} handler={onToggleWonder} />
          <TglBtn type="scrap" count={clips} handler={onToggleClips} />
        </div>
      </section>
    </div>
  );
};

export default ArticleBody;
