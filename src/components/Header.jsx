// Esporto gia la funzione Header
export default function Header (){
    return (
    <header>
        <div className="container-flex">
            <div className="img">
                <img src="/img/dc-logo.png" alt="" />
            </div>
            
            <div className="link">
                <a href="#"><span>CHARACTERS</span></a>
                <a href="#"><span>COMICS</span></a>
                <a href="#"><span>MOVIES</span></a>
                <a href="#"><span>TV</span></a>
                <a href="#"><span>GAMES</span></a>
                <a href="#"><span>COLLECTIBLES</span></a>
                <a href="#"><span>VIDEOS</span></a>
                <a href="#"><span>FANS</span></a>
                <a href="#"><span>NEWS</span></a>
                <a href="#"><span>SHOP</span></a>
            </div>

        </div>
        
    </header>)
}