import React, { useState, useEffect } from 'react';
// import { useRecoilValue } from 'recoil';
// import { selectedArticleId } from 'Atoms/atom';
import { articleAPI } from 'api/api';
import { ArticleDetailApi, OptionResponse } from 'api/ApiProps';
import AuthorInfo from '../presentational/AuthorInfo';

const AuthorInfoContainer = () => {
  // const articleId = useRecoilValue(selectedArticleId);
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
    const response = await articleAPI.get(/* articleId */);
    setArticleData(response);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <AuthorInfo
      id={data.id}
      options={data.options}
      title={data.title}
      anonymous={data.anonymous}
      author={data.author}
      content={data.content}
      hashtags={data.hashtags}
      favoriteCount={data.favoriteCount}
      wonderCount={data.wonderCount}
      clipCount={data.clipCount}
      createdAt={data.createdAt}
      modifiedAt={data.modifiedAt}
    />
  );
};

export default AuthorInfoContainer;
