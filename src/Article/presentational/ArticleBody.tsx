import React from 'react';
import { ArticleDetailApi } from 'api/ApiProps';
import 'css/Article.css';

const ArticleBody = (dummyData: ArticleDetailApi) => {
  const { content, hashtags } = { ...dummyData };

  return (
    <div>
      <section className="article-content">{content}</section>
      <img className="article-image" src={content} alt="첨부된 이미지 파일" />
      <section className="article-descriptions">
        {hashtags.map((tags) => (
          <button className="hashtag" type="button">
            {tags}
          </button>
        ))}
      </section>
    </div>
  );
};

export default ArticleBody;
