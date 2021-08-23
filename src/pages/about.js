import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import AboutAuthor from "../components/AboutAuthor"

const SecondPage = () => (
  <Layout>
    <Seo title="About" />
    <div style={{textAlign: 'center'}}>
    <AboutAuthor></AboutAuthor>
    </div>
    
  </Layout>
)

export default SecondPage
