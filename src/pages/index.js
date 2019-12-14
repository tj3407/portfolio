import React from "react"
import "../components/layout.css"

import Layout from "../components/layout"
import MainContentLayout from "./main/MainContentLayout"
import Header from "../components/header"
import { useStaticQuery, graphql } from "gatsby"

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

  return (
    <Layout>
      <Header siteTitle={data.site.siteMetadata.title} />
      <MainContentLayout />
    </Layout>
  )
}

export default IndexPage
