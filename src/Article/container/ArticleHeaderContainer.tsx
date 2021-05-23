import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { ArticleDetailApi } from 'api/ApiProps';
import { selectedArticleId } from './ArticleDetailContainer';
import ArticleHeader from '../presentational/ArticleHeader';
import { articleAPI } from '../../api/api';

const ArticleHeaderContainer = () => {
  const history = useHistory();
  const articleId = useRecoilValue(selectedArticleId);
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

  const onDeleteArticle = async(id: string) => {
    if(window.confirm("해당 게시물을 정말 삭제하시겠습니까?")){
      await articleAPI.delete(id);
      console.log("게시물이 삭제되었습니다.");
      return window.location.assign("/articleList");
    }
    return window.location.reload(true);
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
