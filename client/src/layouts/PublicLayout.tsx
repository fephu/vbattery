import Footer from "@/components/Footer";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Navbar from "@/components/Navbar";
import type { PropsWithChildren } from "react";

const PublicLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      <MaxWidthWrapper className="py-20 min-h-screen">
        {children}
      </MaxWidthWrapper>
      <Footer />
    </>
  );
};

export default PublicLayout;
