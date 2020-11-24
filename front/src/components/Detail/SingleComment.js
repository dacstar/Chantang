import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ListItemText, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  listItem: {
    '& span': {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 3,
    },
  },
});

const SingleComment = ({ author, body, createdAt }) => {
  const classes = useStyles();

  return (
    <ListItemText
      className={classes.listItem}
      primary={(
        <>
          <Typography
            variant="subtitle1"
          >
            {author}
          </Typography>
          <Typography
            component="span"
            variant="body2"
            color="textPrimary"
          >
            {createdAt}
          </Typography>
        </>
     )}
      secondary={body}
    />
  );
};

export default SingleComment;
