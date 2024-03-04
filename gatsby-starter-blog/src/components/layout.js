import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location = {}, title, children }) => {
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
          <h1 className="main-heading">
            <Link to="/blog">
              <span itemProp="headline">FLEXSTA</span>
            </Link>
          </h1>
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
            <Link to="/" className="underline px-4 text-xl">
              Home
            </Link>
            <a
              href="https://buy.stripe.com/6oEcP9cJge1H4GQ6oy"
              className="underline px-4 text-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy
            </a>
            <a
              href="mailto:flexsta.stands@gmail.com"
              className="underline px-4 text-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </a>
            <Link to="/blog" className="underline px-4 text-xl">
              Blog
            </Link>
          </nav>
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
