import React from "react"
import { NavLink } from "react-router-dom"
import classes from "./MainNavigation.module.css"

function MainNavigation() {
  const activeHandler = ({ isActive }) => (isActive ? classes.active : "")
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/" className={activeHandler} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className={activeHandler}>
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation
