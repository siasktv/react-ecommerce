import "./Products.css"
import { AddToCartIcon } from "./Icons"
import { CartContext } from "../context/cart"
import { useContext } from "react"

export function Products ({ products } ) {

    const { addToCart, cart } = useContext(CartContext)

    console.log(cart)

    return(
        <div className="products">
            <ul>
                {
                    products.map((product) => (
                        <li key={product.id}>
                            <img
                            src={product.thumbnail}
                            alt={product.title}
                            />
                            <div>
                                <strong>{product.title}</strong> - ${product.price}
                            </div>
                            <div>
                                <button onClick={() => addToCart(product)}><AddToCartIcon/></button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}