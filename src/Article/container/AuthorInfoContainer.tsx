import React, { useState, useEffect } from 'react';

import { articleAPI } from 'api/api';
import { ArticleDetailApi, OptionResponse } from 'api/ApiProps';
import { ArticleDetailID } from 'interface/ArgProps';

import AuthorInfo from '../presentational/AuthorInfo';

const AuthorInfoContainer = ({ articleId }: ArticleDetailID) => {
  const [data, setArticleData] = useState<ArticleDetailApi>({
    id: 0,
    options: [] as OptionResponse[],
    title: '',
    anonymous: false,
    author: {
      nickname: '',
      type: { id: '', text: '' },
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

  return <AuthorInfo articleDetailData={data} />;
};

export default AuthorInfoContainer;
