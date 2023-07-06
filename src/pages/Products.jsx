import React from "react"
import { Link } from "react-router-dom"

const PRODUCTS = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
]

function Products() {
  return (
    <React.Fragment>
      <div>The Products Page</div>
      <ul>
        {PRODUCTS.map((prod) => (
          <li>
            <Link to={`/products/${prod.id}`}>{prod.title}</Link>
          </li>
        ))}
      </ul>
    </React.Fragment>
  )
}

export default Products
