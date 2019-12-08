import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import TwitterIcon from "@material-ui/icons/Twitter"

const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: 10
    }
}))
export default function Social() {
  const classes = useStyles();
  return (
    <>
      <GitHubIcon color="action" className={classes.icon} />
      <LinkedInIcon color="action" className={classes.icon} />
      <TwitterIcon color="action" className={classes.icon} />
    </>
  )
}
