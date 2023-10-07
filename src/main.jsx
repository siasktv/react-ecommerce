import { FiltersProvider } from "./context/filters"
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CartProvider } from "./context/cart"

ReactDOM.createRoot(document.getElementById('root')).render(
  <FiltersProvider>
    <CartProvider>
    <App />
    </CartProvider>
  </FiltersProvider>,
)
