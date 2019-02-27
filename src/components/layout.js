import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Messenger from "./messenger"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title,
            description
          }
        }
      }
    `}
    render={data => (
      <>
        <Messenger />
        <Header siteTitle={data.site.siteMetadata.title} siteDescription={data.site.siteMetadata.description} />
        <div
          style={{
            margin: `0 auto`,
            padding: 0,
          }}
        >
          <main>{children}</main>
          <footer
            className= {
              `container`
            }
            style={{
              padding: `1rem 0`
            }}
          >
            © {new Date().getFullYear()}
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
