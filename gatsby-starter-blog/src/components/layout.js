import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  const linkStyle = {
    color: "black", // Ensure the text is black
    textDecoration: "underline", // Remove underline
    padding: "0 1rem", // Add padding on the left and right
    fontSize: "1rem", // Adjust font size as needed
    fontFamily: "sans-serif", // Set the font family
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="bg-white text-black py-4 mb-8">
        <div className="container mx-auto flex justify-between items-center">
          <div></div>{" "}
          {/* Keep this empty div if you want to maintain the space on the left */}
          <nav
            className="bg-white text-black py-4 mb-8"
            style={{
              justifyContent: "flex-end",
              display: "flex",
              width: "100%",
            }}
          >
            {" "}
            {/* Updated class here */}
            <Link to="https://www.flexsta.com/" style={linkStyle}>
              Home
            </Link>
            <Link
              to="https://buy.stripe.com/6oEcP9cJge1H4GQ6oy"
              style={linkStyle}
            >
              Buy
            </Link>
            <Link to="mailto:flexsta.stands@gmail.com" style={linkStyle}>
              Contact
            </Link>
            <Link to="/" style={linkStyle}>
              Blog
            </Link>
          </nav>
          <h2>
            <Link to="/">
              <span itemProp="headline">FLEXSTA Blog</span>
            </Link>
          </h2>
        </div>
      </header>

      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built by
        <a href="https://www.florencehinder.com"> Florence Hinder</a>
      </footer>
    </div>
  )
}

export default Layout
