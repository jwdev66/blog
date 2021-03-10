import React from "react";
import { navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Card, CardContent, Grid, Typography } from "@material-ui/core";
import "./landing.css";

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
  blogsButton: {
    backgroundColor: "#298155",
    textDecoration: "none",
    width: "50%",
    alignSelf: "center",
  },
}));

export const Landing = () => {
  const classes = useStyles();
  return (
    <div className='homeContainer'>
      <Grid container className={classes.mainGrid}>
        <Grid
          item
          xs={8}
          md={5}
          component={Card}
          className={classes.componentGrid}
          elevation={0}
        >
          <CardContent>
            <StaticImage
              className='homeImage'
              src='../../asserts/home.png'
              alt='LandingImage'
              placeholder='tracedSVG'
            />
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
          <CardContent className='homeContent'>
            <Typography
              variant='h4'
              align='center'
              gutterBottom
              className='title'
            >
              Blogistan
            </Typography>
            <Typography variant='h6' gutterBottom className='homeDetail'>
              The more we read, the more enlightened we become.
            </Typography>
            <Typography variant='h6' gutterBottom className='homeDetail'>
              We aren't hoping you acknowledge a lot written here nor it is our
              aim. We want you to create your own version of everything you read
              here.
            </Typography>
            <Typography variant='h6' gutterBottom className='homeDetail'>
              You can agree or disagree with us but critical thinking is our
              major concern.We hope you will love reading our blogs.
            </Typography>

            <Button
              variant='contained'
              className={classes.blogsButton}
              onClick={() => {
                navigate("blogs");
              }}
            >
              Blogs
            </Button>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
