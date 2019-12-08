import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import AppBar from "@material-ui/core/AppBar"
import { makeStyles } from "@material-ui/core/styles"
import { Typography, Avatar, Grid, Button } from "@material-ui/core"
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles(theme => ({
  root: {
    background: `white`,
    marginBottom: `1.45rem`,
    margin: `0 auto`,
    // maxWidth: 1280,
    padding: `1.45rem 1.0875rem`,
    // display: "flex",
    // verticalAlign: "middle",
    boxShadow: "0 !important"
  },
  avatar: {
    width: 160,
    height: 160,
    marginLeft: 20,
    marginRight: 20
  },
  title: {
    marginTop: 30,
    color: "gray",
    fontFamily: "'Calistoga', sans-serif",
    fontWeight: 700,
  },
  button: {
    padding: '10px',
    marginTop: 10
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  secondaryTitle: {
    marginBottom: 30
  }
}))

const Header = ({ siteTitle }) => {
  const classes = useStyles()

  return (
    <AppBar position="static" className={`${classes.root} header`}>
      <Grid container className="header-container">
        <Grid item >
          <Avatar
            alt="Tey Jon Sornet"
            src="/static/images/pic1.png"
            className={classes.avatar}
            imgProps={{
              style: { 
                margin: "0 auto"
              },
            }}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={8}>
          <div>
            <Typography variant="h4" className={classes.title}>
              Tey Jon Sornet
            </Typography>
            <Typography variant="h5" color="textSecondary" className={classes.secondaryTitle}>
              Front End Software Developer
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={2} className={classes.buttonContainer}>
          <div>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              endIcon={<SendIcon />}
            >
              Contact Me
            </Button>
          </div>
        </Grid>
      </Grid>
    </AppBar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
