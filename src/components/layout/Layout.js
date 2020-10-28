import React, { useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
  const [sideBar, setSideBar] = useState(false);

  return (
    <>
      <Navbar sideBar={sideBar} setSideBar={setSideBar} />
      <Sidebar sideBar={sideBar} setSideBar={setSideBar} />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
