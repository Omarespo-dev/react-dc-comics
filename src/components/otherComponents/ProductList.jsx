// array di oggetti
import comics from "../../arrayCard/comics"

// Importo Il contenuto html (ProductCard.jsx)
import ProductCard from "./ProductCard"

export default function ProductList() {
    return (
        <>

            {comics.map(comic => <ProductCard  key={comic.id} productInfo={comic}/>)}


        </>
    )
}