import Footer from "@/components/global/footer/footer";
import Navbar from "@/components/global/navbar/navbar";

const MarketingPagesLayout = ({ children }) => {
  return (
    <main className="min-h-screen bg-gradient-primary-from-top">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default MarketingPagesLayout;
