
// Importo il logo header
import LogoHeader from "./otherComponents/logoHeader"

// Importo array di oggetti nav link
import navLink from "./otherComponents/navLink"

// Esporto gia la funzione Header
export default function Header (){
    return (
    <header>
        <div className="container-flex">
            
            <LogoHeader />

            
        </div>
        
    </header>
    )
}