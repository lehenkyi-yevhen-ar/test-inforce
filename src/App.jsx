import { useDispatch } from "react-redux"
import { fetchProducts } from "./redux/productsOps"
import { useEffect } from "react"
import ProductsList from "./components/ProductsList"
import CreateProduct from "./components/CreateProduct"

const App = () => {
  const dispatch = useDispatch()
  

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])
  return (
    <div>
      <ProductsList />
      <CreateProduct />
    </div>
  )
}

export default App