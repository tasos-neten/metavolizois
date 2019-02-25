import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Μεταβολή Ζωής" keywords={[`αρωγή`, `αποτοξίνωση`, `ναρκωτικά`, `κέντρο αποτοξίνωσης`]} />
    <div style={{ marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
