import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import NavlinkHover from './NavlinkHover'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
