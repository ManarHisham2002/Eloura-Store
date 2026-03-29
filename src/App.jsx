import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/mainLayout";
import Home from "./pages/home";
import Products from "./pages/products";
import ProductDetails from "./pages/productsDetails";
import Cart from "./pages/cart";
import NotFound from "./pages/notFound";
import About from "./pages/about";
import Contact from "./pages/contact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound text="Page" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;