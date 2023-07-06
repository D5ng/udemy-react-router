import React from "react"
import { Link, useNavigate } from "react-router-dom"

function Home() {
  const navigate = useNavigate()
  const navigateHandler = () => {}
  return (
    <React.Fragment>
      <h1>My Home Page</h1>
      <p>
        Go to <Link to="/products">the list of products</Link>
      </p>
      <button onClick={navigateHandler}>Navigate</button>
    </React.Fragment>
  )
}

export default Home
