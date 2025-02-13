// ARRAY DEI LINK
const linkHeader = [
    { id: 1, text: "CHARACTERS", url: "#", current: false },
    { id: 2, text: "COMICS", url: "#", current: false },
    { id: 3, text: "MOVIES", url: "#", current: true },
    { id: 4, text: "TV", url: "#", current: false },
    { id: 5, text: "GAMES", url: "#", current: false },
    { id: 6, text: "COLLECTIBLES", url: "#", current: true },
    { id: 7, text: "VIDEOS", url: "#", current: false },
    { id: 8, text: "FANS", url: "#", current: true },
    { id: 9, text: "NEWS", url: "#", current: false },
    { id: 10, text: "SHOP", url: "#", current: true }
];

// Esporto la funzione linkHeader
export default function NavHeader() {
    return (<>

        {/* Ora per mettere tutto il contenuto dell array di oggetti si usa il map*/}
        <div className="link">
            {linkHeader.map((link) => (
                <a key={link.id} href={link.url}><span>{link.text}</span></a>
            ))}
        </div>


    </>)
}