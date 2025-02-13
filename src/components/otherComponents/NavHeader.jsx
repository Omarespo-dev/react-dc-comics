

// Esporto la funzione linkHeader
export default function NavHeader(props) {
    return (<>

        {/* Ora per mettere tutto il contenuto dell array di oggetti si usa il map*/}
        <div className="link">
            {props.linkSecond.map((link) => (
                <a key={link.id} href={link.url} className={link.current ? 'active' : ''}><span>{link.text}</span></a>
            ))}
        </div>


    </>)
}