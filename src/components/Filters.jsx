import "./Filters.css"
import { useState, useId } from "react"

export function Filters ({ changeFilters }){

    const [ minPrice, setMinPrice ] = useState(0)

    const priceId = useId()
    const categoryId = useId()

    const handleMinPrice = (e) => {
        setMinPrice(e.target.value)
    }
   
    return(
        <section className="filters">
            <div>
                <label>Price</label>
                <input
                id={priceId}
                type="range"
                min="0"
                max="1000"
                onChange={handleMinPrice}
                />
                <span>{minPrice}</span>
            </div>
            <div>
                <label>Categoria</label>
                <select id={categoryId}>
                    <option value="all">All</option>
                    <option value="laptops">Laptops</option>
                    <option value="smartphones">Smartphones</option>
                </select>
            </div>
        </section>
    )
}