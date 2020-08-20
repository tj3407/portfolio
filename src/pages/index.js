import React from "react"
import "../components/layout.css"

import Layout from "../components/layout"
import MainContentLayout from "./main/MainContentLayout"
import Header from "../components/header"
import { useStaticQuery, graphql } from "gatsby"
import { CircularProgress } from "@material-ui/core"
import { createMuiTheme } from "@material-ui/core/styles"
import { ThemeProvider } from "@material-ui/core"
import CssBaseline from "@material-ui/core/CssBaseline"

const themeObject = {
  palette: {
    type: "dark",
  },
}

const light = {
  palette: {
    type: "light",
  },
}

const dark = {
  palette: {
    type: "dark",
  },
}

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const themeConfig = createMuiTheme(themeObject)

  const [show, setShow] = React.useState(false)
  const [theme, setTheme] = React.useState(true)
  const appliedTheme = createMuiTheme(theme ? light : dark)

  React.useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 2000)
  }, [])

  return (
    <>
      {show ? (
        <ThemeProvider theme={appliedTheme}>
          <CssBaseline />
          <Layout>
            <Header
              siteTitle={data.site.siteMetadata.title}
              onClick={() => setTheme(!theme)}
              theme={theme}
            />
            <MainContentLayout />
          </Layout>
        </ThemeProvider>
      ) : (
        <div style={{ marginTop: "250px", textAlign: "center" }}>
          <CircularProgress size={150} />
        </div>
      )}
    </>
  )
}

export default IndexPage
