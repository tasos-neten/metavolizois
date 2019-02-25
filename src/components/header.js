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
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `black`,
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
        <h2 style={{ margin: 0, zIndex: 10, color: `#fff`, position: `absolute`, width: `50%`, background: `rgba(0,0,0,.4)`, padding: `1rem 0` }}>
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
