import { useSelector } from "react-redux"
import { selectIsError, selectIsLoading, selectProducts } from "../redux/productsSlice"

const ProductsList = () => {
    const products = useSelector(selectProducts)
    const isLoading = useSelector(selectIsLoading)
    const isError = useSelector(selectIsError)
    
  return (
      <div>
          {isLoading && (<h2>Loading, please wait...</h2>)}
          {isError && (<h2>Something went wrong, try again...</h2>)}
          <ul>
              {products.map((product) => (
                  <li key={product.id}>
                      <div>
                          <h3>{product.name}</h3>
                          <img src={product.imageUrl} alt={product.name} />
                      </div>
                  </li>
              ))}
          </ul>
    </div>
  )
}

export default ProductsList