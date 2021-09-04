import React, { useState, useEffect, useCallback } from 'react';
import { useRecoilValue } from 'recoil';
import { applyFilterFlag, viewSort, viewFilter } from 'Atoms/atom';
import { articleAPI } from 'api/api';
import { ArticleFeedDetailApi } from 'api/ApiProps';
import { ParamsIdProps } from 'interface/ArgProps';

import ArticleListArea from '../presentational/ArticleList';

const ArticleListContainer = ({ id }: ParamsIdProps) => {
  const viewSortValue = useRecoilValue(viewSort);
  const viewFilterValue = useRecoilValue(viewFilter);
  const applyFilterFlagValue = useRecoilValue(applyFilterFlag);

  const [feedListData, setFeedList] = useState<ArticleFeedDetailApi[]>([]);

  const loadData = useCallback( async () => {
    const res = await articleAPI.getFeedByBoardId(id);
    setFeedList(res);
  },[id]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  useEffect(() => {
    // 여기서 필터링과 정렬순서가 적용된 api 콜이 수행됨.
    // FIX ME
    console.log(viewSortValue, viewFilterValue);
  }, [applyFilterFlagValue]);

  return <ArticleListArea feedList={feedListData} />;
};

export default ArticleListContainer;
