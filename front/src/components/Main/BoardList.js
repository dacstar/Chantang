import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  container: {
    paddingLeft: "3%",
    paddingRight: "3%",
    paddingTop: 15,
  },
  anchor: {
    textDecoration: "none",
    color: "black",
  },
});

const BoardList = ({ boardData }) => {
  const classes = useStyles();
  const asd = 3;
  const itemCardComponent = (item) => {
    const { id, title, views, content, themeType } = item;

    return (
      <Grid key={id} item xs={4}>
        <Card variant="outlined">
          <CardActionArea>
            <CardContent>
              <Link
                to={{
                  pathname: `/place/${id}`,
                  state: { item },
                }}
                className={classes.anchor}
              >
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
              </Link>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    );
  };

  return (
    <Grid container spacing={2} className={classes.container}>
      {boardData ? boardData.map((item) => itemCardComponent(item)) : <div>로딩중...</div>}
    </Grid>
  );
};

export default BoardList;
