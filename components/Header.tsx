import React, { FC } from "react"
import Link from "next/link"

import Logo from "./Logo"

const Header: FC = () => {
  return (
    <header className="flex items-center justify-between p-4">
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/contacts">
              <a>Contacts</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
