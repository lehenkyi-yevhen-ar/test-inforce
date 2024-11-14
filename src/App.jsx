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
      <button data-custom-open="modal-1">
        Add New Product
      </button>
      <ProductsList />
      <CreateProduct />
    </div>
  )
}

export default App