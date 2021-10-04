import React, { ReactNode } from "react"
import Head from "next/head"

import Header from "./Header"
import Footer from "./Footer"

interface LayoutProps {
  pageTitle: string,
  children: ReactNode
}

const Layout = ({ pageTitle, children }: LayoutProps) => {
  return (
    <div className="container">
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
