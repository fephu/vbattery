import { useDispatch } from "react-redux";
import AppRouter from "./router/AppRouter";
import { useEffect } from "react";
import { fetchUserRequest } from "./features/auth/authSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserRequest());
  }, []);

  return (
    <>
      <AppRouter />
    </>
  );
};

export default App;
