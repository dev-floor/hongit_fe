import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// import { useRecoilValue } from 'recoil';
// import { selectedArticleId } from 'Atoms/atom';
import { articleAPI } from 'api/api';
import { ArticleDetailApi } from 'api/ApiProps';
import ArticleHeader from '../presentational/ArticleHeader';

const ArticleHeaderContainer = () => {
  // const articleId = useRecoilValue(selectedArticleId);
  const history = useHistory();
  const [articleData, setArticleData] = useState<ArticleDetailApi>({
    options: [''],
    title: '',
    anonymous: false,
    author: {
      name: '',
      image: '',
      github: '',
      blog: '',
      description: '',
    },
    createdDate: '',
    content: '',
    hashtags: [''],
    favorites: 0,
    wonders: 0,
    clips: 0,
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

  const onDeleteArticle = () => {
    console.log('delete btn clicked!');
    // 게시물 삭제 기능을 여기에 구현하면 됩니다. (너무 친절)
  };

  return (
    <ArticleHeader
      onUpdateArticle={onUpdateArticle}
      onDeleteArticle={onDeleteArticle}
      articleData={articleData}
    />
  );
};

export default ArticleHeaderContainer;
