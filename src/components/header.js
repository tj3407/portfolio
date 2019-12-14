import PropTypes from "prop-types"
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Typography, Avatar, Grid, Button } from "@material-ui/core"
import SendIcon from "@material-ui/icons/Send"
import Social from "./social"
import avatar from "../img/pic1.png"

const useStyles = makeStyles(theme => ({
  root: {
    background: `white`,
    marginBottom: `1.45rem`,
    margin: `20 auto`,
    padding: `1.45rem 1.0875rem`,
    boxShadow: "0 !important",
  },
  avatar: {
    width: 160,
    height: 160,
    marginLeft: 20,
    marginRight: 20,
  },
  title: {
    marginTop: 30,
    marginBottom: 10,
    color: "#a77b58",
    fontFamily: "'Fira Sans', sans-serif",
    fontWeight: 900,
  },
  button: {
    padding: "10px",
    marginTop: 10,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  secondaryTitle: {
    marginBottom: 20,
  },
}))

const Header = ({ siteTitle }) => {
  const classes = useStyles()

  return (
    <div className={`${classes.root} header`}>
      <Grid container className="header-container">
        <Grid item>
          <Avatar
            alt="Tey Jon Sornet"
            src={avatar}
            className={classes.avatar}
            imgProps={{
              style: {
                margin: "0 auto",
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={8}>
          <div>
            <Typography variant="h3" className={classes.title}>
              Tey Jon Sornet
            </Typography>
            <Typography
              variant="h5"
              color="textSecondary"
              className={classes.secondaryTitle}
            >
              Front End Software Developer
            </Typography>
            <Social />
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          md={3}
          lg={2}
          className={classes.buttonContainer}
        >
          <div>
            <Button
              variant="outlined"
              color="default"
              className={classes.button}
              endIcon={<SendIcon style={{ marginRight: 5 }} />}
            >
              Contact Me
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
