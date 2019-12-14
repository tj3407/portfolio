import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"
import LocationOnIcon from "@material-ui/icons/LocationOn"
import MailOutlineIcon from "@material-ui/icons/MailOutline"
import LinkIcon from "@material-ui/icons/Link"
import Time from "./Time"

const useStyle = makeStyles(theme => ({
  root: {
    backgroundColor: "white",
    padding: 40,
    marginBottom: 20,
    // boxShadow: "0 5px 10px rgba(0,0,0,.15)"
  },
  about: {
    justifyContent: "center",
    marginBottom: 20,
  },
  icon: {
    verticalAlign: "middle",
    marginRight: 20,
  },
}))

export default function RightContent() {
  const classes = useStyle()

  return (
    <div>
      <About />
      <div className={classes.root}>
        <Time />
      </div>
      <Skills />
    </div>
  )
}

const About = () => {
  const classes = useStyle()

  return (
    <div className={classes.root}>
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
    </div>
  )
}

const Skills = () => {
  const classes = useStyle()

  return (
    <div className={classes.root}>
        <Typography variant="h5" display="block" color="textSecondary">
            Skills
        </Typography>
    </div>
  )
}
