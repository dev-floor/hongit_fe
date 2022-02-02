import React, { useState, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { viewBanner } from 'Atoms/atom';
import { homeAPI } from 'api/api';
import { BoardPreviewInfo } from 'api/ApiProps';
import HongitMain from 'Layout/Presentational/HongitMain';

const HongitMainContainer = () => {
  const [data, setData] = useState<BoardPreviewInfo[]>([]);
  const loadData = async () => {
    const response = await homeAPI.get();
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
