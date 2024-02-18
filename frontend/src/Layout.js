import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Layout = ({ accessToken, setAccessToken, username }) => {
  return (
    <>
      {
        accessToken ? (<Navbar setAccessToken={setAccessToken} username={username} />) : null
      }
      <div style={{ minHeight: '100vh' }}>
        <Outlet />
      </div>

      {
        accessToken ? (<Footer />) : null
      }

    </>
  )
}

export default Layout