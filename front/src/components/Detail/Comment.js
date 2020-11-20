import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';
import CommentList from './CommentList';

const useStyles = makeStyles({
  root: {
    width: '62%',
    marginTop: '5%',
  },
});

const Comment = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container justify="space-between">
        <Grid item>
          <Typography variant="h5" gutterBottom>
            댓글
          </Typography>
        </Grid>
      </Grid>
      <CommentList />
    </Container>
  );
};

export default Comment;
