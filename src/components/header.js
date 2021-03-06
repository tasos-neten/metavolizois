import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image"

const Header = ({ siteTitle,  siteDescription}) => (
  <header
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      className={
        `container`
      }
      style={{
        display: `flex`
      }}
    >
      <img style={{margin: 0, width: `5rem`, height: `4rem`}} src={require("../images/logo.svg")}/>
      <h1 style={{ margin: 0, padding: `.8rem 0 0 0`, fontSize: `1.8rem` }}>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
     <div style={{ marginBottom: `1.45rem` }}>
      <div
        style={{
          position: `relative`,
        }}
        className={
          `container`
        }
      >
        <h2
          className={
            `hero`
          }
        >
          {siteDescription}
        </h2>
      </div>
      <Image />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  siteDescription: ``,
}

export default Header
