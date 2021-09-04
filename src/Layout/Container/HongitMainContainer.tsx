import React, { useState, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { viewBanner } from 'Atoms/atom';
import { homeAPI } from 'api/api';
import { HomeApi } from 'api/ApiProps';
import HongitMain from 'Layout/Presentational/HongitMain';

const HongitMainContainer = () => {
  const [data, setData] = useState<HomeApi>({
    totalFavorite: {
      boardId: 0,
      title: '',
      articles: [],
    },
    qnaRecent: {
      boardId: 0,
      title: '',
      articles: [],
    },
    totalViews: {
      boardId: 0,
      title: '',
      articles: [],
    },
    community: {
      boardId: 0,
      title: '',
      articles: [],
    },
    gathering: {
      boardId: 0,
      title: '',
      articles: [],
    },
    recruit: {
      boardId: 0,
      title: '',
      articles: [],
    },
  });

  const loadData = async () => {
    const response = await homeAPI.get(/* boardId */);
    setData(response);
  };
  const showBanner = useSetRecoilState(viewBanner);

  useEffect(() => {
    loadData();
    showBanner(true);
  }, [showBanner]);

  return <HongitMain mainData={data} />;
};
export default HongitMainContainer;
