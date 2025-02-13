import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import './App.css'

function App() {
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

  return (
    <>
      <Header link={linkHeader}/>
      <Main />
      <Footer />
    </>
  )
}

export default App
