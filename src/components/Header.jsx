
// Importo il logo header
import LogoHeader from "./otherComponents/logoHeader"

// Importo array di oggetti nav link
import NavHeader from "./otherComponents/navHeader"

// Esporto gia la funzione Header
export default function Header (props){
    return (
    <header>
        <div className="container-flex">
            
            <LogoHeader />

                 
            <NavHeader linkSecond={props.link}/>
            
        </div>
        
    </header>
    )
}