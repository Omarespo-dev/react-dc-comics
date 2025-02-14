// Importo Banner
import Banner from "./otherComponents/Banner"
// Importo Jumbotron
import JumboTron from "./otherComponents/JumboTron"

// Importo array per le card
import ProductList from "./otherComponents/ProductList"
// Esporto gia la funzione Main
export default function Main() {
    return (
        <main>
            <JumboTron />

            <div className="current-series">
                <h3>CURRENT SERIES</h3>
            </div>

            <div className="container-main">
                <div className="container-flex2">

                    <ProductList />

                </div>

            </div>

            <div className="button-load">
                <button><a href="#"><h4>LOAD MORE</h4></a></button>
            </div>

            <Banner />

        </main>
    )
}