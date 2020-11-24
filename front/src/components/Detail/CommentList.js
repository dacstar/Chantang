import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, Divider } from '@material-ui/core';
import SingleComment from './SingleComment';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  listItem: {
    '& span': {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 3,
    },
  },
}));

const CommentList = ({ comments }) => {
  const classes = useStyles();

  const commentsList = comments.map((comment) => {
    const {
      id, author, body, createdAt,
    } = comment;
    return (
      <React.Fragment key={id}>
        <ListItem key={id} alignItems="flex-start">
          <SingleComment author={author} body={body} createdAt={createdAt} />
        </ListItem>
        <Divider />
      </React.Fragment>
    );
  });

  return (
    <List className={classes.root}>
      {commentsList}
    </List>
  );
};

export default CommentList;
