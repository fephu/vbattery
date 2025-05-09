import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Navbar from "@/components/Navbar";
import HomePage from "@/pages/HomePage";
import { Route, Routes } from "react-router";

const AppRouter = () => {
  return (
    <MaxWidthWrapper>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </MaxWidthWrapper>
  );
};

export default AppRouter;
