import React from "react"
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import TwitterIcon from "@material-ui/icons/Twitter"
import IconButton from "@material-ui/core/IconButton"

export default function Social() {
  return (
    <div>
      <IconButton href="https://github.com/tj3407" target="_blank" edge={false}>
        <GitHubIcon color="action" />
      </IconButton>
      <IconButton
        href="https://www.linkedin.com/in/tjsornet/"
        target="_blank"
        edge={false}
      >
        <LinkedInIcon color="action" />
      </IconButton>
      <IconButton
        href="https://twitter.com/tj3407"
        target="_blank"
        edge={false}
      >
        <TwitterIcon color="action" />
      </IconButton>
    </div>
  )
}
