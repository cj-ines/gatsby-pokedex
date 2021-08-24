import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import App from "../App"

const IndexPage = () => (
  <Layout>
    
    <Seo title="Pokedex" />
    <App></App>
  </Layout>
)

export default IndexPage
