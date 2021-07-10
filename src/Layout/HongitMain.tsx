import React, { useState, useEffect } from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import { homeAPI } from 'api/api';
import { HomeApi } from 'api/ApiProps';
import BoardPreview from 'Board/presentational/BoardPreview';
import 'css/BoardDetail.css';
import { useSetRecoilState } from 'recoil';
import { viewBanner } from 'Atoms/atom';

const HongitMain = () => {
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

  useEffect(() => {
    loadData();
  }, []);

  const showBanner = useSetRecoilState(viewBanner);
  
  useEffect(() => {
    showBanner(true);
  }, []);

  return (
    <div>
      <Segment style={{ padding: '0em' }} vertical>
        <Grid celled="internally" columns="equal" stackable>
          <Grid.Row>
            <Grid.Column style={{ padding: '1em' }}>
              <BoardPreview previewData={data.totalFavorite} />
            </Grid.Column>
            <Grid.Column style={{ padding: '1em' }}>
              <BoardPreview previewData={data.totalViews} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment style={{ padding: '0em' }} vertical>
        <Grid celled="internally" columns="equal" stackable>
          <Grid.Row>
            <Grid.Column style={{ padding: '1em' }}>
              <BoardPreview previewData={data.qnaRecent} />
            </Grid.Column>
            <Grid.Column style={{ padding: '1em' }}>
              <BoardPreview previewData={data.community} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment style={{ padding: '0em' }} vertical>
        <Grid celled="internally" columns="equal" stackable>
          <Grid.Row>
            <Grid.Column style={{ padding: '1em' }}>
              <BoardPreview previewData={data.gathering} />
            </Grid.Column>
            <Grid.Column style={{ padding: '1em' }}>
              <BoardPreview previewData={data.recruit} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
};

export default HongitMain;
