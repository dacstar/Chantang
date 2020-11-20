import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  List, ListItem, ListItemText, Typography, Divider,
} from '@material-ui/core';
import { comments } from '../../__fixture__/sample';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));

const CommentList = () => {
  const classes = useStyles();

  const commentsList = comments.map((comment) => {
    const {
      id, author, body, createdAt,
    } = comment;
    return (
      <React.Fragment key={id}>
        <ListItem key={id} alignItems="flex-start">
          <ListItemText
            primary={(
              <Typography>
                {author}
              </Typography>
             )}
            secondary={(
              <>
                <Typography
                  component="span"
                  variant="body2"
                  color="textPrimary"
                >
                  {createdAt}
                </Typography>
                {body}
              </>
              )}
          />
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
