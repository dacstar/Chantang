import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    marginTop: 15,
  },
  item: {
    height: 100,
    marginTop: 15,
    padding: 7,
  },
  title: {
    '& h2': {
      marginTop: 10,
      marginBottom: 20,
    },
    '& div': {
      position: 'relative',
      left: '64%',
      bottom: '10%',
      '& span:nth-child(2)': {
        marginLeft: 20,
      },
    },
  },
  viewCount: {
    color: 'grey',
    textAlign: 'center',
    paddingTop: '2%',
    fontSize: 13,
  },
  textBoxSmall: {
    height: 150,
  },
  textBoxLarge: {
    height: 250,
  },
  textBoxTitle: {
    marginBottom: 7,
  },
  textBoxContent: {
    outline: 'solid 1px black',
    height: '80%',
    padding: 5,
  },
});

const PlaceItem = ({ place }) => {
  const classes = useStyles();
  const {
    content,
    detail_content: detailContent,
    service_area: serviceArea,
    theme_type: themeType,
    title,
    views,
  } = place;

  return (
    <Grid
      container
      direction="row"
      justify="center"
      className={classes.container}
    >
      <Grid item xs={6} className={`${classes.item} ${classes.title}`}>
        <h1>{title}</h1>
        <div>
          <span>{`테마: ${themeType}` }</span>
          <span>{`지역: ${serviceArea}`}</span>
        </div>
      </Grid>
      <Grid item xs={1} className={`${classes.item} ${classes.viewCount}`}>
        {`조회수: ${views}`}
      </Grid>
      <Grid item xs={7} className={`${classes.item} ${classes.textBoxSmall}`}>
        <div className={classes.textBoxTitle}>요약 정보</div>
        <div className={classes.textBoxContent}>{content}</div>
      </Grid>
      <Grid item xs={7} className={`${classes.item} ${classes.textBoxLarge}`}>
        <div className={classes.textBoxTitle}>상세 내용</div>
        <div className={classes.textBoxContent}>{detailContent}</div>
      </Grid>
    </Grid>
  );
};

export default PlaceItem;
