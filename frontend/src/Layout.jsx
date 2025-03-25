import React from 'react'
import {Outlet } from 'react-router-dom'
import TopNavi from './Components/TopNavi'
import Footer from './Components/Footer'

function Layout() {
  return (
    <>
      <TopNavi/>
      <div>
        <Outlet/>
      </div>
      <Footer/>
    </>
  )
}

export default Layout