import { Navigate, Outlet } from "react-router";

interface PrivatedRouterProps {
  isAuthenticated: boolean;
}

const PrivatedRouter = ({ isAuthenticated }: PrivatedRouterProps) => {
  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivatedRouter;
