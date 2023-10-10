import "./Cart.css"
import { CartIcon, ClearCartIcon } from "./Icons"
import { useId, useContext } from "react"
import { CartContext } from "../context/cart"


export function Cart() {
    const cartCheckboxId = useId()
    const { cart, clearCart,  addToCart } = useContext(CartContext)

    return(
        <>
        <label htmlFor={cartCheckboxId} className="cart-button">
            <CartIcon/>
        </label>
        <input id={cartCheckboxId} type="checkbox" hidden/>

        <aside className="cart">
            <ul>
            {cart.length > 0 ? (
            cart.map((item) => {
              return (
                <li key={item.id}>
                  <img src={item.thumbnail} alt={item.title} />
                  <div>
                    <strong>{item.title}</strong> - ${item.price}
                  </div>

                  <footer>
                    <small>Qty: {item.quantity}</small>
                    <button onClick={() => addToCart(item)}>+</button>
                  </footer>
                </li>
              );
            })
          ) : (
            <p>No hay productos</p>
          )}
            </ul>
            <button onClick={() => clearCart()}>
                <ClearCartIcon/>
            </button>
        </aside>
        </>
    )
}