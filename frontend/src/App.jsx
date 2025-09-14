import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import NavBar from "./components/NavBar"
import BooksPage from "./pages/BooksPage"
import FitnessPage from "./pages/FitnessPage"
import AboutPage from "./pages/AboutPage"
import HomePage from "./pages/HomePage"
import OutfitsPage from "./pages/OutfitsPage"
import ShopPage from "./pages/ShopPage"


function App() {


  return (
    <div className="bg-[#f4f2ef] ">
      <NavBar/>

      <Routes>
        <Route path="/books" element={<BooksPage />} />
        <Route path="/fitness" element={<FitnessPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/outfits" element={<OutfitsPage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>

    </div>
  )
}

export default App
