import { useSelector } from "react-redux"
import { selectProduct } from "../redux/productsSlice"

const Product = () => {
    const product = useSelector(selectProduct)
  return (
      <div>
          <h2>{product.name}</h2>
          <img src={product.imageUrl} alt={product.name} />
          <p>{product.count}</p>
          <p>{product.weight}</p>
          <p>{product.size}</p>
          <ul>
              {product.comments.map((comment) =>
                  <li key={comment.id}>
                      <p>{comment.description}</p>
                      <p>Date: {comment.date}</p>
                  </li>
              )}
          </ul>
    </div>
  )
}

export default Product