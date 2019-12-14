import React from "react"
import "../components/layout.css"

import Layout from "../components/layout"
import MainContentLayout from "./main/MainContentLayout"
import Header from "../components/header"
import { useStaticQuery, graphql } from "gatsby"
import { CircularProgress } from "@material-ui/core"

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

  const [show, setShow] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 2000)
  }, [])

  return (
    <>
      {show ? (
        <Layout>
          <Header siteTitle={data.site.siteMetadata.title} />
          <MainContentLayout />
        </Layout>
      ) : (
        <div style={{ marginTop: "250px", textAlign: "center" }}>
          <CircularProgress size={150} />
        </div>
      )}
    </>
  )
}

export default IndexPage
