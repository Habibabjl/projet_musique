import React from "react"
import { Link } from "gatsby"
import * as artistApi from "../services/ArtistApi";


import Layout from "../components/layout"
import SEO from "../components/seo"
import ArtistCompareComponent from "../components/ArtistCompareComponent"

const CompareArtists = () => (
  <Layout>
    <SEO title="Artists comparison" />
    <h1>Artists comparison</h1>
    <ArtistCompareComponent></ArtistCompareComponent>
    <Link to="/">Go back to home</Link>
  </Layout>
)

  

export default CompareArtists
