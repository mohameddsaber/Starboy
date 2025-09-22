import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import NavBar from "./components/NavBar"
import BooksPage from "./pages/BooksPage"
import FitnessPage from "./pages/FitnessPage"
import AboutPage from "./pages/AboutPage"
import HomePage from "./pages/HomePage"
import OutfitsPage from "./pages/OutfitsPage"
import WardrobeItemsPage from "./pages/WardrobeItemsPage"



function App() {


  return (
    <>
   
      <div className="hidden md:block fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>

      {/* NavBar for small screens (hidden on desktop) */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50">
        <NavBar />
      </div>

      <div className="bg-[#f4f2ef] pt-[40px] min-h-screen">
      


      <Routes>
        <Route path="/books" element={<BooksPage />} />
        <Route path="/fitness" element={<FitnessPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/outfits" element={<OutfitsPage />} />
        <Route path="/wardrobe" element={<WardrobeItemsPage />} />
      </Routes>

    </div>
    </>
  )
}

export default App
