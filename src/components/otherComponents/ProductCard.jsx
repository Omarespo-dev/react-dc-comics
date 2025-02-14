export default function ProductCard(props) {
    // faccio destructoring
    const {thumb,series} = props.productInfo

    return (
        <>
            <section className="card-main" >
                <img src={thumb} />
                <h4>{series.toUpperCase()}</h4>
            </section>
        </>
    )

}