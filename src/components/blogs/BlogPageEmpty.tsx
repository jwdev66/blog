import React from "react";
import "./blogPageEmpty.css";
import { navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Card, CardContent, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "whitesmoke",
  },
  componentGrid: {
    backgroundColor: "whitesmoke",
    padding: "20px",
    border: "0",
  },
  homeButton: {
    backgroundColor: "#298155",
    textDecoration: "none",
    width: "50%",
    alignSelf: "center",
  },
}));

export const BlogPageEmpty = () => {
  //  useStyles
  const classes = useStyles();
  return (
    <div className='emptyContainer'>
      <Grid container className={classes.mainGrid}>
        <Grid
          item
          xs={8}
          md={5}
          component={Card}
          className={classes.componentGrid}
          elevation={0}
        >
          <CardContent className='emptyContent'>
            <Typography
              variant='h4'
              align='center'
              gutterBottom
              className='emptyTitle'
            >
              Blogistan
            </Typography>
            <Typography variant='h6' gutterBottom className='emptyDetail'>
              There is nothing to Read right now.
            </Typography>
            <Typography variant='h6' gutterBottom className='emptyDetail'>
              We are currently working on some awsome content which will be
              posted in a short while.Hope to see you soon.
            </Typography>

            <Button
              variant='contained'
              className={classes.homeButton}
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Button>
          </CardContent>
        </Grid>
        <Grid
          item
          xs={8}
          md={5}
          component={Card}
          className={classes.componentGrid}
          elevation={0}
        >
          <CardContent className='imageGridEmpty'>
            <StaticImage
              className='emptyImage'
              src='../../asserts/sad.png'
              alt='LandingImage'
              placeholder='none'
            />
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
