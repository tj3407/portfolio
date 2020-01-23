import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Typography, Button, Grid, Link } from "@material-ui/core"
import ExitToAppIcon from "@material-ui/icons/ExitToApp"
import GithubContent from "./GithubContent"
import project1 from "../../../img/project1.jpg"
import project2 from "../../../img/project2.jpg"
import project3 from "../../../img/project3.jpg"
import project4 from "../../../img/project4.jpg"

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
    marginTop: 30,
  },
  bold: {
    fontWeight: "600",
  },
}))

export default function LeftContent() {
  const classes = useStyle()

  return (
    <>
      <div className={`${classes.root} left-content`}>
        <Typography
          variant="h4"
          display="block"
          style={{ marginBottom: "20px" }}
        >
          Projects
        </Typography>
        <Typography
          variant="h5"
          display="block"
          color="textSecondary"
          align="center"
          className={classes.bold}
        >
          Chat Room App
        </Typography>
        <Typography
          paragraph
          display="block"
          color="textSecondary"
          align="center"
        >
          React, Material-UI
        </Typography>
        <div style={{ textAlign: "center" }} className={classes.hasRibbon}>
          <img src={project4}></img>
          <div className={classes.ribbon}>
            <div className={classes.text}>New</div>
          </div>
        </div>
        <Typography paragraph>
          Pure front-end chat/messaging app created using React and Material UI
          for styling. Data retrieved from local file and implemented simple
          auto reply with every new message submission.
        </Typography>
        <div className={classes.button}>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            startIcon={<ExitToAppIcon />}
            href="http://whosnapit.com/chat-room-app"
            target="_blank"
          >
            Demo
          </Button>
        </div>
        <hr />

        <Grid
          container
          spacing={3}
          style={{ paddingTop: "20px", marginBottom: "20px" }}
        >
          <Grid item xs={12} lg={4}>
            <div style={{ textAlign: "center" }}>
              <img src={project1}></img>
            </div>
          </Grid>

          <Grid item xs={12} lg={8}>
            <Typography
              variant="h5"
              display="block"
              color="textSecondary"
              align="left"
              className={classes.bold}
              style={{ marginBottom: "20px" }}
            >
              NFL App - React, Gatsby, Material-UI, My Sports Feed API
            </Typography>
            <Typography paragraph>
              React application created using Gatsby and utilizing My Sports
              Feed api and Material-UI for styling.
            </Typography>
            <div style={{ cursor: "pointer" }}>
              <Link
                href="http://whosnapit.com/NFL-Fantasy-Football/"
                target="_blank"
                variant="h6"
                display="inline"
                style={{ verticalAlign: "middle", color: "#3AAA64" }}
              >
                <ExitToAppIcon
                  style={{ verticalAlign: "middle", color: "#3AAA64" }}
                />{" "}
                Try It
              </Link>
            </div>
          </Grid>
        </Grid>
        <hr />

        <Grid
          container
          spacing={3}
          style={{ paddingTop: "20px", marginBottom: "20px" }}
        >
          <Grid item xs={12} lg={4}>
            <div style={{ textAlign: "center" }}>
              <img src={project3}></img>
            </div>
          </Grid>

          <Grid item xs={12} lg={8}>
            <Typography
              variant="h5"
              display="block"
              color="textSecondary"
              align="left"
              className={classes.bold}
              style={{ marginBottom: "20px" }}
            >
              Simple eCommerce Page with Shopping Cart - vanilla JavaScript,
              jQuery, Bootstrap
            </Typography>
            <Typography paragraph>
              Simple eCommerce page with shopping cart where product information
              is loaded from a local json file. An option to choose between
              localStorage or sessionStorage to store products that have been
              added to cart to test persistency between browser tabs.
            </Typography>
            <div style={{ cursor: "pointer" }}>
              <Link
                href="http://whosnapit.com/ws-product-cards/"
                target="_blank"
                variant="h6"
                display="inline"
                style={{ verticalAlign: "middle", color: "#3AAA64" }}
              >
                <ExitToAppIcon
                  style={{ verticalAlign: "middle", color: "#3AAA64" }}
                />{" "}
                Try It
              </Link>
            </div>
          </Grid>
        </Grid>
        <hr />

        <Grid
          container
          spacing={3}
          style={{ paddingTop: "20px", marginBottom: "20px" }}
        >
          <Grid item xs={12} lg={4}>
            <div style={{ textAlign: "center" }}>
              <img src={project2}></img>
            </div>
          </Grid>

          <Grid item xs={12} lg={8}>
            <Typography
              variant="h5"
              display="block"
              color="textSecondary"
              align="left"
              className={classes.bold}
              style={{ marginBottom: "20px" }}
            >
              MLB Stats App - Angular 5, Bootstrap, My Sports Feed API
            </Typography>
            <Typography paragraph>
              MLB stats application created using Angular 5, My Sports Feed api
              for data and Bootstrap for styling.
            </Typography>
            <div style={{ cursor: "pointer" }}>
              <Link
                href="http://tj-mlb-demo.herokuapp.com/"
                target="_blank"
                variant="h6"
                display="inline"
                style={{ verticalAlign: "middle", color: "#3AAA64" }}
              >
                <ExitToAppIcon
                  style={{ verticalAlign: "middle", color: "#3AAA64" }}
                />{" "}
                Try It
              </Link>
            </div>
          </Grid>
        </Grid>
        <hr />

        <Grid
          container
          spacing={3}
          style={{ paddingTop: "20px", marginBottom: "20px" }}
        >
          <Grid item xs={12}>
            <Typography paragraph align="center" className={classes.bold}>
              ...LOAD MORE
            </Typography>
          </Grid>
        </Grid>
      </div>
      <div className={`${classes.root} left-content`}>
        <Typography
          variant="h4"
          display="block"
          style={{ marginBottom: "20px" }}
        >
          My GitHub
        </Typography>
        <GithubContent />
      </div>
    </>
  )
}
