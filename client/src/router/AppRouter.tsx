import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import ProductsPage from "@/pages/ProductsPage";
import { Navigate, Route, Routes } from "react-router";
import PrivatedRouter from "./PrivatedRouter";
import Dashboard from "@/pages/admin/Dashboard";
import ProductManagement from "@/pages/admin/ProductManagement";
import BannerManagement from "@/pages/admin/BannerManagement";
import ProductDetail from "@/pages/ProductDetail";
import CartPage from "@/pages/CartPage";
import AboutPage from "@/pages/AboutPage";
import EquipmentManagement from "@/pages/admin/EquipmentManagement";

export const routes = [
  { path: "/", element: <HomePage />, name: "Trang chủ" },
  { path: "/san-pham", element: <ProductsPage />, name: "Sản phẩm" },
  { path: "/gioi-thieu", element: <AboutPage />, name: "Giới thiệu" },
];

const AppRouter = () => {
  const accessToken = localStorage.getItem("accessToken");

  return (
    <>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
        <Route
          path="/quan-tri/dang-nhap"
          element={
            !!accessToken ? <Navigate to={"/ban-dieu-khien"} /> : <LoginPage />
          }
        />

        <Route path="/san-pham/:slug" element={<ProductDetail />} />
        <Route path="/gio-hang" element={<CartPage />} />

        <Route element={<PrivatedRouter isAuthenticated={!!accessToken} />}>
          <Route path="/ban-dieu-khien" element={<Dashboard />} />
          <Route
            path="/ban-dieu-khien/san-pham"
            element={<ProductManagement />}
          />
          <Route path="/ban-dieu-khien/banner" element={<BannerManagement />} />
          <Route
            path="/ban-dieu-khien/thiet-bi-su-dung"
            element={<EquipmentManagement />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;
