import React, { useEffect, useState } from 'react';

import { articleAPI } from 'api/api';
import { ArticleDetailApi } from 'api/ApiProps';
import { ArticleDetailID } from 'interface/ArgProps';
import ArticleBody from '../presentational/ArticleBody';

const ArticleBodyContainer = ({ articleId }: ArticleDetailID) => {
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
    console.log(articleId);
    const response = await articleAPI.get(/* articleId */);
    setArticleData(response);
  };

  useEffect(() => {
    loadData();
  }, []);

  return <ArticleBody articleDetailData={articleData} />;
};

export default ArticleBodyContainer;
