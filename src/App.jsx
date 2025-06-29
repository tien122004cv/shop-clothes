import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home";
import CollectionPage from "./Pages/Collection";
import ContactPage from "./Pages/Contact";
import AboutPage from "./Pages/About";
import Navbar from "./Components/Navbar";



export default function App() {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collections" element={<CollectionPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  )
}
