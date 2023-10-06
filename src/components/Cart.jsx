import "./Cart.css"
import { CartIcon, ClearCartIcon } from "./Icons"
import { useId } from "react"


export function Cart() {
    const cartCheckboxId = useId()
    return(
        <>
        <label htmlFor={cartCheckboxId} className="cart-button">
            <CartIcon/>
        </label>
        <input id={cartCheckboxId} type="checkbox" hidden/>

        <aside className="cart">
            <ul>
                <li>
                    <img
                    src="https://i.dummyjson.com/data/products/6/thumbnail.png"
                    alt=""
                    />
                    <div>
                        <strong>Iphone</strong> -$1500
                    </div>

                    <footer>
                        <small>
                            Qty: 1
                        </small>
                    </footer>
                </li>
            </ul>
            <button>
                <ClearCartIcon/>
            </button>
        </aside>
        </>
    )
}