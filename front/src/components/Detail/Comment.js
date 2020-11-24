import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container, Grid, Typography, Button,
} from '@material-ui/core';
import CommentList from './CommentList';
import { comments } from '../../__fixture__/sample';

const useStyles = makeStyles({
  root: {
    width: '62%',
    marginTop: '5%',
  },
  commentRoot: {
    marginLeft: '3%',
  },
  commentTextarea: {
    width: '85%',
    resize: 'none',
    padding: 5,
  },
  commentBtn: {
    position: 'relative',
    left: '3%',
    bottom: 35,
  },
});

const Comment = () => {
  const classes = useStyles();
  const commentCnt = comments.length;
  const [newComment, setNewComment] = useState(null);

  const handleChange = ({ target: { value } }) => {
    setNewComment(value);
  };

  const onSubmit = () => {
    console.log(newComment);
  };

  return (
    <Container className={classes.root}>
      <Grid container justify="space-between">
        <Grid item>
          <Typography variant="h5" gutterBottom>
            {`댓글 ${commentCnt}개`}
          </Typography>
        </Grid>
      </Grid>
      <CommentList comments={comments} />
      <div className={classes.commentRoot}>
        <textarea className={classes.commentTextarea} rows="5" onChange={handleChange} />
        <Button className={classes.commentBtn} variant="outlined" onClick={onSubmit}>등록</Button>
      </div>
    </Container>
  );
};

export default Comment;
