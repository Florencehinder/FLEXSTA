import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <div class="container mx-auto flex justify-between">
        <div class="mr-2"></div>
        <div class="ml-2">
          <a href="https://www.flexsta.com/" class="underline ml-4">
            Home
          </a>
          <a
            href="https://buy.stripe.com/6oEcP9cJge1H4GQ6oy/"
            class="underline ml-4"
          >
            Buy
          </a>
          <a href="mailto:flexsta.stands@gmail.com" class="underline ml-4">
            Contact
          </a>
          <a href="/" class="underline ml-4">
            Blog
          </a>
        </div>
      </div>
    )
  } else {
    header = (
      <div>
        <Link className="header-link-home" to="/">
          {title}
        </Link>
      </div>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built by
        {` `}
        <a href="https://www.florencehinder.com">Florence Hinder</a>
      </footer>
    </div>
  )
}

export default Layout
