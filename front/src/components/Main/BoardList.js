import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  container: {
    paddingLeft: '3%',
    paddingRight: '3%',
    paddingTop: 15,
  },
});

const BoardList = ({ boardData }) => {
  const itemCardComponent = ({
    id, title, views, content, themeType,
  }) => (
    <Grid key={id} item xs={4}>
      <Card variant="outlined">
        <CardActionArea>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {title}
            </Typography>
            <Typography>
              {views}
            </Typography>
            <Typography>
              {content}
            </Typography>
            <Typography>
              {themeType}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );

  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.container}>
      {boardData ? boardData.map((item) => itemCardComponent(item)) : <div>로딩중...</div>}
    </Grid>
  );
};

export default BoardList;
