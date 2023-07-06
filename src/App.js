import React from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Root from "./pages/Root"
import Error from "./pages/Error"

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Home />} />
//     <Route path="/" element={<Products />} />
//   </Route>
// )

// const router = createBrowserRouter(routeDefinitions)

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <Products /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
