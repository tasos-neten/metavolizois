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
      <svg xmlns="http://www.w3.org/2000/svg" width="95.896" height="94.631" viewBox="0 0 95.896 94.631"><defs><style>.a{fill:#e20000;}.b{fill:#fff;}</style></defs><g transform="translate(-489.104 -644.369)"><rect width="20.549" height="34.249" transform="translate(584.977 722.171) rotate(157)"/><rect class="a" width="23.974" height="85.621" transform="matrix(-0.819, -0.574, 0.574, -0.819, 510.037, 736.299)"/><path class="a" d="M0,0H20.549a0,0,0,0,1,0,0V41.1a0,0,0,0,1,0,0h0A20.549,20.549,0,0,1,0,20.549V0A0,0,0,0,1,0,0Z" transform="matrix(-0.921, 0.391, -0.391, -0.921, 568.026, 682.201)"/><rect class="b" width="95.896" height="17.124" transform="translate(489.104 721.876)"/></g></svg>
      <h1 style={{ margin: 0, padding: `.6rem 0`, fontSize: `1.8rem` }}>
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
        <h2 style={{ lineHeight: `1.5`, margin: `10rem 0`, zIndex: 10, color: `#fff`, position: `absolute`, background: `rgba(0,0,0,.4)`, padding: `1rem` }}>
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
