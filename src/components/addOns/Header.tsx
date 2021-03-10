import React from "react";
import { navigate } from "gatsby";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { StaticImage } from "gatsby-plugin-image";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  headerBackground: {
    backgroundColor: "white",
  },
  appLogo: {
    maxWidth: "25pt",
  },
  headerTitle: {
    color: "rgb(0, 81, 255)",
    marginLeft: "20px",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar
        position='static'
        elevation={1}
        className={classes.headerBackground}
      >
        <Toolbar>
          <IconButton
            edge='start'
            aria-label='Blogistan'
            onClick={() => {
              navigate("/");
            }}
          >
            <StaticImage
              className={classes.appLogo}
              src='../../asserts/logo.png'
              alt='logo'
              placeholder='tracedSVG'
            />
          </IconButton>
          <Typography variant='h4' className={classes.headerTitle}>
            Blogistan
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
