import React from "react"
import { Outlet } from "react-router-dom"
import MainNavigation from "../components/MainNavigation"
import classes from "./Root.module.css"

function Root() {
  return (
    <React.Fragment>
      <MainNavigation />
      <main className={classes.content}>
        <Outlet />
      </main>
    </React.Fragment>
  )
}

export default Root
