import Footer from "@/components/global/footer/footer";
import Navbar from "@/components/global/navbar/navbar";

const MarketingPagesLayout = ({ children }) => {
  return (
    <main className="min-h-screen bg-white">
        <Navbar />
        {children}
        <Footer />
    </main>
  );
};

export default MarketingPagesLayout;
