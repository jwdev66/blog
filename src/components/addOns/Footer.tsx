import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    top: "auto",
    bottom: 0,
    boxShadow: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10px",
  },
  textContainer: {
    flexGrow: 1,
  },
  footerCopy: {
    textAlign: "center",
    color: "rgb(0, 81, 255)",
    marginTop: "20px",
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar
        position='relative'
        color='transparent'
        className={classes.footer}
      >
        <Toolbar>
          <div className={classes.textContainer} />
          <p className={classes.footerCopy}>
            &#169; 2021 Blogistan. All right reserved
          </p>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
