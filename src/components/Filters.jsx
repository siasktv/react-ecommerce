import "./Filters.css"
import { useState } from "react"
export function Filters (){
    const [minPrice, setMinPrice] = useState(0)

    const handleMinPrice = (e) => {
        setMinPrice(e.target.value)
    }
    return(
        <section className="filters">
            <div>
                <label>Price</label>
                <input
                type="range"
                min="0"
                max="1000"
                onChange={handleMinPrice}
                />
                <span>{minPrice}</span>
            </div>
            <div>
                <label>Categoria</label>
                <select id="category">
                    <option value="all">All</option>
                    <option value="laptops">Laptops</option>
                    <option value="smartphones">Smartphones</option>
                </select>
            </div>
        </section>
    )
}