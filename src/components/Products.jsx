import "./Products.css"
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons"
import { CartContext } from "../context/cart"
import { useContext } from "react"

export function Products ({ products } ) {

    const { addToCart, cart, removeFromCart } = useContext(CartContext)

    const checkProductInCart = (product) => {
        return cart.some(item => item.id === product.id)
    }

    return(
        <div className="products">
            <ul>
                {
                    products.map((product) => {
                    const isInCart = checkProductInCart(product)
                    return (
                        <li key={product.id}>
                            <img
                            src={product.thumbnail}
                            alt={product.title}
                            />
                            <div>
                                <strong>{product.title}</strong> - ${product.price}
                            </div>
                            <div>
                                <button
                                style={{ backgroundColor: isInCart ? "red" :  "blue"}} 
                                 onClick={() => {
                                    isInCart ? 
                                    removeFromCart(product) 
                                    : addToCart(product)
                                }}>
                                   { isInCart ? <RemoveFromCartIcon/> : <AddToCartIcon/>}
                                    </button>
                            </div>
                        </li> )})
                }
            </ul>
        </div>
    )
}