
// Importo il logo header
import LogoHeader from "./otherComponents/logoHeader"

// Importo array di oggetti nav link
import NavHeader from "./otherComponents/navHeader"

// Esporto gia la funzione Header
export default function Header (){
    return (
    <header>
        <div className="container-flex">
            
            <LogoHeader />

                 
            <NavHeader />
            
        </div>
        
    </header>
    )
}