import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import NavigationBar from "../NavigationBar"
import Crisdell from "../Crisdell"
import App from "../App"

const IndexPage = () => (
  <Layout>
    
    <Seo title="Home" />
    <App />
  </Layout>
)

export default IndexPage
