import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Typography, Button, Grid, Link, Paper } from "@material-ui/core"
import ExitToAppIcon from "@material-ui/icons/ExitToApp"
import GithubContent from "./GithubContent"
import { projects, mainProject } from "../../../data/projects"

const useStyle = makeStyles(theme => ({
  root: {
    marginRight: 50,
    marginBottom: 20,
    padding: 40,
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
    transition: "all .2s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  button: {
    textAlign: "center",
    marginBottom: 50,
    marginTop: 30,
  },
  bold: {
    fontWeight: "600",
  },
  image: {
    transition: "all .2s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  iconButton: {
    borderRadius: 25,
  },
}))

export default function LeftContent() {
  const classes = useStyle()

  return (
    <>
      <Paper className={`${classes.root} left-content`} elevation={0}>
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
          {mainProject.title}
        </Typography>
        <Typography
          paragraph
          display="block"
          color="textSecondary"
          align="center"
        >
          {mainProject.subheading}
        </Typography>
        <div style={{ textAlign: "center" }} className={classes.hasRibbon}>
          <img src={mainProject.img}></img>
          <div className={classes.ribbon}>
            <div className={classes.text}>New</div>
          </div>
        </div>
        <Typography paragraph>
          {mainProject.description}
        </Typography>
        <div className={classes.button}>
          <Button
            variant="outlined"
            color="action"
            size="large"
            className={classes.iconButton}
            startIcon={<ExitToAppIcon />}
            href={mainProject.href}
            target="_blank"
          >
            {mainProject.button}
          </Button>
        </div>
        <hr />

        {projects.length &&
          projects.map(project => {
            return (
              <>
                <Grid
                  container
                  spacing={3}
                  style={{ paddingTop: "20px", marginBottom: "20px" }}
                >
                  <Grid item xs={12} lg={4} className={classes.image}>
                    <div style={{ textAlign: "center" }}>
                      <img src={project.img}></img>
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
                      {project.title}
                    </Typography>
                    <Typography paragraph>{project.description}</Typography>
                    <div style={{ cursor: "pointer" }}>
                      <Link
                        href={project.href}
                        target="_blank"
                        variant="h6"
                        display="inline"
                        color="inherit"
                        style={{ verticalAlign: "middle" }}
                      >
                        <ExitToAppIcon
                          style={{ verticalAlign: "middle" }}
                          color="action"
                        />{" "}
                        {project.button}
                      </Link>
                    </div>
                  </Grid>
                </Grid>
                <hr />
              </>
            )
          })}
      </Paper>
      <Paper className={`${classes.root} left-content`} elevation={0}>
        <Typography
          variant="h4"
          display="block"
          style={{ marginBottom: "20px" }}
        >
          My GitHub
        </Typography>
        <GithubContent />
      </Paper>
    </>
  )
}
