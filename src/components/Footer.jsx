// Esporto gia la funzione Footer
export default function Footer() {
    return (
        <footer>
            <div className="container-footer">
                <img src="/img/dc-logo-bg.png" alt="" />
                <div className="container-flex3">
                    <ul>
                        <h4>DC COMICS</h4>
                        <li>Characters</li>
                        <li>Comics</li>
                        <li>Movies</li>
                        <li>TV</li>
                        <li>Games</li>
                        <li>Videos</li>
                        <li> News</li>


                        <ul>
                            <h4>SHOP</h4>
                            <li>Shop DC</li>
                            <li>Shop DC Collectibles</li>
                        </ul>
                    </ul>



                    <ul className="set-ul">
                        <h4>DC</h4>
                        <li>Terms Of Use</li>
                        <li>Privacy policy <strong>(New)</strong></li>
                        <li>Ad Choices</li>
                        <li>Advertising</li>
                        <li>Jobs</li>
                        <li>Subscriptions</li>
                        <li>Talent Workshops</li>
                        <li>CPSC Certificates</li>
                        <li>Ratings</li>
                        <li>Shop Help</li>
                        <li>Contact Us</li>
                    </ul>

                    <ul className="set-ul">
                        <h4>SITES</h4>
                        <li>DC</li>
                        <li>MAD Magazine</li>
                        <li>DC Kids</li>
                        <li>DC Universe</li>
                        <li>DC Power Visa</li>
                    </ul>
                </div>
            </div>

            <div className="container-footer2">
                <div className="container-flex4">
                    <a href="#"><button>SIGN-UP NOW!</button></a>

                    <section>
                        <h4>FOLLOW US</h4>
                        <a href="#"><img src="/img/footer-facebook.png" alt="" /></a>
                        <a href="#"><img src="/img/footer-twitter.png" alt="" /></a>
                        <a href="#"><img src="/img/footer-youtube.png" alt="" /></a>
                        <a href="#"><img src="/img/footer-pinterest.png" alt="" /></a>
                        <a href="#"><img src="/img/footer-periscope.png" alt="" /></a>
                    </section>
                </div>
            </div>
        </footer>
    )
}