import React, { useEffect, useState } from 'react';
// import { useRecoilValue } from 'recoil';
// import { selectedArticleId } from 'Atoms/atom';
import { articleAPI } from 'api/api';
import { ArticleDetailApi } from 'api/ApiProps';
import ArticleBody from '../presentational/ArticleBody';

const ArticleBodyContainer = () => {
  // const articleId = useRecoilValue(selectedArticleId);
  const [articleData, setArticleData] = useState<ArticleDetailApi>({
    id: 0,
    options: [
      {
        id: 0,
        text: '',
        type: {
          id: '',
          text: '',
        },
      },
    ],
    title: '',
    anonymous: false,
    author: {
      nickname: '',
      type: {
        id: '',
        text: '',
      },
      image: '',
      github: '',
      blog: '',
      description: '',
    },
    content: '',
    hashtags: [''],
    favoriteCount: 0,
    wonderCount: 0,
    clipCount: 0,
    createdAt: '',
    modifiedAt: '',
  });

  const loadData = async () => {
    const response = await articleAPI.get(/* articleId */);
    setArticleData(response);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <ArticleBody
      id={articleData.id}
      options={articleData.options}
      title={articleData.title}
      anonymous={articleData.anonymous}
      author={articleData.author}
      content={articleData.content}
      hashtags={articleData.hashtags}
      favoriteCount={articleData.favoriteCount}
      wonderCount={articleData.wonderCount}
      clipCount={articleData.clipCount}
      createdAt={articleData.createdAt}
      modifiedAt={articleData.modifiedAt}
    />
  );
};

export default ArticleBodyContainer;
