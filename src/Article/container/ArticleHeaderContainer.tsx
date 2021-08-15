import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// import { useRecoilValue } from 'recoil';
// import { selectedArticleId } from 'Atoms/atom';
import { articleAPI } from 'api/api';
import { ArticleDetailApi, OptionResponse, AuthorInfo } from 'api/ApiProps';
import ArticleHeader from '../presentational/ArticleHeader';

const ArticleHeaderContainer = () => {
  // const articleId = useRecoilValue(selectedArticleId);
  const history = useHistory();
  const [articleData, setArticleData] = useState<ArticleDetailApi>({
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
    hashtags: [] as string[],
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

  const onUpdateArticle = (id: string) => {
    history.push({
      pathname: '/write',
      state: { modifyArticleId: id },
    });
  };

  const onDeleteArticle = (id: string) => articleAPI.delete(/* id */);

  return (
    <ArticleHeader
      onUpdateArticle={onUpdateArticle}
      onDeleteArticle={onDeleteArticle}
      articleData={articleData}
    />
  );
};

export default ArticleHeaderContainer;
