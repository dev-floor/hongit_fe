import React from 'react';
import BoardPreview from 'Board/presentational/BoardPreview';
import { Grid, Segment } from 'semantic-ui-react';
import { HongitMainProps } from 'interface/ArgProps';

const HongitMain = ({ mainData }: HongitMainProps) => (
  <div>
    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row>
          <Grid.Column style={{ padding: '1em' }}>
            <BoardPreview previewData={mainData.totalFavorite} />
          </Grid.Column>
          <Grid.Column style={{ padding: '1em' }}>
            <BoardPreview previewData={mainData.totalViews} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row>
          <Grid.Column style={{ padding: '1em' }}>
            <BoardPreview previewData={mainData.qnaRecent} />
          </Grid.Column>
          <Grid.Column style={{ padding: '1em' }}>
            <BoardPreview previewData={mainData.community} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row>
          <Grid.Column style={{ padding: '1em' }}>
            <BoardPreview previewData={mainData.gathering} />
          </Grid.Column>
          <Grid.Column style={{ padding: '1em' }}>
            <BoardPreview previewData={mainData.recruit} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </div>
);

export default HongitMain;
