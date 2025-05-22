import { useDispatch } from "react-redux";
import AppRouter from "./router/AppRouter";
import { useEffect } from "react";
import { fetchUserRequest } from "./features/auth/authSlice";
import { Toaster } from "sonner";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserRequest());
  }, []);

  return (
    <>
      <Toaster richColors position="top-center" />
      <AppRouter />
    </>
  );
};

export default App;
