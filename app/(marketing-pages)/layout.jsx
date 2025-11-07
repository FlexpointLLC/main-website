import { Suspense } from "react";
import Footer from "@/components/global/footer/footer";
import Navbar from "@/components/global/navbar/navbar";

const MarketingPagesLayout = ({ children }) => {
  return (
    <main className="min-h-screen bg-white">
      <Suspense fallback={<div className="h-16" />}>
        <Navbar />
      </Suspense>
      {children}
      <Footer />
    </main>
  );
};

export default MarketingPagesLayout;
