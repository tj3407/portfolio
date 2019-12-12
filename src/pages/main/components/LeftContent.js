import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Typography, Button } from "@material-ui/core"
import ExitToAppIcon from "@material-ui/icons/ExitToApp"

const useStyle = makeStyles(theme => ({
  root: {
    marginRight: 50,
    marginBottom: 20,
    backgroundColor: "white",
    padding: 40,
    // boxShadow: "0 5px 10px rgba(0,0,0,.15)"
  },
  ribbon: {
    position: "absolute",
    top: "-4px",
    right: "-4px",
    width: "110px",
    height: "110px",
    overflow: "hidden",
  },
  text: {
    fontFamily: "'Montserrat', sans-serif",
    position: "relative",
    left: "-8px",
    top: "18px",
    width: "158px",
    padding: "10px 10px",
    fontSize: "15px",
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
    color: "#fff",
    backgroundColor: "#479FC8",
    WebkitTransform: "rotate(45deg) translate3d(0, 0, 0)",
    MozTransformOrigin: "rotate(45deg) translate3d(0, 0, 0)",
    msTransform: "rotate(45deg) translate3d(0, 0, 0)",
    OTransform: "rotate(45deg) translate3d(0, 0, 0)",
  },
  hasRibbon: {
    position: "relative",
    display: "inline-block",
  },
  button: {
    textAlign: "center",
    marginBottom: 50,
    marginTop: 30
  },
  bold: {
    // fontWeight: "500"
  }
}))

export default function LeftContent() {
  const classes = useStyle()

  return (
    <div className={`${classes.root} left-content`}>
      <Typography variant="h4" display="block" style={{marginBottom: "20px"}}>
        Projects
      </Typography>
      <Typography
        variant="h5"
        display="block"
        color="textSecondary"
        align="center"
        classes={classes.bold}
      >
        NFL App
      </Typography>
      <Typography
        paragraph
        display="block"
        color="textSecondary"
        align="center"
      >
        React, Gatsby
      </Typography>
      <div style={{ textAlign: "center" }} className={classes.hasRibbon}>
        <img src="/static/images/project1.jpg"></img>
        <div className={classes.ribbon}>
          <div class={classes.text}>New</div>
        </div>
      </div>
      <Typography paragraph className={classes.bold}>
        React application created using Gatsby and utilizing My Sports Feed api and Material-UI for styling. 
      </Typography>
      <div className={classes.button}>
        <Button
            variant="outlined"
            color="primary"
            size="large"
            startIcon={<ExitToAppIcon />}
            href="http://whosnapit.com/NFL-Fantasy-Football/"
            target="_blank"
        >
            Demo
        </Button>
      </div>
      <hr />
    </div>
  )
}
