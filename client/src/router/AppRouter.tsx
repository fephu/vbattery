import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import ProductDetail from "@/pages/ProductDetail";
import ProductsPage from "@/pages/ProductsPage";
import { Route, Routes } from "react-router";

const AppRouter = () => {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quan-tri/dang-nhap" element={<LoginPage />} />
        {/* <Route path="/quan-tri/dang-ky" element={<RegisterPage />} / */}
        <Route path="/san-pham" element={<ProductsPage />} />
        <Route path="/san-pham/:slug" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default AppRouter;
