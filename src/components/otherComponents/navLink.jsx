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
    { id: 10, text: "SHOP", url: "#", current: true}
];

// Esporto la funzione linkHeader
export default function navLink() {
    return (<>
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
    </>)
}