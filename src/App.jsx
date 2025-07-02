import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home";
import CollectionPage from "./Pages/Collection";
import ContactPage from "./Pages/Contact";
import AboutPage from "./Pages/About";
import Navbar from "./Components/Navbar";
import ProductDetail from "./Pages/ProductDetail";
import Cart from "./Pages/Cart";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collection" element={<CollectionPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  )
}
