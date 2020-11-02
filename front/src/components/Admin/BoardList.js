import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const ItemList = () => {
  const [board, setBoard] = useState(null);

  const getData = () => axios.get('/boards');

  useEffect(() => {
    const fetchBoardData = async () => {
      const boardData = await getData();
      setBoard(boardData);
    };

    fetchBoardData();
  }, []);

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
    <div className={classes.content}>
      <Toolbar />
      <Grid container spacing={2}>
        {board ? board.data.items.map((item) => itemCardComponent(item)) : <div>로딩중...</div>}
      </Grid>
    </div>
  );
};

export default ItemList;
