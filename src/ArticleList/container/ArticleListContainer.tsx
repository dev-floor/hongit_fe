import React, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { applyFilterFlag, viewSort, viewFilter } from 'Atoms/atom';
import { articleAPI } from 'api/api';
import { ArticleFeedDetailApi } from 'api/ApiProps';
import ArticleListArea from '../presentational/ArticleList';

const ArticleListContainer = () => {
  const viewSortValue = useRecoilValue(viewSort);
  const viewFilterValue = useRecoilValue(viewFilter);
  const applyFilterFlagValue = useRecoilValue(applyFilterFlag);

  const [feedListData, setFeedList] = useState<ArticleFeedDetailApi[]>([]);

  const loadData = async () => {
    const response = await articleAPI.getByList();
    setFeedList(response);
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    // 여기서 필터링과 정렬순서가 적용된 api 콜이 수행됨.
    console.log(viewSortValue, viewFilterValue);
  }, [applyFilterFlagValue]);

  return <ArticleListArea feedList={feedListData} />;
};

export default ArticleListContainer;
