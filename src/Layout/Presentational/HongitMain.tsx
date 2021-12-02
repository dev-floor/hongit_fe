import React from 'react';
import BoardPreview from 'Board/presentational/BoardPreview';
import { Grid, Segment } from 'semantic-ui-react';
import { HongitMainProps } from 'interface/ArgProps';

const HongitMain = ({ mainData }: HongitMainProps) => (
  <div>
    {mainData && (
      <div>
        <Segment style={{ padding: '0em' }} vertical>
          <Grid celled="internally" columns="equal" stackable>
            <Grid.Row>
              <Grid.Column style={{ padding: '1em' }}>
                <BoardPreview previewData={mainData[5]} />
              </Grid.Column>
              <Grid.Column style={{ padding: '1em' }}>
                <BoardPreview previewData={mainData[4]} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment style={{ padding: '0em' }} vertical>
          <Grid celled="internally" columns="equal" stackable>
            <Grid.Row>
              <Grid.Column style={{ padding: '1em' }}>
                <BoardPreview previewData={mainData[3]} />
              </Grid.Column>
              <Grid.Column style={{ padding: '1em' }}>
                <BoardPreview previewData={mainData[2]} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment style={{ padding: '0em' }} vertical>
          <Grid celled="internally" columns="equal" stackable>
            <Grid.Row>
              <Grid.Column style={{ padding: '1em' }}>
                <BoardPreview previewData={mainData[1]} />
              </Grid.Column>
              <Grid.Column style={{ padding: '1em' }}>
                <BoardPreview previewData={mainData[0]} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    )}
    {/* <div>{mainData?.map((board, index) => 
      <div>
      {( index %2 === 0 ) ? 
      <div>짝수 {board.title} {index}</div> 
      :<div> 홀수 {board.title} {index} </div> }
    </div>
    )}</div> */}
  </div>
);

export default HongitMain;
