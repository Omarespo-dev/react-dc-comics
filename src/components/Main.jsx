// Esporto gia la funzione Main
export default function Main() {
    return (
        <main>
            <div className="container-main">
                <div className="container-flex2">
                    <h3>{"-->"}Content goes here {"<--"}</h3>
                </div>
            </div>

            <div className="container-icon">
                <div className="img-content">

                    <section className="set-card">
                        {/* img */}
                        <img src="/img/buy-comics-digital-comics.png" alt="" />
                        <span>DIGITAL COMICS</span>
                    </section>


                    <section className="set-card">
                        {/* img */}
                        <img src="/img/buy-comics-merchandise.png" alt="" />
                        <span>DC MERCHANDISE</span>
                    </section>

                    <section className="set-card">
                        {/* img */}
                        <img src="/img/buy-comics-subscriptions.png" alt="" />
                        <span>SUBSCRIPTION</span>
                    </section>

                    <section className="set-card">
                        {/* img */}
                        <img src="/img/buy-comics-shop-locator.png" alt="" />
                        <span>COMIC SHOP LOCATOR</span>
                    </section>

                    <section className="set-card">
                        {/* img */}
                        <img src="/img/buy-dc-power-visa.svg" alt=""  id="set-svg"/>
                        <span>DC POWER VISA</span>
                    </section>
                    
                </div>
            </div>
        </main>
    )
}