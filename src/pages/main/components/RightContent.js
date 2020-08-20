import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Typography, Paper } from "@material-ui/core"
import LocationOnIcon from "@material-ui/icons/LocationOn"
import MailOutlineIcon from "@material-ui/icons/MailOutline"
import LinkIcon from "@material-ui/icons/Link"
import Time from "./Time"

const useStyle = makeStyles(theme => ({
  root: {
    padding: 40,
    marginBottom: 20,
  },
  about: {
    justifyContent: "center",
    marginBottom: 20,
  },
  icon: {
    verticalAlign: "middle",
    marginRight: 20,
  },
  h5: {
    marginBottom: "20px"
  }
}))

export default function RightContent() {
  const classes = useStyle()

  return (
    <div>
      <About />
      <CodeSnippet />
      <Skills />
    </div>
  )
}

const About = () => {
  const classes = useStyle()

  return (
    <Paper className={classes.root} elevation={0}>
      <Typography variant="body1" className={classes.about} display="block">
        <LocationOnIcon className={classes.icon} />
        Hayward, CA
      </Typography>
      <Typography variant="body1" className={classes.about} display="block">
        <MailOutlineIcon className={classes.icon} />
        tsornet@gmail.com
      </Typography>
      <Typography variant="body1" display="block">
        <LinkIcon className={classes.icon} />
        http://whosnapit.com
      </Typography>
    </Paper>
  )
}

const Skills = () => {
  const classes = useStyle()

  return (
    <Paper className={classes.root} elevation={0}>
      <Typography variant="h5" display="block" color="textPrimary" className={classes.h5}>
          Skills
      </Typography>
    </Paper>
  )
}

const CodeSnippet = () => {
  const classes = useStyle()

  return (
    <Paper className={classes.root} elevation={0}>
      <Typography variant="h5" display="block" color="textPrimary" className={classes.h5}>
        Sample React Components
      </Typography>
      <Time />
      <hr />
    </Paper>
  )
}
