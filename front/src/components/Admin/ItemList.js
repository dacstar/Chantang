import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';

import AddIcon from '@material-ui/icons/Add';
import CreateIcon from '@material-ui/icons/Create';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  fab: {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
  },
}));

const ItemList = () => {
  const classes = useStyles();

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
        <CardActions>
          <IconButton>
            <CreateIcon />
          </IconButton>
          <IconButton>
            <DeleteForeverIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );

  return (
    <div className={classes.content}>
      <Toolbar />
      <Grid container spacing={2}>
        {board ? board.data.items.map((item) => itemCardComponent(item)) : <div>로딩중...</div>}
      </Grid>
      <Fab color="primary" aria-label="add" className={classes.fab}>
        <AddIcon />
      </Fab>
    </div>
  );
};

export default ItemList;
