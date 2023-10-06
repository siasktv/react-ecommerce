import { FiltersContext } from "../context/filters"
import "./Filters.css"
import { useId, useContext } from "react"


export function Filters (){
    const priceId = useId()
    const categoryId = useId()
  
    const {filters, setFilters } = useContext(FiltersContext)


    const handleMinPrice = (e) => {
        const newMinPrice = parseInt(e.target.value);
        setFilters(prevState => ({
            ...prevState,
            minPrice: newMinPrice
        }))
    }

    const handleCategory = (e) => {
        setFilters(prevState => ({
            ...prevState,
            category: e.target.value
        }))
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
                value={filters.minPrice}
                />
                <span>{filters.minPrice}</span>
            </div>
            <div>
                <label>Categoria</label>
                <select id={categoryId} onChange={handleCategory}>
                    <option value="all">All</option>
                    <option value="laptops">Laptops</option>
                    <option value="smartphones">Smartphones</option>
                </select>
            </div>
        </section>
    )
}