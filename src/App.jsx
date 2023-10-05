import  {Products}  from "./components/Products"
import  {Header}  from "./components/Header"
import {products} from "./mocks/products.json"

function App() {
   return (
    <>
    <Header/>
     <Products products={products}/>
    </>
  )
}

export default App
