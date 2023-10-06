import { useContext } from "react"
import  { Products }  from "./components/Products"
import  { Header }  from "./components/Header"
import { products } from "./mocks/products.json"
import { FiltersContext } from "./context/filters"
import { Cart } from "./components/Cart"

function App() {

  const { filters } = useContext(FiltersContext)

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice && (
          filters.category == "all" ||
          product.category == filters.category
        )
      )
    })
  }

  const filteredProducts = filterProducts(products)

   return (
    <>
    <Header />
    <Cart/>
     <Products products={filteredProducts}/>
    </>
  )
}

export default App
