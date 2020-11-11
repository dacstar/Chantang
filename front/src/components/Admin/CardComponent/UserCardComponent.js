import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';

import CreateIcon from '@material-ui/icons/Create';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const useStyles = makeStyles(() => ({
  cardContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardButtons: {
    display: 'flex',
    flexDirection: 'column',
  },
  themeType: {
    fontSize: 12,
  },
}));

const UserCardComponent = ({ item }) => {
  const { id, name, role } = item;

  const classes = useStyles();

  return (
    <Grid item xs={4}>
      <Card variant="outlined" className={classes.cardContainer}>
        <CardContent>
          <Typography color="textSecondary" className={classes.themeType}>
            {role}
          </Typography>
          <Typography variant="h5">
            {id}
          </Typography>
          <Typography color="textSecondary">
            {name}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardButtons}>
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
};

export default UserCardComponent;
