import React from "react"
import { Outlet } from "react-router-dom"
import MainNavigation from "../components/MainNavigation"

function Root() {
  return (
    <React.Fragment>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </React.Fragment>
  )
}

export default Root
