// array di oggetti
import comics from "../../arrayCard/comics"


export default function ProductList() {
    return (
        <>

            {comics.map(comic =>
                <section className="card-main" key={comic.id}>
                    <img src={comic.thumb} />
                    <h4>{comic.series.toUpperCase()}</h4>
                </section>
            )}


        </>
    )
}