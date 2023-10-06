import { Filters }  from "./Filters.jsx"

export function Header ({ changeFilters }){
    return(
        <>
        <h1>React Ecommerce</h1>
        <Filters changeFilters={changeFilters}/>
        </>
    )
}