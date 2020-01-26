import React from "react"
import Layout from "../components/layout"
import Search from "../components/SearchContainer"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <h1>Home</h1>
    <div>
      <Search />
    </div>
    <SEO title="Home" />
  </Layout>
)

export default IndexPage
