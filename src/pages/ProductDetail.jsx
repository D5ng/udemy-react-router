import React from "react"
import { useParams } from "react-router-dom"

function ProductDetail() {
  const params = useParams()

  return (
    <React.Fragment>
      <div>ProductDetail</div>
      {params.productId}
    </React.Fragment>
  )
}

export default ProductDetail
